export const protectedRoutes = [
  // "/auth/logout",
  // "/auth/verify-email",
  // "/auth/reset-password",
  // "/auth/forgot-password",
  // "/auth/verify-reset-password-token",
  // "/auth/update-password",
  // "/auth/update-profile",

  //Rutas de analiticas
  "/analitics/pedidos",
  "/analitics/clientes",
  "/analitics/productos",
  "/growt-rate",

  //Rutas de clientes
  "/clientes", // obtener todos los clientes y post
  "/clientes/:id_cliente", // obtener cliente por id y eliminar cliente

  //Ruta de facturas
  "/facturas", // agregar factura Y obtener todas las facturas
  "/facturas/:id", // obtener factura por id, actualizar por id y eliminar por id

  //Ganancias profit
  "/profit", // obtener ganancias

  //MCP controller
  "/resources",
  "/resources/schema",
  "/tools",
  "/tools/query",
  "/call_tool_request_schema",
  "/tools/query/stream",

  //Rutas para notificaciones
  "/notifications", // obtener notificaciones y enviar los tokens
  "/notifications-delete/:id", // eliminar notificacion

  //Rutas de productos y categorias
  "/products/:id", // actualizar y eliminar producto por id
  "/productos", // obtener todos los productos y agregar producto
  "/facturas",
  "/category", // obtener todas las categorias y agregar categoria
  "/clientes",
];
