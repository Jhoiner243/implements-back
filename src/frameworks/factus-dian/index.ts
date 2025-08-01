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

interface DataResponse {
  data: {
    bill: {
      qr_image: string;
      number: string;
    };
  };
}

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
  }): Promise<{ message: string } | undefined> {
    try {
      // Tokens de acceso factus
      const { access_token, refresh_token } = await this.authFactus.auth();

      if (!refresh_token) {
        throw new Error("Falta el refresh token en envío de factura");
      }

      const response = await fetch(this.URL_SUBMIT, {
        method: "POST",
        body: JSON.stringify(factura),
        headers: {
          "Content-Type": "application/json",
          refresh_token: refresh_token,
          Authorization: `Bearer ${access_token}`,
        },
      });
      const text = await response.text(); // lee como texto crudo
      let info;
      try {
        info = JSON.parse(text); // parsea JSON si es posible
      } catch {
        info = text; // si no es JSON, muestra el texto
      }

      if (!response.ok) {
        // Aquí imprimimos con indentación para leer los arrays
        console.error(
          "Factus 422 detalles:\n",
          JSON.stringify(info.data.errors, null, 2)
        );
        throw new Error(`Validation failed, mira la consola.`);
      }

      if (response.ok) {
        const responseOk: DataResponse = info;
        await this.facturaRepository.updateQrImage({
          qr: responseOk.data.bill.qr_image,
          number: responseOk.data.bill.number,
          id: id,
        });
        return {
          message: "Factura envíada",
        };
      }

      return {
        message: "Error al envíar factura",
      };
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
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
        discount_rate: 0,
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
