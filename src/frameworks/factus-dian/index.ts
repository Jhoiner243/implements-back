/* eslint-disable @typescript-eslint/no-explicit-any */
import { Empresa } from "@prisma/client";
import { inject, injectable } from "inversify";
import { FacturaRepository } from "../../repositories/factura.repository";
import { AuthFactusApi, IAuthApi } from "./auth";
import {
  Customer,
  IFacturaCustomerAndItem,
  Item,
  Welcome,
} from "./types/types";

@injectable()
export class SubmitDianFactus {
  private URL_SUBMIT: string =
    "https://api-sandbox.factus.com.co/v1/bills/validate";

  constructor(
    @inject(FacturaRepository) private facturaRepository: FacturaRepository,
    @inject(AuthFactusApi) private authFactus: IAuthApi
  ) {}

  private async submit({
    factura,
    id,
  }: {
    factura: Welcome;
    id: string;
  }): Promise<{ message: string }> {
    try {
      // 1) Obtener tokens de Factus
      const { access_token, refresh_token } = await this.authFactus.auth();
      if (!refresh_token) {
        throw new Error("Falta el refresh_token en el envío de factura");
      }

      // 2) Enviar la factura
      const response = await fetch(this.URL_SUBMIT, {
        method: "POST",
        body: JSON.stringify(factura),
        headers: {
          "Content-Type": "application/json",
          refresh_token,
          Authorization: `Bearer ${access_token}`,
        },
      });

      // 3) Leer la respuesta cruda
      const text = await response.text();
      let info: any;
      try {
        info = JSON.parse(text);
      } catch {
        info = text;
      }

      // 4) Manejo de errores de validación (422)
      if (response.status === 422) {
        // Busca errores en distintos posibles campos
        const errs =
          info?.data?.errors ??
          info?.errors ??
          info?.errores ??
          (Array.isArray(info) ? info : []);
        console.error("Factus 422 detalles:\n", JSON.stringify(errs, null, 2));

        const mensajes = Array.isArray(errs)
          ? errs
              .map((e: any) => e.message ?? e.mensaje ?? JSON.stringify(e))
              .join("; ")
          : JSON.stringify(errs);

        throw new Error(`Validation failed: ${mensajes}`);
      }

      // 5) Cualquier otro status no OK
      if (!response.ok) {
        throw new Error(
          `Error al enviar factura: status ${
            response.status
          } - ${JSON.stringify(info)}`
        );
      }

      // 6) Éxito: actualiza QR y número
      const responseOk: {
        data: { bill: { qr_image: string; number: string } };
      } = info;
      await this.facturaRepository.updateQrImage({
        qr: responseOk.data.bill.qr_image,
        number: responseOk.data.bill.number,
        id,
      });

      return { message: "Factura enviada exitosamente" };
    } catch (err: any) {
      // Reenvuelve el error para que tu servicio lo capture
      console.error("Error en submit Factus:", err);
      throw new Error(err.message || "Error desconocido en Factus");
    }
  }

  public async dataAdapterForSubmitToFactus({
    facturaAdapter,
    company,
  }: {
    facturaAdapter: IFacturaCustomerAndItem;
    company: Empresa;
  }) {
    try {
      //Datos que cumplen con la interfaz del cliente
      const dataNeedCustomer: Customer = {
        address: facturaAdapter.customer.address,
        company: company.nombre,
        trade_name: company.nombre,
        email: facturaAdapter.customer.email,
        phone: facturaAdapter.customer.phone,
        identification: facturaAdapter.customer.identification,
        identification_document_id: 3,
        legal_organization_id: company.id,
        names: facturaAdapter.customer.name,
        tribute_id: "21",
        dv: "",
        municipality_id: "980",
      };

      //Datos que cumplen con la interfaz de los productos
      const productNeedData: Item[] = facturaAdapter.items.map((data) => ({
        code_reference: data.id,
        name: data.nombre,
        quantity: parseInt(String(data.cantidad)),
        discount_rate: data.porcentage_descuento
          ? data.porcentage_descuento
          : 0,
        price: data.precio,
        tax_rate: "0.00",
        is_excluded: 0,
        standard_code_id: 1,
        tribute_id: 1,
        unit_measure_id: 414,
        withholding_taxes: [],
      }));

      const dataAdapter: Welcome = {
        document: "01",
        reference_code: facturaAdapter.factura.id,
        observation: "",
        customer: dataNeedCustomer,
        items: productNeedData,
        payment_method_code: "10",
      };

      await this.submit({
        factura: dataAdapter,
        id: facturaAdapter.factura.id,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
