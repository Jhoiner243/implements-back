import { COOKIE_HTTP_ONLY, COOKIE_MAX_AGE, COOKIE_SAME_SITE, COOKIE_SECURE } from "../config/configs";
import { SameSite } from "../ts/types/SameSite";

export interface ICookieOptions {
	httpOnly: boolean;
	sameSite: SameSite;
	secure: boolean;
	maxAge: number;
}

export const cookieOptions: ICookieOptions = {
  httpOnly: COOKIE_HTTP_ONLY as boolean,
  sameSite: COOKIE_SAME_SITE as SameSite,
  secure: COOKIE_SECURE as boolean,
  maxAge: Number(COOKIE_MAX_AGE)
}