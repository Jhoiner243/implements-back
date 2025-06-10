import { rateLimit } from "express-rate-limit";

export const limitador = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutos
  limit: 100, // Limite cada IP a 100 solicitudes por 'windowwal (aquí, por 15 minutos).
  standardHeaders: "borrador-8", //draft-6: 'rateLimit-*en encabezados; draft-7 y draft-8: combinado 'RateLimitur encabezado
  legacyHeaders: false, // Deshabilite los encabezados uryX-RateLimit-*.
});
