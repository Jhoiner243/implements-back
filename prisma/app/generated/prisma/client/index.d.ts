
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Factura
 * 
 */
export type Factura = $Result.DefaultSelection<Prisma.$FacturaPayload>
/**
 * Model Detalle_factura
 * 
 */
export type Detalle_factura = $Result.DefaultSelection<Prisma.$Detalle_facturaPayload>
/**
 * Model Productos
 * 
 */
export type Productos = $Result.DefaultSelection<Prisma.$ProductosPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model ProductFavorite
 * 
 */
export type ProductFavorite = $Result.DefaultSelection<Prisma.$ProductFavoritePayload>
/**
 * Model Ai_Queries
 * 
 */
export type Ai_Queries = $Result.DefaultSelection<Prisma.$Ai_QueriesPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model tokens
 * 
 */
export type tokens = $Result.DefaultSelection<Prisma.$tokensPayload>
/**
 * Model Clientes
 * 
 */
export type Clientes = $Result.DefaultSelection<Prisma.$ClientesPayload>
/**
 * Model StockHistory
 * 
 */
export type StockHistory = $Result.DefaultSelection<Prisma.$StockHistoryPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model ProfitSummary
 * 
 */
export type ProfitSummary = $Result.DefaultSelection<Prisma.$ProfitSummaryPayload>
/**
 * Model EmailLog
 * 
 */
export type EmailLog = $Result.DefaultSelection<Prisma.$EmailLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoPeriodo: {
  Diario: 'Diario',
  Mensual: 'Mensual',
  Semanal: 'Semanal',
  Anual: 'Anual'
};

export type TipoPeriodo = (typeof TipoPeriodo)[keyof typeof TipoPeriodo]


export const StatusEmail: {
  Success: 'Success',
  Failed: 'Failed'
};

export type StatusEmail = (typeof StatusEmail)[keyof typeof StatusEmail]


export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusFactura: {
  Pagada: 'Pagada',
  Pendiente: 'Pendiente',
  Fiada: 'Fiada',
  Vencida: 'Vencida'
};

export type StatusFactura = (typeof StatusFactura)[keyof typeof StatusFactura]

}

export type TipoPeriodo = $Enums.TipoPeriodo

export const TipoPeriodo: typeof $Enums.TipoPeriodo

export type StatusEmail = $Enums.StatusEmail

export const StatusEmail: typeof $Enums.StatusEmail

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusFactura = $Enums.StatusFactura

