import { injectable } from "inversify";
import qs from "qs";
import {
  CLIENT_ID_FACTUS,
  CLIENT_SECRET_FACTUS,
  CONTRASENA,
  CORREO_FACTUS,
} from "../../config/configs";

interface Tokens {
  access_token?: string;
  refresh_token?: string;
  message?: string;
}

export interface IAuthApi {
  auth: () => Promise<Tokens>;
}

@injectable()
export class AuthFactusApi implements IAuthApi {
  private URL_AUTH: string = "https://api-sandbox.factus.com.co/oauth/token";

  async auth(): Promise<Tokens> {
    if (!CLIENT_ID_FACTUS || !CLIENT_SECRET_FACTUS) {
      throw new Error("Faltan credenciales de acceso a factus");
    }

    const data = qs.stringify({
      client_id: CLIENT_ID_FACTUS,
      client_secret: CLIENT_SECRET_FACTUS,
      grant_type: "password",
      password: CONTRASENA,
      username: CORREO_FACTUS,
    });

    const responseAuth = await fetch(this.URL_AUTH, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });

    if (responseAuth.ok) {
      const { access_token, refresh_token } = await responseAuth.json();

      return {
        access_token,
        refresh_token,
      };
    }

    const errorText = await responseAuth.text();

    return {
      message: `Error al obtener datos: ${errorText}`,
    };
  }
}
