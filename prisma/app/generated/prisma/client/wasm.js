
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  username: 'username',
  name: 'name',
  lastname: 'lastname',
  password: 'password',
  roleId: 'roleId',
  is_verified: 'is_verified',
  verified_at: 'verified_at',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FacturaScalarFieldEnum = {
  id: 'id',
  clienteId: 'clienteId',
  status: 'status',
  total: 'total',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Detalle_facturaScalarFieldEnum = {
  id: 'id',
  facturaId: 'facturaId',
  productoId: 'productoId',
  cantidad: 'cantidad',
  precio: 'precio',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductosScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  precio_compra: 'precio_compra',
  stock: 'stock',
  categoryId: 'categoryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductFavoriteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Ai_QueriesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  query: 'query',
  response: 'response',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  message: 'message',
  is_read: 'is_read',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TokensScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  createdAt: 'createdAt'
};

exports.Prisma.ClientesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  address: 'address',
  createdAt: 'createdAt'
};

exports.Prisma.StockHistoryScalarFieldEnum = {
  id: 'id',
  productoId: 'productoId',
  cantidad: 'cantidad',
  motivo: 'motivo',
  createdAt: 'createdAt'
};

exports.Prisma.RolesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ProfitSummaryScalarFieldEnum = {
  id: 'id',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  ganancia_total: 'ganancia_total',
  tipo_periodo: 'tipo_periodo',
  createdAt: 'createdAt'
};

exports.Prisma.EmailLogScalarFieldEnum = {
  id: 'id',
  facturaId: 'facturaId',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.StatusFactura = exports.$Enums.StatusFactura = {
  Pagada: 'Pagada',
  Pendiente: 'Pendiente',
  Fiada: 'Fiada',
  Vencida: 'Vencida'
};

exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

exports.StatusEmail = exports.$Enums.StatusEmail = {
  Success: 'Success',
  Failed: 'Failed'
};

exports.Prisma.ModelName = {
  User: 'User',
  Factura: 'Factura',
  Detalle_factura: 'Detalle_factura',
  Productos: 'Productos',
  Category: 'Category',
  ProductFavorite: 'ProductFavorite',
  Ai_Queries: 'Ai_Queries',
  Notifications: 'Notifications',
  tokens: 'tokens',
  Clientes: 'Clientes',
  StockHistory: 'StockHistory',
  Roles: 'Roles',
  ProfitSummary: 'ProfitSummary',
  EmailLog: 'EmailLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