export const StatusFactura: typeof $Enums.StatusFactura

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factura`: Exposes CRUD operations for the **Factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facturas
    * const facturas = await prisma.factura.findMany()
    * ```
    */
  get factura(): Prisma.FacturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalle_factura`: Exposes CRUD operations for the **Detalle_factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalle_facturas
    * const detalle_facturas = await prisma.detalle_factura.findMany()
    * ```
    */
  get detalle_factura(): Prisma.Detalle_facturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **Productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.ProductosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productFavorite`: Exposes CRUD operations for the **ProductFavorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductFavorites
    * const productFavorites = await prisma.productFavorite.findMany()
    * ```
    */
  get productFavorite(): Prisma.ProductFavoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ai_Queries`: Exposes CRUD operations for the **Ai_Queries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ai_Queries
    * const ai_Queries = await prisma.ai_Queries.findMany()
    * ```
    */
  get ai_Queries(): Prisma.Ai_QueriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokens`: Exposes CRUD operations for the **tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.tokens.findMany()
    * ```
    */
  get tokens(): Prisma.tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientes`: Exposes CRUD operations for the **Clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.clientes.findMany()
    * ```
    */
  get clientes(): Prisma.ClientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockHistory`: Exposes CRUD operations for the **StockHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockHistories
    * const stockHistories = await prisma.stockHistory.findMany()
    * ```
    */
  get stockHistory(): Prisma.StockHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profitSummary`: Exposes CRUD operations for the **ProfitSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfitSummaries
    * const profitSummaries = await prisma.profitSummary.findMany()
    * ```
    */
  get profitSummary(): Prisma.ProfitSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailLog`: Exposes CRUD operations for the **EmailLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLogs
    * const emailLogs = await prisma.emailLog.findMany()
    * ```
    */
  get emailLog(): Prisma.EmailLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "factura" | "detalle_factura" | "productos" | "category" | "productFavorite" | "ai_Queries" | "notifications" | "tokens" | "clientes" | "stockHistory" | "roles" | "profitSummary" | "emailLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Factura: {
        payload: Prisma.$FacturaPayload<ExtArgs>
        fields: Prisma.FacturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findFirst: {
            args: Prisma.FacturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          findMany: {
            args: Prisma.FacturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          create: {
            args: Prisma.FacturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          createMany: {
            args: Prisma.FacturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          delete: {
            args: Prisma.FacturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          update: {
            args: Prisma.FacturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          deleteMany: {
            args: Prisma.FacturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FacturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>[]
          }
          upsert: {
            args: Prisma.FacturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacturaPayload>
          }
          aggregate: {
            args: Prisma.FacturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactura>
          }
          groupBy: {
            args: Prisma.FacturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacturaCountArgs<ExtArgs>
            result: $Utils.Optional<FacturaCountAggregateOutputType> | number
          }
        }
      }
      Detalle_factura: {
        payload: Prisma.$Detalle_facturaPayload<ExtArgs>
        fields: Prisma.Detalle_facturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Detalle_facturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Detalle_facturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>
          }
          findFirst: {
            args: Prisma.Detalle_facturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Detalle_facturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>
          }
          findMany: {
            args: Prisma.Detalle_facturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>[]
          }
          create: {
            args: Prisma.Detalle_facturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>
          }
          createMany: {
            args: Prisma.Detalle_facturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Detalle_facturaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>[]
          }
          delete: {
            args: Prisma.Detalle_facturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>
          }
          update: {
            args: Prisma.Detalle_facturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>
          }
          deleteMany: {
            args: Prisma.Detalle_facturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Detalle_facturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Detalle_facturaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>[]
          }
          upsert: {
            args: Prisma.Detalle_facturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Detalle_facturaPayload>
          }
          aggregate: {
            args: Prisma.Detalle_facturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalle_factura>
          }
          groupBy: {
            args: Prisma.Detalle_facturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalle_facturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Detalle_facturaCountArgs<ExtArgs>
            result: $Utils.Optional<Detalle_facturaCountAggregateOutputType> | number
          }
        }
      }
      Productos: {
        payload: Prisma.$ProductosPayload<ExtArgs>
        fields: Prisma.ProductosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findFirst: {
            args: Prisma.ProductosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          findMany: {
            args: Prisma.ProductosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          create: {
            args: Prisma.ProductosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          createMany: {
            args: Prisma.ProductosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          delete: {
            args: Prisma.ProductosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          update: {
            args: Prisma.ProductosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          deleteMany: {
            args: Prisma.ProductosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>[]
          }
          upsert: {
            args: Prisma.ProductosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.ProductosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      ProductFavorite: {
        payload: Prisma.$ProductFavoritePayload<ExtArgs>
        fields: Prisma.ProductFavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>
          }
          findFirst: {
            args: Prisma.ProductFavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>
          }
          findMany: {
            args: Prisma.ProductFavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>[]
          }
          create: {
            args: Prisma.ProductFavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>
          }
          createMany: {
            args: Prisma.ProductFavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductFavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>[]
          }
          delete: {
            args: Prisma.ProductFavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>
          }
          update: {
            args: Prisma.ProductFavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>
          }
          deleteMany: {
            args: Prisma.ProductFavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductFavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductFavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>[]
          }
          upsert: {
            args: Prisma.ProductFavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductFavoritePayload>
          }
          aggregate: {
            args: Prisma.ProductFavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductFavorite>
          }
          groupBy: {
            args: Prisma.ProductFavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductFavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductFavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<ProductFavoriteCountAggregateOutputType> | number
          }
        }
      }
      Ai_Queries: {
        payload: Prisma.$Ai_QueriesPayload<ExtArgs>
        fields: Prisma.Ai_QueriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Ai_QueriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Ai_QueriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>
          }
          findFirst: {
            args: Prisma.Ai_QueriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Ai_QueriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>
          }
          findMany: {
            args: Prisma.Ai_QueriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>[]
          }
          create: {
            args: Prisma.Ai_QueriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>
          }
          createMany: {
            args: Prisma.Ai_QueriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Ai_QueriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>[]
          }
          delete: {
            args: Prisma.Ai_QueriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>
          }
          update: {
            args: Prisma.Ai_QueriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>
          }
          deleteMany: {
            args: Prisma.Ai_QueriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Ai_QueriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Ai_QueriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>[]
          }
          upsert: {
            args: Prisma.Ai_QueriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Ai_QueriesPayload>
          }
          aggregate: {
            args: Prisma.Ai_QueriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAi_Queries>
          }
          groupBy: {
            args: Prisma.Ai_QueriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ai_QueriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Ai_QueriesCountArgs<ExtArgs>
            result: $Utils.Optional<Ai_QueriesCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      tokens: {
        payload: Prisma.$tokensPayload<ExtArgs>
        fields: Prisma.tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findFirst: {
            args: Prisma.tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          findMany: {
            args: Prisma.tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          create: {
            args: Prisma.tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          createMany: {
            args: Prisma.tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          delete: {
            args: Prisma.tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          update: {
            args: Prisma.tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          deleteMany: {
            args: Prisma.tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>[]
          }
          upsert: {
            args: Prisma.tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tokensPayload>
          }
          aggregate: {
            args: Prisma.TokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokens>
          }
          groupBy: {
            args: Prisma.tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.tokensCountArgs<ExtArgs>
            result: $Utils.Optional<TokensCountAggregateOutputType> | number
          }
        }
      }
      Clientes: {
        payload: Prisma.$ClientesPayload<ExtArgs>
        fields: Prisma.ClientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findFirst: {
            args: Prisma.ClientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          findMany: {
            args: Prisma.ClientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          create: {
            args: Prisma.ClientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          createMany: {
            args: Prisma.ClientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          delete: {
            args: Prisma.ClientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          update: {
            args: Prisma.ClientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          deleteMany: {
            args: Prisma.ClientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>[]
          }
          upsert: {
            args: Prisma.ClientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientesPayload>
          }
          aggregate: {
            args: Prisma.ClientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientes>
          }
          groupBy: {
            args: Prisma.ClientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientesCountArgs<ExtArgs>
            result: $Utils.Optional<ClientesCountAggregateOutputType> | number
          }
        }
      }
      StockHistory: {
        payload: Prisma.$StockHistoryPayload<ExtArgs>
        fields: Prisma.StockHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          findFirst: {
            args: Prisma.StockHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          findMany: {
            args: Prisma.StockHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>[]
          }
          create: {
            args: Prisma.StockHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          createMany: {
            args: Prisma.StockHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>[]
          }
          delete: {
            args: Prisma.StockHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          update: {
            args: Prisma.StockHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StockHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>[]
          }
          upsert: {
            args: Prisma.StockHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockHistoryPayload>
          }
          aggregate: {
            args: Prisma.StockHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockHistory>
          }
          groupBy: {
            args: Prisma.StockHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StockHistoryCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      ProfitSummary: {
        payload: Prisma.$ProfitSummaryPayload<ExtArgs>
        fields: Prisma.ProfitSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfitSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfitSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>
          }
          findFirst: {
            args: Prisma.ProfitSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfitSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>
          }
          findMany: {
            args: Prisma.ProfitSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>[]
          }
          create: {
            args: Prisma.ProfitSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>
          }
          createMany: {
            args: Prisma.ProfitSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfitSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>[]
          }
          delete: {
            args: Prisma.ProfitSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>
          }
          update: {
            args: Prisma.ProfitSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>
          }
          deleteMany: {
            args: Prisma.ProfitSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfitSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfitSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>[]
          }
          upsert: {
            args: Prisma.ProfitSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfitSummaryPayload>
          }
          aggregate: {
            args: Prisma.ProfitSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfitSummary>
          }
          groupBy: {
            args: Prisma.ProfitSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfitSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfitSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<ProfitSummaryCountAggregateOutputType> | number
          }
        }
      }
      EmailLog: {
        payload: Prisma.$EmailLogPayload<ExtArgs>
        fields: Prisma.EmailLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findFirst: {
            args: Prisma.EmailLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findMany: {
            args: Prisma.EmailLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          create: {
            args: Prisma.EmailLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          createMany: {
            args: Prisma.EmailLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          delete: {
            args: Prisma.EmailLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          update: {
            args: Prisma.EmailLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          deleteMany: {
            args: Prisma.EmailLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          upsert: {
            args: Prisma.EmailLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          aggregate: {
            args: Prisma.EmailLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailLog>
          }
          groupBy: {
            args: Prisma.EmailLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailLogCountArgs<ExtArgs>
            result: $Utils.Optional<EmailLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    factura?: FacturaOmit
    detalle_factura?: Detalle_facturaOmit
    productos?: ProductosOmit
    category?: CategoryOmit
    productFavorite?: ProductFavoriteOmit
    ai_Queries?: Ai_QueriesOmit
    notifications?: NotificationsOmit
    tokens?: tokensOmit
    clientes?: ClientesOmit
    stockHistory?: StockHistoryOmit
    roles?: RolesOmit
    profitSummary?: ProfitSummaryOmit
    emailLog?: EmailLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    token: number
    favoritos: number
    prompts: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | UserCountOutputTypeCountTokenArgs
    favoritos?: boolean | UserCountOutputTypeCountFavoritosArgs
    prompts?: boolean | UserCountOutputTypeCountPromptsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokensWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFavoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ai_QueriesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }


  /**
   * Count Type FacturaCountOutputType
   */

  export type FacturaCountOutputType = {
    detalles: number
  }

  export type FacturaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | FacturaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaCountOutputType
     */
    select?: FacturaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacturaCountOutputType without action
   */
  export type FacturaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detalle_facturaWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    productos_favoritos: number
    detalles: number
    stockHistory: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos_favoritos?: boolean | ProductosCountOutputTypeCountProductos_favoritosArgs
    detalles?: boolean | ProductosCountOutputTypeCountDetallesArgs
    stockHistory?: boolean | ProductosCountOutputTypeCountStockHistoryArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountProductos_favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFavoriteWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detalle_facturaWhereInput
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountStockHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHistoryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
  }


  /**
   * Count Type ClientesCountOutputType
   */

  export type ClientesCountOutputType = {
    pedidos: number
  }

  export type ClientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ClientesCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientesCountOutputType
     */
    select?: ClientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientesCountOutputType without action
   */
  export type ClientesCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
  }


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    lastname: string | null
    password: string | null
    roleId: string | null
    is_verified: boolean | null
    verified_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    name: string | null
    lastname: string | null
    password: string | null
    roleId: string | null
    is_verified: boolean | null
    verified_at: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    name: number
    lastname: number
    password: number
    roleId: number
    is_verified: number
    verified_at: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    lastname?: true
    password?: true
    roleId?: true
    is_verified?: true
    verified_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    lastname?: true
    password?: true
    roleId?: true
    is_verified?: true
    verified_at?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    name?: true
    lastname?: true
    password?: true
    roleId?: true
    is_verified?: true
    verified_at?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified: boolean
    verified_at: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    roleId?: boolean
    is_verified?: boolean
    verified_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean | User$tokenArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    favoritos?: boolean | User$favoritosArgs<ExtArgs>
    prompts?: boolean | User$promptsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    roleId?: boolean
    is_verified?: boolean
    verified_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    roleId?: boolean
    is_verified?: boolean
    verified_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    name?: boolean
    lastname?: boolean
    password?: boolean
    roleId?: boolean
    is_verified?: boolean
    verified_at?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "name" | "lastname" | "password" | "roleId" | "is_verified" | "verified_at" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | User$tokenArgs<ExtArgs>
    role?: boolean | RolesDefaultArgs<ExtArgs>
    favoritos?: boolean | User$favoritosArgs<ExtArgs>
    prompts?: boolean | User$promptsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      token: Prisma.$tokensPayload<ExtArgs>[]
      role: Prisma.$RolesPayload<ExtArgs>
      favoritos: Prisma.$ProductFavoritePayload<ExtArgs>[]
      prompts: Prisma.$Ai_QueriesPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      name: string
      lastname: string
      password: string
      roleId: string
      is_verified: boolean
      verified_at: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends User$tokenArgs<ExtArgs> = {}>(args?: Subset<T, User$tokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    favoritos<T extends User$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    prompts<T extends User$promptsArgs<ExtArgs> = {}>(args?: Subset<T, User$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly verified_at: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.token
   */
  export type User$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    where?: tokensWhereInput
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    cursor?: tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * User.favoritos
   */
  export type User$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    where?: ProductFavoriteWhereInput
    orderBy?: ProductFavoriteOrderByWithRelationInput | ProductFavoriteOrderByWithRelationInput[]
    cursor?: ProductFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFavoriteScalarFieldEnum | ProductFavoriteScalarFieldEnum[]
  }

  /**
   * User.prompts
   */
  export type User$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    where?: Ai_QueriesWhereInput
    orderBy?: Ai_QueriesOrderByWithRelationInput | Ai_QueriesOrderByWithRelationInput[]
    cursor?: Ai_QueriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Ai_QueriesScalarFieldEnum | Ai_QueriesScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Factura
   */

  export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  export type FacturaAvgAggregateOutputType = {
    total: number | null
  }

  export type FacturaSumAggregateOutputType = {
    total: number | null
  }

  export type FacturaMinAggregateOutputType = {
    id: string | null
    clienteId: string | null
    status: $Enums.StatusFactura | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacturaMaxAggregateOutputType = {
    id: string | null
    clienteId: string | null
    status: $Enums.StatusFactura | null
    total: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FacturaCountAggregateOutputType = {
    id: number
    clienteId: number
    status: number
    total: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FacturaAvgAggregateInputType = {
    total?: true
  }

  export type FacturaSumAggregateInputType = {
    total?: true
  }

  export type FacturaMinAggregateInputType = {
    id?: true
    clienteId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacturaMaxAggregateInputType = {
    id?: true
    clienteId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FacturaCountAggregateInputType = {
    id?: true
    clienteId?: true
    status?: true
    total?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FacturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factura to aggregate.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Facturas
    **/
    _count?: true | FacturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacturaMaxAggregateInputType
  }

  export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
        [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactura[P]>
      : GetScalarType<T[P], AggregateFactura[P]>
  }




  export type FacturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithAggregationInput | FacturaOrderByWithAggregationInput[]
    by: FacturaScalarFieldEnum[] | FacturaScalarFieldEnum
    having?: FacturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacturaCountAggregateInputType | true
    _avg?: FacturaAvgAggregateInputType
    _sum?: FacturaSumAggregateInputType
    _min?: FacturaMinAggregateInputType
    _max?: FacturaMaxAggregateInputType
  }

  export type FacturaGroupByOutputType = {
    id: string
    clienteId: string
    status: $Enums.StatusFactura
    total: number
    createdAt: Date
    updatedAt: Date
    _count: FacturaCountAggregateOutputType | null
    _avg: FacturaAvgAggregateOutputType | null
    _sum: FacturaSumAggregateOutputType | null
    _min: FacturaMinAggregateOutputType | null
    _max: FacturaMaxAggregateOutputType | null
  }

  type GetFacturaGroupByPayload<T extends FacturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacturaGroupByOutputType[P]>
            : GetScalarType<T[P], FacturaGroupByOutputType[P]>
        }
      >
    >


  export type FacturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clienteId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factura"]>

  export type FacturaSelectScalar = {
    id?: boolean
    clienteId?: boolean
    status?: boolean
    total?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FacturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clienteId" | "status" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["factura"]>
  export type FacturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
    detalles?: boolean | Factura$detallesArgs<ExtArgs>
    _count?: boolean | FacturaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }
  export type FacturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClientesDefaultArgs<ExtArgs>
  }

  export type $FacturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factura"
    objects: {
      cliente: Prisma.$ClientesPayload<ExtArgs>
      detalles: Prisma.$Detalle_facturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clienteId: string
      status: $Enums.StatusFactura
      total: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["factura"]>
    composites: {}
  }

  type FacturaGetPayload<S extends boolean | null | undefined | FacturaDefaultArgs> = $Result.GetResult<Prisma.$FacturaPayload, S>

  type FacturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FacturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacturaCountAggregateInputType | true
    }

  export interface FacturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factura'], meta: { name: 'Factura' } }
    /**
     * Find zero or one Factura that matches the filter.
     * @param {FacturaFindUniqueArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacturaFindUniqueArgs>(args: SelectSubset<T, FacturaFindUniqueArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FacturaFindUniqueOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacturaFindUniqueOrThrowArgs>(args: SelectSubset<T, FacturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacturaFindFirstArgs>(args?: SelectSubset<T, FacturaFindFirstArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindFirstOrThrowArgs} args - Arguments to find a Factura
     * @example
     * // Get one Factura
     * const factura = await prisma.factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacturaFindFirstOrThrowArgs>(args?: SelectSubset<T, FacturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturas
     * const facturas = await prisma.factura.findMany()
     * 
     * // Get first 10 Facturas
     * const facturas = await prisma.factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facturaWithIdOnly = await prisma.factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FacturaFindManyArgs>(args?: SelectSubset<T, FacturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Factura.
     * @param {FacturaCreateArgs} args - Arguments to create a Factura.
     * @example
     * // Create one Factura
     * const Factura = await prisma.factura.create({
     *   data: {
     *     // ... data to create a Factura
     *   }
     * })
     * 
     */
    create<T extends FacturaCreateArgs>(args: SelectSubset<T, FacturaCreateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Facturas.
     * @param {FacturaCreateManyArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacturaCreateManyArgs>(args?: SelectSubset<T, FacturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facturas and returns the data saved in the database.
     * @param {FacturaCreateManyAndReturnArgs} args - Arguments to create many Facturas.
     * @example
     * // Create many Facturas
     * const factura = await prisma.factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacturaCreateManyAndReturnArgs>(args?: SelectSubset<T, FacturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Factura.
     * @param {FacturaDeleteArgs} args - Arguments to delete one Factura.
     * @example
     * // Delete one Factura
     * const Factura = await prisma.factura.delete({
     *   where: {
     *     // ... filter to delete one Factura
     *   }
     * })
     * 
     */
    delete<T extends FacturaDeleteArgs>(args: SelectSubset<T, FacturaDeleteArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Factura.
     * @param {FacturaUpdateArgs} args - Arguments to update one Factura.
     * @example
     * // Update one Factura
     * const factura = await prisma.factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacturaUpdateArgs>(args: SelectSubset<T, FacturaUpdateArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Facturas.
     * @param {FacturaDeleteManyArgs} args - Arguments to filter Facturas to delete.
     * @example
     * // Delete a few Facturas
     * const { count } = await prisma.factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacturaDeleteManyArgs>(args?: SelectSubset<T, FacturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacturaUpdateManyArgs>(args: SelectSubset<T, FacturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facturas and returns the data updated in the database.
     * @param {FacturaUpdateManyAndReturnArgs} args - Arguments to update many Facturas.
     * @example
     * // Update many Facturas
     * const factura = await prisma.factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facturas and only return the `id`
     * const facturaWithIdOnly = await prisma.factura.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FacturaUpdateManyAndReturnArgs>(args: SelectSubset<T, FacturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Factura.
     * @param {FacturaUpsertArgs} args - Arguments to update or create a Factura.
     * @example
     * // Update or create a Factura
     * const factura = await prisma.factura.upsert({
     *   create: {
     *     // ... data to create a Factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factura we want to update
     *   }
     * })
     */
    upsert<T extends FacturaUpsertArgs>(args: SelectSubset<T, FacturaUpsertArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaCountArgs} args - Arguments to filter Facturas to count.
     * @example
     * // Count the number of Facturas
     * const count = await prisma.factura.count({
     *   where: {
     *     // ... the filter for the Facturas we want to count
     *   }
     * })
    **/
    count<T extends FacturaCountArgs>(
      args?: Subset<T, FacturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacturaAggregateArgs>(args: Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>

    /**
     * Group by Factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FacturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacturaGroupByArgs['orderBy'] }
        : { orderBy?: FacturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FacturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factura model
   */
  readonly fields: FacturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientesDefaultArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    detalles<T extends Factura$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Factura$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Factura model
   */ 
  interface FacturaFieldRefs {
    readonly id: FieldRef<"Factura", 'String'>
    readonly clienteId: FieldRef<"Factura", 'String'>
    readonly status: FieldRef<"Factura", 'StatusFactura'>
    readonly total: FieldRef<"Factura", 'Float'>
    readonly createdAt: FieldRef<"Factura", 'DateTime'>
    readonly updatedAt: FieldRef<"Factura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Factura findUnique
   */
  export type FacturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findUniqueOrThrow
   */
  export type FacturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura findFirst
   */
  export type FacturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findFirstOrThrow
   */
  export type FacturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Factura to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Facturas.
     */
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura findMany
   */
  export type FacturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter, which Facturas to fetch.
     */
    where?: FacturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Facturas to fetch.
     */
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Facturas.
     */
    cursor?: FacturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Facturas.
     */
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Factura create
   */
  export type FacturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Factura.
     */
    data: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
  }

  /**
   * Factura createMany
   */
  export type FacturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factura createManyAndReturn
   */
  export type FacturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to create many Facturas.
     */
    data: FacturaCreateManyInput | FacturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura update
   */
  export type FacturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Factura.
     */
    data: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
    /**
     * Choose, which Factura to update.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura updateMany
   */
  export type FacturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
  }

  /**
   * Factura updateManyAndReturn
   */
  export type FacturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * The data used to update Facturas.
     */
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyInput>
    /**
     * Filter which Facturas to update
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factura upsert
   */
  export type FacturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Factura to update in case it exists.
     */
    where: FacturaWhereUniqueInput
    /**
     * In case the Factura found by the `where` argument doesn't exist, create a new Factura with this data.
     */
    create: XOR<FacturaCreateInput, FacturaUncheckedCreateInput>
    /**
     * In case the Factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacturaUpdateInput, FacturaUncheckedUpdateInput>
  }

  /**
   * Factura delete
   */
  export type FacturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    /**
     * Filter which Factura to delete.
     */
    where: FacturaWhereUniqueInput
  }

  /**
   * Factura deleteMany
   */
  export type FacturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facturas to delete
     */
    where?: FacturaWhereInput
    /**
     * Limit how many Facturas to delete.
     */
    limit?: number
  }

  /**
   * Factura.detalles
   */
  export type Factura$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    where?: Detalle_facturaWhereInput
    orderBy?: Detalle_facturaOrderByWithRelationInput | Detalle_facturaOrderByWithRelationInput[]
    cursor?: Detalle_facturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_facturaScalarFieldEnum | Detalle_facturaScalarFieldEnum[]
  }

  /**
   * Factura without action
   */
  export type FacturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
  }


  /**
   * Model Detalle_factura
   */

  export type AggregateDetalle_factura = {
    _count: Detalle_facturaCountAggregateOutputType | null
    _avg: Detalle_facturaAvgAggregateOutputType | null
    _sum: Detalle_facturaSumAggregateOutputType | null
    _min: Detalle_facturaMinAggregateOutputType | null
    _max: Detalle_facturaMaxAggregateOutputType | null
  }

  export type Detalle_facturaAvgAggregateOutputType = {
    cantidad: number | null
    precio: number | null
  }

  export type Detalle_facturaSumAggregateOutputType = {
    cantidad: number | null
    precio: number | null
  }

  export type Detalle_facturaMinAggregateOutputType = {
    id: string | null
    facturaId: string | null
    productoId: string | null
    cantidad: number | null
    precio: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Detalle_facturaMaxAggregateOutputType = {
    id: string | null
    facturaId: string | null
    productoId: string | null
    cantidad: number | null
    precio: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Detalle_facturaCountAggregateOutputType = {
    id: number
    facturaId: number
    productoId: number
    cantidad: number
    precio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Detalle_facturaAvgAggregateInputType = {
    cantidad?: true
    precio?: true
  }

  export type Detalle_facturaSumAggregateInputType = {
    cantidad?: true
    precio?: true
  }

  export type Detalle_facturaMinAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Detalle_facturaMaxAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Detalle_facturaCountAggregateInputType = {
    id?: true
    facturaId?: true
    productoId?: true
    cantidad?: true
    precio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Detalle_facturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle_factura to aggregate.
     */
    where?: Detalle_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_facturas to fetch.
     */
    orderBy?: Detalle_facturaOrderByWithRelationInput | Detalle_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Detalle_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detalle_facturas
    **/
    _count?: true | Detalle_facturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalle_facturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalle_facturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalle_facturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalle_facturaMaxAggregateInputType
  }

  export type GetDetalle_facturaAggregateType<T extends Detalle_facturaAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalle_factura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalle_factura[P]>
      : GetScalarType<T[P], AggregateDetalle_factura[P]>
  }




  export type Detalle_facturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Detalle_facturaWhereInput
    orderBy?: Detalle_facturaOrderByWithAggregationInput | Detalle_facturaOrderByWithAggregationInput[]
    by: Detalle_facturaScalarFieldEnum[] | Detalle_facturaScalarFieldEnum
    having?: Detalle_facturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalle_facturaCountAggregateInputType | true
    _avg?: Detalle_facturaAvgAggregateInputType
    _sum?: Detalle_facturaSumAggregateInputType
    _min?: Detalle_facturaMinAggregateInputType
    _max?: Detalle_facturaMaxAggregateInputType
  }

  export type Detalle_facturaGroupByOutputType = {
    id: string
    facturaId: string
    productoId: string
    cantidad: number
    precio: number
    createdAt: Date
    updatedAt: Date
    _count: Detalle_facturaCountAggregateOutputType | null
    _avg: Detalle_facturaAvgAggregateOutputType | null
    _sum: Detalle_facturaSumAggregateOutputType | null
    _min: Detalle_facturaMinAggregateOutputType | null
    _max: Detalle_facturaMaxAggregateOutputType | null
  }

  type GetDetalle_facturaGroupByPayload<T extends Detalle_facturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalle_facturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalle_facturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalle_facturaGroupByOutputType[P]>
            : GetScalarType<T[P], Detalle_facturaGroupByOutputType[P]>
        }
      >
    >


  export type Detalle_facturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_factura"]>

  export type Detalle_facturaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_factura"]>

  export type Detalle_facturaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalle_factura"]>

  export type Detalle_facturaSelectScalar = {
    id?: boolean
    facturaId?: boolean
    productoId?: boolean
    cantidad?: boolean
    precio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Detalle_facturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facturaId" | "productoId" | "cantidad" | "precio" | "createdAt" | "updatedAt", ExtArgs["result"]["detalle_factura"]>
  export type Detalle_facturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type Detalle_facturaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type Detalle_facturaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factura?: boolean | FacturaDefaultArgs<ExtArgs>
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }

  export type $Detalle_facturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detalle_factura"
    objects: {
      factura: Prisma.$FacturaPayload<ExtArgs>
      producto: Prisma.$ProductosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facturaId: string
      productoId: string
      cantidad: number
      precio: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["detalle_factura"]>
    composites: {}
  }

  type Detalle_facturaGetPayload<S extends boolean | null | undefined | Detalle_facturaDefaultArgs> = $Result.GetResult<Prisma.$Detalle_facturaPayload, S>

  type Detalle_facturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Detalle_facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalle_facturaCountAggregateInputType | true
    }

  export interface Detalle_facturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detalle_factura'], meta: { name: 'Detalle_factura' } }
    /**
     * Find zero or one Detalle_factura that matches the filter.
     * @param {Detalle_facturaFindUniqueArgs} args - Arguments to find a Detalle_factura
     * @example
     * // Get one Detalle_factura
     * const detalle_factura = await prisma.detalle_factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Detalle_facturaFindUniqueArgs>(args: SelectSubset<T, Detalle_facturaFindUniqueArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Detalle_factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Detalle_facturaFindUniqueOrThrowArgs} args - Arguments to find a Detalle_factura
     * @example
     * // Get one Detalle_factura
     * const detalle_factura = await prisma.detalle_factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Detalle_facturaFindUniqueOrThrowArgs>(args: SelectSubset<T, Detalle_facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Detalle_factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaFindFirstArgs} args - Arguments to find a Detalle_factura
     * @example
     * // Get one Detalle_factura
     * const detalle_factura = await prisma.detalle_factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Detalle_facturaFindFirstArgs>(args?: SelectSubset<T, Detalle_facturaFindFirstArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Detalle_factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaFindFirstOrThrowArgs} args - Arguments to find a Detalle_factura
     * @example
     * // Get one Detalle_factura
     * const detalle_factura = await prisma.detalle_factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Detalle_facturaFindFirstOrThrowArgs>(args?: SelectSubset<T, Detalle_facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Detalle_facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalle_facturas
     * const detalle_facturas = await prisma.detalle_factura.findMany()
     * 
     * // Get first 10 Detalle_facturas
     * const detalle_facturas = await prisma.detalle_factura.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalle_facturaWithIdOnly = await prisma.detalle_factura.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Detalle_facturaFindManyArgs>(args?: SelectSubset<T, Detalle_facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Detalle_factura.
     * @param {Detalle_facturaCreateArgs} args - Arguments to create a Detalle_factura.
     * @example
     * // Create one Detalle_factura
     * const Detalle_factura = await prisma.detalle_factura.create({
     *   data: {
     *     // ... data to create a Detalle_factura
     *   }
     * })
     * 
     */
    create<T extends Detalle_facturaCreateArgs>(args: SelectSubset<T, Detalle_facturaCreateArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Detalle_facturas.
     * @param {Detalle_facturaCreateManyArgs} args - Arguments to create many Detalle_facturas.
     * @example
     * // Create many Detalle_facturas
     * const detalle_factura = await prisma.detalle_factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Detalle_facturaCreateManyArgs>(args?: SelectSubset<T, Detalle_facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalle_facturas and returns the data saved in the database.
     * @param {Detalle_facturaCreateManyAndReturnArgs} args - Arguments to create many Detalle_facturas.
     * @example
     * // Create many Detalle_facturas
     * const detalle_factura = await prisma.detalle_factura.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalle_facturas and only return the `id`
     * const detalle_facturaWithIdOnly = await prisma.detalle_factura.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Detalle_facturaCreateManyAndReturnArgs>(args?: SelectSubset<T, Detalle_facturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Detalle_factura.
     * @param {Detalle_facturaDeleteArgs} args - Arguments to delete one Detalle_factura.
     * @example
     * // Delete one Detalle_factura
     * const Detalle_factura = await prisma.detalle_factura.delete({
     *   where: {
     *     // ... filter to delete one Detalle_factura
     *   }
     * })
     * 
     */
    delete<T extends Detalle_facturaDeleteArgs>(args: SelectSubset<T, Detalle_facturaDeleteArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Detalle_factura.
     * @param {Detalle_facturaUpdateArgs} args - Arguments to update one Detalle_factura.
     * @example
     * // Update one Detalle_factura
     * const detalle_factura = await prisma.detalle_factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Detalle_facturaUpdateArgs>(args: SelectSubset<T, Detalle_facturaUpdateArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Detalle_facturas.
     * @param {Detalle_facturaDeleteManyArgs} args - Arguments to filter Detalle_facturas to delete.
     * @example
     * // Delete a few Detalle_facturas
     * const { count } = await prisma.detalle_factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Detalle_facturaDeleteManyArgs>(args?: SelectSubset<T, Detalle_facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalle_facturas
     * const detalle_factura = await prisma.detalle_factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Detalle_facturaUpdateManyArgs>(args: SelectSubset<T, Detalle_facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalle_facturas and returns the data updated in the database.
     * @param {Detalle_facturaUpdateManyAndReturnArgs} args - Arguments to update many Detalle_facturas.
     * @example
     * // Update many Detalle_facturas
     * const detalle_factura = await prisma.detalle_factura.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalle_facturas and only return the `id`
     * const detalle_facturaWithIdOnly = await prisma.detalle_factura.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Detalle_facturaUpdateManyAndReturnArgs>(args: SelectSubset<T, Detalle_facturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Detalle_factura.
     * @param {Detalle_facturaUpsertArgs} args - Arguments to update or create a Detalle_factura.
     * @example
     * // Update or create a Detalle_factura
     * const detalle_factura = await prisma.detalle_factura.upsert({
     *   create: {
     *     // ... data to create a Detalle_factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalle_factura we want to update
     *   }
     * })
     */
    upsert<T extends Detalle_facturaUpsertArgs>(args: SelectSubset<T, Detalle_facturaUpsertArgs<ExtArgs>>): Prisma__Detalle_facturaClient<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Detalle_facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaCountArgs} args - Arguments to filter Detalle_facturas to count.
     * @example
     * // Count the number of Detalle_facturas
     * const count = await prisma.detalle_factura.count({
     *   where: {
     *     // ... the filter for the Detalle_facturas we want to count
     *   }
     * })
    **/
    count<T extends Detalle_facturaCountArgs>(
      args?: Subset<T, Detalle_facturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalle_facturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalle_factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalle_facturaAggregateArgs>(args: Subset<T, Detalle_facturaAggregateArgs>): Prisma.PrismaPromise<GetDetalle_facturaAggregateType<T>>

    /**
     * Group by Detalle_factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalle_facturaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Detalle_facturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Detalle_facturaGroupByArgs['orderBy'] }
        : { orderBy?: Detalle_facturaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Detalle_facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_facturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detalle_factura model
   */
  readonly fields: Detalle_facturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detalle_factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Detalle_facturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factura<T extends FacturaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacturaDefaultArgs<ExtArgs>>): Prisma__FacturaClient<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    producto<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detalle_factura model
   */ 
  interface Detalle_facturaFieldRefs {
    readonly id: FieldRef<"Detalle_factura", 'String'>
    readonly facturaId: FieldRef<"Detalle_factura", 'String'>
    readonly productoId: FieldRef<"Detalle_factura", 'String'>
    readonly cantidad: FieldRef<"Detalle_factura", 'Int'>
    readonly precio: FieldRef<"Detalle_factura", 'Float'>
    readonly createdAt: FieldRef<"Detalle_factura", 'DateTime'>
    readonly updatedAt: FieldRef<"Detalle_factura", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Detalle_factura findUnique
   */
  export type Detalle_facturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_factura to fetch.
     */
    where: Detalle_facturaWhereUniqueInput
  }

  /**
   * Detalle_factura findUniqueOrThrow
   */
  export type Detalle_facturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_factura to fetch.
     */
    where: Detalle_facturaWhereUniqueInput
  }

  /**
   * Detalle_factura findFirst
   */
  export type Detalle_facturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_factura to fetch.
     */
    where?: Detalle_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_facturas to fetch.
     */
    orderBy?: Detalle_facturaOrderByWithRelationInput | Detalle_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalle_facturas.
     */
    cursor?: Detalle_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalle_facturas.
     */
    distinct?: Detalle_facturaScalarFieldEnum | Detalle_facturaScalarFieldEnum[]
  }

  /**
   * Detalle_factura findFirstOrThrow
   */
  export type Detalle_facturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_factura to fetch.
     */
    where?: Detalle_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_facturas to fetch.
     */
    orderBy?: Detalle_facturaOrderByWithRelationInput | Detalle_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalle_facturas.
     */
    cursor?: Detalle_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalle_facturas.
     */
    distinct?: Detalle_facturaScalarFieldEnum | Detalle_facturaScalarFieldEnum[]
  }

  /**
   * Detalle_factura findMany
   */
  export type Detalle_facturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * Filter, which Detalle_facturas to fetch.
     */
    where?: Detalle_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalle_facturas to fetch.
     */
    orderBy?: Detalle_facturaOrderByWithRelationInput | Detalle_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detalle_facturas.
     */
    cursor?: Detalle_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalle_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalle_facturas.
     */
    skip?: number
    distinct?: Detalle_facturaScalarFieldEnum | Detalle_facturaScalarFieldEnum[]
  }

  /**
   * Detalle_factura create
   */
  export type Detalle_facturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * The data needed to create a Detalle_factura.
     */
    data: XOR<Detalle_facturaCreateInput, Detalle_facturaUncheckedCreateInput>
  }

  /**
   * Detalle_factura createMany
   */
  export type Detalle_facturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detalle_facturas.
     */
    data: Detalle_facturaCreateManyInput | Detalle_facturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detalle_factura createManyAndReturn
   */
  export type Detalle_facturaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * The data used to create many Detalle_facturas.
     */
    data: Detalle_facturaCreateManyInput | Detalle_facturaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detalle_factura update
   */
  export type Detalle_facturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * The data needed to update a Detalle_factura.
     */
    data: XOR<Detalle_facturaUpdateInput, Detalle_facturaUncheckedUpdateInput>
    /**
     * Choose, which Detalle_factura to update.
     */
    where: Detalle_facturaWhereUniqueInput
  }

  /**
   * Detalle_factura updateMany
   */
  export type Detalle_facturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detalle_facturas.
     */
    data: XOR<Detalle_facturaUpdateManyMutationInput, Detalle_facturaUncheckedUpdateManyInput>
    /**
     * Filter which Detalle_facturas to update
     */
    where?: Detalle_facturaWhereInput
    /**
     * Limit how many Detalle_facturas to update.
     */
    limit?: number
  }

  /**
   * Detalle_factura updateManyAndReturn
   */
  export type Detalle_facturaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * The data used to update Detalle_facturas.
     */
    data: XOR<Detalle_facturaUpdateManyMutationInput, Detalle_facturaUncheckedUpdateManyInput>
    /**
     * Filter which Detalle_facturas to update
     */
    where?: Detalle_facturaWhereInput
    /**
     * Limit how many Detalle_facturas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Detalle_factura upsert
   */
  export type Detalle_facturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * The filter to search for the Detalle_factura to update in case it exists.
     */
    where: Detalle_facturaWhereUniqueInput
    /**
     * In case the Detalle_factura found by the `where` argument doesn't exist, create a new Detalle_factura with this data.
     */
    create: XOR<Detalle_facturaCreateInput, Detalle_facturaUncheckedCreateInput>
    /**
     * In case the Detalle_factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Detalle_facturaUpdateInput, Detalle_facturaUncheckedUpdateInput>
  }

  /**
   * Detalle_factura delete
   */
  export type Detalle_facturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    /**
     * Filter which Detalle_factura to delete.
     */
    where: Detalle_facturaWhereUniqueInput
  }

  /**
   * Detalle_factura deleteMany
   */
  export type Detalle_facturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalle_facturas to delete
     */
    where?: Detalle_facturaWhereInput
    /**
     * Limit how many Detalle_facturas to delete.
     */
    limit?: number
  }

  /**
   * Detalle_factura without action
   */
  export type Detalle_facturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
  }


  /**
   * Model Productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    precio_compra: number | null
    stock: number | null
  }

  export type ProductosSumAggregateOutputType = {
    precio_compra: number | null
    stock: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    precio_compra: number | null
    stock: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductosMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    precio_compra: number | null
    stock: number | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductosCountAggregateOutputType = {
    id: number
    nombre: number
    precio_compra: number
    stock: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    precio_compra?: true
    stock?: true
  }

  export type ProductosSumAggregateInputType = {
    precio_compra?: true
    stock?: true
  }

  export type ProductosMinAggregateInputType = {
    id?: true
    nombre?: true
    precio_compra?: true
    stock?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductosMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio_compra?: true
    stock?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductosCountAggregateInputType = {
    id?: true
    nombre?: true
    precio_compra?: true
    stock?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to aggregate.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type ProductosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithAggregationInput | ProductosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: ProductosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id: string
    nombre: string
    precio_compra: number
    stock: number
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends ProductosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type ProductosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio_compra?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productos_favoritos?: boolean | Productos$productos_favoritosArgs<ExtArgs>
    detalles?: boolean | Productos$detallesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    stockHistory?: boolean | Productos$stockHistoryArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio_compra?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio_compra?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type ProductosSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio_compra?: boolean
    stock?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio_compra" | "stock" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["productos"]>
  export type ProductosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos_favoritos?: boolean | Productos$productos_favoritosArgs<ExtArgs>
    detalles?: boolean | Productos$detallesArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    stockHistory?: boolean | Productos$stockHistoryArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Productos"
    objects: {
      productos_favoritos: Prisma.$ProductFavoritePayload<ExtArgs>[]
      detalles: Prisma.$Detalle_facturaPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      stockHistory: Prisma.$StockHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      precio_compra: number
      stock: number
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type ProductosGetPayload<S extends boolean | null | undefined | ProductosDefaultArgs> = $Result.GetResult<Prisma.$ProductosPayload, S>

  type ProductosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface ProductosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Productos'], meta: { name: 'Productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {ProductosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductosFindUniqueArgs>(args: SelectSubset<T, ProductosFindUniqueArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductosFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductosFindFirstArgs>(args?: SelectSubset<T, ProductosFindFirstArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductosFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductosFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productosWithIdOnly = await prisma.productos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductosFindManyArgs>(args?: SelectSubset<T, ProductosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Productos.
     * @param {ProductosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends ProductosCreateArgs>(args: SelectSubset<T, ProductosCreateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Productos.
     * @param {ProductosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductosCreateManyArgs>(args?: SelectSubset<T, ProductosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {ProductosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductosCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Productos.
     * @param {ProductosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends ProductosDeleteArgs>(args: SelectSubset<T, ProductosDeleteArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Productos.
     * @param {ProductosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductosUpdateArgs>(args: SelectSubset<T, ProductosUpdateArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductosDeleteManyArgs>(args?: SelectSubset<T, ProductosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductosUpdateManyArgs>(args: SelectSubset<T, ProductosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {ProductosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id`
     * const productosWithIdOnly = await prisma.productos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductosUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Productos.
     * @param {ProductosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends ProductosUpsertArgs>(args: SelectSubset<T, ProductosUpsertArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductosCountArgs>(
      args?: Subset<T, ProductosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductosGroupByArgs['orderBy'] }
        : { orderBy?: ProductosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Productos model
   */
  readonly fields: ProductosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos_favoritos<T extends Productos$productos_favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Productos$productos_favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    detalles<T extends Productos$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Productos$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Detalle_facturaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    stockHistory<T extends Productos$stockHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Productos$stockHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Productos model
   */ 
  interface ProductosFieldRefs {
    readonly id: FieldRef<"Productos", 'String'>
    readonly nombre: FieldRef<"Productos", 'String'>
    readonly precio_compra: FieldRef<"Productos", 'Float'>
    readonly stock: FieldRef<"Productos", 'Int'>
    readonly categoryId: FieldRef<"Productos", 'String'>
    readonly createdAt: FieldRef<"Productos", 'DateTime'>
    readonly updatedAt: FieldRef<"Productos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Productos findUnique
   */
  export type ProductosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findUniqueOrThrow
   */
  export type ProductosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos findFirst
   */
  export type ProductosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findFirstOrThrow
   */
  export type ProductosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos findMany
   */
  export type ProductosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Productos create
   */
  export type ProductosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to create a Productos.
     */
    data: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
  }

  /**
   * Productos createMany
   */
  export type ProductosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Productos createManyAndReturn
   */
  export type ProductosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * The data used to create many Productos.
     */
    data: ProductosCreateManyInput | ProductosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Productos update
   */
  export type ProductosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The data needed to update a Productos.
     */
    data: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
    /**
     * Choose, which Productos to update.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos updateMany
   */
  export type ProductosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Productos updateManyAndReturn
   */
  export type ProductosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Productos upsert
   */
  export type ProductosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * The filter to search for the Productos to update in case it exists.
     */
    where: ProductosWhereUniqueInput
    /**
     * In case the Productos found by the `where` argument doesn't exist, create a new Productos with this data.
     */
    create: XOR<ProductosCreateInput, ProductosUncheckedCreateInput>
    /**
     * In case the Productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductosUpdateInput, ProductosUncheckedUpdateInput>
  }

  /**
   * Productos delete
   */
  export type ProductosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    /**
     * Filter which Productos to delete.
     */
    where: ProductosWhereUniqueInput
  }

  /**
   * Productos deleteMany
   */
  export type ProductosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductosWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Productos.productos_favoritos
   */
  export type Productos$productos_favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    where?: ProductFavoriteWhereInput
    orderBy?: ProductFavoriteOrderByWithRelationInput | ProductFavoriteOrderByWithRelationInput[]
    cursor?: ProductFavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductFavoriteScalarFieldEnum | ProductFavoriteScalarFieldEnum[]
  }

  /**
   * Productos.detalles
   */
  export type Productos$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalle_factura
     */
    select?: Detalle_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalle_factura
     */
    omit?: Detalle_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Detalle_facturaInclude<ExtArgs> | null
    where?: Detalle_facturaWhereInput
    orderBy?: Detalle_facturaOrderByWithRelationInput | Detalle_facturaOrderByWithRelationInput[]
    cursor?: Detalle_facturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalle_facturaScalarFieldEnum | Detalle_facturaScalarFieldEnum[]
  }

  /**
   * Productos.stockHistory
   */
  export type Productos$stockHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    where?: StockHistoryWhereInput
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    cursor?: StockHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * Productos without action
   */
  export type ProductosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Productos
     */
    select?: ProductosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Productos
     */
    omit?: ProductosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductosInclude<ExtArgs> | null
    where?: ProductosWhereInput
    orderBy?: ProductosOrderByWithRelationInput | ProductosOrderByWithRelationInput[]
    cursor?: ProductosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductFavorite
   */

  export type AggregateProductFavorite = {
    _count: ProductFavoriteCountAggregateOutputType | null
    _min: ProductFavoriteMinAggregateOutputType | null
    _max: ProductFavoriteMaxAggregateOutputType | null
  }

  export type ProductFavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductFavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductFavoriteCountAggregateOutputType = {
    id: number
    userId: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductFavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductFavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductFavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductFavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFavorite to aggregate.
     */
    where?: ProductFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFavorites to fetch.
     */
    orderBy?: ProductFavoriteOrderByWithRelationInput | ProductFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductFavorites
    **/
    _count?: true | ProductFavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductFavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductFavoriteMaxAggregateInputType
  }

  export type GetProductFavoriteAggregateType<T extends ProductFavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateProductFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductFavorite[P]>
      : GetScalarType<T[P], AggregateProductFavorite[P]>
  }




  export type ProductFavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductFavoriteWhereInput
    orderBy?: ProductFavoriteOrderByWithAggregationInput | ProductFavoriteOrderByWithAggregationInput[]
    by: ProductFavoriteScalarFieldEnum[] | ProductFavoriteScalarFieldEnum
    having?: ProductFavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductFavoriteCountAggregateInputType | true
    _min?: ProductFavoriteMinAggregateInputType
    _max?: ProductFavoriteMaxAggregateInputType
  }

  export type ProductFavoriteGroupByOutputType = {
    id: string
    userId: string
    productId: string
    createdAt: Date
    updatedAt: Date
    _count: ProductFavoriteCountAggregateOutputType | null
    _min: ProductFavoriteMinAggregateOutputType | null
    _max: ProductFavoriteMaxAggregateOutputType | null
  }

  type GetProductFavoriteGroupByPayload<T extends ProductFavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductFavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductFavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductFavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], ProductFavoriteGroupByOutputType[P]>
        }
      >
    >


  export type ProductFavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFavorite"]>

  export type ProductFavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFavorite"]>

  export type ProductFavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productFavorite"]>

  export type ProductFavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductFavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["productFavorite"]>
  export type ProductFavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type ProductFavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type ProductFavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductosDefaultArgs<ExtArgs>
  }

  export type $ProductFavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductFavorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productFavorite"]>
    composites: {}
  }

  type ProductFavoriteGetPayload<S extends boolean | null | undefined | ProductFavoriteDefaultArgs> = $Result.GetResult<Prisma.$ProductFavoritePayload, S>

  type ProductFavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductFavoriteCountAggregateInputType | true
    }

  export interface ProductFavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductFavorite'], meta: { name: 'ProductFavorite' } }
    /**
     * Find zero or one ProductFavorite that matches the filter.
     * @param {ProductFavoriteFindUniqueArgs} args - Arguments to find a ProductFavorite
     * @example
     * // Get one ProductFavorite
     * const productFavorite = await prisma.productFavorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFavoriteFindUniqueArgs>(args: SelectSubset<T, ProductFavoriteFindUniqueArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProductFavorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFavoriteFindUniqueOrThrowArgs} args - Arguments to find a ProductFavorite
     * @example
     * // Get one ProductFavorite
     * const productFavorite = await prisma.productFavorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProductFavorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteFindFirstArgs} args - Arguments to find a ProductFavorite
     * @example
     * // Get one ProductFavorite
     * const productFavorite = await prisma.productFavorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFavoriteFindFirstArgs>(args?: SelectSubset<T, ProductFavoriteFindFirstArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProductFavorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteFindFirstOrThrowArgs} args - Arguments to find a ProductFavorite
     * @example
     * // Get one ProductFavorite
     * const productFavorite = await prisma.productFavorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProductFavorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductFavorites
     * const productFavorites = await prisma.productFavorite.findMany()
     * 
     * // Get first 10 ProductFavorites
     * const productFavorites = await prisma.productFavorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productFavoriteWithIdOnly = await prisma.productFavorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFavoriteFindManyArgs>(args?: SelectSubset<T, ProductFavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProductFavorite.
     * @param {ProductFavoriteCreateArgs} args - Arguments to create a ProductFavorite.
     * @example
     * // Create one ProductFavorite
     * const ProductFavorite = await prisma.productFavorite.create({
     *   data: {
     *     // ... data to create a ProductFavorite
     *   }
     * })
     * 
     */
    create<T extends ProductFavoriteCreateArgs>(args: SelectSubset<T, ProductFavoriteCreateArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProductFavorites.
     * @param {ProductFavoriteCreateManyArgs} args - Arguments to create many ProductFavorites.
     * @example
     * // Create many ProductFavorites
     * const productFavorite = await prisma.productFavorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductFavoriteCreateManyArgs>(args?: SelectSubset<T, ProductFavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductFavorites and returns the data saved in the database.
     * @param {ProductFavoriteCreateManyAndReturnArgs} args - Arguments to create many ProductFavorites.
     * @example
     * // Create many ProductFavorites
     * const productFavorite = await prisma.productFavorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductFavorites and only return the `id`
     * const productFavoriteWithIdOnly = await prisma.productFavorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductFavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductFavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProductFavorite.
     * @param {ProductFavoriteDeleteArgs} args - Arguments to delete one ProductFavorite.
     * @example
     * // Delete one ProductFavorite
     * const ProductFavorite = await prisma.productFavorite.delete({
     *   where: {
     *     // ... filter to delete one ProductFavorite
     *   }
     * })
     * 
     */
    delete<T extends ProductFavoriteDeleteArgs>(args: SelectSubset<T, ProductFavoriteDeleteArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProductFavorite.
     * @param {ProductFavoriteUpdateArgs} args - Arguments to update one ProductFavorite.
     * @example
     * // Update one ProductFavorite
     * const productFavorite = await prisma.productFavorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductFavoriteUpdateArgs>(args: SelectSubset<T, ProductFavoriteUpdateArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProductFavorites.
     * @param {ProductFavoriteDeleteManyArgs} args - Arguments to filter ProductFavorites to delete.
     * @example
     * // Delete a few ProductFavorites
     * const { count } = await prisma.productFavorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductFavoriteDeleteManyArgs>(args?: SelectSubset<T, ProductFavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductFavorites
     * const productFavorite = await prisma.productFavorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductFavoriteUpdateManyArgs>(args: SelectSubset<T, ProductFavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductFavorites and returns the data updated in the database.
     * @param {ProductFavoriteUpdateManyAndReturnArgs} args - Arguments to update many ProductFavorites.
     * @example
     * // Update many ProductFavorites
     * const productFavorite = await prisma.productFavorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductFavorites and only return the `id`
     * const productFavoriteWithIdOnly = await prisma.productFavorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductFavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductFavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProductFavorite.
     * @param {ProductFavoriteUpsertArgs} args - Arguments to update or create a ProductFavorite.
     * @example
     * // Update or create a ProductFavorite
     * const productFavorite = await prisma.productFavorite.upsert({
     *   create: {
     *     // ... data to create a ProductFavorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductFavorite we want to update
     *   }
     * })
     */
    upsert<T extends ProductFavoriteUpsertArgs>(args: SelectSubset<T, ProductFavoriteUpsertArgs<ExtArgs>>): Prisma__ProductFavoriteClient<$Result.GetResult<Prisma.$ProductFavoritePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProductFavorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteCountArgs} args - Arguments to filter ProductFavorites to count.
     * @example
     * // Count the number of ProductFavorites
     * const count = await prisma.productFavorite.count({
     *   where: {
     *     // ... the filter for the ProductFavorites we want to count
     *   }
     * })
    **/
    count<T extends ProductFavoriteCountArgs>(
      args?: Subset<T, ProductFavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductFavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductFavoriteAggregateArgs>(args: Subset<T, ProductFavoriteAggregateArgs>): Prisma.PrismaPromise<GetProductFavoriteAggregateType<T>>

    /**
     * Group by ProductFavorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFavoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductFavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductFavoriteGroupByArgs['orderBy'] }
        : { orderBy?: ProductFavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductFavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductFavorite model
   */
  readonly fields: ProductFavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductFavorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductFavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    product<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductFavorite model
   */ 
  interface ProductFavoriteFieldRefs {
    readonly id: FieldRef<"ProductFavorite", 'String'>
    readonly userId: FieldRef<"ProductFavorite", 'String'>
    readonly productId: FieldRef<"ProductFavorite", 'String'>
    readonly createdAt: FieldRef<"ProductFavorite", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductFavorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductFavorite findUnique
   */
  export type ProductFavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which ProductFavorite to fetch.
     */
    where: ProductFavoriteWhereUniqueInput
  }

  /**
   * ProductFavorite findUniqueOrThrow
   */
  export type ProductFavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which ProductFavorite to fetch.
     */
    where: ProductFavoriteWhereUniqueInput
  }

  /**
   * ProductFavorite findFirst
   */
  export type ProductFavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which ProductFavorite to fetch.
     */
    where?: ProductFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFavorites to fetch.
     */
    orderBy?: ProductFavoriteOrderByWithRelationInput | ProductFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFavorites.
     */
    cursor?: ProductFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFavorites.
     */
    distinct?: ProductFavoriteScalarFieldEnum | ProductFavoriteScalarFieldEnum[]
  }

  /**
   * ProductFavorite findFirstOrThrow
   */
  export type ProductFavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which ProductFavorite to fetch.
     */
    where?: ProductFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFavorites to fetch.
     */
    orderBy?: ProductFavoriteOrderByWithRelationInput | ProductFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductFavorites.
     */
    cursor?: ProductFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFavorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductFavorites.
     */
    distinct?: ProductFavoriteScalarFieldEnum | ProductFavoriteScalarFieldEnum[]
  }

  /**
   * ProductFavorite findMany
   */
  export type ProductFavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * Filter, which ProductFavorites to fetch.
     */
    where?: ProductFavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductFavorites to fetch.
     */
    orderBy?: ProductFavoriteOrderByWithRelationInput | ProductFavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductFavorites.
     */
    cursor?: ProductFavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductFavorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductFavorites.
     */
    skip?: number
    distinct?: ProductFavoriteScalarFieldEnum | ProductFavoriteScalarFieldEnum[]
  }

  /**
   * ProductFavorite create
   */
  export type ProductFavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductFavorite.
     */
    data: XOR<ProductFavoriteCreateInput, ProductFavoriteUncheckedCreateInput>
  }

  /**
   * ProductFavorite createMany
   */
  export type ProductFavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductFavorites.
     */
    data: ProductFavoriteCreateManyInput | ProductFavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductFavorite createManyAndReturn
   */
  export type ProductFavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many ProductFavorites.
     */
    data: ProductFavoriteCreateManyInput | ProductFavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductFavorite update
   */
  export type ProductFavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductFavorite.
     */
    data: XOR<ProductFavoriteUpdateInput, ProductFavoriteUncheckedUpdateInput>
    /**
     * Choose, which ProductFavorite to update.
     */
    where: ProductFavoriteWhereUniqueInput
  }

  /**
   * ProductFavorite updateMany
   */
  export type ProductFavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductFavorites.
     */
    data: XOR<ProductFavoriteUpdateManyMutationInput, ProductFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which ProductFavorites to update
     */
    where?: ProductFavoriteWhereInput
    /**
     * Limit how many ProductFavorites to update.
     */
    limit?: number
  }

  /**
   * ProductFavorite updateManyAndReturn
   */
  export type ProductFavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * The data used to update ProductFavorites.
     */
    data: XOR<ProductFavoriteUpdateManyMutationInput, ProductFavoriteUncheckedUpdateManyInput>
    /**
     * Filter which ProductFavorites to update
     */
    where?: ProductFavoriteWhereInput
    /**
     * Limit how many ProductFavorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductFavorite upsert
   */
  export type ProductFavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductFavorite to update in case it exists.
     */
    where: ProductFavoriteWhereUniqueInput
    /**
     * In case the ProductFavorite found by the `where` argument doesn't exist, create a new ProductFavorite with this data.
     */
    create: XOR<ProductFavoriteCreateInput, ProductFavoriteUncheckedCreateInput>
    /**
     * In case the ProductFavorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductFavoriteUpdateInput, ProductFavoriteUncheckedUpdateInput>
  }

  /**
   * ProductFavorite delete
   */
  export type ProductFavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
    /**
     * Filter which ProductFavorite to delete.
     */
    where: ProductFavoriteWhereUniqueInput
  }

  /**
   * ProductFavorite deleteMany
   */
  export type ProductFavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductFavorites to delete
     */
    where?: ProductFavoriteWhereInput
    /**
     * Limit how many ProductFavorites to delete.
     */
    limit?: number
  }

  /**
   * ProductFavorite without action
   */
  export type ProductFavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductFavorite
     */
    select?: ProductFavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductFavorite
     */
    omit?: ProductFavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductFavoriteInclude<ExtArgs> | null
  }


  /**
   * Model Ai_Queries
   */

  export type AggregateAi_Queries = {
    _count: Ai_QueriesCountAggregateOutputType | null
    _min: Ai_QueriesMinAggregateOutputType | null
    _max: Ai_QueriesMaxAggregateOutputType | null
  }

  export type Ai_QueriesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    query: string | null
    response: string | null
    createdAt: Date | null
  }

  export type Ai_QueriesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    query: string | null
    response: string | null
    createdAt: Date | null
  }

  export type Ai_QueriesCountAggregateOutputType = {
    id: number
    userId: number
    query: number
    response: number
    createdAt: number
    _all: number
  }


  export type Ai_QueriesMinAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    response?: true
    createdAt?: true
  }

  export type Ai_QueriesMaxAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    response?: true
    createdAt?: true
  }

  export type Ai_QueriesCountAggregateInputType = {
    id?: true
    userId?: true
    query?: true
    response?: true
    createdAt?: true
    _all?: true
  }

  export type Ai_QueriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ai_Queries to aggregate.
     */
    where?: Ai_QueriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ai_Queries to fetch.
     */
    orderBy?: Ai_QueriesOrderByWithRelationInput | Ai_QueriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Ai_QueriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ai_Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ai_Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ai_Queries
    **/
    _count?: true | Ai_QueriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ai_QueriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ai_QueriesMaxAggregateInputType
  }

  export type GetAi_QueriesAggregateType<T extends Ai_QueriesAggregateArgs> = {
        [P in keyof T & keyof AggregateAi_Queries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAi_Queries[P]>
      : GetScalarType<T[P], AggregateAi_Queries[P]>
  }




  export type Ai_QueriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Ai_QueriesWhereInput
    orderBy?: Ai_QueriesOrderByWithAggregationInput | Ai_QueriesOrderByWithAggregationInput[]
    by: Ai_QueriesScalarFieldEnum[] | Ai_QueriesScalarFieldEnum
    having?: Ai_QueriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ai_QueriesCountAggregateInputType | true
    _min?: Ai_QueriesMinAggregateInputType
    _max?: Ai_QueriesMaxAggregateInputType
  }

  export type Ai_QueriesGroupByOutputType = {
    id: string
    userId: string
    query: string
    response: string
    createdAt: Date
    _count: Ai_QueriesCountAggregateOutputType | null
    _min: Ai_QueriesMinAggregateOutputType | null
    _max: Ai_QueriesMaxAggregateOutputType | null
  }

  type GetAi_QueriesGroupByPayload<T extends Ai_QueriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ai_QueriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ai_QueriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ai_QueriesGroupByOutputType[P]>
            : GetScalarType<T[P], Ai_QueriesGroupByOutputType[P]>
        }
      >
    >


  export type Ai_QueriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    response?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_Queries"]>

  export type Ai_QueriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    response?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_Queries"]>

  export type Ai_QueriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    query?: boolean
    response?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ai_Queries"]>

  export type Ai_QueriesSelectScalar = {
    id?: boolean
    userId?: boolean
    query?: boolean
    response?: boolean
    createdAt?: boolean
  }

  export type Ai_QueriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "query" | "response" | "createdAt", ExtArgs["result"]["ai_Queries"]>
  export type Ai_QueriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Ai_QueriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Ai_QueriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Ai_QueriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ai_Queries"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      query: string
      response: string
      createdAt: Date
    }, ExtArgs["result"]["ai_Queries"]>
    composites: {}
  }

  type Ai_QueriesGetPayload<S extends boolean | null | undefined | Ai_QueriesDefaultArgs> = $Result.GetResult<Prisma.$Ai_QueriesPayload, S>

  type Ai_QueriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Ai_QueriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ai_QueriesCountAggregateInputType | true
    }

  export interface Ai_QueriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ai_Queries'], meta: { name: 'Ai_Queries' } }
    /**
     * Find zero or one Ai_Queries that matches the filter.
     * @param {Ai_QueriesFindUniqueArgs} args - Arguments to find a Ai_Queries
     * @example
     * // Get one Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Ai_QueriesFindUniqueArgs>(args: SelectSubset<T, Ai_QueriesFindUniqueArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Ai_Queries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Ai_QueriesFindUniqueOrThrowArgs} args - Arguments to find a Ai_Queries
     * @example
     * // Get one Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Ai_QueriesFindUniqueOrThrowArgs>(args: SelectSubset<T, Ai_QueriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Ai_Queries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesFindFirstArgs} args - Arguments to find a Ai_Queries
     * @example
     * // Get one Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Ai_QueriesFindFirstArgs>(args?: SelectSubset<T, Ai_QueriesFindFirstArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Ai_Queries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesFindFirstOrThrowArgs} args - Arguments to find a Ai_Queries
     * @example
     * // Get one Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Ai_QueriesFindFirstOrThrowArgs>(args?: SelectSubset<T, Ai_QueriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Ai_Queries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.findMany()
     * 
     * // Get first 10 Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ai_QueriesWithIdOnly = await prisma.ai_Queries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Ai_QueriesFindManyArgs>(args?: SelectSubset<T, Ai_QueriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Ai_Queries.
     * @param {Ai_QueriesCreateArgs} args - Arguments to create a Ai_Queries.
     * @example
     * // Create one Ai_Queries
     * const Ai_Queries = await prisma.ai_Queries.create({
     *   data: {
     *     // ... data to create a Ai_Queries
     *   }
     * })
     * 
     */
    create<T extends Ai_QueriesCreateArgs>(args: SelectSubset<T, Ai_QueriesCreateArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Ai_Queries.
     * @param {Ai_QueriesCreateManyArgs} args - Arguments to create many Ai_Queries.
     * @example
     * // Create many Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Ai_QueriesCreateManyArgs>(args?: SelectSubset<T, Ai_QueriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ai_Queries and returns the data saved in the database.
     * @param {Ai_QueriesCreateManyAndReturnArgs} args - Arguments to create many Ai_Queries.
     * @example
     * // Create many Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ai_Queries and only return the `id`
     * const ai_QueriesWithIdOnly = await prisma.ai_Queries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Ai_QueriesCreateManyAndReturnArgs>(args?: SelectSubset<T, Ai_QueriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Ai_Queries.
     * @param {Ai_QueriesDeleteArgs} args - Arguments to delete one Ai_Queries.
     * @example
     * // Delete one Ai_Queries
     * const Ai_Queries = await prisma.ai_Queries.delete({
     *   where: {
     *     // ... filter to delete one Ai_Queries
     *   }
     * })
     * 
     */
    delete<T extends Ai_QueriesDeleteArgs>(args: SelectSubset<T, Ai_QueriesDeleteArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Ai_Queries.
     * @param {Ai_QueriesUpdateArgs} args - Arguments to update one Ai_Queries.
     * @example
     * // Update one Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Ai_QueriesUpdateArgs>(args: SelectSubset<T, Ai_QueriesUpdateArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Ai_Queries.
     * @param {Ai_QueriesDeleteManyArgs} args - Arguments to filter Ai_Queries to delete.
     * @example
     * // Delete a few Ai_Queries
     * const { count } = await prisma.ai_Queries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Ai_QueriesDeleteManyArgs>(args?: SelectSubset<T, Ai_QueriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Ai_QueriesUpdateManyArgs>(args: SelectSubset<T, Ai_QueriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ai_Queries and returns the data updated in the database.
     * @param {Ai_QueriesUpdateManyAndReturnArgs} args - Arguments to update many Ai_Queries.
     * @example
     * // Update many Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ai_Queries and only return the `id`
     * const ai_QueriesWithIdOnly = await prisma.ai_Queries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Ai_QueriesUpdateManyAndReturnArgs>(args: SelectSubset<T, Ai_QueriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Ai_Queries.
     * @param {Ai_QueriesUpsertArgs} args - Arguments to update or create a Ai_Queries.
     * @example
     * // Update or create a Ai_Queries
     * const ai_Queries = await prisma.ai_Queries.upsert({
     *   create: {
     *     // ... data to create a Ai_Queries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ai_Queries we want to update
     *   }
     * })
     */
    upsert<T extends Ai_QueriesUpsertArgs>(args: SelectSubset<T, Ai_QueriesUpsertArgs<ExtArgs>>): Prisma__Ai_QueriesClient<$Result.GetResult<Prisma.$Ai_QueriesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Ai_Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesCountArgs} args - Arguments to filter Ai_Queries to count.
     * @example
     * // Count the number of Ai_Queries
     * const count = await prisma.ai_Queries.count({
     *   where: {
     *     // ... the filter for the Ai_Queries we want to count
     *   }
     * })
    **/
    count<T extends Ai_QueriesCountArgs>(
      args?: Subset<T, Ai_QueriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ai_QueriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ai_Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ai_QueriesAggregateArgs>(args: Subset<T, Ai_QueriesAggregateArgs>): Prisma.PrismaPromise<GetAi_QueriesAggregateType<T>>

    /**
     * Group by Ai_Queries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ai_QueriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Ai_QueriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Ai_QueriesGroupByArgs['orderBy'] }
        : { orderBy?: Ai_QueriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Ai_QueriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAi_QueriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ai_Queries model
   */
  readonly fields: Ai_QueriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ai_Queries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Ai_QueriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ai_Queries model
   */ 
  interface Ai_QueriesFieldRefs {
    readonly id: FieldRef<"Ai_Queries", 'String'>
    readonly userId: FieldRef<"Ai_Queries", 'String'>
    readonly query: FieldRef<"Ai_Queries", 'String'>
    readonly response: FieldRef<"Ai_Queries", 'String'>
    readonly createdAt: FieldRef<"Ai_Queries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ai_Queries findUnique
   */
  export type Ai_QueriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * Filter, which Ai_Queries to fetch.
     */
    where: Ai_QueriesWhereUniqueInput
  }

  /**
   * Ai_Queries findUniqueOrThrow
   */
  export type Ai_QueriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * Filter, which Ai_Queries to fetch.
     */
    where: Ai_QueriesWhereUniqueInput
  }

  /**
   * Ai_Queries findFirst
   */
  export type Ai_QueriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * Filter, which Ai_Queries to fetch.
     */
    where?: Ai_QueriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ai_Queries to fetch.
     */
    orderBy?: Ai_QueriesOrderByWithRelationInput | Ai_QueriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ai_Queries.
     */
    cursor?: Ai_QueriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ai_Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ai_Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ai_Queries.
     */
    distinct?: Ai_QueriesScalarFieldEnum | Ai_QueriesScalarFieldEnum[]
  }

  /**
   * Ai_Queries findFirstOrThrow
   */
  export type Ai_QueriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * Filter, which Ai_Queries to fetch.
     */
    where?: Ai_QueriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ai_Queries to fetch.
     */
    orderBy?: Ai_QueriesOrderByWithRelationInput | Ai_QueriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ai_Queries.
     */
    cursor?: Ai_QueriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ai_Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ai_Queries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ai_Queries.
     */
    distinct?: Ai_QueriesScalarFieldEnum | Ai_QueriesScalarFieldEnum[]
  }

  /**
   * Ai_Queries findMany
   */
  export type Ai_QueriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * Filter, which Ai_Queries to fetch.
     */
    where?: Ai_QueriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ai_Queries to fetch.
     */
    orderBy?: Ai_QueriesOrderByWithRelationInput | Ai_QueriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ai_Queries.
     */
    cursor?: Ai_QueriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ai_Queries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ai_Queries.
     */
    skip?: number
    distinct?: Ai_QueriesScalarFieldEnum | Ai_QueriesScalarFieldEnum[]
  }

  /**
   * Ai_Queries create
   */
  export type Ai_QueriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Ai_Queries.
     */
    data: XOR<Ai_QueriesCreateInput, Ai_QueriesUncheckedCreateInput>
  }

  /**
   * Ai_Queries createMany
   */
  export type Ai_QueriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ai_Queries.
     */
    data: Ai_QueriesCreateManyInput | Ai_QueriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ai_Queries createManyAndReturn
   */
  export type Ai_QueriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * The data used to create many Ai_Queries.
     */
    data: Ai_QueriesCreateManyInput | Ai_QueriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ai_Queries update
   */
  export type Ai_QueriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Ai_Queries.
     */
    data: XOR<Ai_QueriesUpdateInput, Ai_QueriesUncheckedUpdateInput>
    /**
     * Choose, which Ai_Queries to update.
     */
    where: Ai_QueriesWhereUniqueInput
  }

  /**
   * Ai_Queries updateMany
   */
  export type Ai_QueriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ai_Queries.
     */
    data: XOR<Ai_QueriesUpdateManyMutationInput, Ai_QueriesUncheckedUpdateManyInput>
    /**
     * Filter which Ai_Queries to update
     */
    where?: Ai_QueriesWhereInput
    /**
     * Limit how many Ai_Queries to update.
     */
    limit?: number
  }

  /**
   * Ai_Queries updateManyAndReturn
   */
  export type Ai_QueriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * The data used to update Ai_Queries.
     */
    data: XOR<Ai_QueriesUpdateManyMutationInput, Ai_QueriesUncheckedUpdateManyInput>
    /**
     * Filter which Ai_Queries to update
     */
    where?: Ai_QueriesWhereInput
    /**
     * Limit how many Ai_Queries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ai_Queries upsert
   */
  export type Ai_QueriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Ai_Queries to update in case it exists.
     */
    where: Ai_QueriesWhereUniqueInput
    /**
     * In case the Ai_Queries found by the `where` argument doesn't exist, create a new Ai_Queries with this data.
     */
    create: XOR<Ai_QueriesCreateInput, Ai_QueriesUncheckedCreateInput>
    /**
     * In case the Ai_Queries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Ai_QueriesUpdateInput, Ai_QueriesUncheckedUpdateInput>
  }

  /**
   * Ai_Queries delete
   */
  export type Ai_QueriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
    /**
     * Filter which Ai_Queries to delete.
     */
    where: Ai_QueriesWhereUniqueInput
  }

  /**
   * Ai_Queries deleteMany
   */
  export type Ai_QueriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ai_Queries to delete
     */
    where?: Ai_QueriesWhereInput
    /**
     * Limit how many Ai_Queries to delete.
     */
    limit?: number
  }

  /**
   * Ai_Queries without action
   */
  export type Ai_QueriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ai_Queries
     */
    select?: Ai_QueriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ai_Queries
     */
    omit?: Ai_QueriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Ai_QueriesInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    is_read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    message: string | null
    is_read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    is_read: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationsMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    is_read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    is_read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    is_read?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: string
    userId: string
    message: string
    is_read: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    is_read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    is_read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    is_read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    is_read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "is_read" | "createdAt" | "updatedAt", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      message: string
      is_read: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */ 
  interface NotificationsFieldRefs {
    readonly id: FieldRef<"Notifications", 'String'>
    readonly userId: FieldRef<"Notifications", 'String'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly is_read: FieldRef<"Notifications", 'Boolean'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
    readonly updatedAt: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model tokens
   */

  export type AggregateTokens = {
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  export type TokensMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    createdAt: Date | null
  }

  export type TokensMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    createdAt: Date | null
  }

  export type TokensCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    _all: number
  }


  export type TokensMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
  }

  export type TokensMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
  }

  export type TokensCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type TokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to aggregate.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tokens
    **/
    _count?: true | TokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokensMaxAggregateInputType
  }

  export type GetTokensAggregateType<T extends TokensAggregateArgs> = {
        [P in keyof T & keyof AggregateTokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokens[P]>
      : GetScalarType<T[P], AggregateTokens[P]>
  }




  export type tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tokensWhereInput
    orderBy?: tokensOrderByWithAggregationInput | tokensOrderByWithAggregationInput[]
    by: TokensScalarFieldEnum[] | TokensScalarFieldEnum
    having?: tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokensCountAggregateInputType | true
    _min?: TokensMinAggregateInputType
    _max?: TokensMaxAggregateInputType
  }

  export type TokensGroupByOutputType = {
    id: string
    userId: string
    token: string
    createdAt: Date
    _count: TokensCountAggregateOutputType | null
    _min: TokensMinAggregateOutputType | null
    _max: TokensMaxAggregateOutputType | null
  }

  type GetTokensGroupByPayload<T extends tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokensGroupByOutputType[P]>
            : GetScalarType<T[P], TokensGroupByOutputType[P]>
        }
      >
    >


  export type tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokens"]>

  export type tokensSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
  }

  export type tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "createdAt", ExtArgs["result"]["tokens"]>
  export type tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tokens"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      createdAt: Date
    }, ExtArgs["result"]["tokens"]>
    composites: {}
  }

  type tokensGetPayload<S extends boolean | null | undefined | tokensDefaultArgs> = $Result.GetResult<Prisma.$tokensPayload, S>

  type tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokensCountAggregateInputType | true
    }

  export interface tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tokens'], meta: { name: 'tokens' } }
    /**
     * Find zero or one Tokens that matches the filter.
     * @param {tokensFindUniqueArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tokensFindUniqueArgs>(args: SelectSubset<T, tokensFindUniqueArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tokensFindUniqueOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tokensFindFirstArgs>(args?: SelectSubset<T, tokensFindFirstArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindFirstOrThrowArgs} args - Arguments to find a Tokens
     * @example
     * // Get one Tokens
     * const tokens = await prisma.tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.tokens.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokensWithIdOnly = await prisma.tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tokensFindManyArgs>(args?: SelectSubset<T, tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Tokens.
     * @param {tokensCreateArgs} args - Arguments to create a Tokens.
     * @example
     * // Create one Tokens
     * const Tokens = await prisma.tokens.create({
     *   data: {
     *     // ... data to create a Tokens
     *   }
     * })
     * 
     */
    create<T extends tokensCreateArgs>(args: SelectSubset<T, tokensCreateArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Tokens.
     * @param {tokensCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tokensCreateManyArgs>(args?: SelectSubset<T, tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {tokensCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const tokens = await prisma.tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Tokens.
     * @param {tokensDeleteArgs} args - Arguments to delete one Tokens.
     * @example
     * // Delete one Tokens
     * const Tokens = await prisma.tokens.delete({
     *   where: {
     *     // ... filter to delete one Tokens
     *   }
     * })
     * 
     */
    delete<T extends tokensDeleteArgs>(args: SelectSubset<T, tokensDeleteArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Tokens.
     * @param {tokensUpdateArgs} args - Arguments to update one Tokens.
     * @example
     * // Update one Tokens
     * const tokens = await prisma.tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tokensUpdateArgs>(args: SelectSubset<T, tokensUpdateArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Tokens.
     * @param {tokensDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tokensDeleteManyArgs>(args?: SelectSubset<T, tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tokensUpdateManyArgs>(args: SelectSubset<T, tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {tokensUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const tokens = await prisma.tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokensWithIdOnly = await prisma.tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Tokens.
     * @param {tokensUpsertArgs} args - Arguments to update or create a Tokens.
     * @example
     * // Update or create a Tokens
     * const tokens = await prisma.tokens.upsert({
     *   create: {
     *     // ... data to create a Tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tokens we want to update
     *   }
     * })
     */
    upsert<T extends tokensUpsertArgs>(args: SelectSubset<T, tokensUpsertArgs<ExtArgs>>): Prisma__tokensClient<$Result.GetResult<Prisma.$tokensPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.tokens.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends tokensCountArgs>(
      args?: Subset<T, tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokensAggregateArgs>(args: Subset<T, TokensAggregateArgs>): Prisma.PrismaPromise<GetTokensAggregateType<T>>

    /**
     * Group by Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tokensGroupByArgs['orderBy'] }
        : { orderBy?: tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tokens model
   */
  readonly fields: tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tokens model
   */ 
  interface tokensFieldRefs {
    readonly id: FieldRef<"tokens", 'String'>
    readonly userId: FieldRef<"tokens", 'String'>
    readonly token: FieldRef<"tokens", 'String'>
    readonly createdAt: FieldRef<"tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tokens findUnique
   */
  export type tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findUniqueOrThrow
   */
  export type tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens findFirst
   */
  export type tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens findFirstOrThrow
   */
  export type tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tokens.
     */
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens findMany
   */
  export type tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter, which tokens to fetch.
     */
    where?: tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tokens to fetch.
     */
    orderBy?: tokensOrderByWithRelationInput | tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tokens.
     */
    cursor?: tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tokens.
     */
    skip?: number
    distinct?: TokensScalarFieldEnum | TokensScalarFieldEnum[]
  }

  /**
   * tokens create
   */
  export type tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a tokens.
     */
    data: XOR<tokensCreateInput, tokensUncheckedCreateInput>
  }

  /**
   * tokens createMany
   */
  export type tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tokens.
     */
    data: tokensCreateManyInput | tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tokens createManyAndReturn
   */
  export type tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * The data used to create many tokens.
     */
    data: tokensCreateManyInput | tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tokens update
   */
  export type tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a tokens.
     */
    data: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
    /**
     * Choose, which tokens to update.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens updateMany
   */
  export type tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
  }

  /**
   * tokens updateManyAndReturn
   */
  export type tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * The data used to update tokens.
     */
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyInput>
    /**
     * Filter which tokens to update
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tokens upsert
   */
  export type tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the tokens to update in case it exists.
     */
    where: tokensWhereUniqueInput
    /**
     * In case the tokens found by the `where` argument doesn't exist, create a new tokens with this data.
     */
    create: XOR<tokensCreateInput, tokensUncheckedCreateInput>
    /**
     * In case the tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tokensUpdateInput, tokensUncheckedUpdateInput>
  }

  /**
   * tokens delete
   */
  export type tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
    /**
     * Filter which tokens to delete.
     */
    where: tokensWhereUniqueInput
  }

  /**
   * tokens deleteMany
   */
  export type tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tokens to delete
     */
    where?: tokensWhereInput
    /**
     * Limit how many tokens to delete.
     */
    limit?: number
  }

  /**
   * tokens without action
   */
  export type tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tokens
     */
    select?: tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tokens
     */
    omit?: tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tokensInclude<ExtArgs> | null
  }


  /**
   * Model Clientes
   */

  export type AggregateClientes = {
    _count: ClientesCountAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  export type ClientesMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type ClientesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
  }

  export type ClientesCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    _all: number
  }


  export type ClientesMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type ClientesMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
  }

  export type ClientesCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type ClientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to aggregate.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientesMaxAggregateInputType
  }

  export type GetClientesAggregateType<T extends ClientesAggregateArgs> = {
        [P in keyof T & keyof AggregateClientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientes[P]>
      : GetScalarType<T[P], AggregateClientes[P]>
  }




  export type ClientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientesWhereInput
    orderBy?: ClientesOrderByWithAggregationInput | ClientesOrderByWithAggregationInput[]
    by: ClientesScalarFieldEnum[] | ClientesScalarFieldEnum
    having?: ClientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientesCountAggregateInputType | true
    _min?: ClientesMinAggregateInputType
    _max?: ClientesMaxAggregateInputType
  }

  export type ClientesGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    address: string
    createdAt: Date
    _count: ClientesCountAggregateOutputType | null
    _min: ClientesMinAggregateOutputType | null
    _max: ClientesMaxAggregateOutputType | null
  }

  type GetClientesGroupByPayload<T extends ClientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientesGroupByOutputType[P]>
            : GetScalarType<T[P], ClientesGroupByOutputType[P]>
        }
      >
    >


  export type ClientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    pedidos?: boolean | Clientes$pedidosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientes"]>

  export type ClientesSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type ClientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "createdAt", ExtArgs["result"]["clientes"]>
  export type ClientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Clientes$pedidosArgs<ExtArgs>
    _count?: boolean | ClientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clientes"
    objects: {
      pedidos: Prisma.$FacturaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      address: string
      createdAt: Date
    }, ExtArgs["result"]["clientes"]>
    composites: {}
  }

  type ClientesGetPayload<S extends boolean | null | undefined | ClientesDefaultArgs> = $Result.GetResult<Prisma.$ClientesPayload, S>

  type ClientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientesCountAggregateInputType | true
    }

  export interface ClientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clientes'], meta: { name: 'Clientes' } }
    /**
     * Find zero or one Clientes that matches the filter.
     * @param {ClientesFindUniqueArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientesFindUniqueArgs>(args: SelectSubset<T, ClientesFindUniqueArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientesFindUniqueOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientesFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientesFindFirstArgs>(args?: SelectSubset<T, ClientesFindFirstArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindFirstOrThrowArgs} args - Arguments to find a Clientes
     * @example
     * // Get one Clientes
     * const clientes = await prisma.clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientesFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.clientes.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.clientes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientesWithIdOnly = await prisma.clientes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientesFindManyArgs>(args?: SelectSubset<T, ClientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Clientes.
     * @param {ClientesCreateArgs} args - Arguments to create a Clientes.
     * @example
     * // Create one Clientes
     * const Clientes = await prisma.clientes.create({
     *   data: {
     *     // ... data to create a Clientes
     *   }
     * })
     * 
     */
    create<T extends ClientesCreateArgs>(args: SelectSubset<T, ClientesCreateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clientes.
     * @param {ClientesCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientesCreateManyArgs>(args?: SelectSubset<T, ClientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClientesCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const clientes = await prisma.clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientesCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Clientes.
     * @param {ClientesDeleteArgs} args - Arguments to delete one Clientes.
     * @example
     * // Delete one Clientes
     * const Clientes = await prisma.clientes.delete({
     *   where: {
     *     // ... filter to delete one Clientes
     *   }
     * })
     * 
     */
    delete<T extends ClientesDeleteArgs>(args: SelectSubset<T, ClientesDeleteArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Clientes.
     * @param {ClientesUpdateArgs} args - Arguments to update one Clientes.
     * @example
     * // Update one Clientes
     * const clientes = await prisma.clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientesUpdateArgs>(args: SelectSubset<T, ClientesUpdateArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClientesDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientesDeleteManyArgs>(args?: SelectSubset<T, ClientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientesUpdateManyArgs>(args: SelectSubset<T, ClientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClientesUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const clientes = await prisma.clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clientesWithIdOnly = await prisma.clientes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientesUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Clientes.
     * @param {ClientesUpsertArgs} args - Arguments to update or create a Clientes.
     * @example
     * // Update or create a Clientes
     * const clientes = await prisma.clientes.upsert({
     *   create: {
     *     // ... data to create a Clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clientes we want to update
     *   }
     * })
     */
    upsert<T extends ClientesUpsertArgs>(args: SelectSubset<T, ClientesUpsertArgs<ExtArgs>>): Prisma__ClientesClient<$Result.GetResult<Prisma.$ClientesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.clientes.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClientesCountArgs>(
      args?: Subset<T, ClientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientesAggregateArgs>(args: Subset<T, ClientesAggregateArgs>): Prisma.PrismaPromise<GetClientesAggregateType<T>>

    /**
     * Group by Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientesGroupByArgs['orderBy'] }
        : { orderBy?: ClientesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clientes model
   */
  readonly fields: ClientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Clientes$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Clientes$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacturaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clientes model
   */ 
  interface ClientesFieldRefs {
    readonly id: FieldRef<"Clientes", 'String'>
    readonly name: FieldRef<"Clientes", 'String'>
    readonly email: FieldRef<"Clientes", 'String'>
    readonly phone: FieldRef<"Clientes", 'String'>
    readonly address: FieldRef<"Clientes", 'String'>
    readonly createdAt: FieldRef<"Clientes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Clientes findUnique
   */
  export type ClientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findUniqueOrThrow
   */
  export type ClientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes findFirst
   */
  export type ClientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findFirstOrThrow
   */
  export type ClientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes findMany
   */
  export type ClientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClientesOrderByWithRelationInput | ClientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClientesScalarFieldEnum | ClientesScalarFieldEnum[]
  }

  /**
   * Clientes create
   */
  export type ClientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to create a Clientes.
     */
    data: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
  }

  /**
   * Clientes createMany
   */
  export type ClientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes createManyAndReturn
   */
  export type ClientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClientesCreateManyInput | ClientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clientes update
   */
  export type ClientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The data needed to update a Clientes.
     */
    data: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
    /**
     * Choose, which Clientes to update.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes updateMany
   */
  export type ClientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes updateManyAndReturn
   */
  export type ClientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClientesUpdateManyMutationInput, ClientesUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Clientes upsert
   */
  export type ClientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * The filter to search for the Clientes to update in case it exists.
     */
    where: ClientesWhereUniqueInput
    /**
     * In case the Clientes found by the `where` argument doesn't exist, create a new Clientes with this data.
     */
    create: XOR<ClientesCreateInput, ClientesUncheckedCreateInput>
    /**
     * In case the Clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientesUpdateInput, ClientesUncheckedUpdateInput>
  }

  /**
   * Clientes delete
   */
  export type ClientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
    /**
     * Filter which Clientes to delete.
     */
    where: ClientesWhereUniqueInput
  }

  /**
   * Clientes deleteMany
   */
  export type ClientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClientesWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Clientes.pedidos
   */
  export type Clientes$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factura
     */
    select?: FacturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factura
     */
    omit?: FacturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacturaInclude<ExtArgs> | null
    where?: FacturaWhereInput
    orderBy?: FacturaOrderByWithRelationInput | FacturaOrderByWithRelationInput[]
    cursor?: FacturaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacturaScalarFieldEnum | FacturaScalarFieldEnum[]
  }

  /**
   * Clientes without action
   */
  export type ClientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clientes
     */
    select?: ClientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clientes
     */
    omit?: ClientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientesInclude<ExtArgs> | null
  }


  /**
   * Model StockHistory
   */

  export type AggregateStockHistory = {
    _count: StockHistoryCountAggregateOutputType | null
    _avg: StockHistoryAvgAggregateOutputType | null
    _sum: StockHistorySumAggregateOutputType | null
    _min: StockHistoryMinAggregateOutputType | null
    _max: StockHistoryMaxAggregateOutputType | null
  }

  export type StockHistoryAvgAggregateOutputType = {
    cantidad: number | null
  }

  export type StockHistorySumAggregateOutputType = {
    cantidad: number | null
  }

  export type StockHistoryMinAggregateOutputType = {
    id: string | null
    productoId: string | null
    cantidad: number | null
    motivo: string | null
    createdAt: Date | null
  }

  export type StockHistoryMaxAggregateOutputType = {
    id: string | null
    productoId: string | null
    cantidad: number | null
    motivo: string | null
    createdAt: Date | null
  }

  export type StockHistoryCountAggregateOutputType = {
    id: number
    productoId: number
    cantidad: number
    motivo: number
    createdAt: number
    _all: number
  }


  export type StockHistoryAvgAggregateInputType = {
    cantidad?: true
  }

  export type StockHistorySumAggregateInputType = {
    cantidad?: true
  }

  export type StockHistoryMinAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    motivo?: true
    createdAt?: true
  }

  export type StockHistoryMaxAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    motivo?: true
    createdAt?: true
  }

  export type StockHistoryCountAggregateInputType = {
    id?: true
    productoId?: true
    cantidad?: true
    motivo?: true
    createdAt?: true
    _all?: true
  }

  export type StockHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockHistory to aggregate.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockHistories
    **/
    _count?: true | StockHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockHistoryMaxAggregateInputType
  }

  export type GetStockHistoryAggregateType<T extends StockHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStockHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockHistory[P]>
      : GetScalarType<T[P], AggregateStockHistory[P]>
  }




  export type StockHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockHistoryWhereInput
    orderBy?: StockHistoryOrderByWithAggregationInput | StockHistoryOrderByWithAggregationInput[]
    by: StockHistoryScalarFieldEnum[] | StockHistoryScalarFieldEnum
    having?: StockHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockHistoryCountAggregateInputType | true
    _avg?: StockHistoryAvgAggregateInputType
    _sum?: StockHistorySumAggregateInputType
    _min?: StockHistoryMinAggregateInputType
    _max?: StockHistoryMaxAggregateInputType
  }

  export type StockHistoryGroupByOutputType = {
    id: string
    productoId: string
    cantidad: number
    motivo: string | null
    createdAt: Date
    _count: StockHistoryCountAggregateOutputType | null
    _avg: StockHistoryAvgAggregateOutputType | null
    _sum: StockHistorySumAggregateOutputType | null
    _min: StockHistoryMinAggregateOutputType | null
    _max: StockHistoryMaxAggregateOutputType | null
  }

  type GetStockHistoryGroupByPayload<T extends StockHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StockHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StockHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockHistory"]>

  export type StockHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockHistory"]>

  export type StockHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockHistory"]>

  export type StockHistorySelectScalar = {
    id?: boolean
    productoId?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
  }

  export type StockHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productoId" | "cantidad" | "motivo" | "createdAt", ExtArgs["result"]["stockHistory"]>
  export type StockHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type StockHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }
  export type StockHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producto?: boolean | ProductosDefaultArgs<ExtArgs>
  }

  export type $StockHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockHistory"
    objects: {
      producto: Prisma.$ProductosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productoId: string
      cantidad: number
      motivo: string | null
      createdAt: Date
    }, ExtArgs["result"]["stockHistory"]>
    composites: {}
  }

  type StockHistoryGetPayload<S extends boolean | null | undefined | StockHistoryDefaultArgs> = $Result.GetResult<Prisma.$StockHistoryPayload, S>

  type StockHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockHistoryCountAggregateInputType | true
    }

  export interface StockHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockHistory'], meta: { name: 'StockHistory' } }
    /**
     * Find zero or one StockHistory that matches the filter.
     * @param {StockHistoryFindUniqueArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockHistoryFindUniqueArgs>(args: SelectSubset<T, StockHistoryFindUniqueArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one StockHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockHistoryFindUniqueOrThrowArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StockHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first StockHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryFindFirstArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockHistoryFindFirstArgs>(args?: SelectSubset<T, StockHistoryFindFirstArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first StockHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryFindFirstOrThrowArgs} args - Arguments to find a StockHistory
     * @example
     * // Get one StockHistory
     * const stockHistory = await prisma.stockHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StockHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more StockHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockHistories
     * const stockHistories = await prisma.stockHistory.findMany()
     * 
     * // Get first 10 StockHistories
     * const stockHistories = await prisma.stockHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockHistoryWithIdOnly = await prisma.stockHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockHistoryFindManyArgs>(args?: SelectSubset<T, StockHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a StockHistory.
     * @param {StockHistoryCreateArgs} args - Arguments to create a StockHistory.
     * @example
     * // Create one StockHistory
     * const StockHistory = await prisma.stockHistory.create({
     *   data: {
     *     // ... data to create a StockHistory
     *   }
     * })
     * 
     */
    create<T extends StockHistoryCreateArgs>(args: SelectSubset<T, StockHistoryCreateArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many StockHistories.
     * @param {StockHistoryCreateManyArgs} args - Arguments to create many StockHistories.
     * @example
     * // Create many StockHistories
     * const stockHistory = await prisma.stockHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockHistoryCreateManyArgs>(args?: SelectSubset<T, StockHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockHistories and returns the data saved in the database.
     * @param {StockHistoryCreateManyAndReturnArgs} args - Arguments to create many StockHistories.
     * @example
     * // Create many StockHistories
     * const stockHistory = await prisma.stockHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockHistories and only return the `id`
     * const stockHistoryWithIdOnly = await prisma.stockHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StockHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a StockHistory.
     * @param {StockHistoryDeleteArgs} args - Arguments to delete one StockHistory.
     * @example
     * // Delete one StockHistory
     * const StockHistory = await prisma.stockHistory.delete({
     *   where: {
     *     // ... filter to delete one StockHistory
     *   }
     * })
     * 
     */
    delete<T extends StockHistoryDeleteArgs>(args: SelectSubset<T, StockHistoryDeleteArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one StockHistory.
     * @param {StockHistoryUpdateArgs} args - Arguments to update one StockHistory.
     * @example
     * // Update one StockHistory
     * const stockHistory = await prisma.stockHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockHistoryUpdateArgs>(args: SelectSubset<T, StockHistoryUpdateArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more StockHistories.
     * @param {StockHistoryDeleteManyArgs} args - Arguments to filter StockHistories to delete.
     * @example
     * // Delete a few StockHistories
     * const { count } = await prisma.stockHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockHistoryDeleteManyArgs>(args?: SelectSubset<T, StockHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockHistories
     * const stockHistory = await prisma.stockHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockHistoryUpdateManyArgs>(args: SelectSubset<T, StockHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockHistories and returns the data updated in the database.
     * @param {StockHistoryUpdateManyAndReturnArgs} args - Arguments to update many StockHistories.
     * @example
     * // Update many StockHistories
     * const stockHistory = await prisma.stockHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockHistories and only return the `id`
     * const stockHistoryWithIdOnly = await prisma.stockHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StockHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one StockHistory.
     * @param {StockHistoryUpsertArgs} args - Arguments to update or create a StockHistory.
     * @example
     * // Update or create a StockHistory
     * const stockHistory = await prisma.stockHistory.upsert({
     *   create: {
     *     // ... data to create a StockHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockHistory we want to update
     *   }
     * })
     */
    upsert<T extends StockHistoryUpsertArgs>(args: SelectSubset<T, StockHistoryUpsertArgs<ExtArgs>>): Prisma__StockHistoryClient<$Result.GetResult<Prisma.$StockHistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of StockHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryCountArgs} args - Arguments to filter StockHistories to count.
     * @example
     * // Count the number of StockHistories
     * const count = await prisma.stockHistory.count({
     *   where: {
     *     // ... the filter for the StockHistories we want to count
     *   }
     * })
    **/
    count<T extends StockHistoryCountArgs>(
      args?: Subset<T, StockHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockHistoryAggregateArgs>(args: Subset<T, StockHistoryAggregateArgs>): Prisma.PrismaPromise<GetStockHistoryAggregateType<T>>

    /**
     * Group by StockHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StockHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockHistory model
   */
  readonly fields: StockHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producto<T extends ProductosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductosDefaultArgs<ExtArgs>>): Prisma__ProductosClient<$Result.GetResult<Prisma.$ProductosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockHistory model
   */ 
  interface StockHistoryFieldRefs {
    readonly id: FieldRef<"StockHistory", 'String'>
    readonly productoId: FieldRef<"StockHistory", 'String'>
    readonly cantidad: FieldRef<"StockHistory", 'Int'>
    readonly motivo: FieldRef<"StockHistory", 'String'>
    readonly createdAt: FieldRef<"StockHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StockHistory findUnique
   */
  export type StockHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory findUniqueOrThrow
   */
  export type StockHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory findFirst
   */
  export type StockHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockHistories.
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockHistories.
     */
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * StockHistory findFirstOrThrow
   */
  export type StockHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistory to fetch.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockHistories.
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockHistories.
     */
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * StockHistory findMany
   */
  export type StockHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StockHistories to fetch.
     */
    where?: StockHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockHistories to fetch.
     */
    orderBy?: StockHistoryOrderByWithRelationInput | StockHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockHistories.
     */
    cursor?: StockHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockHistories.
     */
    skip?: number
    distinct?: StockHistoryScalarFieldEnum | StockHistoryScalarFieldEnum[]
  }

  /**
   * StockHistory create
   */
  export type StockHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StockHistory.
     */
    data: XOR<StockHistoryCreateInput, StockHistoryUncheckedCreateInput>
  }

  /**
   * StockHistory createMany
   */
  export type StockHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockHistories.
     */
    data: StockHistoryCreateManyInput | StockHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockHistory createManyAndReturn
   */
  export type StockHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many StockHistories.
     */
    data: StockHistoryCreateManyInput | StockHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockHistory update
   */
  export type StockHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StockHistory.
     */
    data: XOR<StockHistoryUpdateInput, StockHistoryUncheckedUpdateInput>
    /**
     * Choose, which StockHistory to update.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory updateMany
   */
  export type StockHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockHistories.
     */
    data: XOR<StockHistoryUpdateManyMutationInput, StockHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StockHistories to update
     */
    where?: StockHistoryWhereInput
    /**
     * Limit how many StockHistories to update.
     */
    limit?: number
  }

  /**
   * StockHistory updateManyAndReturn
   */
  export type StockHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * The data used to update StockHistories.
     */
    data: XOR<StockHistoryUpdateManyMutationInput, StockHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StockHistories to update
     */
    where?: StockHistoryWhereInput
    /**
     * Limit how many StockHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockHistory upsert
   */
  export type StockHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StockHistory to update in case it exists.
     */
    where: StockHistoryWhereUniqueInput
    /**
     * In case the StockHistory found by the `where` argument doesn't exist, create a new StockHistory with this data.
     */
    create: XOR<StockHistoryCreateInput, StockHistoryUncheckedCreateInput>
    /**
     * In case the StockHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockHistoryUpdateInput, StockHistoryUncheckedUpdateInput>
  }

  /**
   * StockHistory delete
   */
  export type StockHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
    /**
     * Filter which StockHistory to delete.
     */
    where: StockHistoryWhereUniqueInput
  }

  /**
   * StockHistory deleteMany
   */
  export type StockHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockHistories to delete
     */
    where?: StockHistoryWhereInput
    /**
     * Limit how many StockHistories to delete.
     */
    limit?: number
  }

  /**
   * StockHistory without action
   */
  export type StockHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockHistory
     */
    select?: StockHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockHistory
     */
    omit?: StockHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesMinAggregateOutputType = {
    id: string | null
    name: $Enums.Role | null
  }

  export type RolesMaxAggregateOutputType = {
    id: string | null
    name: $Enums.Role | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: string
    name: $Enums.Role
    _count: RolesCountAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["roles"]>
  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.Role
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolesFindUniqueArgs>(args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolesFindFirstArgs>(args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolesFindManyArgs>(args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends RolesCreateArgs>(args: SelectSubset<T, RolesCreateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Roles.
     * @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolesCreateManyArgs>(args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends RolesDeleteArgs>(args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolesUpdateArgs>(args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolesDeleteManyArgs>(args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolesUpdateManyArgs>(args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends RolesUpsertArgs>(args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, Roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles model
   */ 
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'String'>
    readonly name: FieldRef<"Roles", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data?: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }

  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles createManyAndReturn
   */
  export type RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles updateManyAndReturn
   */
  export type RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }

  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }

  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Roles.users
   */
  export type Roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles
     */
    omit?: RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolesInclude<ExtArgs> | null
  }


  /**
   * Model ProfitSummary
   */

  export type AggregateProfitSummary = {
    _count: ProfitSummaryCountAggregateOutputType | null
    _avg: ProfitSummaryAvgAggregateOutputType | null
    _sum: ProfitSummarySumAggregateOutputType | null
    _min: ProfitSummaryMinAggregateOutputType | null
    _max: ProfitSummaryMaxAggregateOutputType | null
  }

  export type ProfitSummaryAvgAggregateOutputType = {
    ganancia_total: number | null
  }

  export type ProfitSummarySumAggregateOutputType = {
    ganancia_total: number | null
  }

  export type ProfitSummaryMinAggregateOutputType = {
    id: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    ganancia_total: number | null
    tipo_periodo: string | null
    createdAt: Date | null
  }

  export type ProfitSummaryMaxAggregateOutputType = {
    id: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    ganancia_total: number | null
    tipo_periodo: string | null
    createdAt: Date | null
  }

  export type ProfitSummaryCountAggregateOutputType = {
    id: number
    fecha_inicio: number
    fecha_fin: number
    ganancia_total: number
    tipo_periodo: number
    createdAt: number
    _all: number
  }


  export type ProfitSummaryAvgAggregateInputType = {
    ganancia_total?: true
  }

  export type ProfitSummarySumAggregateInputType = {
    ganancia_total?: true
  }

  export type ProfitSummaryMinAggregateInputType = {
    id?: true
    fecha_inicio?: true
    fecha_fin?: true
    ganancia_total?: true
    tipo_periodo?: true
    createdAt?: true
  }

  export type ProfitSummaryMaxAggregateInputType = {
    id?: true
    fecha_inicio?: true
    fecha_fin?: true
    ganancia_total?: true
    tipo_periodo?: true
    createdAt?: true
  }

  export type ProfitSummaryCountAggregateInputType = {
    id?: true
    fecha_inicio?: true
    fecha_fin?: true
    ganancia_total?: true
    tipo_periodo?: true
    createdAt?: true
    _all?: true
  }

  export type ProfitSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitSummary to aggregate.
     */
    where?: ProfitSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitSummaries to fetch.
     */
    orderBy?: ProfitSummaryOrderByWithRelationInput | ProfitSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfitSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfitSummaries
    **/
    _count?: true | ProfitSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfitSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfitSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfitSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfitSummaryMaxAggregateInputType
  }

  export type GetProfitSummaryAggregateType<T extends ProfitSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateProfitSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfitSummary[P]>
      : GetScalarType<T[P], AggregateProfitSummary[P]>
  }




  export type ProfitSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfitSummaryWhereInput
    orderBy?: ProfitSummaryOrderByWithAggregationInput | ProfitSummaryOrderByWithAggregationInput[]
    by: ProfitSummaryScalarFieldEnum[] | ProfitSummaryScalarFieldEnum
    having?: ProfitSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfitSummaryCountAggregateInputType | true
    _avg?: ProfitSummaryAvgAggregateInputType
    _sum?: ProfitSummarySumAggregateInputType
    _min?: ProfitSummaryMinAggregateInputType
    _max?: ProfitSummaryMaxAggregateInputType
  }

  export type ProfitSummaryGroupByOutputType = {
    id: string
    fecha_inicio: Date
    fecha_fin: Date
    ganancia_total: number
    tipo_periodo: string
    createdAt: Date
    _count: ProfitSummaryCountAggregateOutputType | null
    _avg: ProfitSummaryAvgAggregateOutputType | null
    _sum: ProfitSummarySumAggregateOutputType | null
    _min: ProfitSummaryMinAggregateOutputType | null
    _max: ProfitSummaryMaxAggregateOutputType | null
  }

  type GetProfitSummaryGroupByPayload<T extends ProfitSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfitSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfitSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfitSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], ProfitSummaryGroupByOutputType[P]>
        }
      >
    >


  export type ProfitSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    ganancia_total?: boolean
    tipo_periodo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profitSummary"]>

  export type ProfitSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    ganancia_total?: boolean
    tipo_periodo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profitSummary"]>

  export type ProfitSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    ganancia_total?: boolean
    tipo_periodo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["profitSummary"]>

  export type ProfitSummarySelectScalar = {
    id?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    ganancia_total?: boolean
    tipo_periodo?: boolean
    createdAt?: boolean
  }

  export type ProfitSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fecha_inicio" | "fecha_fin" | "ganancia_total" | "tipo_periodo" | "createdAt", ExtArgs["result"]["profitSummary"]>

  export type $ProfitSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfitSummary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha_inicio: Date
      fecha_fin: Date
      ganancia_total: number
      tipo_periodo: string
      createdAt: Date
    }, ExtArgs["result"]["profitSummary"]>
    composites: {}
  }

  type ProfitSummaryGetPayload<S extends boolean | null | undefined | ProfitSummaryDefaultArgs> = $Result.GetResult<Prisma.$ProfitSummaryPayload, S>

  type ProfitSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfitSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfitSummaryCountAggregateInputType | true
    }

  export interface ProfitSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfitSummary'], meta: { name: 'ProfitSummary' } }
    /**
     * Find zero or one ProfitSummary that matches the filter.
     * @param {ProfitSummaryFindUniqueArgs} args - Arguments to find a ProfitSummary
     * @example
     * // Get one ProfitSummary
     * const profitSummary = await prisma.profitSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfitSummaryFindUniqueArgs>(args: SelectSubset<T, ProfitSummaryFindUniqueArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProfitSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfitSummaryFindUniqueOrThrowArgs} args - Arguments to find a ProfitSummary
     * @example
     * // Get one ProfitSummary
     * const profitSummary = await prisma.profitSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfitSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfitSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProfitSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryFindFirstArgs} args - Arguments to find a ProfitSummary
     * @example
     * // Get one ProfitSummary
     * const profitSummary = await prisma.profitSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfitSummaryFindFirstArgs>(args?: SelectSubset<T, ProfitSummaryFindFirstArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProfitSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryFindFirstOrThrowArgs} args - Arguments to find a ProfitSummary
     * @example
     * // Get one ProfitSummary
     * const profitSummary = await prisma.profitSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfitSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfitSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProfitSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfitSummaries
     * const profitSummaries = await prisma.profitSummary.findMany()
     * 
     * // Get first 10 ProfitSummaries
     * const profitSummaries = await prisma.profitSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profitSummaryWithIdOnly = await prisma.profitSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfitSummaryFindManyArgs>(args?: SelectSubset<T, ProfitSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProfitSummary.
     * @param {ProfitSummaryCreateArgs} args - Arguments to create a ProfitSummary.
     * @example
     * // Create one ProfitSummary
     * const ProfitSummary = await prisma.profitSummary.create({
     *   data: {
     *     // ... data to create a ProfitSummary
     *   }
     * })
     * 
     */
    create<T extends ProfitSummaryCreateArgs>(args: SelectSubset<T, ProfitSummaryCreateArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProfitSummaries.
     * @param {ProfitSummaryCreateManyArgs} args - Arguments to create many ProfitSummaries.
     * @example
     * // Create many ProfitSummaries
     * const profitSummary = await prisma.profitSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfitSummaryCreateManyArgs>(args?: SelectSubset<T, ProfitSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfitSummaries and returns the data saved in the database.
     * @param {ProfitSummaryCreateManyAndReturnArgs} args - Arguments to create many ProfitSummaries.
     * @example
     * // Create many ProfitSummaries
     * const profitSummary = await prisma.profitSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfitSummaries and only return the `id`
     * const profitSummaryWithIdOnly = await prisma.profitSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfitSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfitSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProfitSummary.
     * @param {ProfitSummaryDeleteArgs} args - Arguments to delete one ProfitSummary.
     * @example
     * // Delete one ProfitSummary
     * const ProfitSummary = await prisma.profitSummary.delete({
     *   where: {
     *     // ... filter to delete one ProfitSummary
     *   }
     * })
     * 
     */
    delete<T extends ProfitSummaryDeleteArgs>(args: SelectSubset<T, ProfitSummaryDeleteArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProfitSummary.
     * @param {ProfitSummaryUpdateArgs} args - Arguments to update one ProfitSummary.
     * @example
     * // Update one ProfitSummary
     * const profitSummary = await prisma.profitSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfitSummaryUpdateArgs>(args: SelectSubset<T, ProfitSummaryUpdateArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProfitSummaries.
     * @param {ProfitSummaryDeleteManyArgs} args - Arguments to filter ProfitSummaries to delete.
     * @example
     * // Delete a few ProfitSummaries
     * const { count } = await prisma.profitSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfitSummaryDeleteManyArgs>(args?: SelectSubset<T, ProfitSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfitSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfitSummaries
     * const profitSummary = await prisma.profitSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfitSummaryUpdateManyArgs>(args: SelectSubset<T, ProfitSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfitSummaries and returns the data updated in the database.
     * @param {ProfitSummaryUpdateManyAndReturnArgs} args - Arguments to update many ProfitSummaries.
     * @example
     * // Update many ProfitSummaries
     * const profitSummary = await prisma.profitSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfitSummaries and only return the `id`
     * const profitSummaryWithIdOnly = await prisma.profitSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfitSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfitSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProfitSummary.
     * @param {ProfitSummaryUpsertArgs} args - Arguments to update or create a ProfitSummary.
     * @example
     * // Update or create a ProfitSummary
     * const profitSummary = await prisma.profitSummary.upsert({
     *   create: {
     *     // ... data to create a ProfitSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfitSummary we want to update
     *   }
     * })
     */
    upsert<T extends ProfitSummaryUpsertArgs>(args: SelectSubset<T, ProfitSummaryUpsertArgs<ExtArgs>>): Prisma__ProfitSummaryClient<$Result.GetResult<Prisma.$ProfitSummaryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProfitSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryCountArgs} args - Arguments to filter ProfitSummaries to count.
     * @example
     * // Count the number of ProfitSummaries
     * const count = await prisma.profitSummary.count({
     *   where: {
     *     // ... the filter for the ProfitSummaries we want to count
     *   }
     * })
    **/
    count<T extends ProfitSummaryCountArgs>(
      args?: Subset<T, ProfitSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfitSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfitSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfitSummaryAggregateArgs>(args: Subset<T, ProfitSummaryAggregateArgs>): Prisma.PrismaPromise<GetProfitSummaryAggregateType<T>>

    /**
     * Group by ProfitSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfitSummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfitSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfitSummaryGroupByArgs['orderBy'] }
        : { orderBy?: ProfitSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfitSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfitSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfitSummary model
   */
  readonly fields: ProfitSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfitSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfitSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProfitSummary model
   */ 
  interface ProfitSummaryFieldRefs {
    readonly id: FieldRef<"ProfitSummary", 'String'>
    readonly fecha_inicio: FieldRef<"ProfitSummary", 'DateTime'>
    readonly fecha_fin: FieldRef<"ProfitSummary", 'DateTime'>
    readonly ganancia_total: FieldRef<"ProfitSummary", 'Float'>
    readonly tipo_periodo: FieldRef<"ProfitSummary", 'String'>
    readonly createdAt: FieldRef<"ProfitSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfitSummary findUnique
   */
  export type ProfitSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * Filter, which ProfitSummary to fetch.
     */
    where: ProfitSummaryWhereUniqueInput
  }

  /**
   * ProfitSummary findUniqueOrThrow
   */
  export type ProfitSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * Filter, which ProfitSummary to fetch.
     */
    where: ProfitSummaryWhereUniqueInput
  }

  /**
   * ProfitSummary findFirst
   */
  export type ProfitSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * Filter, which ProfitSummary to fetch.
     */
    where?: ProfitSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitSummaries to fetch.
     */
    orderBy?: ProfitSummaryOrderByWithRelationInput | ProfitSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitSummaries.
     */
    cursor?: ProfitSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitSummaries.
     */
    distinct?: ProfitSummaryScalarFieldEnum | ProfitSummaryScalarFieldEnum[]
  }

  /**
   * ProfitSummary findFirstOrThrow
   */
  export type ProfitSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * Filter, which ProfitSummary to fetch.
     */
    where?: ProfitSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitSummaries to fetch.
     */
    orderBy?: ProfitSummaryOrderByWithRelationInput | ProfitSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfitSummaries.
     */
    cursor?: ProfitSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfitSummaries.
     */
    distinct?: ProfitSummaryScalarFieldEnum | ProfitSummaryScalarFieldEnum[]
  }

  /**
   * ProfitSummary findMany
   */
  export type ProfitSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * Filter, which ProfitSummaries to fetch.
     */
    where?: ProfitSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfitSummaries to fetch.
     */
    orderBy?: ProfitSummaryOrderByWithRelationInput | ProfitSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfitSummaries.
     */
    cursor?: ProfitSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfitSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfitSummaries.
     */
    skip?: number
    distinct?: ProfitSummaryScalarFieldEnum | ProfitSummaryScalarFieldEnum[]
  }

  /**
   * ProfitSummary create
   */
  export type ProfitSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * The data needed to create a ProfitSummary.
     */
    data: XOR<ProfitSummaryCreateInput, ProfitSummaryUncheckedCreateInput>
  }

  /**
   * ProfitSummary createMany
   */
  export type ProfitSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfitSummaries.
     */
    data: ProfitSummaryCreateManyInput | ProfitSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfitSummary createManyAndReturn
   */
  export type ProfitSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many ProfitSummaries.
     */
    data: ProfitSummaryCreateManyInput | ProfitSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfitSummary update
   */
  export type ProfitSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * The data needed to update a ProfitSummary.
     */
    data: XOR<ProfitSummaryUpdateInput, ProfitSummaryUncheckedUpdateInput>
    /**
     * Choose, which ProfitSummary to update.
     */
    where: ProfitSummaryWhereUniqueInput
  }

  /**
   * ProfitSummary updateMany
   */
  export type ProfitSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfitSummaries.
     */
    data: XOR<ProfitSummaryUpdateManyMutationInput, ProfitSummaryUncheckedUpdateManyInput>
    /**
     * Filter which ProfitSummaries to update
     */
    where?: ProfitSummaryWhereInput
    /**
     * Limit how many ProfitSummaries to update.
     */
    limit?: number
  }

  /**
   * ProfitSummary updateManyAndReturn
   */
  export type ProfitSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * The data used to update ProfitSummaries.
     */
    data: XOR<ProfitSummaryUpdateManyMutationInput, ProfitSummaryUncheckedUpdateManyInput>
    /**
     * Filter which ProfitSummaries to update
     */
    where?: ProfitSummaryWhereInput
    /**
     * Limit how many ProfitSummaries to update.
     */
    limit?: number
  }

  /**
   * ProfitSummary upsert
   */
  export type ProfitSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * The filter to search for the ProfitSummary to update in case it exists.
     */
    where: ProfitSummaryWhereUniqueInput
    /**
     * In case the ProfitSummary found by the `where` argument doesn't exist, create a new ProfitSummary with this data.
     */
    create: XOR<ProfitSummaryCreateInput, ProfitSummaryUncheckedCreateInput>
    /**
     * In case the ProfitSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfitSummaryUpdateInput, ProfitSummaryUncheckedUpdateInput>
  }

  /**
   * ProfitSummary delete
   */
  export type ProfitSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
    /**
     * Filter which ProfitSummary to delete.
     */
    where: ProfitSummaryWhereUniqueInput
  }

  /**
   * ProfitSummary deleteMany
   */
  export type ProfitSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfitSummaries to delete
     */
    where?: ProfitSummaryWhereInput
    /**
     * Limit how many ProfitSummaries to delete.
     */
    limit?: number
  }

  /**
   * ProfitSummary without action
   */
  export type ProfitSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfitSummary
     */
    select?: ProfitSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfitSummary
     */
    omit?: ProfitSummaryOmit<ExtArgs> | null
  }


  /**
   * Model EmailLog
   */

  export type AggregateEmailLog = {
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  export type EmailLogMinAggregateOutputType = {
    id: string | null
    facturaId: string | null
    status: $Enums.StatusEmail | null
  }

  export type EmailLogMaxAggregateOutputType = {
    id: string | null
    facturaId: string | null
    status: $Enums.StatusEmail | null
  }

  export type EmailLogCountAggregateOutputType = {
    id: number
    facturaId: number
    status: number
    _all: number
  }


  export type EmailLogMinAggregateInputType = {
    id?: true
    facturaId?: true
    status?: true
  }

  export type EmailLogMaxAggregateInputType = {
    id?: true
    facturaId?: true
    status?: true
  }

  export type EmailLogCountAggregateInputType = {
    id?: true
    facturaId?: true
    status?: true
    _all?: true
  }

  export type EmailLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLog to aggregate.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLogs
    **/
    _count?: true | EmailLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailLogMaxAggregateInputType
  }

  export type GetEmailLogAggregateType<T extends EmailLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailLog[P]>
      : GetScalarType<T[P], AggregateEmailLog[P]>
  }




  export type EmailLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithAggregationInput | EmailLogOrderByWithAggregationInput[]
    by: EmailLogScalarFieldEnum[] | EmailLogScalarFieldEnum
    having?: EmailLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailLogCountAggregateInputType | true
    _min?: EmailLogMinAggregateInputType
    _max?: EmailLogMaxAggregateInputType
  }

  export type EmailLogGroupByOutputType = {
    id: string
    facturaId: string
    status: $Enums.StatusEmail
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  type GetEmailLogGroupByPayload<T extends EmailLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
            : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
        }
      >
    >


  export type EmailLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    status?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    status?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    facturaId?: boolean
    status?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectScalar = {
    id?: boolean
    facturaId?: boolean
    status?: boolean
  }

  export type EmailLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "facturaId" | "status", ExtArgs["result"]["emailLog"]>

  export type $EmailLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      facturaId: string
      status: $Enums.StatusEmail
    }, ExtArgs["result"]["emailLog"]>
    composites: {}
  }

  type EmailLogGetPayload<S extends boolean | null | undefined | EmailLogDefaultArgs> = $Result.GetResult<Prisma.$EmailLogPayload, S>

  type EmailLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailLogCountAggregateInputType | true
    }

  export interface EmailLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailLog'], meta: { name: 'EmailLog' } }
    /**
     * Find zero or one EmailLog that matches the filter.
     * @param {EmailLogFindUniqueArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailLogFindUniqueArgs>(args: SelectSubset<T, EmailLogFindUniqueArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EmailLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailLogFindUniqueOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EmailLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailLogFindFirstArgs>(args?: SelectSubset<T, EmailLogFindFirstArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EmailLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EmailLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLogs
     * const emailLogs = await prisma.emailLog.findMany()
     * 
     * // Get first 10 EmailLogs
     * const emailLogs = await prisma.emailLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailLogFindManyArgs>(args?: SelectSubset<T, EmailLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EmailLog.
     * @param {EmailLogCreateArgs} args - Arguments to create a EmailLog.
     * @example
     * // Create one EmailLog
     * const EmailLog = await prisma.emailLog.create({
     *   data: {
     *     // ... data to create a EmailLog
     *   }
     * })
     * 
     */
    create<T extends EmailLogCreateArgs>(args: SelectSubset<T, EmailLogCreateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EmailLogs.
     * @param {EmailLogCreateManyArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailLogCreateManyArgs>(args?: SelectSubset<T, EmailLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLogs and returns the data saved in the database.
     * @param {EmailLogCreateManyAndReturnArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EmailLog.
     * @param {EmailLogDeleteArgs} args - Arguments to delete one EmailLog.
     * @example
     * // Delete one EmailLog
     * const EmailLog = await prisma.emailLog.delete({
     *   where: {
     *     // ... filter to delete one EmailLog
     *   }
     * })
     * 
     */
    delete<T extends EmailLogDeleteArgs>(args: SelectSubset<T, EmailLogDeleteArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EmailLog.
     * @param {EmailLogUpdateArgs} args - Arguments to update one EmailLog.
     * @example
     * // Update one EmailLog
     * const emailLog = await prisma.emailLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailLogUpdateArgs>(args: SelectSubset<T, EmailLogUpdateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EmailLogs.
     * @param {EmailLogDeleteManyArgs} args - Arguments to filter EmailLogs to delete.
     * @example
     * // Delete a few EmailLogs
     * const { count } = await prisma.emailLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailLogDeleteManyArgs>(args?: SelectSubset<T, EmailLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailLogUpdateManyArgs>(args: SelectSubset<T, EmailLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs and returns the data updated in the database.
     * @param {EmailLogUpdateManyAndReturnArgs} args - Arguments to update many EmailLogs.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EmailLog.
     * @param {EmailLogUpsertArgs} args - Arguments to update or create a EmailLog.
     * @example
     * // Update or create a EmailLog
     * const emailLog = await prisma.emailLog.upsert({
     *   create: {
     *     // ... data to create a EmailLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailLog we want to update
     *   }
     * })
     */
    upsert<T extends EmailLogUpsertArgs>(args: SelectSubset<T, EmailLogUpsertArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogCountArgs} args - Arguments to filter EmailLogs to count.
     * @example
     * // Count the number of EmailLogs
     * const count = await prisma.emailLog.count({
     *   where: {
     *     // ... the filter for the EmailLogs we want to count
     *   }
     * })
    **/
    count<T extends EmailLogCountArgs>(
      args?: Subset<T, EmailLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailLogAggregateArgs>(args: Subset<T, EmailLogAggregateArgs>): Prisma.PrismaPromise<GetEmailLogAggregateType<T>>

    /**
     * Group by EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailLogGroupByArgs['orderBy'] }
        : { orderBy?: EmailLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailLog model
   */
  readonly fields: EmailLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailLog model
   */ 
  interface EmailLogFieldRefs {
    readonly id: FieldRef<"EmailLog", 'String'>
    readonly facturaId: FieldRef<"EmailLog", 'String'>
    readonly status: FieldRef<"EmailLog", 'StatusEmail'>
  }
    

  // Custom InputTypes
  /**
   * EmailLog findUnique
   */
  export type EmailLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findUniqueOrThrow
   */
  export type EmailLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findFirst
   */
  export type EmailLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findFirstOrThrow
   */
  export type EmailLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findMany
   */
  export type EmailLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter, which EmailLogs to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog create
   */
  export type EmailLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailLog.
     */
    data: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
  }

  /**
   * EmailLog createMany
   */
  export type EmailLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog createManyAndReturn
   */
  export type EmailLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailLog update
   */
  export type EmailLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailLog.
     */
    data: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
    /**
     * Choose, which EmailLog to update.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog updateMany
   */
  export type EmailLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
  }

  /**
   * EmailLog updateManyAndReturn
   */
  export type EmailLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to update.
     */
    limit?: number
  }

  /**
   * EmailLog upsert
   */
  export type EmailLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailLog to update in case it exists.
     */
    where: EmailLogWhereUniqueInput
    /**
     * In case the EmailLog found by the `where` argument doesn't exist, create a new EmailLog with this data.
     */
    create: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
    /**
     * In case the EmailLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
  }

  /**
   * EmailLog delete
   */
  export type EmailLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
    /**
     * Filter which EmailLog to delete.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog deleteMany
   */
  export type EmailLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLogs to delete
     */
    where?: EmailLogWhereInput
    /**
     * Limit how many EmailLogs to delete.
     */
    limit?: number
  }

  /**
   * EmailLog without action
   */
  export type EmailLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailLog
     */
    omit?: EmailLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FacturaScalarFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    status: 'status',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum]


  export const Detalle_facturaScalarFieldEnum: {
    id: 'id',
    facturaId: 'facturaId',
    productoId: 'productoId',
    cantidad: 'cantidad',
    precio: 'precio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Detalle_facturaScalarFieldEnum = (typeof Detalle_facturaScalarFieldEnum)[keyof typeof Detalle_facturaScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio_compra: 'precio_compra',
    stock: 'stock',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductFavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductFavoriteScalarFieldEnum = (typeof ProductFavoriteScalarFieldEnum)[keyof typeof ProductFavoriteScalarFieldEnum]


  export const Ai_QueriesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    query: 'query',
    response: 'response',
    createdAt: 'createdAt'
  };

  export type Ai_QueriesScalarFieldEnum = (typeof Ai_QueriesScalarFieldEnum)[keyof typeof Ai_QueriesScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    is_read: 'is_read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const TokensScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type TokensScalarFieldEnum = (typeof TokensScalarFieldEnum)[keyof typeof TokensScalarFieldEnum]


  export const ClientesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type ClientesScalarFieldEnum = (typeof ClientesScalarFieldEnum)[keyof typeof ClientesScalarFieldEnum]


  export const StockHistoryScalarFieldEnum: {
    id: 'id',
    productoId: 'productoId',
    cantidad: 'cantidad',
    motivo: 'motivo',
    createdAt: 'createdAt'
  };

  export type StockHistoryScalarFieldEnum = (typeof StockHistoryScalarFieldEnum)[keyof typeof StockHistoryScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const ProfitSummaryScalarFieldEnum: {
    id: 'id',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    ganancia_total: 'ganancia_total',
    tipo_periodo: 'tipo_periodo',
    createdAt: 'createdAt'
  };

  export type ProfitSummaryScalarFieldEnum = (typeof ProfitSummaryScalarFieldEnum)[keyof typeof ProfitSummaryScalarFieldEnum]


  export const EmailLogScalarFieldEnum: {
    id: 'id',
    facturaId: 'facturaId',
    status: 'status'
  };

  export type EmailLogScalarFieldEnum = (typeof EmailLogScalarFieldEnum)[keyof typeof EmailLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusFactura'
   */
  export type EnumStatusFacturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusFactura'>
    


  /**
   * Reference to a field of type 'StatusFactura[]'
   */
  export type ListEnumStatusFacturaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusFactura[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'StatusEmail'
   */
  export type EnumStatusEmailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEmail'>
    


  /**
   * Reference to a field of type 'StatusEmail[]'
   */
  export type ListEnumStatusEmailFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusEmail[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    verified_at?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    token?: TokensListRelationFilter
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    favoritos?: ProductFavoriteListRelationFilter
    prompts?: Ai_QueriesListRelationFilter
    notifications?: NotificationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    is_verified?: SortOrder
    verified_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: tokensOrderByRelationAggregateInput
    role?: RolesOrderByWithRelationInput
    favoritos?: ProductFavoriteOrderByRelationAggregateInput
    prompts?: Ai_QueriesOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    verified_at?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    token?: TokensListRelationFilter
    role?: XOR<RolesScalarRelationFilter, RolesWhereInput>
    favoritos?: ProductFavoriteListRelationFilter
    prompts?: Ai_QueriesListRelationFilter
    notifications?: NotificationsListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    is_verified?: SortOrder
    verified_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringWithAggregatesFilter<"User"> | string
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    verified_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FacturaWhereInput = {
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    id?: StringFilter<"Factura"> | string
    clienteId?: StringFilter<"Factura"> | string
    status?: EnumStatusFacturaFilter<"Factura"> | $Enums.StatusFactura
    total?: FloatFilter<"Factura"> | number
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
    detalles?: Detalle_facturaListRelationFilter
  }

  export type FacturaOrderByWithRelationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClientesOrderByWithRelationInput
    detalles?: Detalle_facturaOrderByRelationAggregateInput
  }

  export type FacturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FacturaWhereInput | FacturaWhereInput[]
    OR?: FacturaWhereInput[]
    NOT?: FacturaWhereInput | FacturaWhereInput[]
    clienteId?: StringFilter<"Factura"> | string
    status?: EnumStatusFacturaFilter<"Factura"> | $Enums.StatusFactura
    total?: FloatFilter<"Factura"> | number
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
    cliente?: XOR<ClientesScalarRelationFilter, ClientesWhereInput>
    detalles?: Detalle_facturaListRelationFilter
  }, "id">

  export type FacturaOrderByWithAggregationInput = {
    id?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FacturaCountOrderByAggregateInput
    _avg?: FacturaAvgOrderByAggregateInput
    _max?: FacturaMaxOrderByAggregateInput
    _min?: FacturaMinOrderByAggregateInput
    _sum?: FacturaSumOrderByAggregateInput
  }

  export type FacturaScalarWhereWithAggregatesInput = {
    AND?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    OR?: FacturaScalarWhereWithAggregatesInput[]
    NOT?: FacturaScalarWhereWithAggregatesInput | FacturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Factura"> | string
    clienteId?: StringWithAggregatesFilter<"Factura"> | string
    status?: EnumStatusFacturaWithAggregatesFilter<"Factura"> | $Enums.StatusFactura
    total?: FloatWithAggregatesFilter<"Factura"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Factura"> | Date | string
  }

  export type Detalle_facturaWhereInput = {
    AND?: Detalle_facturaWhereInput | Detalle_facturaWhereInput[]
    OR?: Detalle_facturaWhereInput[]
    NOT?: Detalle_facturaWhereInput | Detalle_facturaWhereInput[]
    id?: StringFilter<"Detalle_factura"> | string
    facturaId?: StringFilter<"Detalle_factura"> | string
    productoId?: StringFilter<"Detalle_factura"> | string
    cantidad?: IntFilter<"Detalle_factura"> | number
    precio?: FloatFilter<"Detalle_factura"> | number
    createdAt?: DateTimeFilter<"Detalle_factura"> | Date | string
    updatedAt?: DateTimeFilter<"Detalle_factura"> | Date | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }

  export type Detalle_facturaOrderByWithRelationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    factura?: FacturaOrderByWithRelationInput
    producto?: ProductosOrderByWithRelationInput
  }

  export type Detalle_facturaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Detalle_facturaWhereInput | Detalle_facturaWhereInput[]
    OR?: Detalle_facturaWhereInput[]
    NOT?: Detalle_facturaWhereInput | Detalle_facturaWhereInput[]
    facturaId?: StringFilter<"Detalle_factura"> | string
    productoId?: StringFilter<"Detalle_factura"> | string
    cantidad?: IntFilter<"Detalle_factura"> | number
    precio?: FloatFilter<"Detalle_factura"> | number
    createdAt?: DateTimeFilter<"Detalle_factura"> | Date | string
    updatedAt?: DateTimeFilter<"Detalle_factura"> | Date | string
    factura?: XOR<FacturaScalarRelationFilter, FacturaWhereInput>
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }, "id">

  export type Detalle_facturaOrderByWithAggregationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Detalle_facturaCountOrderByAggregateInput
    _avg?: Detalle_facturaAvgOrderByAggregateInput
    _max?: Detalle_facturaMaxOrderByAggregateInput
    _min?: Detalle_facturaMinOrderByAggregateInput
    _sum?: Detalle_facturaSumOrderByAggregateInput
  }

  export type Detalle_facturaScalarWhereWithAggregatesInput = {
    AND?: Detalle_facturaScalarWhereWithAggregatesInput | Detalle_facturaScalarWhereWithAggregatesInput[]
    OR?: Detalle_facturaScalarWhereWithAggregatesInput[]
    NOT?: Detalle_facturaScalarWhereWithAggregatesInput | Detalle_facturaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Detalle_factura"> | string
    facturaId?: StringWithAggregatesFilter<"Detalle_factura"> | string
    productoId?: StringWithAggregatesFilter<"Detalle_factura"> | string
    cantidad?: IntWithAggregatesFilter<"Detalle_factura"> | number
    precio?: FloatWithAggregatesFilter<"Detalle_factura"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Detalle_factura"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Detalle_factura"> | Date | string
  }

  export type ProductosWhereInput = {
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    id?: StringFilter<"Productos"> | string
    nombre?: StringFilter<"Productos"> | string
    precio_compra?: FloatFilter<"Productos"> | number
    stock?: IntFilter<"Productos"> | number
    categoryId?: StringFilter<"Productos"> | string
    createdAt?: DateTimeFilter<"Productos"> | Date | string
    updatedAt?: DateTimeFilter<"Productos"> | Date | string
    productos_favoritos?: ProductFavoriteListRelationFilter
    detalles?: Detalle_facturaListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    stockHistory?: StockHistoryListRelationFilter
  }

  export type ProductosOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_compra?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productos_favoritos?: ProductFavoriteOrderByRelationAggregateInput
    detalles?: Detalle_facturaOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    stockHistory?: StockHistoryOrderByRelationAggregateInput
  }

  export type ProductosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductosWhereInput | ProductosWhereInput[]
    OR?: ProductosWhereInput[]
    NOT?: ProductosWhereInput | ProductosWhereInput[]
    nombre?: StringFilter<"Productos"> | string
    precio_compra?: FloatFilter<"Productos"> | number
    stock?: IntFilter<"Productos"> | number
    categoryId?: StringFilter<"Productos"> | string
    createdAt?: DateTimeFilter<"Productos"> | Date | string
    updatedAt?: DateTimeFilter<"Productos"> | Date | string
    productos_favoritos?: ProductFavoriteListRelationFilter
    detalles?: Detalle_facturaListRelationFilter
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    stockHistory?: StockHistoryListRelationFilter
  }, "id">

  export type ProductosOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_compra?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductosCountOrderByAggregateInput
    _avg?: ProductosAvgOrderByAggregateInput
    _max?: ProductosMaxOrderByAggregateInput
    _min?: ProductosMinOrderByAggregateInput
    _sum?: ProductosSumOrderByAggregateInput
  }

  export type ProductosScalarWhereWithAggregatesInput = {
    AND?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    OR?: ProductosScalarWhereWithAggregatesInput[]
    NOT?: ProductosScalarWhereWithAggregatesInput | ProductosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Productos"> | string
    nombre?: StringWithAggregatesFilter<"Productos"> | string
    precio_compra?: FloatWithAggregatesFilter<"Productos"> | number
    stock?: IntWithAggregatesFilter<"Productos"> | number
    categoryId?: StringWithAggregatesFilter<"Productos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Productos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Productos"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductosListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductosOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductosListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ProductFavoriteWhereInput = {
    AND?: ProductFavoriteWhereInput | ProductFavoriteWhereInput[]
    OR?: ProductFavoriteWhereInput[]
    NOT?: ProductFavoriteWhereInput | ProductFavoriteWhereInput[]
    id?: StringFilter<"ProductFavorite"> | string
    userId?: StringFilter<"ProductFavorite"> | string
    productId?: StringFilter<"ProductFavorite"> | string
    createdAt?: DateTimeFilter<"ProductFavorite"> | Date | string
    updatedAt?: DateTimeFilter<"ProductFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }

  export type ProductFavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductosOrderByWithRelationInput
  }

  export type ProductFavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductFavoriteWhereInput | ProductFavoriteWhereInput[]
    OR?: ProductFavoriteWhereInput[]
    NOT?: ProductFavoriteWhereInput | ProductFavoriteWhereInput[]
    userId?: StringFilter<"ProductFavorite"> | string
    productId?: StringFilter<"ProductFavorite"> | string
    createdAt?: DateTimeFilter<"ProductFavorite"> | Date | string
    updatedAt?: DateTimeFilter<"ProductFavorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }, "id">

  export type ProductFavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductFavoriteCountOrderByAggregateInput
    _max?: ProductFavoriteMaxOrderByAggregateInput
    _min?: ProductFavoriteMinOrderByAggregateInput
  }

  export type ProductFavoriteScalarWhereWithAggregatesInput = {
    AND?: ProductFavoriteScalarWhereWithAggregatesInput | ProductFavoriteScalarWhereWithAggregatesInput[]
    OR?: ProductFavoriteScalarWhereWithAggregatesInput[]
    NOT?: ProductFavoriteScalarWhereWithAggregatesInput | ProductFavoriteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductFavorite"> | string
    userId?: StringWithAggregatesFilter<"ProductFavorite"> | string
    productId?: StringWithAggregatesFilter<"ProductFavorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductFavorite"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductFavorite"> | Date | string
  }

  export type Ai_QueriesWhereInput = {
    AND?: Ai_QueriesWhereInput | Ai_QueriesWhereInput[]
    OR?: Ai_QueriesWhereInput[]
    NOT?: Ai_QueriesWhereInput | Ai_QueriesWhereInput[]
    id?: StringFilter<"Ai_Queries"> | string
    userId?: StringFilter<"Ai_Queries"> | string
    query?: StringFilter<"Ai_Queries"> | string
    response?: StringFilter<"Ai_Queries"> | string
    createdAt?: DateTimeFilter<"Ai_Queries"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Ai_QueriesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Ai_QueriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Ai_QueriesWhereInput | Ai_QueriesWhereInput[]
    OR?: Ai_QueriesWhereInput[]
    NOT?: Ai_QueriesWhereInput | Ai_QueriesWhereInput[]
    userId?: StringFilter<"Ai_Queries"> | string
    query?: StringFilter<"Ai_Queries"> | string
    response?: StringFilter<"Ai_Queries"> | string
    createdAt?: DateTimeFilter<"Ai_Queries"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Ai_QueriesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    _count?: Ai_QueriesCountOrderByAggregateInput
    _max?: Ai_QueriesMaxOrderByAggregateInput
    _min?: Ai_QueriesMinOrderByAggregateInput
  }

  export type Ai_QueriesScalarWhereWithAggregatesInput = {
    AND?: Ai_QueriesScalarWhereWithAggregatesInput | Ai_QueriesScalarWhereWithAggregatesInput[]
    OR?: Ai_QueriesScalarWhereWithAggregatesInput[]
    NOT?: Ai_QueriesScalarWhereWithAggregatesInput | Ai_QueriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ai_Queries"> | string
    userId?: StringWithAggregatesFilter<"Ai_Queries"> | string
    query?: StringWithAggregatesFilter<"Ai_Queries"> | string
    response?: StringWithAggregatesFilter<"Ai_Queries"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ai_Queries"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    id?: StringFilter<"Notifications"> | string
    userId?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    is_read?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    userId?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    is_read?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifications"> | string
    userId?: StringWithAggregatesFilter<"Notifications"> | string
    message?: StringWithAggregatesFilter<"Notifications"> | string
    is_read?: BoolWithAggregatesFilter<"Notifications"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type tokensWhereInput = {
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    id?: StringFilter<"tokens"> | string
    userId?: StringFilter<"tokens"> | string
    token?: StringFilter<"tokens"> | string
    createdAt?: DateTimeFilter<"tokens"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type tokensOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: tokensWhereInput | tokensWhereInput[]
    OR?: tokensWhereInput[]
    NOT?: tokensWhereInput | tokensWhereInput[]
    userId?: StringFilter<"tokens"> | string
    token?: StringFilter<"tokens"> | string
    createdAt?: DateTimeFilter<"tokens"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type tokensOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: tokensCountOrderByAggregateInput
    _max?: tokensMaxOrderByAggregateInput
    _min?: tokensMinOrderByAggregateInput
  }

  export type tokensScalarWhereWithAggregatesInput = {
    AND?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    OR?: tokensScalarWhereWithAggregatesInput[]
    NOT?: tokensScalarWhereWithAggregatesInput | tokensScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"tokens"> | string
    userId?: StringWithAggregatesFilter<"tokens"> | string
    token?: StringWithAggregatesFilter<"tokens"> | string
    createdAt?: DateTimeWithAggregatesFilter<"tokens"> | Date | string
  }

  export type ClientesWhereInput = {
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    id?: StringFilter<"Clientes"> | string
    name?: StringFilter<"Clientes"> | string
    email?: StringFilter<"Clientes"> | string
    phone?: StringFilter<"Clientes"> | string
    address?: StringFilter<"Clientes"> | string
    createdAt?: DateTimeFilter<"Clientes"> | Date | string
    pedidos?: FacturaListRelationFilter
  }

  export type ClientesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    pedidos?: FacturaOrderByRelationAggregateInput
  }

  export type ClientesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientesWhereInput | ClientesWhereInput[]
    OR?: ClientesWhereInput[]
    NOT?: ClientesWhereInput | ClientesWhereInput[]
    name?: StringFilter<"Clientes"> | string
    email?: StringFilter<"Clientes"> | string
    phone?: StringFilter<"Clientes"> | string
    address?: StringFilter<"Clientes"> | string
    createdAt?: DateTimeFilter<"Clientes"> | Date | string
    pedidos?: FacturaListRelationFilter
  }, "id">

  export type ClientesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    _count?: ClientesCountOrderByAggregateInput
    _max?: ClientesMaxOrderByAggregateInput
    _min?: ClientesMinOrderByAggregateInput
  }

  export type ClientesScalarWhereWithAggregatesInput = {
    AND?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    OR?: ClientesScalarWhereWithAggregatesInput[]
    NOT?: ClientesScalarWhereWithAggregatesInput | ClientesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clientes"> | string
    name?: StringWithAggregatesFilter<"Clientes"> | string
    email?: StringWithAggregatesFilter<"Clientes"> | string
    phone?: StringWithAggregatesFilter<"Clientes"> | string
    address?: StringWithAggregatesFilter<"Clientes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Clientes"> | Date | string
  }

  export type StockHistoryWhereInput = {
    AND?: StockHistoryWhereInput | StockHistoryWhereInput[]
    OR?: StockHistoryWhereInput[]
    NOT?: StockHistoryWhereInput | StockHistoryWhereInput[]
    id?: StringFilter<"StockHistory"> | string
    productoId?: StringFilter<"StockHistory"> | string
    cantidad?: IntFilter<"StockHistory"> | number
    motivo?: StringNullableFilter<"StockHistory"> | string | null
    createdAt?: DateTimeFilter<"StockHistory"> | Date | string
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }

  export type StockHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    producto?: ProductosOrderByWithRelationInput
  }

  export type StockHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockHistoryWhereInput | StockHistoryWhereInput[]
    OR?: StockHistoryWhereInput[]
    NOT?: StockHistoryWhereInput | StockHistoryWhereInput[]
    productoId?: StringFilter<"StockHistory"> | string
    cantidad?: IntFilter<"StockHistory"> | number
    motivo?: StringNullableFilter<"StockHistory"> | string | null
    createdAt?: DateTimeFilter<"StockHistory"> | Date | string
    producto?: XOR<ProductosScalarRelationFilter, ProductosWhereInput>
  }, "id">

  export type StockHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StockHistoryCountOrderByAggregateInput
    _avg?: StockHistoryAvgOrderByAggregateInput
    _max?: StockHistoryMaxOrderByAggregateInput
    _min?: StockHistoryMinOrderByAggregateInput
    _sum?: StockHistorySumOrderByAggregateInput
  }

  export type StockHistoryScalarWhereWithAggregatesInput = {
    AND?: StockHistoryScalarWhereWithAggregatesInput | StockHistoryScalarWhereWithAggregatesInput[]
    OR?: StockHistoryScalarWhereWithAggregatesInput[]
    NOT?: StockHistoryScalarWhereWithAggregatesInput | StockHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockHistory"> | string
    productoId?: StringWithAggregatesFilter<"StockHistory"> | string
    cantidad?: IntWithAggregatesFilter<"StockHistory"> | number
    motivo?: StringNullableWithAggregatesFilter<"StockHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StockHistory"> | Date | string
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: StringFilter<"Roles"> | string
    name?: EnumRoleFilter<"Roles"> | $Enums.Role
    users?: UserListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    name?: EnumRoleFilter<"Roles"> | $Enums.Role
    users?: UserListRelationFilter
  }, "id">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roles"> | string
    name?: EnumRoleWithAggregatesFilter<"Roles"> | $Enums.Role
  }

  export type ProfitSummaryWhereInput = {
    AND?: ProfitSummaryWhereInput | ProfitSummaryWhereInput[]
    OR?: ProfitSummaryWhereInput[]
    NOT?: ProfitSummaryWhereInput | ProfitSummaryWhereInput[]
    id?: StringFilter<"ProfitSummary"> | string
    fecha_inicio?: DateTimeFilter<"ProfitSummary"> | Date | string
    fecha_fin?: DateTimeFilter<"ProfitSummary"> | Date | string
    ganancia_total?: FloatFilter<"ProfitSummary"> | number
    tipo_periodo?: StringFilter<"ProfitSummary"> | string
    createdAt?: DateTimeFilter<"ProfitSummary"> | Date | string
  }

  export type ProfitSummaryOrderByWithRelationInput = {
    id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    ganancia_total?: SortOrder
    tipo_periodo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfitSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfitSummaryWhereInput | ProfitSummaryWhereInput[]
    OR?: ProfitSummaryWhereInput[]
    NOT?: ProfitSummaryWhereInput | ProfitSummaryWhereInput[]
    fecha_inicio?: DateTimeFilter<"ProfitSummary"> | Date | string
    fecha_fin?: DateTimeFilter<"ProfitSummary"> | Date | string
    ganancia_total?: FloatFilter<"ProfitSummary"> | number
    tipo_periodo?: StringFilter<"ProfitSummary"> | string
    createdAt?: DateTimeFilter<"ProfitSummary"> | Date | string
  }, "id">

  export type ProfitSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    ganancia_total?: SortOrder
    tipo_periodo?: SortOrder
    createdAt?: SortOrder
    _count?: ProfitSummaryCountOrderByAggregateInput
    _avg?: ProfitSummaryAvgOrderByAggregateInput
    _max?: ProfitSummaryMaxOrderByAggregateInput
    _min?: ProfitSummaryMinOrderByAggregateInput
    _sum?: ProfitSummarySumOrderByAggregateInput
  }

  export type ProfitSummaryScalarWhereWithAggregatesInput = {
    AND?: ProfitSummaryScalarWhereWithAggregatesInput | ProfitSummaryScalarWhereWithAggregatesInput[]
    OR?: ProfitSummaryScalarWhereWithAggregatesInput[]
    NOT?: ProfitSummaryScalarWhereWithAggregatesInput | ProfitSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfitSummary"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"ProfitSummary"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"ProfitSummary"> | Date | string
    ganancia_total?: FloatWithAggregatesFilter<"ProfitSummary"> | number
    tipo_periodo?: StringWithAggregatesFilter<"ProfitSummary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProfitSummary"> | Date | string
  }

  export type EmailLogWhereInput = {
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    id?: StringFilter<"EmailLog"> | string
    facturaId?: StringFilter<"EmailLog"> | string
    status?: EnumStatusEmailFilter<"EmailLog"> | $Enums.StatusEmail
  }

  export type EmailLogOrderByWithRelationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    status?: SortOrder
  }

  export type EmailLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    facturaId?: StringFilter<"EmailLog"> | string
    status?: EnumStatusEmailFilter<"EmailLog"> | $Enums.StatusEmail
  }, "id">

  export type EmailLogOrderByWithAggregationInput = {
    id?: SortOrder
    facturaId?: SortOrder
    status?: SortOrder
    _count?: EmailLogCountOrderByAggregateInput
    _max?: EmailLogMaxOrderByAggregateInput
    _min?: EmailLogMinOrderByAggregateInput
  }

  export type EmailLogScalarWhereWithAggregatesInput = {
    AND?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    OR?: EmailLogScalarWhereWithAggregatesInput[]
    NOT?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailLog"> | string
    facturaId?: StringWithAggregatesFilter<"EmailLog"> | string
    status?: EnumStatusEmailWithAggregatesFilter<"EmailLog"> | $Enums.StatusEmail
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensCreateNestedManyWithoutUserInput
    role: RolesCreateNestedOneWithoutUsersInput
    favoritos?: ProductFavoriteCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensUncheckedCreateNestedManyWithoutUserInput
    favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUpdateManyWithoutUserNestedInput
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    favoritos?: ProductFavoriteUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: ProductFavoriteUncheckedUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaCreateInput = {
    id?: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClientesCreateNestedOneWithoutPedidosInput
    detalles?: Detalle_facturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateInput = {
    id?: string
    clienteId: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalles?: Detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutPedidosNestedInput
    detalles?: Detalle_facturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: Detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaCreateManyInput = {
    id?: string
    clienteId: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaCreateInput = {
    id?: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
    factura: FacturaCreateNestedOneWithoutDetallesInput
    producto: ProductosCreateNestedOneWithoutDetallesInput
  }

  export type Detalle_facturaUncheckedCreateInput = {
    id?: string
    facturaId: string
    productoId: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Detalle_facturaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
    producto?: ProductosUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type Detalle_facturaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaCreateManyInput = {
    id?: string
    facturaId: string
    productoId: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Detalle_facturaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductosCreateInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteCreateNestedManyWithoutProductInput
    detalles?: Detalle_facturaCreateNestedManyWithoutProductoInput
    category: CategoryCreateNestedOneWithoutProductsInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutProductInput
    detalles?: Detalle_facturaUncheckedCreateNestedManyWithoutProductoInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUpdateManyWithoutProductNestedInput
    detalles?: Detalle_facturaUpdateManyWithoutProductoNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUncheckedUpdateManyWithoutProductNestedInput
    detalles?: Detalle_facturaUncheckedUpdateManyWithoutProductoNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductosCreateManyInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductosCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductosUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductosUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductosUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritosInput
    product: ProductosCreateNestedOneWithoutProductos_favoritosInput
  }

  export type ProductFavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductFavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritosNestedInput
    product?: ProductosUpdateOneRequiredWithoutProductos_favoritosNestedInput
  }

  export type ProductFavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteCreateManyInput = {
    id?: string
    userId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductFavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Ai_QueriesCreateInput = {
    id?: string
    query: string
    response: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
  }

  export type Ai_QueriesUncheckedCreateInput = {
    id?: string
    userId: string
    query: string
    response: string
    createdAt?: Date | string
  }

  export type Ai_QueriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type Ai_QueriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Ai_QueriesCreateManyInput = {
    id?: string
    userId: string
    query: string
    response: string
    createdAt?: Date | string
  }

  export type Ai_QueriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Ai_QueriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    id?: string
    message: string
    is_read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    id?: string
    userId: string
    message: string
    is_read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    id?: string
    userId: string
    message: string
    is_read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type tokensUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    createdAt?: Date | string
  }

  export type tokensUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type tokensUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensCreateManyInput = {
    id?: string
    userId: string
    token: string
    createdAt?: Date | string
  }

  export type tokensUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    pedidos?: FacturaCreateNestedManyWithoutClienteInput
  }

  export type ClientesUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
    pedidos?: FacturaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClientesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: FacturaUpdateManyWithoutClienteNestedInput
  }

  export type ClientesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: FacturaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClientesCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
  }

  export type ClientesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryCreateInput = {
    id?: string
    cantidad: number
    motivo?: string | null
    createdAt?: Date | string
    producto: ProductosCreateNestedOneWithoutStockHistoryInput
  }

  export type StockHistoryUncheckedCreateInput = {
    id?: string
    productoId: string
    cantidad: number
    motivo?: string | null
    createdAt?: Date | string
  }

  export type StockHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductosUpdateOneRequiredWithoutStockHistoryNestedInput
  }

  export type StockHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryCreateManyInput = {
    id?: string
    productoId: string
    cantidad: number
    motivo?: string | null
    createdAt?: Date | string
  }

  export type StockHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolesCreateInput = {
    id?: string
    name?: $Enums.Role
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: string
    name?: $Enums.Role
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: string
    name?: $Enums.Role
  }

  export type RolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProfitSummaryCreateInput = {
    id?: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    ganancia_total: number
    tipo_periodo: string
    createdAt?: Date | string
  }

  export type ProfitSummaryUncheckedCreateInput = {
    id?: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    ganancia_total: number
    tipo_periodo: string
    createdAt?: Date | string
  }

  export type ProfitSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    ganancia_total?: FloatFieldUpdateOperationsInput | number
    tipo_periodo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    ganancia_total?: FloatFieldUpdateOperationsInput | number
    tipo_periodo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitSummaryCreateManyInput = {
    id?: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    ganancia_total: number
    tipo_periodo: string
    createdAt?: Date | string
  }

  export type ProfitSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    ganancia_total?: FloatFieldUpdateOperationsInput | number
    tipo_periodo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfitSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    ganancia_total?: FloatFieldUpdateOperationsInput | number
    tipo_periodo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogCreateInput = {
    id?: string
    facturaId: string
    status: $Enums.StatusEmail
  }

  export type EmailLogUncheckedCreateInput = {
    id?: string
    facturaId: string
    status: $Enums.StatusEmail
  }

  export type EmailLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail
  }

  export type EmailLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail
  }

  export type EmailLogCreateManyInput = {
    id?: string
    facturaId: string
    status: $Enums.StatusEmail
  }

  export type EmailLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail
  }

  export type EmailLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusEmailFieldUpdateOperationsInput | $Enums.StatusEmail
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TokensListRelationFilter = {
    every?: tokensWhereInput
    some?: tokensWhereInput
    none?: tokensWhereInput
  }

  export type RolesScalarRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type ProductFavoriteListRelationFilter = {
    every?: ProductFavoriteWhereInput
    some?: ProductFavoriteWhereInput
    none?: ProductFavoriteWhereInput
  }

  export type Ai_QueriesListRelationFilter = {
    every?: Ai_QueriesWhereInput
    some?: Ai_QueriesWhereInput
    none?: Ai_QueriesWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductFavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Ai_QueriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    is_verified?: SortOrder
    verified_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    is_verified?: SortOrder
    verified_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    is_verified?: SortOrder
    verified_at?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusFacturaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFactura | EnumStatusFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFacturaFilter<$PrismaModel> | $Enums.StatusFactura
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ClientesScalarRelationFilter = {
    is?: ClientesWhereInput
    isNot?: ClientesWhereInput
  }

  export type Detalle_facturaListRelationFilter = {
    every?: Detalle_facturaWhereInput
    some?: Detalle_facturaWhereInput
    none?: Detalle_facturaWhereInput
  }

  export type Detalle_facturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacturaCountOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacturaAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type FacturaMaxOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacturaMinOrderByAggregateInput = {
    id?: SortOrder
    clienteId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FacturaSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type EnumStatusFacturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFactura | EnumStatusFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFacturaWithAggregatesFilter<$PrismaModel> | $Enums.StatusFactura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFacturaFilter<$PrismaModel>
    _max?: NestedEnumStatusFacturaFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FacturaScalarRelationFilter = {
    is?: FacturaWhereInput
    isNot?: FacturaWhereInput
  }

  export type ProductosScalarRelationFilter = {
    is?: ProductosWhereInput
    isNot?: ProductosWhereInput
  }

  export type Detalle_facturaCountOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Detalle_facturaAvgOrderByAggregateInput = {
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type Detalle_facturaMaxOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Detalle_facturaMinOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Detalle_facturaSumOrderByAggregateInput = {
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type StockHistoryListRelationFilter = {
    every?: StockHistoryWhereInput
    some?: StockHistoryWhereInput
    none?: StockHistoryWhereInput
  }

  export type StockHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductosCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_compra?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductosAvgOrderByAggregateInput = {
    precio_compra?: SortOrder
    stock?: SortOrder
  }

  export type ProductosMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_compra?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductosMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_compra?: SortOrder
    stock?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductosSumOrderByAggregateInput = {
    precio_compra?: SortOrder
    stock?: SortOrder
  }

  export type ProductosListRelationFilter = {
    every?: ProductosWhereInput
    some?: ProductosWhereInput
    none?: ProductosWhereInput
  }

  export type ProductosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductFavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductFavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductFavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Ai_QueriesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type Ai_QueriesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type Ai_QueriesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    is_read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type tokensCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type tokensMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type FacturaListRelationFilter = {
    every?: FacturaWhereInput
    some?: FacturaWhereInput
    none?: FacturaWhereInput
  }

  export type FacturaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StockHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
  }

  export type StockHistoryAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type StockHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
  }

  export type StockHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productoId?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
  }

  export type StockHistorySumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ProfitSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    ganancia_total?: SortOrder
    tipo_periodo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfitSummaryAvgOrderByAggregateInput = {
    ganancia_total?: SortOrder
  }

  export type ProfitSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    ganancia_total?: SortOrder
    tipo_periodo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfitSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    ganancia_total?: SortOrder
    tipo_periodo?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfitSummarySumOrderByAggregateInput = {
    ganancia_total?: SortOrder
  }

  export type EnumStatusEmailFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | EnumStatusEmailFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmailFilter<$PrismaModel> | $Enums.StatusEmail
  }

  export type EmailLogCountOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    status?: SortOrder
  }

  export type EmailLogMaxOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    status?: SortOrder
  }

  export type EmailLogMinOrderByAggregateInput = {
    id?: SortOrder
    facturaId?: SortOrder
    status?: SortOrder
  }

  export type EnumStatusEmailWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | EnumStatusEmailFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmailWithAggregatesFilter<$PrismaModel> | $Enums.StatusEmail
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEmailFilter<$PrismaModel>
    _max?: NestedEnumStatusEmailFilter<$PrismaModel>
  }

  export type tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput> | tokensCreateWithoutUserInput[] | tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUserInput | tokensCreateOrConnectWithoutUserInput[]
    createMany?: tokensCreateManyUserInputEnvelope
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
  }

  export type RolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    connect?: RolesWhereUniqueInput
  }

  export type ProductFavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductFavoriteCreateWithoutUserInput, ProductFavoriteUncheckedCreateWithoutUserInput> | ProductFavoriteCreateWithoutUserInput[] | ProductFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutUserInput | ProductFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: ProductFavoriteCreateManyUserInputEnvelope
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
  }

  export type Ai_QueriesCreateNestedManyWithoutUserInput = {
    create?: XOR<Ai_QueriesCreateWithoutUserInput, Ai_QueriesUncheckedCreateWithoutUserInput> | Ai_QueriesCreateWithoutUserInput[] | Ai_QueriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Ai_QueriesCreateOrConnectWithoutUserInput | Ai_QueriesCreateOrConnectWithoutUserInput[]
    createMany?: Ai_QueriesCreateManyUserInputEnvelope
    connect?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput> | tokensCreateWithoutUserInput[] | tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUserInput | tokensCreateOrConnectWithoutUserInput[]
    createMany?: tokensCreateManyUserInputEnvelope
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
  }

  export type ProductFavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductFavoriteCreateWithoutUserInput, ProductFavoriteUncheckedCreateWithoutUserInput> | ProductFavoriteCreateWithoutUserInput[] | ProductFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutUserInput | ProductFavoriteCreateOrConnectWithoutUserInput[]
    createMany?: ProductFavoriteCreateManyUserInputEnvelope
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
  }

  export type Ai_QueriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Ai_QueriesCreateWithoutUserInput, Ai_QueriesUncheckedCreateWithoutUserInput> | Ai_QueriesCreateWithoutUserInput[] | Ai_QueriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Ai_QueriesCreateOrConnectWithoutUserInput | Ai_QueriesCreateOrConnectWithoutUserInput[]
    createMany?: Ai_QueriesCreateManyUserInputEnvelope
    connect?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput> | tokensCreateWithoutUserInput[] | tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUserInput | tokensCreateOrConnectWithoutUserInput[]
    upsert?: tokensUpsertWithWhereUniqueWithoutUserInput | tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tokensCreateManyUserInputEnvelope
    set?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    disconnect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    delete?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    update?: tokensUpdateWithWhereUniqueWithoutUserInput | tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tokensUpdateManyWithWhereWithoutUserInput | tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tokensScalarWhereInput | tokensScalarWhereInput[]
  }

  export type RolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUsersInput
    upsert?: RolesUpsertWithoutUsersInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUsersInput, RolesUpdateWithoutUsersInput>, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type ProductFavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductFavoriteCreateWithoutUserInput, ProductFavoriteUncheckedCreateWithoutUserInput> | ProductFavoriteCreateWithoutUserInput[] | ProductFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutUserInput | ProductFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: ProductFavoriteUpsertWithWhereUniqueWithoutUserInput | ProductFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductFavoriteCreateManyUserInputEnvelope
    set?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    disconnect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    delete?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    update?: ProductFavoriteUpdateWithWhereUniqueWithoutUserInput | ProductFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductFavoriteUpdateManyWithWhereWithoutUserInput | ProductFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductFavoriteScalarWhereInput | ProductFavoriteScalarWhereInput[]
  }

  export type Ai_QueriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Ai_QueriesCreateWithoutUserInput, Ai_QueriesUncheckedCreateWithoutUserInput> | Ai_QueriesCreateWithoutUserInput[] | Ai_QueriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Ai_QueriesCreateOrConnectWithoutUserInput | Ai_QueriesCreateOrConnectWithoutUserInput[]
    upsert?: Ai_QueriesUpsertWithWhereUniqueWithoutUserInput | Ai_QueriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Ai_QueriesCreateManyUserInputEnvelope
    set?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    disconnect?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    delete?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    connect?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    update?: Ai_QueriesUpdateWithWhereUniqueWithoutUserInput | Ai_QueriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Ai_QueriesUpdateManyWithWhereWithoutUserInput | Ai_QueriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Ai_QueriesScalarWhereInput | Ai_QueriesScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput> | tokensCreateWithoutUserInput[] | tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tokensCreateOrConnectWithoutUserInput | tokensCreateOrConnectWithoutUserInput[]
    upsert?: tokensUpsertWithWhereUniqueWithoutUserInput | tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tokensCreateManyUserInputEnvelope
    set?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    disconnect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    delete?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    connect?: tokensWhereUniqueInput | tokensWhereUniqueInput[]
    update?: tokensUpdateWithWhereUniqueWithoutUserInput | tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tokensUpdateManyWithWhereWithoutUserInput | tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tokensScalarWhereInput | tokensScalarWhereInput[]
  }

  export type ProductFavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductFavoriteCreateWithoutUserInput, ProductFavoriteUncheckedCreateWithoutUserInput> | ProductFavoriteCreateWithoutUserInput[] | ProductFavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutUserInput | ProductFavoriteCreateOrConnectWithoutUserInput[]
    upsert?: ProductFavoriteUpsertWithWhereUniqueWithoutUserInput | ProductFavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductFavoriteCreateManyUserInputEnvelope
    set?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    disconnect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    delete?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    update?: ProductFavoriteUpdateWithWhereUniqueWithoutUserInput | ProductFavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductFavoriteUpdateManyWithWhereWithoutUserInput | ProductFavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductFavoriteScalarWhereInput | ProductFavoriteScalarWhereInput[]
  }

  export type Ai_QueriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Ai_QueriesCreateWithoutUserInput, Ai_QueriesUncheckedCreateWithoutUserInput> | Ai_QueriesCreateWithoutUserInput[] | Ai_QueriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Ai_QueriesCreateOrConnectWithoutUserInput | Ai_QueriesCreateOrConnectWithoutUserInput[]
    upsert?: Ai_QueriesUpsertWithWhereUniqueWithoutUserInput | Ai_QueriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Ai_QueriesCreateManyUserInputEnvelope
    set?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    disconnect?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    delete?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    connect?: Ai_QueriesWhereUniqueInput | Ai_QueriesWhereUniqueInput[]
    update?: Ai_QueriesUpdateWithWhereUniqueWithoutUserInput | Ai_QueriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Ai_QueriesUpdateManyWithWhereWithoutUserInput | Ai_QueriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Ai_QueriesScalarWhereInput | Ai_QueriesScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput> | NotificationsCreateWithoutUserInput[] | NotificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUserInput | NotificationsCreateOrConnectWithoutUserInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUserInput | NotificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationsCreateManyUserInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUserInput | NotificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUserInput | NotificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type ClientesCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClientesCreateWithoutPedidosInput, ClientesUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutPedidosInput
    connect?: ClientesWhereUniqueInput
  }

  export type Detalle_facturaCreateNestedManyWithoutFacturaInput = {
    create?: XOR<Detalle_facturaCreateWithoutFacturaInput, Detalle_facturaUncheckedCreateWithoutFacturaInput> | Detalle_facturaCreateWithoutFacturaInput[] | Detalle_facturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutFacturaInput | Detalle_facturaCreateOrConnectWithoutFacturaInput[]
    createMany?: Detalle_facturaCreateManyFacturaInputEnvelope
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
  }

  export type Detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: XOR<Detalle_facturaCreateWithoutFacturaInput, Detalle_facturaUncheckedCreateWithoutFacturaInput> | Detalle_facturaCreateWithoutFacturaInput[] | Detalle_facturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutFacturaInput | Detalle_facturaCreateOrConnectWithoutFacturaInput[]
    createMany?: Detalle_facturaCreateManyFacturaInputEnvelope
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
  }

  export type EnumStatusFacturaFieldUpdateOperationsInput = {
    set?: $Enums.StatusFactura
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientesUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClientesCreateWithoutPedidosInput, ClientesUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClientesCreateOrConnectWithoutPedidosInput
    upsert?: ClientesUpsertWithoutPedidosInput
    connect?: ClientesWhereUniqueInput
    update?: XOR<XOR<ClientesUpdateToOneWithWhereWithoutPedidosInput, ClientesUpdateWithoutPedidosInput>, ClientesUncheckedUpdateWithoutPedidosInput>
  }

  export type Detalle_facturaUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<Detalle_facturaCreateWithoutFacturaInput, Detalle_facturaUncheckedCreateWithoutFacturaInput> | Detalle_facturaCreateWithoutFacturaInput[] | Detalle_facturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutFacturaInput | Detalle_facturaCreateOrConnectWithoutFacturaInput[]
    upsert?: Detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput | Detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: Detalle_facturaCreateManyFacturaInputEnvelope
    set?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    disconnect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    delete?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    update?: Detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput | Detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: Detalle_facturaUpdateManyWithWhereWithoutFacturaInput | Detalle_facturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: Detalle_facturaScalarWhereInput | Detalle_facturaScalarWhereInput[]
  }

  export type Detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: XOR<Detalle_facturaCreateWithoutFacturaInput, Detalle_facturaUncheckedCreateWithoutFacturaInput> | Detalle_facturaCreateWithoutFacturaInput[] | Detalle_facturaUncheckedCreateWithoutFacturaInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutFacturaInput | Detalle_facturaCreateOrConnectWithoutFacturaInput[]
    upsert?: Detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput | Detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput[]
    createMany?: Detalle_facturaCreateManyFacturaInputEnvelope
    set?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    disconnect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    delete?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    update?: Detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput | Detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput[]
    updateMany?: Detalle_facturaUpdateManyWithWhereWithoutFacturaInput | Detalle_facturaUpdateManyWithWhereWithoutFacturaInput[]
    deleteMany?: Detalle_facturaScalarWhereInput | Detalle_facturaScalarWhereInput[]
  }

  export type FacturaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
  }

  export type ProductosCreateNestedOneWithoutDetallesInput = {
    create?: XOR<ProductosCreateWithoutDetallesInput, ProductosUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutDetallesInput
    connect?: ProductosWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacturaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: FacturaCreateOrConnectWithoutDetallesInput
    upsert?: FacturaUpsertWithoutDetallesInput
    connect?: FacturaWhereUniqueInput
    update?: XOR<XOR<FacturaUpdateToOneWithWhereWithoutDetallesInput, FacturaUpdateWithoutDetallesInput>, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductosUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<ProductosCreateWithoutDetallesInput, ProductosUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutDetallesInput
    upsert?: ProductosUpsertWithoutDetallesInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutDetallesInput, ProductosUpdateWithoutDetallesInput>, ProductosUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductFavoriteCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFavoriteCreateWithoutProductInput, ProductFavoriteUncheckedCreateWithoutProductInput> | ProductFavoriteCreateWithoutProductInput[] | ProductFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutProductInput | ProductFavoriteCreateOrConnectWithoutProductInput[]
    createMany?: ProductFavoriteCreateManyProductInputEnvelope
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
  }

  export type Detalle_facturaCreateNestedManyWithoutProductoInput = {
    create?: XOR<Detalle_facturaCreateWithoutProductoInput, Detalle_facturaUncheckedCreateWithoutProductoInput> | Detalle_facturaCreateWithoutProductoInput[] | Detalle_facturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutProductoInput | Detalle_facturaCreateOrConnectWithoutProductoInput[]
    createMany?: Detalle_facturaCreateManyProductoInputEnvelope
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type StockHistoryCreateNestedManyWithoutProductoInput = {
    create?: XOR<StockHistoryCreateWithoutProductoInput, StockHistoryUncheckedCreateWithoutProductoInput> | StockHistoryCreateWithoutProductoInput[] | StockHistoryUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductoInput | StockHistoryCreateOrConnectWithoutProductoInput[]
    createMany?: StockHistoryCreateManyProductoInputEnvelope
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
  }

  export type ProductFavoriteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductFavoriteCreateWithoutProductInput, ProductFavoriteUncheckedCreateWithoutProductInput> | ProductFavoriteCreateWithoutProductInput[] | ProductFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutProductInput | ProductFavoriteCreateOrConnectWithoutProductInput[]
    createMany?: ProductFavoriteCreateManyProductInputEnvelope
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
  }

  export type Detalle_facturaUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<Detalle_facturaCreateWithoutProductoInput, Detalle_facturaUncheckedCreateWithoutProductoInput> | Detalle_facturaCreateWithoutProductoInput[] | Detalle_facturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutProductoInput | Detalle_facturaCreateOrConnectWithoutProductoInput[]
    createMany?: Detalle_facturaCreateManyProductoInputEnvelope
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
  }

  export type StockHistoryUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<StockHistoryCreateWithoutProductoInput, StockHistoryUncheckedCreateWithoutProductoInput> | StockHistoryCreateWithoutProductoInput[] | StockHistoryUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductoInput | StockHistoryCreateOrConnectWithoutProductoInput[]
    createMany?: StockHistoryCreateManyProductoInputEnvelope
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
  }

  export type ProductFavoriteUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFavoriteCreateWithoutProductInput, ProductFavoriteUncheckedCreateWithoutProductInput> | ProductFavoriteCreateWithoutProductInput[] | ProductFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutProductInput | ProductFavoriteCreateOrConnectWithoutProductInput[]
    upsert?: ProductFavoriteUpsertWithWhereUniqueWithoutProductInput | ProductFavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFavoriteCreateManyProductInputEnvelope
    set?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    disconnect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    delete?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    update?: ProductFavoriteUpdateWithWhereUniqueWithoutProductInput | ProductFavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFavoriteUpdateManyWithWhereWithoutProductInput | ProductFavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFavoriteScalarWhereInput | ProductFavoriteScalarWhereInput[]
  }

  export type Detalle_facturaUpdateManyWithoutProductoNestedInput = {
    create?: XOR<Detalle_facturaCreateWithoutProductoInput, Detalle_facturaUncheckedCreateWithoutProductoInput> | Detalle_facturaCreateWithoutProductoInput[] | Detalle_facturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutProductoInput | Detalle_facturaCreateOrConnectWithoutProductoInput[]
    upsert?: Detalle_facturaUpsertWithWhereUniqueWithoutProductoInput | Detalle_facturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: Detalle_facturaCreateManyProductoInputEnvelope
    set?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    disconnect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    delete?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    update?: Detalle_facturaUpdateWithWhereUniqueWithoutProductoInput | Detalle_facturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: Detalle_facturaUpdateManyWithWhereWithoutProductoInput | Detalle_facturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: Detalle_facturaScalarWhereInput | Detalle_facturaScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type StockHistoryUpdateManyWithoutProductoNestedInput = {
    create?: XOR<StockHistoryCreateWithoutProductoInput, StockHistoryUncheckedCreateWithoutProductoInput> | StockHistoryCreateWithoutProductoInput[] | StockHistoryUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductoInput | StockHistoryCreateOrConnectWithoutProductoInput[]
    upsert?: StockHistoryUpsertWithWhereUniqueWithoutProductoInput | StockHistoryUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: StockHistoryCreateManyProductoInputEnvelope
    set?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    disconnect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    delete?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    update?: StockHistoryUpdateWithWhereUniqueWithoutProductoInput | StockHistoryUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: StockHistoryUpdateManyWithWhereWithoutProductoInput | StockHistoryUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
  }

  export type ProductFavoriteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductFavoriteCreateWithoutProductInput, ProductFavoriteUncheckedCreateWithoutProductInput> | ProductFavoriteCreateWithoutProductInput[] | ProductFavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductFavoriteCreateOrConnectWithoutProductInput | ProductFavoriteCreateOrConnectWithoutProductInput[]
    upsert?: ProductFavoriteUpsertWithWhereUniqueWithoutProductInput | ProductFavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductFavoriteCreateManyProductInputEnvelope
    set?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    disconnect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    delete?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    connect?: ProductFavoriteWhereUniqueInput | ProductFavoriteWhereUniqueInput[]
    update?: ProductFavoriteUpdateWithWhereUniqueWithoutProductInput | ProductFavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductFavoriteUpdateManyWithWhereWithoutProductInput | ProductFavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductFavoriteScalarWhereInput | ProductFavoriteScalarWhereInput[]
  }

  export type Detalle_facturaUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<Detalle_facturaCreateWithoutProductoInput, Detalle_facturaUncheckedCreateWithoutProductoInput> | Detalle_facturaCreateWithoutProductoInput[] | Detalle_facturaUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: Detalle_facturaCreateOrConnectWithoutProductoInput | Detalle_facturaCreateOrConnectWithoutProductoInput[]
    upsert?: Detalle_facturaUpsertWithWhereUniqueWithoutProductoInput | Detalle_facturaUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: Detalle_facturaCreateManyProductoInputEnvelope
    set?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    disconnect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    delete?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    connect?: Detalle_facturaWhereUniqueInput | Detalle_facturaWhereUniqueInput[]
    update?: Detalle_facturaUpdateWithWhereUniqueWithoutProductoInput | Detalle_facturaUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: Detalle_facturaUpdateManyWithWhereWithoutProductoInput | Detalle_facturaUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: Detalle_facturaScalarWhereInput | Detalle_facturaScalarWhereInput[]
  }

  export type StockHistoryUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<StockHistoryCreateWithoutProductoInput, StockHistoryUncheckedCreateWithoutProductoInput> | StockHistoryCreateWithoutProductoInput[] | StockHistoryUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: StockHistoryCreateOrConnectWithoutProductoInput | StockHistoryCreateOrConnectWithoutProductoInput[]
    upsert?: StockHistoryUpsertWithWhereUniqueWithoutProductoInput | StockHistoryUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: StockHistoryCreateManyProductoInputEnvelope
    set?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    disconnect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    delete?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    connect?: StockHistoryWhereUniqueInput | StockHistoryWhereUniqueInput[]
    update?: StockHistoryUpdateWithWhereUniqueWithoutProductoInput | StockHistoryUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: StockHistoryUpdateManyWithWhereWithoutProductoInput | StockHistoryUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
  }

  export type ProductosCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductosCreateWithoutCategoryInput, ProductosUncheckedCreateWithoutCategoryInput> | ProductosCreateWithoutCategoryInput[] | ProductosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoryInput | ProductosCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductosCreateManyCategoryInputEnvelope
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
  }

  export type ProductosUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductosCreateWithoutCategoryInput, ProductosUncheckedCreateWithoutCategoryInput> | ProductosCreateWithoutCategoryInput[] | ProductosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoryInput | ProductosCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductosCreateManyCategoryInputEnvelope
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
  }

  export type ProductosUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductosCreateWithoutCategoryInput, ProductosUncheckedCreateWithoutCategoryInput> | ProductosCreateWithoutCategoryInput[] | ProductosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoryInput | ProductosCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductosUpsertWithWhereUniqueWithoutCategoryInput | ProductosUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductosCreateManyCategoryInputEnvelope
    set?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    disconnect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    delete?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    update?: ProductosUpdateWithWhereUniqueWithoutCategoryInput | ProductosUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductosUpdateManyWithWhereWithoutCategoryInput | ProductosUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
  }

  export type ProductosUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductosCreateWithoutCategoryInput, ProductosUncheckedCreateWithoutCategoryInput> | ProductosCreateWithoutCategoryInput[] | ProductosUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductosCreateOrConnectWithoutCategoryInput | ProductosCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductosUpsertWithWhereUniqueWithoutCategoryInput | ProductosUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductosCreateManyCategoryInputEnvelope
    set?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    disconnect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    delete?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    connect?: ProductosWhereUniqueInput | ProductosWhereUniqueInput[]
    update?: ProductosUpdateWithWhereUniqueWithoutCategoryInput | ProductosUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductosUpdateManyWithWhereWithoutCategoryInput | ProductosUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritosInput
    connect?: UserWhereUniqueInput
  }

  export type ProductosCreateNestedOneWithoutProductos_favoritosInput = {
    create?: XOR<ProductosCreateWithoutProductos_favoritosInput, ProductosUncheckedCreateWithoutProductos_favoritosInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutProductos_favoritosInput
    connect?: ProductosWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritosInput
    upsert?: UserUpsertWithoutFavoritosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritosInput, UserUpdateWithoutFavoritosInput>, UserUncheckedUpdateWithoutFavoritosInput>
  }

  export type ProductosUpdateOneRequiredWithoutProductos_favoritosNestedInput = {
    create?: XOR<ProductosCreateWithoutProductos_favoritosInput, ProductosUncheckedCreateWithoutProductos_favoritosInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutProductos_favoritosInput
    upsert?: ProductosUpsertWithoutProductos_favoritosInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutProductos_favoritosInput, ProductosUpdateWithoutProductos_favoritosInput>, ProductosUncheckedUpdateWithoutProductos_favoritosInput>
  }

  export type UserCreateNestedOneWithoutPromptsInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    upsert?: UserUpsertWithoutPromptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromptsInput, UserUpdateWithoutPromptsInput>, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type FacturaCreateNestedManyWithoutClienteInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
  }

  export type FacturaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutClienteInput | FacturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutClienteInput | FacturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutClienteInput | FacturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type FacturaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput> | FacturaCreateWithoutClienteInput[] | FacturaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput | FacturaCreateOrConnectWithoutClienteInput[]
    upsert?: FacturaUpsertWithWhereUniqueWithoutClienteInput | FacturaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: FacturaCreateManyClienteInputEnvelope
    set?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    disconnect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    delete?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    connect?: FacturaWhereUniqueInput | FacturaWhereUniqueInput[]
    update?: FacturaUpdateWithWhereUniqueWithoutClienteInput | FacturaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: FacturaUpdateManyWithWhereWithoutClienteInput | FacturaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
  }

  export type ProductosCreateNestedOneWithoutStockHistoryInput = {
    create?: XOR<ProductosCreateWithoutStockHistoryInput, ProductosUncheckedCreateWithoutStockHistoryInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutStockHistoryInput
    connect?: ProductosWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductosUpdateOneRequiredWithoutStockHistoryNestedInput = {
    create?: XOR<ProductosCreateWithoutStockHistoryInput, ProductosUncheckedCreateWithoutStockHistoryInput>
    connectOrCreate?: ProductosCreateOrConnectWithoutStockHistoryInput
    upsert?: ProductosUpsertWithoutStockHistoryInput
    connect?: ProductosWhereUniqueInput
    update?: XOR<XOR<ProductosUpdateToOneWithWhereWithoutStockHistoryInput, ProductosUpdateWithoutStockHistoryInput>, ProductosUncheckedUpdateWithoutStockHistoryInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EnumStatusEmailFieldUpdateOperationsInput = {
    set?: $Enums.StatusEmail
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusFacturaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFactura | EnumStatusFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFacturaFilter<$PrismaModel> | $Enums.StatusFactura
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusFacturaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusFactura | EnumStatusFacturaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusFactura[] | ListEnumStatusFacturaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFacturaWithAggregatesFilter<$PrismaModel> | $Enums.StatusFactura
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFacturaFilter<$PrismaModel>
    _max?: NestedEnumStatusFacturaFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusEmailFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | EnumStatusEmailFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmailFilter<$PrismaModel> | $Enums.StatusEmail
  }

  export type NestedEnumStatusEmailWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusEmail | EnumStatusEmailFieldRefInput<$PrismaModel>
    in?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusEmail[] | ListEnumStatusEmailFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusEmailWithAggregatesFilter<$PrismaModel> | $Enums.StatusEmail
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusEmailFilter<$PrismaModel>
    _max?: NestedEnumStatusEmailFilter<$PrismaModel>
  }

  export type tokensCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type tokensUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type tokensCreateOrConnectWithoutUserInput = {
    where: tokensWhereUniqueInput
    create: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput>
  }

  export type tokensCreateManyUserInputEnvelope = {
    data: tokensCreateManyUserInput | tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RolesCreateWithoutUsersInput = {
    id?: string
    name?: $Enums.Role
  }

  export type RolesUncheckedCreateWithoutUsersInput = {
    id?: string
    name?: $Enums.Role
  }

  export type RolesCreateOrConnectWithoutUsersInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
  }

  export type ProductFavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductosCreateNestedOneWithoutProductos_favoritosInput
  }

  export type ProductFavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductFavoriteCreateOrConnectWithoutUserInput = {
    where: ProductFavoriteWhereUniqueInput
    create: XOR<ProductFavoriteCreateWithoutUserInput, ProductFavoriteUncheckedCreateWithoutUserInput>
  }

  export type ProductFavoriteCreateManyUserInputEnvelope = {
    data: ProductFavoriteCreateManyUserInput | ProductFavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Ai_QueriesCreateWithoutUserInput = {
    id?: string
    query: string
    response: string
    createdAt?: Date | string
  }

  export type Ai_QueriesUncheckedCreateWithoutUserInput = {
    id?: string
    query: string
    response: string
    createdAt?: Date | string
  }

  export type Ai_QueriesCreateOrConnectWithoutUserInput = {
    where: Ai_QueriesWhereUniqueInput
    create: XOR<Ai_QueriesCreateWithoutUserInput, Ai_QueriesUncheckedCreateWithoutUserInput>
  }

  export type Ai_QueriesCreateManyUserInputEnvelope = {
    data: Ai_QueriesCreateManyUserInput | Ai_QueriesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUserInput = {
    id?: string
    message: string
    is_read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsUncheckedCreateWithoutUserInput = {
    id?: string
    message: string
    is_read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsCreateManyUserInputEnvelope = {
    data: NotificationsCreateManyUserInput | NotificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: tokensWhereUniqueInput
    update: XOR<tokensUpdateWithoutUserInput, tokensUncheckedUpdateWithoutUserInput>
    create: XOR<tokensCreateWithoutUserInput, tokensUncheckedCreateWithoutUserInput>
  }

  export type tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: tokensWhereUniqueInput
    data: XOR<tokensUpdateWithoutUserInput, tokensUncheckedUpdateWithoutUserInput>
  }

  export type tokensUpdateManyWithWhereWithoutUserInput = {
    where: tokensScalarWhereInput
    data: XOR<tokensUpdateManyMutationInput, tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type tokensScalarWhereInput = {
    AND?: tokensScalarWhereInput | tokensScalarWhereInput[]
    OR?: tokensScalarWhereInput[]
    NOT?: tokensScalarWhereInput | tokensScalarWhereInput[]
    id?: StringFilter<"tokens"> | string
    userId?: StringFilter<"tokens"> | string
    token?: StringFilter<"tokens"> | string
    createdAt?: DateTimeFilter<"tokens"> | Date | string
  }

  export type RolesUpsertWithoutUsersInput = {
    update: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
    create: XOR<RolesCreateWithoutUsersInput, RolesUncheckedCreateWithoutUsersInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUsersInput, RolesUncheckedUpdateWithoutUsersInput>
  }

  export type RolesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RolesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ProductFavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductFavoriteWhereUniqueInput
    update: XOR<ProductFavoriteUpdateWithoutUserInput, ProductFavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<ProductFavoriteCreateWithoutUserInput, ProductFavoriteUncheckedCreateWithoutUserInput>
  }

  export type ProductFavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductFavoriteWhereUniqueInput
    data: XOR<ProductFavoriteUpdateWithoutUserInput, ProductFavoriteUncheckedUpdateWithoutUserInput>
  }

  export type ProductFavoriteUpdateManyWithWhereWithoutUserInput = {
    where: ProductFavoriteScalarWhereInput
    data: XOR<ProductFavoriteUpdateManyMutationInput, ProductFavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductFavoriteScalarWhereInput = {
    AND?: ProductFavoriteScalarWhereInput | ProductFavoriteScalarWhereInput[]
    OR?: ProductFavoriteScalarWhereInput[]
    NOT?: ProductFavoriteScalarWhereInput | ProductFavoriteScalarWhereInput[]
    id?: StringFilter<"ProductFavorite"> | string
    userId?: StringFilter<"ProductFavorite"> | string
    productId?: StringFilter<"ProductFavorite"> | string
    createdAt?: DateTimeFilter<"ProductFavorite"> | Date | string
    updatedAt?: DateTimeFilter<"ProductFavorite"> | Date | string
  }

  export type Ai_QueriesUpsertWithWhereUniqueWithoutUserInput = {
    where: Ai_QueriesWhereUniqueInput
    update: XOR<Ai_QueriesUpdateWithoutUserInput, Ai_QueriesUncheckedUpdateWithoutUserInput>
    create: XOR<Ai_QueriesCreateWithoutUserInput, Ai_QueriesUncheckedCreateWithoutUserInput>
  }

  export type Ai_QueriesUpdateWithWhereUniqueWithoutUserInput = {
    where: Ai_QueriesWhereUniqueInput
    data: XOR<Ai_QueriesUpdateWithoutUserInput, Ai_QueriesUncheckedUpdateWithoutUserInput>
  }

  export type Ai_QueriesUpdateManyWithWhereWithoutUserInput = {
    where: Ai_QueriesScalarWhereInput
    data: XOR<Ai_QueriesUpdateManyMutationInput, Ai_QueriesUncheckedUpdateManyWithoutUserInput>
  }

  export type Ai_QueriesScalarWhereInput = {
    AND?: Ai_QueriesScalarWhereInput | Ai_QueriesScalarWhereInput[]
    OR?: Ai_QueriesScalarWhereInput[]
    NOT?: Ai_QueriesScalarWhereInput | Ai_QueriesScalarWhereInput[]
    id?: StringFilter<"Ai_Queries"> | string
    userId?: StringFilter<"Ai_Queries"> | string
    query?: StringFilter<"Ai_Queries"> | string
    response?: StringFilter<"Ai_Queries"> | string
    createdAt?: DateTimeFilter<"Ai_Queries"> | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationsCreateWithoutUserInput, NotificationsUncheckedCreateWithoutUserInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUserInput, NotificationsUncheckedUpdateWithoutUserInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUserInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    id?: StringFilter<"Notifications"> | string
    userId?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    is_read?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    updatedAt?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type ClientesCreateWithoutPedidosInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
  }

  export type ClientesUncheckedCreateWithoutPedidosInput = {
    id?: string
    name: string
    email: string
    phone: string
    address: string
    createdAt?: Date | string
  }

  export type ClientesCreateOrConnectWithoutPedidosInput = {
    where: ClientesWhereUniqueInput
    create: XOR<ClientesCreateWithoutPedidosInput, ClientesUncheckedCreateWithoutPedidosInput>
  }

  export type Detalle_facturaCreateWithoutFacturaInput = {
    id?: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
    producto: ProductosCreateNestedOneWithoutDetallesInput
  }

  export type Detalle_facturaUncheckedCreateWithoutFacturaInput = {
    id?: string
    productoId: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Detalle_facturaCreateOrConnectWithoutFacturaInput = {
    where: Detalle_facturaWhereUniqueInput
    create: XOR<Detalle_facturaCreateWithoutFacturaInput, Detalle_facturaUncheckedCreateWithoutFacturaInput>
  }

  export type Detalle_facturaCreateManyFacturaInputEnvelope = {
    data: Detalle_facturaCreateManyFacturaInput | Detalle_facturaCreateManyFacturaInput[]
    skipDuplicates?: boolean
  }

  export type ClientesUpsertWithoutPedidosInput = {
    update: XOR<ClientesUpdateWithoutPedidosInput, ClientesUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClientesCreateWithoutPedidosInput, ClientesUncheckedCreateWithoutPedidosInput>
    where?: ClientesWhereInput
  }

  export type ClientesUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClientesWhereInput
    data: XOR<ClientesUpdateWithoutPedidosInput, ClientesUncheckedUpdateWithoutPedidosInput>
  }

  export type ClientesUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientesUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaUpsertWithWhereUniqueWithoutFacturaInput = {
    where: Detalle_facturaWhereUniqueInput
    update: XOR<Detalle_facturaUpdateWithoutFacturaInput, Detalle_facturaUncheckedUpdateWithoutFacturaInput>
    create: XOR<Detalle_facturaCreateWithoutFacturaInput, Detalle_facturaUncheckedCreateWithoutFacturaInput>
  }

  export type Detalle_facturaUpdateWithWhereUniqueWithoutFacturaInput = {
    where: Detalle_facturaWhereUniqueInput
    data: XOR<Detalle_facturaUpdateWithoutFacturaInput, Detalle_facturaUncheckedUpdateWithoutFacturaInput>
  }

  export type Detalle_facturaUpdateManyWithWhereWithoutFacturaInput = {
    where: Detalle_facturaScalarWhereInput
    data: XOR<Detalle_facturaUpdateManyMutationInput, Detalle_facturaUncheckedUpdateManyWithoutFacturaInput>
  }

  export type Detalle_facturaScalarWhereInput = {
    AND?: Detalle_facturaScalarWhereInput | Detalle_facturaScalarWhereInput[]
    OR?: Detalle_facturaScalarWhereInput[]
    NOT?: Detalle_facturaScalarWhereInput | Detalle_facturaScalarWhereInput[]
    id?: StringFilter<"Detalle_factura"> | string
    facturaId?: StringFilter<"Detalle_factura"> | string
    productoId?: StringFilter<"Detalle_factura"> | string
    cantidad?: IntFilter<"Detalle_factura"> | number
    precio?: FloatFilter<"Detalle_factura"> | number
    createdAt?: DateTimeFilter<"Detalle_factura"> | Date | string
    updatedAt?: DateTimeFilter<"Detalle_factura"> | Date | string
  }

  export type FacturaCreateWithoutDetallesInput = {
    id?: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClientesCreateNestedOneWithoutPedidosInput
  }

  export type FacturaUncheckedCreateWithoutDetallesInput = {
    id?: string
    clienteId: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacturaCreateOrConnectWithoutDetallesInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
  }

  export type ProductosCreateWithoutDetallesInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteCreateNestedManyWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductsInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateWithoutDetallesInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutProductInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutDetallesInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutDetallesInput, ProductosUncheckedCreateWithoutDetallesInput>
  }

  export type FacturaUpsertWithoutDetallesInput = {
    update: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
    create: XOR<FacturaCreateWithoutDetallesInput, FacturaUncheckedCreateWithoutDetallesInput>
    where?: FacturaWhereInput
  }

  export type FacturaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: FacturaWhereInput
    data: XOR<FacturaUpdateWithoutDetallesInput, FacturaUncheckedUpdateWithoutDetallesInput>
  }

  export type FacturaUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClientesUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type FacturaUncheckedUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductosUpsertWithoutDetallesInput = {
    update: XOR<ProductosUpdateWithoutDetallesInput, ProductosUncheckedUpdateWithoutDetallesInput>
    create: XOR<ProductosCreateWithoutDetallesInput, ProductosUncheckedCreateWithoutDetallesInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutDetallesInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutDetallesInput, ProductosUncheckedUpdateWithoutDetallesInput>
  }

  export type ProductosUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUncheckedUpdateManyWithoutProductNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductFavoriteCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritosInput
  }

  export type ProductFavoriteUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductFavoriteCreateOrConnectWithoutProductInput = {
    where: ProductFavoriteWhereUniqueInput
    create: XOR<ProductFavoriteCreateWithoutProductInput, ProductFavoriteUncheckedCreateWithoutProductInput>
  }

  export type ProductFavoriteCreateManyProductInputEnvelope = {
    data: ProductFavoriteCreateManyProductInput | ProductFavoriteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Detalle_facturaCreateWithoutProductoInput = {
    id?: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
    factura: FacturaCreateNestedOneWithoutDetallesInput
  }

  export type Detalle_facturaUncheckedCreateWithoutProductoInput = {
    id?: string
    facturaId: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Detalle_facturaCreateOrConnectWithoutProductoInput = {
    where: Detalle_facturaWhereUniqueInput
    create: XOR<Detalle_facturaCreateWithoutProductoInput, Detalle_facturaUncheckedCreateWithoutProductoInput>
  }

  export type Detalle_facturaCreateManyProductoInputEnvelope = {
    data: Detalle_facturaCreateManyProductoInput | Detalle_facturaCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type StockHistoryCreateWithoutProductoInput = {
    id?: string
    cantidad: number
    motivo?: string | null
    createdAt?: Date | string
  }

  export type StockHistoryUncheckedCreateWithoutProductoInput = {
    id?: string
    cantidad: number
    motivo?: string | null
    createdAt?: Date | string
  }

  export type StockHistoryCreateOrConnectWithoutProductoInput = {
    where: StockHistoryWhereUniqueInput
    create: XOR<StockHistoryCreateWithoutProductoInput, StockHistoryUncheckedCreateWithoutProductoInput>
  }

  export type StockHistoryCreateManyProductoInputEnvelope = {
    data: StockHistoryCreateManyProductoInput | StockHistoryCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type ProductFavoriteUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductFavoriteWhereUniqueInput
    update: XOR<ProductFavoriteUpdateWithoutProductInput, ProductFavoriteUncheckedUpdateWithoutProductInput>
    create: XOR<ProductFavoriteCreateWithoutProductInput, ProductFavoriteUncheckedCreateWithoutProductInput>
  }

  export type ProductFavoriteUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductFavoriteWhereUniqueInput
    data: XOR<ProductFavoriteUpdateWithoutProductInput, ProductFavoriteUncheckedUpdateWithoutProductInput>
  }

  export type ProductFavoriteUpdateManyWithWhereWithoutProductInput = {
    where: ProductFavoriteScalarWhereInput
    data: XOR<ProductFavoriteUpdateManyMutationInput, ProductFavoriteUncheckedUpdateManyWithoutProductInput>
  }

  export type Detalle_facturaUpsertWithWhereUniqueWithoutProductoInput = {
    where: Detalle_facturaWhereUniqueInput
    update: XOR<Detalle_facturaUpdateWithoutProductoInput, Detalle_facturaUncheckedUpdateWithoutProductoInput>
    create: XOR<Detalle_facturaCreateWithoutProductoInput, Detalle_facturaUncheckedCreateWithoutProductoInput>
  }

  export type Detalle_facturaUpdateWithWhereUniqueWithoutProductoInput = {
    where: Detalle_facturaWhereUniqueInput
    data: XOR<Detalle_facturaUpdateWithoutProductoInput, Detalle_facturaUncheckedUpdateWithoutProductoInput>
  }

  export type Detalle_facturaUpdateManyWithWhereWithoutProductoInput = {
    where: Detalle_facturaScalarWhereInput
    data: XOR<Detalle_facturaUpdateManyMutationInput, Detalle_facturaUncheckedUpdateManyWithoutProductoInput>
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUpsertWithWhereUniqueWithoutProductoInput = {
    where: StockHistoryWhereUniqueInput
    update: XOR<StockHistoryUpdateWithoutProductoInput, StockHistoryUncheckedUpdateWithoutProductoInput>
    create: XOR<StockHistoryCreateWithoutProductoInput, StockHistoryUncheckedCreateWithoutProductoInput>
  }

  export type StockHistoryUpdateWithWhereUniqueWithoutProductoInput = {
    where: StockHistoryWhereUniqueInput
    data: XOR<StockHistoryUpdateWithoutProductoInput, StockHistoryUncheckedUpdateWithoutProductoInput>
  }

  export type StockHistoryUpdateManyWithWhereWithoutProductoInput = {
    where: StockHistoryScalarWhereInput
    data: XOR<StockHistoryUpdateManyMutationInput, StockHistoryUncheckedUpdateManyWithoutProductoInput>
  }

  export type StockHistoryScalarWhereInput = {
    AND?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
    OR?: StockHistoryScalarWhereInput[]
    NOT?: StockHistoryScalarWhereInput | StockHistoryScalarWhereInput[]
    id?: StringFilter<"StockHistory"> | string
    productoId?: StringFilter<"StockHistory"> | string
    cantidad?: IntFilter<"StockHistory"> | number
    motivo?: StringNullableFilter<"StockHistory"> | string | null
    createdAt?: DateTimeFilter<"StockHistory"> | Date | string
  }

  export type ProductosCreateWithoutCategoryInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteCreateNestedManyWithoutProductInput
    detalles?: Detalle_facturaCreateNestedManyWithoutProductoInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateWithoutCategoryInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutProductInput
    detalles?: Detalle_facturaUncheckedCreateNestedManyWithoutProductoInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutCategoryInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutCategoryInput, ProductosUncheckedCreateWithoutCategoryInput>
  }

  export type ProductosCreateManyCategoryInputEnvelope = {
    data: ProductosCreateManyCategoryInput | ProductosCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductosUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductosWhereUniqueInput
    update: XOR<ProductosUpdateWithoutCategoryInput, ProductosUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductosCreateWithoutCategoryInput, ProductosUncheckedCreateWithoutCategoryInput>
  }

  export type ProductosUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductosWhereUniqueInput
    data: XOR<ProductosUpdateWithoutCategoryInput, ProductosUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductosUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductosScalarWhereInput
    data: XOR<ProductosUpdateManyMutationInput, ProductosUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductosScalarWhereInput = {
    AND?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
    OR?: ProductosScalarWhereInput[]
    NOT?: ProductosScalarWhereInput | ProductosScalarWhereInput[]
    id?: StringFilter<"Productos"> | string
    nombre?: StringFilter<"Productos"> | string
    precio_compra?: FloatFilter<"Productos"> | number
    stock?: IntFilter<"Productos"> | number
    categoryId?: StringFilter<"Productos"> | string
    createdAt?: DateTimeFilter<"Productos"> | Date | string
    updatedAt?: DateTimeFilter<"Productos"> | Date | string
  }

  export type UserCreateWithoutFavoritosInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensCreateNestedManyWithoutUserInput
    role: RolesCreateNestedOneWithoutUsersInput
    prompts?: Ai_QueriesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritosInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensUncheckedCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
  }

  export type ProductosCreateWithoutProductos_favoritosInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalles?: Detalle_facturaCreateNestedManyWithoutProductoInput
    category: CategoryCreateNestedOneWithoutProductsInput
    stockHistory?: StockHistoryCreateNestedManyWithoutProductoInput
  }

  export type ProductosUncheckedCreateWithoutProductos_favoritosInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    detalles?: Detalle_facturaUncheckedCreateNestedManyWithoutProductoInput
    stockHistory?: StockHistoryUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutProductos_favoritosInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutProductos_favoritosInput, ProductosUncheckedCreateWithoutProductos_favoritosInput>
  }

  export type UserUpsertWithoutFavoritosInput = {
    update: XOR<UserUpdateWithoutFavoritosInput, UserUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UserCreateWithoutFavoritosInput, UserUncheckedCreateWithoutFavoritosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritosInput, UserUncheckedUpdateWithoutFavoritosInput>
  }

  export type UserUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUpdateManyWithoutUserNestedInput
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    prompts?: Ai_QueriesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUncheckedUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductosUpsertWithoutProductos_favoritosInput = {
    update: XOR<ProductosUpdateWithoutProductos_favoritosInput, ProductosUncheckedUpdateWithoutProductos_favoritosInput>
    create: XOR<ProductosCreateWithoutProductos_favoritosInput, ProductosUncheckedCreateWithoutProductos_favoritosInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutProductos_favoritosInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutProductos_favoritosInput, ProductosUncheckedUpdateWithoutProductos_favoritosInput>
  }

  export type ProductosUpdateWithoutProductos_favoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: Detalle_facturaUpdateManyWithoutProductoNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateWithoutProductos_favoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: Detalle_facturaUncheckedUpdateManyWithoutProductoNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UserCreateWithoutPromptsInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensCreateNestedManyWithoutUserInput
    role: RolesCreateNestedOneWithoutUsersInput
    favoritos?: ProductFavoriteCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPromptsInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensUncheckedCreateNestedManyWithoutUserInput
    favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPromptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
  }

  export type UserUpsertWithoutPromptsInput = {
    update: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUpdateManyWithoutUserNestedInput
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    favoritos?: ProductFavoriteUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: ProductFavoriteUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensCreateNestedManyWithoutUserInput
    role: RolesCreateNestedOneWithoutUsersInput
    favoritos?: ProductFavoriteCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensUncheckedCreateNestedManyWithoutUserInput
    favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUpdateManyWithoutUserNestedInput
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    favoritos?: ProductFavoriteUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: ProductFavoriteUncheckedUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTokenInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RolesCreateNestedOneWithoutUsersInput
    favoritos?: ProductFavoriteCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    roleId: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RolesUpdateOneRequiredWithoutUsersNestedInput
    favoritos?: ProductFavoriteUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: ProductFavoriteUncheckedUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacturaCreateWithoutClienteInput = {
    id?: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalles?: Detalle_facturaCreateNestedManyWithoutFacturaInput
  }

  export type FacturaUncheckedCreateWithoutClienteInput = {
    id?: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detalles?: Detalle_facturaUncheckedCreateNestedManyWithoutFacturaInput
  }

  export type FacturaCreateOrConnectWithoutClienteInput = {
    where: FacturaWhereUniqueInput
    create: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput>
  }

  export type FacturaCreateManyClienteInputEnvelope = {
    data: FacturaCreateManyClienteInput | FacturaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type FacturaUpsertWithWhereUniqueWithoutClienteInput = {
    where: FacturaWhereUniqueInput
    update: XOR<FacturaUpdateWithoutClienteInput, FacturaUncheckedUpdateWithoutClienteInput>
    create: XOR<FacturaCreateWithoutClienteInput, FacturaUncheckedCreateWithoutClienteInput>
  }

  export type FacturaUpdateWithWhereUniqueWithoutClienteInput = {
    where: FacturaWhereUniqueInput
    data: XOR<FacturaUpdateWithoutClienteInput, FacturaUncheckedUpdateWithoutClienteInput>
  }

  export type FacturaUpdateManyWithWhereWithoutClienteInput = {
    where: FacturaScalarWhereInput
    data: XOR<FacturaUpdateManyMutationInput, FacturaUncheckedUpdateManyWithoutClienteInput>
  }

  export type FacturaScalarWhereInput = {
    AND?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    OR?: FacturaScalarWhereInput[]
    NOT?: FacturaScalarWhereInput | FacturaScalarWhereInput[]
    id?: StringFilter<"Factura"> | string
    clienteId?: StringFilter<"Factura"> | string
    status?: EnumStatusFacturaFilter<"Factura"> | $Enums.StatusFactura
    total?: FloatFilter<"Factura"> | number
    createdAt?: DateTimeFilter<"Factura"> | Date | string
    updatedAt?: DateTimeFilter<"Factura"> | Date | string
  }

  export type ProductosCreateWithoutStockHistoryInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteCreateNestedManyWithoutProductInput
    detalles?: Detalle_facturaCreateNestedManyWithoutProductoInput
    category: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductosUncheckedCreateWithoutStockHistoryInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    productos_favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutProductInput
    detalles?: Detalle_facturaUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductosCreateOrConnectWithoutStockHistoryInput = {
    where: ProductosWhereUniqueInput
    create: XOR<ProductosCreateWithoutStockHistoryInput, ProductosUncheckedCreateWithoutStockHistoryInput>
  }

  export type ProductosUpsertWithoutStockHistoryInput = {
    update: XOR<ProductosUpdateWithoutStockHistoryInput, ProductosUncheckedUpdateWithoutStockHistoryInput>
    create: XOR<ProductosCreateWithoutStockHistoryInput, ProductosUncheckedCreateWithoutStockHistoryInput>
    where?: ProductosWhereInput
  }

  export type ProductosUpdateToOneWithWhereWithoutStockHistoryInput = {
    where?: ProductosWhereInput
    data: XOR<ProductosUpdateWithoutStockHistoryInput, ProductosUncheckedUpdateWithoutStockHistoryInput>
  }

  export type ProductosUpdateWithoutStockHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUpdateManyWithoutProductNestedInput
    detalles?: Detalle_facturaUpdateManyWithoutProductoNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductosUncheckedUpdateWithoutStockHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUncheckedUpdateManyWithoutProductNestedInput
    detalles?: Detalle_facturaUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensCreateNestedManyWithoutUserInput
    favoritos?: ProductFavoriteCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesCreateNestedManyWithoutUserInput
    notifications?: NotificationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token?: tokensUncheckedCreateNestedManyWithoutUserInput
    favoritos?: ProductFavoriteUncheckedCreateNestedManyWithoutUserInput
    prompts?: Ai_QueriesUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    verified_at?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type tokensCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type ProductFavoriteCreateManyUserInput = {
    id?: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Ai_QueriesCreateManyUserInput = {
    id?: string
    query: string
    response: string
    createdAt?: Date | string
  }

  export type NotificationsCreateManyUserInput = {
    id?: string
    message: string
    is_read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type tokensUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tokensUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductosUpdateOneRequiredWithoutProductos_favoritosNestedInput
  }

  export type ProductFavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Ai_QueriesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Ai_QueriesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Ai_QueriesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaCreateManyFacturaInput = {
    id?: string
    productoId: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Detalle_facturaUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producto?: ProductosUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type Detalle_facturaUncheckedUpdateWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaUncheckedUpdateManyWithoutFacturaInput = {
    id?: StringFieldUpdateOperationsInput | string
    productoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteCreateManyProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Detalle_facturaCreateManyProductoInput = {
    id?: string
    facturaId: string
    cantidad: number
    precio: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StockHistoryCreateManyProductoInput = {
    id?: string
    cantidad: number
    motivo?: string | null
    createdAt?: Date | string
  }

  export type ProductFavoriteUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type ProductFavoriteUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductFavoriteUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    factura?: FacturaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type Detalle_facturaUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Detalle_facturaUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    facturaId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUncheckedUpdateWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockHistoryUncheckedUpdateManyWithoutProductoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductosCreateManyCategoryInput = {
    id?: string
    nombre: string
    precio_compra: number
    stock?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductosUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUpdateManyWithoutProductNestedInput
    detalles?: Detalle_facturaUpdateManyWithoutProductoNestedInput
    stockHistory?: StockHistoryUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productos_favoritos?: ProductFavoriteUncheckedUpdateManyWithoutProductNestedInput
    detalles?: Detalle_facturaUncheckedUpdateManyWithoutProductoNestedInput
    stockHistory?: StockHistoryUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductosUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio_compra?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FacturaCreateManyClienteInput = {
    id?: string
    status?: $Enums.StatusFactura
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FacturaUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: Detalle_facturaUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: Detalle_facturaUncheckedUpdateManyWithoutFacturaNestedInput
  }

  export type FacturaUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFacturaFieldUpdateOperationsInput | $Enums.StatusFactura
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    username: string
    name: string
    lastname: string
    password: string
    is_verified?: boolean
    verified_at: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUpdateManyWithoutUserNestedInput
    favoritos?: ProductFavoriteUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: tokensUncheckedUpdateManyWithoutUserNestedInput
    favoritos?: ProductFavoriteUncheckedUpdateManyWithoutUserNestedInput
    prompts?: Ai_QueriesUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}