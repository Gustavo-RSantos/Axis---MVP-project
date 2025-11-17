
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
 * Model cadastros
 * 
 */
export type cadastros = $Result.DefaultSelection<Prisma.$cadastrosPayload>
/**
 * Model calendarios
 * 
 */
export type calendarios = $Result.DefaultSelection<Prisma.$calendariosPayload>
/**
 * Model perfis
 * 
 */
export type perfis = $Result.DefaultSelection<Prisma.$perfisPayload>
/**
 * Model postagem_comentarios
 * 
 */
export type postagem_comentarios = $Result.DefaultSelection<Prisma.$postagem_comentariosPayload>
/**
 * Model postagens
 * 
 */
export type postagens = $Result.DefaultSelection<Prisma.$postagensPayload>
/**
 * Model postagem_likes
 * 
 */
export type postagem_likes = $Result.DefaultSelection<Prisma.$postagem_likesPayload>
/**
 * Model artigos
 * 
 */
export type artigos = $Result.DefaultSelection<Prisma.$artigosPayload>
/**
 * Model artigos_favoritos
 * 
 */
export type artigos_favoritos = $Result.DefaultSelection<Prisma.$artigos_favoritosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cadastros
 * const cadastros = await prisma.cadastros.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cadastros
   * const cadastros = await prisma.cadastros.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cadastros`: Exposes CRUD operations for the **cadastros** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cadastros
    * const cadastros = await prisma.cadastros.findMany()
    * ```
    */
  get cadastros(): Prisma.cadastrosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarios`: Exposes CRUD operations for the **calendarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendarios
    * const calendarios = await prisma.calendarios.findMany()
    * ```
    */
  get calendarios(): Prisma.calendariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perfis`: Exposes CRUD operations for the **perfis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfis
    * const perfis = await prisma.perfis.findMany()
    * ```
    */
  get perfis(): Prisma.perfisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postagem_comentarios`: Exposes CRUD operations for the **postagem_comentarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Postagem_comentarios
    * const postagem_comentarios = await prisma.postagem_comentarios.findMany()
    * ```
    */
  get postagem_comentarios(): Prisma.postagem_comentariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postagens`: Exposes CRUD operations for the **postagens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Postagens
    * const postagens = await prisma.postagens.findMany()
    * ```
    */
  get postagens(): Prisma.postagensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postagem_likes`: Exposes CRUD operations for the **postagem_likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Postagem_likes
    * const postagem_likes = await prisma.postagem_likes.findMany()
    * ```
    */
  get postagem_likes(): Prisma.postagem_likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artigos`: Exposes CRUD operations for the **artigos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artigos
    * const artigos = await prisma.artigos.findMany()
    * ```
    */
  get artigos(): Prisma.artigosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artigos_favoritos`: Exposes CRUD operations for the **artigos_favoritos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artigos_favoritos
    * const artigos_favoritos = await prisma.artigos_favoritos.findMany()
    * ```
    */
  get artigos_favoritos(): Prisma.artigos_favoritosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    cadastros: 'cadastros',
    calendarios: 'calendarios',
    perfis: 'perfis',
    postagem_comentarios: 'postagem_comentarios',
    postagens: 'postagens',
    postagem_likes: 'postagem_likes',
    artigos: 'artigos',
    artigos_favoritos: 'artigos_favoritos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cadastros" | "calendarios" | "perfis" | "postagem_comentarios" | "postagens" | "postagem_likes" | "artigos" | "artigos_favoritos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cadastros: {
        payload: Prisma.$cadastrosPayload<ExtArgs>
        fields: Prisma.cadastrosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cadastrosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cadastrosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>
          }
          findFirst: {
            args: Prisma.cadastrosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cadastrosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>
          }
          findMany: {
            args: Prisma.cadastrosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>[]
          }
          create: {
            args: Prisma.cadastrosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>
          }
          createMany: {
            args: Prisma.cadastrosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cadastrosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>
          }
          update: {
            args: Prisma.cadastrosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>
          }
          deleteMany: {
            args: Prisma.cadastrosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cadastrosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cadastrosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cadastrosPayload>
          }
          aggregate: {
            args: Prisma.CadastrosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCadastros>
          }
          groupBy: {
            args: Prisma.cadastrosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CadastrosGroupByOutputType>[]
          }
          count: {
            args: Prisma.cadastrosCountArgs<ExtArgs>
            result: $Utils.Optional<CadastrosCountAggregateOutputType> | number
          }
        }
      }
      calendarios: {
        payload: Prisma.$calendariosPayload<ExtArgs>
        fields: Prisma.calendariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.calendariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.calendariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>
          }
          findFirst: {
            args: Prisma.calendariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.calendariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>
          }
          findMany: {
            args: Prisma.calendariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>[]
          }
          create: {
            args: Prisma.calendariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>
          }
          createMany: {
            args: Prisma.calendariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.calendariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>
          }
          update: {
            args: Prisma.calendariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>
          }
          deleteMany: {
            args: Prisma.calendariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.calendariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.calendariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$calendariosPayload>
          }
          aggregate: {
            args: Prisma.CalendariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarios>
          }
          groupBy: {
            args: Prisma.calendariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.calendariosCountArgs<ExtArgs>
            result: $Utils.Optional<CalendariosCountAggregateOutputType> | number
          }
        }
      }
      perfis: {
        payload: Prisma.$perfisPayload<ExtArgs>
        fields: Prisma.perfisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.perfisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.perfisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>
          }
          findFirst: {
            args: Prisma.perfisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.perfisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>
          }
          findMany: {
            args: Prisma.perfisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>[]
          }
          create: {
            args: Prisma.perfisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>
          }
          createMany: {
            args: Prisma.perfisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.perfisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>
          }
          update: {
            args: Prisma.perfisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>
          }
          deleteMany: {
            args: Prisma.perfisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.perfisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.perfisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$perfisPayload>
          }
          aggregate: {
            args: Prisma.PerfisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfis>
          }
          groupBy: {
            args: Prisma.perfisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfisGroupByOutputType>[]
          }
          count: {
            args: Prisma.perfisCountArgs<ExtArgs>
            result: $Utils.Optional<PerfisCountAggregateOutputType> | number
          }
        }
      }
      postagem_comentarios: {
        payload: Prisma.$postagem_comentariosPayload<ExtArgs>
        fields: Prisma.postagem_comentariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postagem_comentariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postagem_comentariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>
          }
          findFirst: {
            args: Prisma.postagem_comentariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postagem_comentariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>
          }
          findMany: {
            args: Prisma.postagem_comentariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>[]
          }
          create: {
            args: Prisma.postagem_comentariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>
          }
          createMany: {
            args: Prisma.postagem_comentariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.postagem_comentariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>
          }
          update: {
            args: Prisma.postagem_comentariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>
          }
          deleteMany: {
            args: Prisma.postagem_comentariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postagem_comentariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postagem_comentariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_comentariosPayload>
          }
          aggregate: {
            args: Prisma.Postagem_comentariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostagem_comentarios>
          }
          groupBy: {
            args: Prisma.postagem_comentariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Postagem_comentariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.postagem_comentariosCountArgs<ExtArgs>
            result: $Utils.Optional<Postagem_comentariosCountAggregateOutputType> | number
          }
        }
      }
      postagens: {
        payload: Prisma.$postagensPayload<ExtArgs>
        fields: Prisma.postagensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postagensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postagensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>
          }
          findFirst: {
            args: Prisma.postagensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postagensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>
          }
          findMany: {
            args: Prisma.postagensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>[]
          }
          create: {
            args: Prisma.postagensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>
          }
          createMany: {
            args: Prisma.postagensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.postagensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>
          }
          update: {
            args: Prisma.postagensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>
          }
          deleteMany: {
            args: Prisma.postagensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postagensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postagensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagensPayload>
          }
          aggregate: {
            args: Prisma.PostagensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostagens>
          }
          groupBy: {
            args: Prisma.postagensGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostagensGroupByOutputType>[]
          }
          count: {
            args: Prisma.postagensCountArgs<ExtArgs>
            result: $Utils.Optional<PostagensCountAggregateOutputType> | number
          }
        }
      }
      postagem_likes: {
        payload: Prisma.$postagem_likesPayload<ExtArgs>
        fields: Prisma.postagem_likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postagem_likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postagem_likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>
          }
          findFirst: {
            args: Prisma.postagem_likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postagem_likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>
          }
          findMany: {
            args: Prisma.postagem_likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>[]
          }
          create: {
            args: Prisma.postagem_likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>
          }
          createMany: {
            args: Prisma.postagem_likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.postagem_likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>
          }
          update: {
            args: Prisma.postagem_likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>
          }
          deleteMany: {
            args: Prisma.postagem_likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postagem_likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postagem_likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postagem_likesPayload>
          }
          aggregate: {
            args: Prisma.Postagem_likesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostagem_likes>
          }
          groupBy: {
            args: Prisma.postagem_likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Postagem_likesGroupByOutputType>[]
          }
          count: {
            args: Prisma.postagem_likesCountArgs<ExtArgs>
            result: $Utils.Optional<Postagem_likesCountAggregateOutputType> | number
          }
        }
      }
      artigos: {
        payload: Prisma.$artigosPayload<ExtArgs>
        fields: Prisma.artigosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artigosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artigosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          findFirst: {
            args: Prisma.artigosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artigosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          findMany: {
            args: Prisma.artigosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>[]
          }
          create: {
            args: Prisma.artigosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          createMany: {
            args: Prisma.artigosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.artigosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          update: {
            args: Prisma.artigosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          deleteMany: {
            args: Prisma.artigosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.artigosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.artigosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigosPayload>
          }
          aggregate: {
            args: Prisma.ArtigosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtigos>
          }
          groupBy: {
            args: Prisma.artigosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtigosGroupByOutputType>[]
          }
          count: {
            args: Prisma.artigosCountArgs<ExtArgs>
            result: $Utils.Optional<ArtigosCountAggregateOutputType> | number
          }
        }
      }
      artigos_favoritos: {
        payload: Prisma.$artigos_favoritosPayload<ExtArgs>
        fields: Prisma.artigos_favoritosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.artigos_favoritosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.artigos_favoritosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>
          }
          findFirst: {
            args: Prisma.artigos_favoritosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.artigos_favoritosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>
          }
          findMany: {
            args: Prisma.artigos_favoritosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>[]
          }
          create: {
            args: Prisma.artigos_favoritosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>
          }
          createMany: {
            args: Prisma.artigos_favoritosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.artigos_favoritosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>
          }
          update: {
            args: Prisma.artigos_favoritosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>
          }
          deleteMany: {
            args: Prisma.artigos_favoritosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.artigos_favoritosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.artigos_favoritosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$artigos_favoritosPayload>
          }
          aggregate: {
            args: Prisma.Artigos_favoritosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtigos_favoritos>
          }
          groupBy: {
            args: Prisma.artigos_favoritosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Artigos_favoritosGroupByOutputType>[]
          }
          count: {
            args: Prisma.artigos_favoritosCountArgs<ExtArgs>
            result: $Utils.Optional<Artigos_favoritosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    cadastros?: cadastrosOmit
    calendarios?: calendariosOmit
    perfis?: perfisOmit
    postagem_comentarios?: postagem_comentariosOmit
    postagens?: postagensOmit
    postagem_likes?: postagem_likesOmit
    artigos?: artigosOmit
    artigos_favoritos?: artigos_favoritosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CadastrosCountOutputType
   */

  export type CadastrosCountOutputType = {
    artigos_favoritos: number
    calendarios: number
    postagem_comentarios: number
    postagem_likes: number
    postagens: number
  }

  export type CadastrosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artigos_favoritos?: boolean | CadastrosCountOutputTypeCountArtigos_favoritosArgs
    calendarios?: boolean | CadastrosCountOutputTypeCountCalendariosArgs
    postagem_comentarios?: boolean | CadastrosCountOutputTypeCountPostagem_comentariosArgs
    postagem_likes?: boolean | CadastrosCountOutputTypeCountPostagem_likesArgs
    postagens?: boolean | CadastrosCountOutputTypeCountPostagensArgs
  }

  // Custom InputTypes
  /**
   * CadastrosCountOutputType without action
   */
  export type CadastrosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CadastrosCountOutputType
     */
    select?: CadastrosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CadastrosCountOutputType without action
   */
  export type CadastrosCountOutputTypeCountArtigos_favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artigos_favoritosWhereInput
  }

  /**
   * CadastrosCountOutputType without action
   */
  export type CadastrosCountOutputTypeCountCalendariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendariosWhereInput
  }

  /**
   * CadastrosCountOutputType without action
   */
  export type CadastrosCountOutputTypeCountPostagem_comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagem_comentariosWhereInput
  }

  /**
   * CadastrosCountOutputType without action
   */
  export type CadastrosCountOutputTypeCountPostagem_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagem_likesWhereInput
  }

  /**
   * CadastrosCountOutputType without action
   */
  export type CadastrosCountOutputTypeCountPostagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagensWhereInput
  }


  /**
   * Count Type PostagensCountOutputType
   */

  export type PostagensCountOutputType = {
    postagem_comentarios: number
    postagem_likes: number
  }

  export type PostagensCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postagem_comentarios?: boolean | PostagensCountOutputTypeCountPostagem_comentariosArgs
    postagem_likes?: boolean | PostagensCountOutputTypeCountPostagem_likesArgs
  }

  // Custom InputTypes
  /**
   * PostagensCountOutputType without action
   */
  export type PostagensCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostagensCountOutputType
     */
    select?: PostagensCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostagensCountOutputType without action
   */
  export type PostagensCountOutputTypeCountPostagem_comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagem_comentariosWhereInput
  }

  /**
   * PostagensCountOutputType without action
   */
  export type PostagensCountOutputTypeCountPostagem_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagem_likesWhereInput
  }


  /**
   * Count Type ArtigosCountOutputType
   */

  export type ArtigosCountOutputType = {
    artigos_favoritos: number
  }

  export type ArtigosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artigos_favoritos?: boolean | ArtigosCountOutputTypeCountArtigos_favoritosArgs
  }

  // Custom InputTypes
  /**
   * ArtigosCountOutputType without action
   */
  export type ArtigosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtigosCountOutputType
     */
    select?: ArtigosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtigosCountOutputType without action
   */
  export type ArtigosCountOutputTypeCountArtigos_favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artigos_favoritosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cadastros
   */

  export type AggregateCadastros = {
    _count: CadastrosCountAggregateOutputType | null
    _avg: CadastrosAvgAggregateOutputType | null
    _sum: CadastrosSumAggregateOutputType | null
    _min: CadastrosMinAggregateOutputType | null
    _max: CadastrosMaxAggregateOutputType | null
  }

  export type CadastrosAvgAggregateOutputType = {
    user_id: number | null
    user_age: number | null
  }

  export type CadastrosSumAggregateOutputType = {
    user_id: number | null
    user_age: number | null
  }

  export type CadastrosMinAggregateOutputType = {
    user_id: number | null
    user_age: number | null
    user_mail: string | null
    user_firstname: string | null
    user_secondname: string | null
    user_phone: string | null
    user_password_hash: string | null
  }

  export type CadastrosMaxAggregateOutputType = {
    user_id: number | null
    user_age: number | null
    user_mail: string | null
    user_firstname: string | null
    user_secondname: string | null
    user_phone: string | null
    user_password_hash: string | null
  }

  export type CadastrosCountAggregateOutputType = {
    user_id: number
    user_age: number
    user_mail: number
    user_firstname: number
    user_secondname: number
    user_phone: number
    user_password_hash: number
    _all: number
  }


  export type CadastrosAvgAggregateInputType = {
    user_id?: true
    user_age?: true
  }

  export type CadastrosSumAggregateInputType = {
    user_id?: true
    user_age?: true
  }

  export type CadastrosMinAggregateInputType = {
    user_id?: true
    user_age?: true
    user_mail?: true
    user_firstname?: true
    user_secondname?: true
    user_phone?: true
    user_password_hash?: true
  }

  export type CadastrosMaxAggregateInputType = {
    user_id?: true
    user_age?: true
    user_mail?: true
    user_firstname?: true
    user_secondname?: true
    user_phone?: true
    user_password_hash?: true
  }

  export type CadastrosCountAggregateInputType = {
    user_id?: true
    user_age?: true
    user_mail?: true
    user_firstname?: true
    user_secondname?: true
    user_phone?: true
    user_password_hash?: true
    _all?: true
  }

  export type CadastrosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastros to aggregate.
     */
    where?: cadastrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastrosOrderByWithRelationInput | cadastrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cadastrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cadastros
    **/
    _count?: true | CadastrosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CadastrosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CadastrosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CadastrosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CadastrosMaxAggregateInputType
  }

  export type GetCadastrosAggregateType<T extends CadastrosAggregateArgs> = {
        [P in keyof T & keyof AggregateCadastros]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCadastros[P]>
      : GetScalarType<T[P], AggregateCadastros[P]>
  }




  export type cadastrosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cadastrosWhereInput
    orderBy?: cadastrosOrderByWithAggregationInput | cadastrosOrderByWithAggregationInput[]
    by: CadastrosScalarFieldEnum[] | CadastrosScalarFieldEnum
    having?: cadastrosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CadastrosCountAggregateInputType | true
    _avg?: CadastrosAvgAggregateInputType
    _sum?: CadastrosSumAggregateInputType
    _min?: CadastrosMinAggregateInputType
    _max?: CadastrosMaxAggregateInputType
  }

  export type CadastrosGroupByOutputType = {
    user_id: number
    user_age: number | null
    user_mail: string | null
    user_firstname: string | null
    user_secondname: string | null
    user_phone: string | null
    user_password_hash: string | null
    _count: CadastrosCountAggregateOutputType | null
    _avg: CadastrosAvgAggregateOutputType | null
    _sum: CadastrosSumAggregateOutputType | null
    _min: CadastrosMinAggregateOutputType | null
    _max: CadastrosMaxAggregateOutputType | null
  }

  type GetCadastrosGroupByPayload<T extends cadastrosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CadastrosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CadastrosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CadastrosGroupByOutputType[P]>
            : GetScalarType<T[P], CadastrosGroupByOutputType[P]>
        }
      >
    >


  export type cadastrosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_age?: boolean
    user_mail?: boolean
    user_firstname?: boolean
    user_secondname?: boolean
    user_phone?: boolean
    user_password_hash?: boolean
    artigos_favoritos?: boolean | cadastros$artigos_favoritosArgs<ExtArgs>
    calendarios?: boolean | cadastros$calendariosArgs<ExtArgs>
    perfis?: boolean | cadastros$perfisArgs<ExtArgs>
    postagem_comentarios?: boolean | cadastros$postagem_comentariosArgs<ExtArgs>
    postagem_likes?: boolean | cadastros$postagem_likesArgs<ExtArgs>
    postagens?: boolean | cadastros$postagensArgs<ExtArgs>
    _count?: boolean | CadastrosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cadastros"]>



  export type cadastrosSelectScalar = {
    user_id?: boolean
    user_age?: boolean
    user_mail?: boolean
    user_firstname?: boolean
    user_secondname?: boolean
    user_phone?: boolean
    user_password_hash?: boolean
  }

  export type cadastrosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_age" | "user_mail" | "user_firstname" | "user_secondname" | "user_phone" | "user_password_hash", ExtArgs["result"]["cadastros"]>
  export type cadastrosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artigos_favoritos?: boolean | cadastros$artigos_favoritosArgs<ExtArgs>
    calendarios?: boolean | cadastros$calendariosArgs<ExtArgs>
    perfis?: boolean | cadastros$perfisArgs<ExtArgs>
    postagem_comentarios?: boolean | cadastros$postagem_comentariosArgs<ExtArgs>
    postagem_likes?: boolean | cadastros$postagem_likesArgs<ExtArgs>
    postagens?: boolean | cadastros$postagensArgs<ExtArgs>
    _count?: boolean | CadastrosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cadastrosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cadastros"
    objects: {
      artigos_favoritos: Prisma.$artigos_favoritosPayload<ExtArgs>[]
      calendarios: Prisma.$calendariosPayload<ExtArgs>[]
      perfis: Prisma.$perfisPayload<ExtArgs> | null
      postagem_comentarios: Prisma.$postagem_comentariosPayload<ExtArgs>[]
      postagem_likes: Prisma.$postagem_likesPayload<ExtArgs>[]
      postagens: Prisma.$postagensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_age: number | null
      user_mail: string | null
      user_firstname: string | null
      user_secondname: string | null
      user_phone: string | null
      user_password_hash: string | null
    }, ExtArgs["result"]["cadastros"]>
    composites: {}
  }

  type cadastrosGetPayload<S extends boolean | null | undefined | cadastrosDefaultArgs> = $Result.GetResult<Prisma.$cadastrosPayload, S>

  type cadastrosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cadastrosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CadastrosCountAggregateInputType | true
    }

  export interface cadastrosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cadastros'], meta: { name: 'cadastros' } }
    /**
     * Find zero or one Cadastros that matches the filter.
     * @param {cadastrosFindUniqueArgs} args - Arguments to find a Cadastros
     * @example
     * // Get one Cadastros
     * const cadastros = await prisma.cadastros.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cadastrosFindUniqueArgs>(args: SelectSubset<T, cadastrosFindUniqueArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cadastros that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cadastrosFindUniqueOrThrowArgs} args - Arguments to find a Cadastros
     * @example
     * // Get one Cadastros
     * const cadastros = await prisma.cadastros.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cadastrosFindUniqueOrThrowArgs>(args: SelectSubset<T, cadastrosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cadastros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrosFindFirstArgs} args - Arguments to find a Cadastros
     * @example
     * // Get one Cadastros
     * const cadastros = await prisma.cadastros.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cadastrosFindFirstArgs>(args?: SelectSubset<T, cadastrosFindFirstArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cadastros that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrosFindFirstOrThrowArgs} args - Arguments to find a Cadastros
     * @example
     * // Get one Cadastros
     * const cadastros = await prisma.cadastros.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cadastrosFindFirstOrThrowArgs>(args?: SelectSubset<T, cadastrosFindFirstOrThrowArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cadastros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cadastros
     * const cadastros = await prisma.cadastros.findMany()
     * 
     * // Get first 10 Cadastros
     * const cadastros = await prisma.cadastros.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const cadastrosWithUser_idOnly = await prisma.cadastros.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends cadastrosFindManyArgs>(args?: SelectSubset<T, cadastrosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cadastros.
     * @param {cadastrosCreateArgs} args - Arguments to create a Cadastros.
     * @example
     * // Create one Cadastros
     * const Cadastros = await prisma.cadastros.create({
     *   data: {
     *     // ... data to create a Cadastros
     *   }
     * })
     * 
     */
    create<T extends cadastrosCreateArgs>(args: SelectSubset<T, cadastrosCreateArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cadastros.
     * @param {cadastrosCreateManyArgs} args - Arguments to create many Cadastros.
     * @example
     * // Create many Cadastros
     * const cadastros = await prisma.cadastros.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cadastrosCreateManyArgs>(args?: SelectSubset<T, cadastrosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cadastros.
     * @param {cadastrosDeleteArgs} args - Arguments to delete one Cadastros.
     * @example
     * // Delete one Cadastros
     * const Cadastros = await prisma.cadastros.delete({
     *   where: {
     *     // ... filter to delete one Cadastros
     *   }
     * })
     * 
     */
    delete<T extends cadastrosDeleteArgs>(args: SelectSubset<T, cadastrosDeleteArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cadastros.
     * @param {cadastrosUpdateArgs} args - Arguments to update one Cadastros.
     * @example
     * // Update one Cadastros
     * const cadastros = await prisma.cadastros.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cadastrosUpdateArgs>(args: SelectSubset<T, cadastrosUpdateArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cadastros.
     * @param {cadastrosDeleteManyArgs} args - Arguments to filter Cadastros to delete.
     * @example
     * // Delete a few Cadastros
     * const { count } = await prisma.cadastros.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cadastrosDeleteManyArgs>(args?: SelectSubset<T, cadastrosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cadastros
     * const cadastros = await prisma.cadastros.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cadastrosUpdateManyArgs>(args: SelectSubset<T, cadastrosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cadastros.
     * @param {cadastrosUpsertArgs} args - Arguments to update or create a Cadastros.
     * @example
     * // Update or create a Cadastros
     * const cadastros = await prisma.cadastros.upsert({
     *   create: {
     *     // ... data to create a Cadastros
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cadastros we want to update
     *   }
     * })
     */
    upsert<T extends cadastrosUpsertArgs>(args: SelectSubset<T, cadastrosUpsertArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrosCountArgs} args - Arguments to filter Cadastros to count.
     * @example
     * // Count the number of Cadastros
     * const count = await prisma.cadastros.count({
     *   where: {
     *     // ... the filter for the Cadastros we want to count
     *   }
     * })
    **/
    count<T extends cadastrosCountArgs>(
      args?: Subset<T, cadastrosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CadastrosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CadastrosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CadastrosAggregateArgs>(args: Subset<T, CadastrosAggregateArgs>): Prisma.PrismaPromise<GetCadastrosAggregateType<T>>

    /**
     * Group by Cadastros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cadastrosGroupByArgs} args - Group by arguments.
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
      T extends cadastrosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cadastrosGroupByArgs['orderBy'] }
        : { orderBy?: cadastrosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cadastrosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCadastrosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cadastros model
   */
  readonly fields: cadastrosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cadastros.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cadastrosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artigos_favoritos<T extends cadastros$artigos_favoritosArgs<ExtArgs> = {}>(args?: Subset<T, cadastros$artigos_favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarios<T extends cadastros$calendariosArgs<ExtArgs> = {}>(args?: Subset<T, cadastros$calendariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perfis<T extends cadastros$perfisArgs<ExtArgs> = {}>(args?: Subset<T, cadastros$perfisArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    postagem_comentarios<T extends cadastros$postagem_comentariosArgs<ExtArgs> = {}>(args?: Subset<T, cadastros$postagem_comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postagem_likes<T extends cadastros$postagem_likesArgs<ExtArgs> = {}>(args?: Subset<T, cadastros$postagem_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postagens<T extends cadastros$postagensArgs<ExtArgs> = {}>(args?: Subset<T, cadastros$postagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cadastros model
   */
  interface cadastrosFieldRefs {
    readonly user_id: FieldRef<"cadastros", 'Int'>
    readonly user_age: FieldRef<"cadastros", 'Int'>
    readonly user_mail: FieldRef<"cadastros", 'String'>
    readonly user_firstname: FieldRef<"cadastros", 'String'>
    readonly user_secondname: FieldRef<"cadastros", 'String'>
    readonly user_phone: FieldRef<"cadastros", 'String'>
    readonly user_password_hash: FieldRef<"cadastros", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cadastros findUnique
   */
  export type cadastrosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where: cadastrosWhereUniqueInput
  }

  /**
   * cadastros findUniqueOrThrow
   */
  export type cadastrosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where: cadastrosWhereUniqueInput
  }

  /**
   * cadastros findFirst
   */
  export type cadastrosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where?: cadastrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastrosOrderByWithRelationInput | cadastrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastros.
     */
    cursor?: cadastrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastros.
     */
    distinct?: CadastrosScalarFieldEnum | CadastrosScalarFieldEnum[]
  }

  /**
   * cadastros findFirstOrThrow
   */
  export type cadastrosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where?: cadastrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastrosOrderByWithRelationInput | cadastrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cadastros.
     */
    cursor?: cadastrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cadastros.
     */
    distinct?: CadastrosScalarFieldEnum | CadastrosScalarFieldEnum[]
  }

  /**
   * cadastros findMany
   */
  export type cadastrosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * Filter, which cadastros to fetch.
     */
    where?: cadastrosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cadastros to fetch.
     */
    orderBy?: cadastrosOrderByWithRelationInput | cadastrosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cadastros.
     */
    cursor?: cadastrosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cadastros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cadastros.
     */
    skip?: number
    distinct?: CadastrosScalarFieldEnum | CadastrosScalarFieldEnum[]
  }

  /**
   * cadastros create
   */
  export type cadastrosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * The data needed to create a cadastros.
     */
    data?: XOR<cadastrosCreateInput, cadastrosUncheckedCreateInput>
  }

  /**
   * cadastros createMany
   */
  export type cadastrosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cadastros.
     */
    data: cadastrosCreateManyInput | cadastrosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cadastros update
   */
  export type cadastrosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * The data needed to update a cadastros.
     */
    data: XOR<cadastrosUpdateInput, cadastrosUncheckedUpdateInput>
    /**
     * Choose, which cadastros to update.
     */
    where: cadastrosWhereUniqueInput
  }

  /**
   * cadastros updateMany
   */
  export type cadastrosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cadastros.
     */
    data: XOR<cadastrosUpdateManyMutationInput, cadastrosUncheckedUpdateManyInput>
    /**
     * Filter which cadastros to update
     */
    where?: cadastrosWhereInput
    /**
     * Limit how many cadastros to update.
     */
    limit?: number
  }

  /**
   * cadastros upsert
   */
  export type cadastrosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * The filter to search for the cadastros to update in case it exists.
     */
    where: cadastrosWhereUniqueInput
    /**
     * In case the cadastros found by the `where` argument doesn't exist, create a new cadastros with this data.
     */
    create: XOR<cadastrosCreateInput, cadastrosUncheckedCreateInput>
    /**
     * In case the cadastros was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cadastrosUpdateInput, cadastrosUncheckedUpdateInput>
  }

  /**
   * cadastros delete
   */
  export type cadastrosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    /**
     * Filter which cadastros to delete.
     */
    where: cadastrosWhereUniqueInput
  }

  /**
   * cadastros deleteMany
   */
  export type cadastrosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cadastros to delete
     */
    where?: cadastrosWhereInput
    /**
     * Limit how many cadastros to delete.
     */
    limit?: number
  }

  /**
   * cadastros.artigos_favoritos
   */
  export type cadastros$artigos_favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    where?: artigos_favoritosWhereInput
    orderBy?: artigos_favoritosOrderByWithRelationInput | artigos_favoritosOrderByWithRelationInput[]
    cursor?: artigos_favoritosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Artigos_favoritosScalarFieldEnum | Artigos_favoritosScalarFieldEnum[]
  }

  /**
   * cadastros.calendarios
   */
  export type cadastros$calendariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    where?: calendariosWhereInput
    orderBy?: calendariosOrderByWithRelationInput | calendariosOrderByWithRelationInput[]
    cursor?: calendariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendariosScalarFieldEnum | CalendariosScalarFieldEnum[]
  }

  /**
   * cadastros.perfis
   */
  export type cadastros$perfisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    where?: perfisWhereInput
  }

  /**
   * cadastros.postagem_comentarios
   */
  export type cadastros$postagem_comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    where?: postagem_comentariosWhereInput
    orderBy?: postagem_comentariosOrderByWithRelationInput | postagem_comentariosOrderByWithRelationInput[]
    cursor?: postagem_comentariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Postagem_comentariosScalarFieldEnum | Postagem_comentariosScalarFieldEnum[]
  }

  /**
   * cadastros.postagem_likes
   */
  export type cadastros$postagem_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    where?: postagem_likesWhereInput
    orderBy?: postagem_likesOrderByWithRelationInput | postagem_likesOrderByWithRelationInput[]
    cursor?: postagem_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Postagem_likesScalarFieldEnum | Postagem_likesScalarFieldEnum[]
  }

  /**
   * cadastros.postagens
   */
  export type cadastros$postagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    where?: postagensWhereInput
    orderBy?: postagensOrderByWithRelationInput | postagensOrderByWithRelationInput[]
    cursor?: postagensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostagensScalarFieldEnum | PostagensScalarFieldEnum[]
  }

  /**
   * cadastros without action
   */
  export type cadastrosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
  }


  /**
   * Model calendarios
   */

  export type AggregateCalendarios = {
    _count: CalendariosCountAggregateOutputType | null
    _avg: CalendariosAvgAggregateOutputType | null
    _sum: CalendariosSumAggregateOutputType | null
    _min: CalendariosMinAggregateOutputType | null
    _max: CalendariosMaxAggregateOutputType | null
  }

  export type CalendariosAvgAggregateOutputType = {
    calendar_id: number | null
    user_id: number | null
  }

  export type CalendariosSumAggregateOutputType = {
    calendar_id: number | null
    user_id: number | null
  }

  export type CalendariosMinAggregateOutputType = {
    calendar_id: number | null
    user_id: number | null
    calendar_data: Date | null
    calendar_consulta: string | null
  }

  export type CalendariosMaxAggregateOutputType = {
    calendar_id: number | null
    user_id: number | null
    calendar_data: Date | null
    calendar_consulta: string | null
  }

  export type CalendariosCountAggregateOutputType = {
    calendar_id: number
    user_id: number
    calendar_data: number
    calendar_consulta: number
    _all: number
  }


  export type CalendariosAvgAggregateInputType = {
    calendar_id?: true
    user_id?: true
  }

  export type CalendariosSumAggregateInputType = {
    calendar_id?: true
    user_id?: true
  }

  export type CalendariosMinAggregateInputType = {
    calendar_id?: true
    user_id?: true
    calendar_data?: true
    calendar_consulta?: true
  }

  export type CalendariosMaxAggregateInputType = {
    calendar_id?: true
    user_id?: true
    calendar_data?: true
    calendar_consulta?: true
  }

  export type CalendariosCountAggregateInputType = {
    calendar_id?: true
    user_id?: true
    calendar_data?: true
    calendar_consulta?: true
    _all?: true
  }

  export type CalendariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendarios to aggregate.
     */
    where?: calendariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendarios to fetch.
     */
    orderBy?: calendariosOrderByWithRelationInput | calendariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: calendariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned calendarios
    **/
    _count?: true | CalendariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendariosMaxAggregateInputType
  }

  export type GetCalendariosAggregateType<T extends CalendariosAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarios[P]>
      : GetScalarType<T[P], AggregateCalendarios[P]>
  }




  export type calendariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: calendariosWhereInput
    orderBy?: calendariosOrderByWithAggregationInput | calendariosOrderByWithAggregationInput[]
    by: CalendariosScalarFieldEnum[] | CalendariosScalarFieldEnum
    having?: calendariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendariosCountAggregateInputType | true
    _avg?: CalendariosAvgAggregateInputType
    _sum?: CalendariosSumAggregateInputType
    _min?: CalendariosMinAggregateInputType
    _max?: CalendariosMaxAggregateInputType
  }

  export type CalendariosGroupByOutputType = {
    calendar_id: number
    user_id: number | null
    calendar_data: Date | null
    calendar_consulta: string | null
    _count: CalendariosCountAggregateOutputType | null
    _avg: CalendariosAvgAggregateOutputType | null
    _sum: CalendariosSumAggregateOutputType | null
    _min: CalendariosMinAggregateOutputType | null
    _max: CalendariosMaxAggregateOutputType | null
  }

  type GetCalendariosGroupByPayload<T extends calendariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendariosGroupByOutputType[P]>
            : GetScalarType<T[P], CalendariosGroupByOutputType[P]>
        }
      >
    >


  export type calendariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    calendar_id?: boolean
    user_id?: boolean
    calendar_data?: boolean
    calendar_consulta?: boolean
    cadastros?: boolean | calendarios$cadastrosArgs<ExtArgs>
  }, ExtArgs["result"]["calendarios"]>



  export type calendariosSelectScalar = {
    calendar_id?: boolean
    user_id?: boolean
    calendar_data?: boolean
    calendar_consulta?: boolean
  }

  export type calendariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"calendar_id" | "user_id" | "calendar_data" | "calendar_consulta", ExtArgs["result"]["calendarios"]>
  export type calendariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastros?: boolean | calendarios$cadastrosArgs<ExtArgs>
  }

  export type $calendariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "calendarios"
    objects: {
      cadastros: Prisma.$cadastrosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      calendar_id: number
      user_id: number | null
      calendar_data: Date | null
      calendar_consulta: string | null
    }, ExtArgs["result"]["calendarios"]>
    composites: {}
  }

  type calendariosGetPayload<S extends boolean | null | undefined | calendariosDefaultArgs> = $Result.GetResult<Prisma.$calendariosPayload, S>

  type calendariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<calendariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendariosCountAggregateInputType | true
    }

  export interface calendariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['calendarios'], meta: { name: 'calendarios' } }
    /**
     * Find zero or one Calendarios that matches the filter.
     * @param {calendariosFindUniqueArgs} args - Arguments to find a Calendarios
     * @example
     * // Get one Calendarios
     * const calendarios = await prisma.calendarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends calendariosFindUniqueArgs>(args: SelectSubset<T, calendariosFindUniqueArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Calendarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {calendariosFindUniqueOrThrowArgs} args - Arguments to find a Calendarios
     * @example
     * // Get one Calendarios
     * const calendarios = await prisma.calendarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends calendariosFindUniqueOrThrowArgs>(args: SelectSubset<T, calendariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendariosFindFirstArgs} args - Arguments to find a Calendarios
     * @example
     * // Get one Calendarios
     * const calendarios = await prisma.calendarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends calendariosFindFirstArgs>(args?: SelectSubset<T, calendariosFindFirstArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Calendarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendariosFindFirstOrThrowArgs} args - Arguments to find a Calendarios
     * @example
     * // Get one Calendarios
     * const calendarios = await prisma.calendarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends calendariosFindFirstOrThrowArgs>(args?: SelectSubset<T, calendariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Calendarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendarios
     * const calendarios = await prisma.calendarios.findMany()
     * 
     * // Get first 10 Calendarios
     * const calendarios = await prisma.calendarios.findMany({ take: 10 })
     * 
     * // Only select the `calendar_id`
     * const calendariosWithCalendar_idOnly = await prisma.calendarios.findMany({ select: { calendar_id: true } })
     * 
     */
    findMany<T extends calendariosFindManyArgs>(args?: SelectSubset<T, calendariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Calendarios.
     * @param {calendariosCreateArgs} args - Arguments to create a Calendarios.
     * @example
     * // Create one Calendarios
     * const Calendarios = await prisma.calendarios.create({
     *   data: {
     *     // ... data to create a Calendarios
     *   }
     * })
     * 
     */
    create<T extends calendariosCreateArgs>(args: SelectSubset<T, calendariosCreateArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Calendarios.
     * @param {calendariosCreateManyArgs} args - Arguments to create many Calendarios.
     * @example
     * // Create many Calendarios
     * const calendarios = await prisma.calendarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends calendariosCreateManyArgs>(args?: SelectSubset<T, calendariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Calendarios.
     * @param {calendariosDeleteArgs} args - Arguments to delete one Calendarios.
     * @example
     * // Delete one Calendarios
     * const Calendarios = await prisma.calendarios.delete({
     *   where: {
     *     // ... filter to delete one Calendarios
     *   }
     * })
     * 
     */
    delete<T extends calendariosDeleteArgs>(args: SelectSubset<T, calendariosDeleteArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Calendarios.
     * @param {calendariosUpdateArgs} args - Arguments to update one Calendarios.
     * @example
     * // Update one Calendarios
     * const calendarios = await prisma.calendarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends calendariosUpdateArgs>(args: SelectSubset<T, calendariosUpdateArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Calendarios.
     * @param {calendariosDeleteManyArgs} args - Arguments to filter Calendarios to delete.
     * @example
     * // Delete a few Calendarios
     * const { count } = await prisma.calendarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends calendariosDeleteManyArgs>(args?: SelectSubset<T, calendariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendarios
     * const calendarios = await prisma.calendarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends calendariosUpdateManyArgs>(args: SelectSubset<T, calendariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calendarios.
     * @param {calendariosUpsertArgs} args - Arguments to update or create a Calendarios.
     * @example
     * // Update or create a Calendarios
     * const calendarios = await prisma.calendarios.upsert({
     *   create: {
     *     // ... data to create a Calendarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendarios we want to update
     *   }
     * })
     */
    upsert<T extends calendariosUpsertArgs>(args: SelectSubset<T, calendariosUpsertArgs<ExtArgs>>): Prisma__calendariosClient<$Result.GetResult<Prisma.$calendariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendariosCountArgs} args - Arguments to filter Calendarios to count.
     * @example
     * // Count the number of Calendarios
     * const count = await prisma.calendarios.count({
     *   where: {
     *     // ... the filter for the Calendarios we want to count
     *   }
     * })
    **/
    count<T extends calendariosCountArgs>(
      args?: Subset<T, calendariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendariosAggregateArgs>(args: Subset<T, CalendariosAggregateArgs>): Prisma.PrismaPromise<GetCalendariosAggregateType<T>>

    /**
     * Group by Calendarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {calendariosGroupByArgs} args - Group by arguments.
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
      T extends calendariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: calendariosGroupByArgs['orderBy'] }
        : { orderBy?: calendariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, calendariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the calendarios model
   */
  readonly fields: calendariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for calendarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__calendariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastros<T extends calendarios$cadastrosArgs<ExtArgs> = {}>(args?: Subset<T, calendarios$cadastrosArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the calendarios model
   */
  interface calendariosFieldRefs {
    readonly calendar_id: FieldRef<"calendarios", 'Int'>
    readonly user_id: FieldRef<"calendarios", 'Int'>
    readonly calendar_data: FieldRef<"calendarios", 'DateTime'>
    readonly calendar_consulta: FieldRef<"calendarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * calendarios findUnique
   */
  export type calendariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * Filter, which calendarios to fetch.
     */
    where: calendariosWhereUniqueInput
  }

  /**
   * calendarios findUniqueOrThrow
   */
  export type calendariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * Filter, which calendarios to fetch.
     */
    where: calendariosWhereUniqueInput
  }

  /**
   * calendarios findFirst
   */
  export type calendariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * Filter, which calendarios to fetch.
     */
    where?: calendariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendarios to fetch.
     */
    orderBy?: calendariosOrderByWithRelationInput | calendariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendarios.
     */
    cursor?: calendariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendarios.
     */
    distinct?: CalendariosScalarFieldEnum | CalendariosScalarFieldEnum[]
  }

  /**
   * calendarios findFirstOrThrow
   */
  export type calendariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * Filter, which calendarios to fetch.
     */
    where?: calendariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendarios to fetch.
     */
    orderBy?: calendariosOrderByWithRelationInput | calendariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for calendarios.
     */
    cursor?: calendariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of calendarios.
     */
    distinct?: CalendariosScalarFieldEnum | CalendariosScalarFieldEnum[]
  }

  /**
   * calendarios findMany
   */
  export type calendariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * Filter, which calendarios to fetch.
     */
    where?: calendariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of calendarios to fetch.
     */
    orderBy?: calendariosOrderByWithRelationInput | calendariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing calendarios.
     */
    cursor?: calendariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` calendarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` calendarios.
     */
    skip?: number
    distinct?: CalendariosScalarFieldEnum | CalendariosScalarFieldEnum[]
  }

  /**
   * calendarios create
   */
  export type calendariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * The data needed to create a calendarios.
     */
    data?: XOR<calendariosCreateInput, calendariosUncheckedCreateInput>
  }

  /**
   * calendarios createMany
   */
  export type calendariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many calendarios.
     */
    data: calendariosCreateManyInput | calendariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * calendarios update
   */
  export type calendariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * The data needed to update a calendarios.
     */
    data: XOR<calendariosUpdateInput, calendariosUncheckedUpdateInput>
    /**
     * Choose, which calendarios to update.
     */
    where: calendariosWhereUniqueInput
  }

  /**
   * calendarios updateMany
   */
  export type calendariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update calendarios.
     */
    data: XOR<calendariosUpdateManyMutationInput, calendariosUncheckedUpdateManyInput>
    /**
     * Filter which calendarios to update
     */
    where?: calendariosWhereInput
    /**
     * Limit how many calendarios to update.
     */
    limit?: number
  }

  /**
   * calendarios upsert
   */
  export type calendariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * The filter to search for the calendarios to update in case it exists.
     */
    where: calendariosWhereUniqueInput
    /**
     * In case the calendarios found by the `where` argument doesn't exist, create a new calendarios with this data.
     */
    create: XOR<calendariosCreateInput, calendariosUncheckedCreateInput>
    /**
     * In case the calendarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<calendariosUpdateInput, calendariosUncheckedUpdateInput>
  }

  /**
   * calendarios delete
   */
  export type calendariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
    /**
     * Filter which calendarios to delete.
     */
    where: calendariosWhereUniqueInput
  }

  /**
   * calendarios deleteMany
   */
  export type calendariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which calendarios to delete
     */
    where?: calendariosWhereInput
    /**
     * Limit how many calendarios to delete.
     */
    limit?: number
  }

  /**
   * calendarios.cadastros
   */
  export type calendarios$cadastrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    where?: cadastrosWhereInput
  }

  /**
   * calendarios without action
   */
  export type calendariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the calendarios
     */
    select?: calendariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the calendarios
     */
    omit?: calendariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: calendariosInclude<ExtArgs> | null
  }


  /**
   * Model perfis
   */

  export type AggregatePerfis = {
    _count: PerfisCountAggregateOutputType | null
    _avg: PerfisAvgAggregateOutputType | null
    _sum: PerfisSumAggregateOutputType | null
    _min: PerfisMinAggregateOutputType | null
    _max: PerfisMaxAggregateOutputType | null
  }

  export type PerfisAvgAggregateOutputType = {
    user_id: number | null
  }

  export type PerfisSumAggregateOutputType = {
    user_id: number | null
  }

  export type PerfisMinAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_image: Bytes | null
  }

  export type PerfisMaxAggregateOutputType = {
    user_id: number | null
    user_name: string | null
    user_image: Bytes | null
  }

  export type PerfisCountAggregateOutputType = {
    user_id: number
    user_name: number
    user_image: number
    _all: number
  }


  export type PerfisAvgAggregateInputType = {
    user_id?: true
  }

  export type PerfisSumAggregateInputType = {
    user_id?: true
  }

  export type PerfisMinAggregateInputType = {
    user_id?: true
    user_name?: true
    user_image?: true
  }

  export type PerfisMaxAggregateInputType = {
    user_id?: true
    user_name?: true
    user_image?: true
  }

  export type PerfisCountAggregateInputType = {
    user_id?: true
    user_name?: true
    user_image?: true
    _all?: true
  }

  export type PerfisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfis to aggregate.
     */
    where?: perfisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfis to fetch.
     */
    orderBy?: perfisOrderByWithRelationInput | perfisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: perfisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned perfis
    **/
    _count?: true | PerfisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfisMaxAggregateInputType
  }

  export type GetPerfisAggregateType<T extends PerfisAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfis[P]>
      : GetScalarType<T[P], AggregatePerfis[P]>
  }




  export type perfisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: perfisWhereInput
    orderBy?: perfisOrderByWithAggregationInput | perfisOrderByWithAggregationInput[]
    by: PerfisScalarFieldEnum[] | PerfisScalarFieldEnum
    having?: perfisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfisCountAggregateInputType | true
    _avg?: PerfisAvgAggregateInputType
    _sum?: PerfisSumAggregateInputType
    _min?: PerfisMinAggregateInputType
    _max?: PerfisMaxAggregateInputType
  }

  export type PerfisGroupByOutputType = {
    user_id: number
    user_name: string | null
    user_image: Bytes | null
    _count: PerfisCountAggregateOutputType | null
    _avg: PerfisAvgAggregateOutputType | null
    _sum: PerfisSumAggregateOutputType | null
    _min: PerfisMinAggregateOutputType | null
    _max: PerfisMaxAggregateOutputType | null
  }

  type GetPerfisGroupByPayload<T extends perfisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfisGroupByOutputType[P]>
            : GetScalarType<T[P], PerfisGroupByOutputType[P]>
        }
      >
    >


  export type perfisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    user_name?: boolean
    user_image?: boolean
    cadastros?: boolean | cadastrosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfis"]>



  export type perfisSelectScalar = {
    user_id?: boolean
    user_name?: boolean
    user_image?: boolean
  }

  export type perfisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "user_name" | "user_image", ExtArgs["result"]["perfis"]>
  export type perfisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastros?: boolean | cadastrosDefaultArgs<ExtArgs>
  }

  export type $perfisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "perfis"
    objects: {
      cadastros: Prisma.$cadastrosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      user_name: string | null
      user_image: Prisma.Bytes | null
    }, ExtArgs["result"]["perfis"]>
    composites: {}
  }

  type perfisGetPayload<S extends boolean | null | undefined | perfisDefaultArgs> = $Result.GetResult<Prisma.$perfisPayload, S>

  type perfisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<perfisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfisCountAggregateInputType | true
    }

  export interface perfisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['perfis'], meta: { name: 'perfis' } }
    /**
     * Find zero or one Perfis that matches the filter.
     * @param {perfisFindUniqueArgs} args - Arguments to find a Perfis
     * @example
     * // Get one Perfis
     * const perfis = await prisma.perfis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends perfisFindUniqueArgs>(args: SelectSubset<T, perfisFindUniqueArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {perfisFindUniqueOrThrowArgs} args - Arguments to find a Perfis
     * @example
     * // Get one Perfis
     * const perfis = await prisma.perfis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends perfisFindUniqueOrThrowArgs>(args: SelectSubset<T, perfisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfisFindFirstArgs} args - Arguments to find a Perfis
     * @example
     * // Get one Perfis
     * const perfis = await prisma.perfis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends perfisFindFirstArgs>(args?: SelectSubset<T, perfisFindFirstArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfisFindFirstOrThrowArgs} args - Arguments to find a Perfis
     * @example
     * // Get one Perfis
     * const perfis = await prisma.perfis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends perfisFindFirstOrThrowArgs>(args?: SelectSubset<T, perfisFindFirstOrThrowArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfis
     * const perfis = await prisma.perfis.findMany()
     * 
     * // Get first 10 Perfis
     * const perfis = await prisma.perfis.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const perfisWithUser_idOnly = await prisma.perfis.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends perfisFindManyArgs>(args?: SelectSubset<T, perfisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfis.
     * @param {perfisCreateArgs} args - Arguments to create a Perfis.
     * @example
     * // Create one Perfis
     * const Perfis = await prisma.perfis.create({
     *   data: {
     *     // ... data to create a Perfis
     *   }
     * })
     * 
     */
    create<T extends perfisCreateArgs>(args: SelectSubset<T, perfisCreateArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfis.
     * @param {perfisCreateManyArgs} args - Arguments to create many Perfis.
     * @example
     * // Create many Perfis
     * const perfis = await prisma.perfis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends perfisCreateManyArgs>(args?: SelectSubset<T, perfisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Perfis.
     * @param {perfisDeleteArgs} args - Arguments to delete one Perfis.
     * @example
     * // Delete one Perfis
     * const Perfis = await prisma.perfis.delete({
     *   where: {
     *     // ... filter to delete one Perfis
     *   }
     * })
     * 
     */
    delete<T extends perfisDeleteArgs>(args: SelectSubset<T, perfisDeleteArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfis.
     * @param {perfisUpdateArgs} args - Arguments to update one Perfis.
     * @example
     * // Update one Perfis
     * const perfis = await prisma.perfis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends perfisUpdateArgs>(args: SelectSubset<T, perfisUpdateArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfis.
     * @param {perfisDeleteManyArgs} args - Arguments to filter Perfis to delete.
     * @example
     * // Delete a few Perfis
     * const { count } = await prisma.perfis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends perfisDeleteManyArgs>(args?: SelectSubset<T, perfisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfis
     * const perfis = await prisma.perfis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends perfisUpdateManyArgs>(args: SelectSubset<T, perfisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfis.
     * @param {perfisUpsertArgs} args - Arguments to update or create a Perfis.
     * @example
     * // Update or create a Perfis
     * const perfis = await prisma.perfis.upsert({
     *   create: {
     *     // ... data to create a Perfis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfis we want to update
     *   }
     * })
     */
    upsert<T extends perfisUpsertArgs>(args: SelectSubset<T, perfisUpsertArgs<ExtArgs>>): Prisma__perfisClient<$Result.GetResult<Prisma.$perfisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfisCountArgs} args - Arguments to filter Perfis to count.
     * @example
     * // Count the number of Perfis
     * const count = await prisma.perfis.count({
     *   where: {
     *     // ... the filter for the Perfis we want to count
     *   }
     * })
    **/
    count<T extends perfisCountArgs>(
      args?: Subset<T, perfisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerfisAggregateArgs>(args: Subset<T, PerfisAggregateArgs>): Prisma.PrismaPromise<GetPerfisAggregateType<T>>

    /**
     * Group by Perfis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {perfisGroupByArgs} args - Group by arguments.
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
      T extends perfisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: perfisGroupByArgs['orderBy'] }
        : { orderBy?: perfisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, perfisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the perfis model
   */
  readonly fields: perfisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for perfis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__perfisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastros<T extends cadastrosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cadastrosDefaultArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the perfis model
   */
  interface perfisFieldRefs {
    readonly user_id: FieldRef<"perfis", 'Int'>
    readonly user_name: FieldRef<"perfis", 'String'>
    readonly user_image: FieldRef<"perfis", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * perfis findUnique
   */
  export type perfisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * Filter, which perfis to fetch.
     */
    where: perfisWhereUniqueInput
  }

  /**
   * perfis findUniqueOrThrow
   */
  export type perfisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * Filter, which perfis to fetch.
     */
    where: perfisWhereUniqueInput
  }

  /**
   * perfis findFirst
   */
  export type perfisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * Filter, which perfis to fetch.
     */
    where?: perfisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfis to fetch.
     */
    orderBy?: perfisOrderByWithRelationInput | perfisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfis.
     */
    cursor?: perfisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfis.
     */
    distinct?: PerfisScalarFieldEnum | PerfisScalarFieldEnum[]
  }

  /**
   * perfis findFirstOrThrow
   */
  export type perfisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * Filter, which perfis to fetch.
     */
    where?: perfisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfis to fetch.
     */
    orderBy?: perfisOrderByWithRelationInput | perfisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for perfis.
     */
    cursor?: perfisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of perfis.
     */
    distinct?: PerfisScalarFieldEnum | PerfisScalarFieldEnum[]
  }

  /**
   * perfis findMany
   */
  export type perfisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * Filter, which perfis to fetch.
     */
    where?: perfisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of perfis to fetch.
     */
    orderBy?: perfisOrderByWithRelationInput | perfisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing perfis.
     */
    cursor?: perfisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` perfis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` perfis.
     */
    skip?: number
    distinct?: PerfisScalarFieldEnum | PerfisScalarFieldEnum[]
  }

  /**
   * perfis create
   */
  export type perfisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * The data needed to create a perfis.
     */
    data: XOR<perfisCreateInput, perfisUncheckedCreateInput>
  }

  /**
   * perfis createMany
   */
  export type perfisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many perfis.
     */
    data: perfisCreateManyInput | perfisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * perfis update
   */
  export type perfisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * The data needed to update a perfis.
     */
    data: XOR<perfisUpdateInput, perfisUncheckedUpdateInput>
    /**
     * Choose, which perfis to update.
     */
    where: perfisWhereUniqueInput
  }

  /**
   * perfis updateMany
   */
  export type perfisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update perfis.
     */
    data: XOR<perfisUpdateManyMutationInput, perfisUncheckedUpdateManyInput>
    /**
     * Filter which perfis to update
     */
    where?: perfisWhereInput
    /**
     * Limit how many perfis to update.
     */
    limit?: number
  }

  /**
   * perfis upsert
   */
  export type perfisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * The filter to search for the perfis to update in case it exists.
     */
    where: perfisWhereUniqueInput
    /**
     * In case the perfis found by the `where` argument doesn't exist, create a new perfis with this data.
     */
    create: XOR<perfisCreateInput, perfisUncheckedCreateInput>
    /**
     * In case the perfis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<perfisUpdateInput, perfisUncheckedUpdateInput>
  }

  /**
   * perfis delete
   */
  export type perfisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
    /**
     * Filter which perfis to delete.
     */
    where: perfisWhereUniqueInput
  }

  /**
   * perfis deleteMany
   */
  export type perfisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which perfis to delete
     */
    where?: perfisWhereInput
    /**
     * Limit how many perfis to delete.
     */
    limit?: number
  }

  /**
   * perfis without action
   */
  export type perfisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the perfis
     */
    select?: perfisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the perfis
     */
    omit?: perfisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: perfisInclude<ExtArgs> | null
  }


  /**
   * Model postagem_comentarios
   */

  export type AggregatePostagem_comentarios = {
    _count: Postagem_comentariosCountAggregateOutputType | null
    _avg: Postagem_comentariosAvgAggregateOutputType | null
    _sum: Postagem_comentariosSumAggregateOutputType | null
    _min: Postagem_comentariosMinAggregateOutputType | null
    _max: Postagem_comentariosMaxAggregateOutputType | null
  }

  export type Postagem_comentariosAvgAggregateOutputType = {
    comentario_id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type Postagem_comentariosSumAggregateOutputType = {
    comentario_id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type Postagem_comentariosMinAggregateOutputType = {
    comentario_id: number | null
    post_id: number | null
    user_id: number | null
    comentario_text: string | null
    comentario_data: Date | null
  }

  export type Postagem_comentariosMaxAggregateOutputType = {
    comentario_id: number | null
    post_id: number | null
    user_id: number | null
    comentario_text: string | null
    comentario_data: Date | null
  }

  export type Postagem_comentariosCountAggregateOutputType = {
    comentario_id: number
    post_id: number
    user_id: number
    comentario_text: number
    comentario_data: number
    _all: number
  }


  export type Postagem_comentariosAvgAggregateInputType = {
    comentario_id?: true
    post_id?: true
    user_id?: true
  }

  export type Postagem_comentariosSumAggregateInputType = {
    comentario_id?: true
    post_id?: true
    user_id?: true
  }

  export type Postagem_comentariosMinAggregateInputType = {
    comentario_id?: true
    post_id?: true
    user_id?: true
    comentario_text?: true
    comentario_data?: true
  }

  export type Postagem_comentariosMaxAggregateInputType = {
    comentario_id?: true
    post_id?: true
    user_id?: true
    comentario_text?: true
    comentario_data?: true
  }

  export type Postagem_comentariosCountAggregateInputType = {
    comentario_id?: true
    post_id?: true
    user_id?: true
    comentario_text?: true
    comentario_data?: true
    _all?: true
  }

  export type Postagem_comentariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postagem_comentarios to aggregate.
     */
    where?: postagem_comentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_comentarios to fetch.
     */
    orderBy?: postagem_comentariosOrderByWithRelationInput | postagem_comentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postagem_comentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned postagem_comentarios
    **/
    _count?: true | Postagem_comentariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Postagem_comentariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Postagem_comentariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Postagem_comentariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Postagem_comentariosMaxAggregateInputType
  }

  export type GetPostagem_comentariosAggregateType<T extends Postagem_comentariosAggregateArgs> = {
        [P in keyof T & keyof AggregatePostagem_comentarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostagem_comentarios[P]>
      : GetScalarType<T[P], AggregatePostagem_comentarios[P]>
  }




  export type postagem_comentariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagem_comentariosWhereInput
    orderBy?: postagem_comentariosOrderByWithAggregationInput | postagem_comentariosOrderByWithAggregationInput[]
    by: Postagem_comentariosScalarFieldEnum[] | Postagem_comentariosScalarFieldEnum
    having?: postagem_comentariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Postagem_comentariosCountAggregateInputType | true
    _avg?: Postagem_comentariosAvgAggregateInputType
    _sum?: Postagem_comentariosSumAggregateInputType
    _min?: Postagem_comentariosMinAggregateInputType
    _max?: Postagem_comentariosMaxAggregateInputType
  }

  export type Postagem_comentariosGroupByOutputType = {
    comentario_id: number
    post_id: number | null
    user_id: number | null
    comentario_text: string | null
    comentario_data: Date | null
    _count: Postagem_comentariosCountAggregateOutputType | null
    _avg: Postagem_comentariosAvgAggregateOutputType | null
    _sum: Postagem_comentariosSumAggregateOutputType | null
    _min: Postagem_comentariosMinAggregateOutputType | null
    _max: Postagem_comentariosMaxAggregateOutputType | null
  }

  type GetPostagem_comentariosGroupByPayload<T extends postagem_comentariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Postagem_comentariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Postagem_comentariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Postagem_comentariosGroupByOutputType[P]>
            : GetScalarType<T[P], Postagem_comentariosGroupByOutputType[P]>
        }
      >
    >


  export type postagem_comentariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comentario_id?: boolean
    post_id?: boolean
    user_id?: boolean
    comentario_text?: boolean
    comentario_data?: boolean
    postagens?: boolean | postagem_comentarios$postagensArgs<ExtArgs>
    cadastros?: boolean | postagem_comentarios$cadastrosArgs<ExtArgs>
  }, ExtArgs["result"]["postagem_comentarios"]>



  export type postagem_comentariosSelectScalar = {
    comentario_id?: boolean
    post_id?: boolean
    user_id?: boolean
    comentario_text?: boolean
    comentario_data?: boolean
  }

  export type postagem_comentariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comentario_id" | "post_id" | "user_id" | "comentario_text" | "comentario_data", ExtArgs["result"]["postagem_comentarios"]>
  export type postagem_comentariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postagens?: boolean | postagem_comentarios$postagensArgs<ExtArgs>
    cadastros?: boolean | postagem_comentarios$cadastrosArgs<ExtArgs>
  }

  export type $postagem_comentariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "postagem_comentarios"
    objects: {
      postagens: Prisma.$postagensPayload<ExtArgs> | null
      cadastros: Prisma.$cadastrosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      comentario_id: number
      post_id: number | null
      user_id: number | null
      comentario_text: string | null
      comentario_data: Date | null
    }, ExtArgs["result"]["postagem_comentarios"]>
    composites: {}
  }

  type postagem_comentariosGetPayload<S extends boolean | null | undefined | postagem_comentariosDefaultArgs> = $Result.GetResult<Prisma.$postagem_comentariosPayload, S>

  type postagem_comentariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postagem_comentariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Postagem_comentariosCountAggregateInputType | true
    }

  export interface postagem_comentariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['postagem_comentarios'], meta: { name: 'postagem_comentarios' } }
    /**
     * Find zero or one Postagem_comentarios that matches the filter.
     * @param {postagem_comentariosFindUniqueArgs} args - Arguments to find a Postagem_comentarios
     * @example
     * // Get one Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postagem_comentariosFindUniqueArgs>(args: SelectSubset<T, postagem_comentariosFindUniqueArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Postagem_comentarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postagem_comentariosFindUniqueOrThrowArgs} args - Arguments to find a Postagem_comentarios
     * @example
     * // Get one Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postagem_comentariosFindUniqueOrThrowArgs>(args: SelectSubset<T, postagem_comentariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagem_comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_comentariosFindFirstArgs} args - Arguments to find a Postagem_comentarios
     * @example
     * // Get one Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postagem_comentariosFindFirstArgs>(args?: SelectSubset<T, postagem_comentariosFindFirstArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagem_comentarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_comentariosFindFirstOrThrowArgs} args - Arguments to find a Postagem_comentarios
     * @example
     * // Get one Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postagem_comentariosFindFirstOrThrowArgs>(args?: SelectSubset<T, postagem_comentariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Postagem_comentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_comentariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.findMany()
     * 
     * // Get first 10 Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.findMany({ take: 10 })
     * 
     * // Only select the `comentario_id`
     * const postagem_comentariosWithComentario_idOnly = await prisma.postagem_comentarios.findMany({ select: { comentario_id: true } })
     * 
     */
    findMany<T extends postagem_comentariosFindManyArgs>(args?: SelectSubset<T, postagem_comentariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Postagem_comentarios.
     * @param {postagem_comentariosCreateArgs} args - Arguments to create a Postagem_comentarios.
     * @example
     * // Create one Postagem_comentarios
     * const Postagem_comentarios = await prisma.postagem_comentarios.create({
     *   data: {
     *     // ... data to create a Postagem_comentarios
     *   }
     * })
     * 
     */
    create<T extends postagem_comentariosCreateArgs>(args: SelectSubset<T, postagem_comentariosCreateArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Postagem_comentarios.
     * @param {postagem_comentariosCreateManyArgs} args - Arguments to create many Postagem_comentarios.
     * @example
     * // Create many Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postagem_comentariosCreateManyArgs>(args?: SelectSubset<T, postagem_comentariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Postagem_comentarios.
     * @param {postagem_comentariosDeleteArgs} args - Arguments to delete one Postagem_comentarios.
     * @example
     * // Delete one Postagem_comentarios
     * const Postagem_comentarios = await prisma.postagem_comentarios.delete({
     *   where: {
     *     // ... filter to delete one Postagem_comentarios
     *   }
     * })
     * 
     */
    delete<T extends postagem_comentariosDeleteArgs>(args: SelectSubset<T, postagem_comentariosDeleteArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Postagem_comentarios.
     * @param {postagem_comentariosUpdateArgs} args - Arguments to update one Postagem_comentarios.
     * @example
     * // Update one Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postagem_comentariosUpdateArgs>(args: SelectSubset<T, postagem_comentariosUpdateArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Postagem_comentarios.
     * @param {postagem_comentariosDeleteManyArgs} args - Arguments to filter Postagem_comentarios to delete.
     * @example
     * // Delete a few Postagem_comentarios
     * const { count } = await prisma.postagem_comentarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postagem_comentariosDeleteManyArgs>(args?: SelectSubset<T, postagem_comentariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Postagem_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_comentariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postagem_comentariosUpdateManyArgs>(args: SelectSubset<T, postagem_comentariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Postagem_comentarios.
     * @param {postagem_comentariosUpsertArgs} args - Arguments to update or create a Postagem_comentarios.
     * @example
     * // Update or create a Postagem_comentarios
     * const postagem_comentarios = await prisma.postagem_comentarios.upsert({
     *   create: {
     *     // ... data to create a Postagem_comentarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Postagem_comentarios we want to update
     *   }
     * })
     */
    upsert<T extends postagem_comentariosUpsertArgs>(args: SelectSubset<T, postagem_comentariosUpsertArgs<ExtArgs>>): Prisma__postagem_comentariosClient<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Postagem_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_comentariosCountArgs} args - Arguments to filter Postagem_comentarios to count.
     * @example
     * // Count the number of Postagem_comentarios
     * const count = await prisma.postagem_comentarios.count({
     *   where: {
     *     // ... the filter for the Postagem_comentarios we want to count
     *   }
     * })
    **/
    count<T extends postagem_comentariosCountArgs>(
      args?: Subset<T, postagem_comentariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Postagem_comentariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Postagem_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Postagem_comentariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Postagem_comentariosAggregateArgs>(args: Subset<T, Postagem_comentariosAggregateArgs>): Prisma.PrismaPromise<GetPostagem_comentariosAggregateType<T>>

    /**
     * Group by Postagem_comentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_comentariosGroupByArgs} args - Group by arguments.
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
      T extends postagem_comentariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postagem_comentariosGroupByArgs['orderBy'] }
        : { orderBy?: postagem_comentariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postagem_comentariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostagem_comentariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the postagem_comentarios model
   */
  readonly fields: postagem_comentariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for postagem_comentarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postagem_comentariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postagens<T extends postagem_comentarios$postagensArgs<ExtArgs> = {}>(args?: Subset<T, postagem_comentarios$postagensArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cadastros<T extends postagem_comentarios$cadastrosArgs<ExtArgs> = {}>(args?: Subset<T, postagem_comentarios$cadastrosArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the postagem_comentarios model
   */
  interface postagem_comentariosFieldRefs {
    readonly comentario_id: FieldRef<"postagem_comentarios", 'Int'>
    readonly post_id: FieldRef<"postagem_comentarios", 'Int'>
    readonly user_id: FieldRef<"postagem_comentarios", 'Int'>
    readonly comentario_text: FieldRef<"postagem_comentarios", 'String'>
    readonly comentario_data: FieldRef<"postagem_comentarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * postagem_comentarios findUnique
   */
  export type postagem_comentariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * Filter, which postagem_comentarios to fetch.
     */
    where: postagem_comentariosWhereUniqueInput
  }

  /**
   * postagem_comentarios findUniqueOrThrow
   */
  export type postagem_comentariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * Filter, which postagem_comentarios to fetch.
     */
    where: postagem_comentariosWhereUniqueInput
  }

  /**
   * postagem_comentarios findFirst
   */
  export type postagem_comentariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * Filter, which postagem_comentarios to fetch.
     */
    where?: postagem_comentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_comentarios to fetch.
     */
    orderBy?: postagem_comentariosOrderByWithRelationInput | postagem_comentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postagem_comentarios.
     */
    cursor?: postagem_comentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postagem_comentarios.
     */
    distinct?: Postagem_comentariosScalarFieldEnum | Postagem_comentariosScalarFieldEnum[]
  }

  /**
   * postagem_comentarios findFirstOrThrow
   */
  export type postagem_comentariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * Filter, which postagem_comentarios to fetch.
     */
    where?: postagem_comentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_comentarios to fetch.
     */
    orderBy?: postagem_comentariosOrderByWithRelationInput | postagem_comentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postagem_comentarios.
     */
    cursor?: postagem_comentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_comentarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postagem_comentarios.
     */
    distinct?: Postagem_comentariosScalarFieldEnum | Postagem_comentariosScalarFieldEnum[]
  }

  /**
   * postagem_comentarios findMany
   */
  export type postagem_comentariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * Filter, which postagem_comentarios to fetch.
     */
    where?: postagem_comentariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_comentarios to fetch.
     */
    orderBy?: postagem_comentariosOrderByWithRelationInput | postagem_comentariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing postagem_comentarios.
     */
    cursor?: postagem_comentariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_comentarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_comentarios.
     */
    skip?: number
    distinct?: Postagem_comentariosScalarFieldEnum | Postagem_comentariosScalarFieldEnum[]
  }

  /**
   * postagem_comentarios create
   */
  export type postagem_comentariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * The data needed to create a postagem_comentarios.
     */
    data?: XOR<postagem_comentariosCreateInput, postagem_comentariosUncheckedCreateInput>
  }

  /**
   * postagem_comentarios createMany
   */
  export type postagem_comentariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many postagem_comentarios.
     */
    data: postagem_comentariosCreateManyInput | postagem_comentariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * postagem_comentarios update
   */
  export type postagem_comentariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * The data needed to update a postagem_comentarios.
     */
    data: XOR<postagem_comentariosUpdateInput, postagem_comentariosUncheckedUpdateInput>
    /**
     * Choose, which postagem_comentarios to update.
     */
    where: postagem_comentariosWhereUniqueInput
  }

  /**
   * postagem_comentarios updateMany
   */
  export type postagem_comentariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update postagem_comentarios.
     */
    data: XOR<postagem_comentariosUpdateManyMutationInput, postagem_comentariosUncheckedUpdateManyInput>
    /**
     * Filter which postagem_comentarios to update
     */
    where?: postagem_comentariosWhereInput
    /**
     * Limit how many postagem_comentarios to update.
     */
    limit?: number
  }

  /**
   * postagem_comentarios upsert
   */
  export type postagem_comentariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * The filter to search for the postagem_comentarios to update in case it exists.
     */
    where: postagem_comentariosWhereUniqueInput
    /**
     * In case the postagem_comentarios found by the `where` argument doesn't exist, create a new postagem_comentarios with this data.
     */
    create: XOR<postagem_comentariosCreateInput, postagem_comentariosUncheckedCreateInput>
    /**
     * In case the postagem_comentarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postagem_comentariosUpdateInput, postagem_comentariosUncheckedUpdateInput>
  }

  /**
   * postagem_comentarios delete
   */
  export type postagem_comentariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    /**
     * Filter which postagem_comentarios to delete.
     */
    where: postagem_comentariosWhereUniqueInput
  }

  /**
   * postagem_comentarios deleteMany
   */
  export type postagem_comentariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postagem_comentarios to delete
     */
    where?: postagem_comentariosWhereInput
    /**
     * Limit how many postagem_comentarios to delete.
     */
    limit?: number
  }

  /**
   * postagem_comentarios.postagens
   */
  export type postagem_comentarios$postagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    where?: postagensWhereInput
  }

  /**
   * postagem_comentarios.cadastros
   */
  export type postagem_comentarios$cadastrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    where?: cadastrosWhereInput
  }

  /**
   * postagem_comentarios without action
   */
  export type postagem_comentariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
  }


  /**
   * Model postagens
   */

  export type AggregatePostagens = {
    _count: PostagensCountAggregateOutputType | null
    _avg: PostagensAvgAggregateOutputType | null
    _sum: PostagensSumAggregateOutputType | null
    _min: PostagensMinAggregateOutputType | null
    _max: PostagensMaxAggregateOutputType | null
  }

  export type PostagensAvgAggregateOutputType = {
    post_id: number | null
    user_id: number | null
  }

  export type PostagensSumAggregateOutputType = {
    post_id: number | null
    user_id: number | null
  }

  export type PostagensMinAggregateOutputType = {
    post_id: number | null
    user_id: number | null
    post_name: string | null
    post_text: string | null
    post_data: Date | null
    post_image: Bytes | null
    post_gender: string | null
  }

  export type PostagensMaxAggregateOutputType = {
    post_id: number | null
    user_id: number | null
    post_name: string | null
    post_text: string | null
    post_data: Date | null
    post_image: Bytes | null
    post_gender: string | null
  }

  export type PostagensCountAggregateOutputType = {
    post_id: number
    user_id: number
    post_name: number
    post_text: number
    post_data: number
    post_image: number
    post_gender: number
    _all: number
  }


  export type PostagensAvgAggregateInputType = {
    post_id?: true
    user_id?: true
  }

  export type PostagensSumAggregateInputType = {
    post_id?: true
    user_id?: true
  }

  export type PostagensMinAggregateInputType = {
    post_id?: true
    user_id?: true
    post_name?: true
    post_text?: true
    post_data?: true
    post_image?: true
    post_gender?: true
  }

  export type PostagensMaxAggregateInputType = {
    post_id?: true
    user_id?: true
    post_name?: true
    post_text?: true
    post_data?: true
    post_image?: true
    post_gender?: true
  }

  export type PostagensCountAggregateInputType = {
    post_id?: true
    user_id?: true
    post_name?: true
    post_text?: true
    post_data?: true
    post_image?: true
    post_gender?: true
    _all?: true
  }

  export type PostagensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postagens to aggregate.
     */
    where?: postagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagens to fetch.
     */
    orderBy?: postagensOrderByWithRelationInput | postagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned postagens
    **/
    _count?: true | PostagensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostagensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostagensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostagensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostagensMaxAggregateInputType
  }

  export type GetPostagensAggregateType<T extends PostagensAggregateArgs> = {
        [P in keyof T & keyof AggregatePostagens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostagens[P]>
      : GetScalarType<T[P], AggregatePostagens[P]>
  }




  export type postagensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagensWhereInput
    orderBy?: postagensOrderByWithAggregationInput | postagensOrderByWithAggregationInput[]
    by: PostagensScalarFieldEnum[] | PostagensScalarFieldEnum
    having?: postagensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostagensCountAggregateInputType | true
    _avg?: PostagensAvgAggregateInputType
    _sum?: PostagensSumAggregateInputType
    _min?: PostagensMinAggregateInputType
    _max?: PostagensMaxAggregateInputType
  }

  export type PostagensGroupByOutputType = {
    post_id: number
    user_id: number | null
    post_name: string | null
    post_text: string | null
    post_data: Date | null
    post_image: Bytes | null
    post_gender: string | null
    _count: PostagensCountAggregateOutputType | null
    _avg: PostagensAvgAggregateOutputType | null
    _sum: PostagensSumAggregateOutputType | null
    _min: PostagensMinAggregateOutputType | null
    _max: PostagensMaxAggregateOutputType | null
  }

  type GetPostagensGroupByPayload<T extends postagensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostagensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostagensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostagensGroupByOutputType[P]>
            : GetScalarType<T[P], PostagensGroupByOutputType[P]>
        }
      >
    >


  export type postagensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    user_id?: boolean
    post_name?: boolean
    post_text?: boolean
    post_data?: boolean
    post_image?: boolean
    post_gender?: boolean
    postagem_comentarios?: boolean | postagens$postagem_comentariosArgs<ExtArgs>
    postagem_likes?: boolean | postagens$postagem_likesArgs<ExtArgs>
    cadastros?: boolean | postagens$cadastrosArgs<ExtArgs>
    _count?: boolean | PostagensCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postagens"]>



  export type postagensSelectScalar = {
    post_id?: boolean
    user_id?: boolean
    post_name?: boolean
    post_text?: boolean
    post_data?: boolean
    post_image?: boolean
    post_gender?: boolean
  }

  export type postagensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "user_id" | "post_name" | "post_text" | "post_data" | "post_image" | "post_gender", ExtArgs["result"]["postagens"]>
  export type postagensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postagem_comentarios?: boolean | postagens$postagem_comentariosArgs<ExtArgs>
    postagem_likes?: boolean | postagens$postagem_likesArgs<ExtArgs>
    cadastros?: boolean | postagens$cadastrosArgs<ExtArgs>
    _count?: boolean | PostagensCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $postagensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "postagens"
    objects: {
      postagem_comentarios: Prisma.$postagem_comentariosPayload<ExtArgs>[]
      postagem_likes: Prisma.$postagem_likesPayload<ExtArgs>[]
      cadastros: Prisma.$cadastrosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      user_id: number | null
      post_name: string | null
      post_text: string | null
      post_data: Date | null
      post_image: Prisma.Bytes | null
      post_gender: string | null
    }, ExtArgs["result"]["postagens"]>
    composites: {}
  }

  type postagensGetPayload<S extends boolean | null | undefined | postagensDefaultArgs> = $Result.GetResult<Prisma.$postagensPayload, S>

  type postagensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postagensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostagensCountAggregateInputType | true
    }

  export interface postagensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['postagens'], meta: { name: 'postagens' } }
    /**
     * Find zero or one Postagens that matches the filter.
     * @param {postagensFindUniqueArgs} args - Arguments to find a Postagens
     * @example
     * // Get one Postagens
     * const postagens = await prisma.postagens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postagensFindUniqueArgs>(args: SelectSubset<T, postagensFindUniqueArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Postagens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postagensFindUniqueOrThrowArgs} args - Arguments to find a Postagens
     * @example
     * // Get one Postagens
     * const postagens = await prisma.postagens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postagensFindUniqueOrThrowArgs>(args: SelectSubset<T, postagensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagensFindFirstArgs} args - Arguments to find a Postagens
     * @example
     * // Get one Postagens
     * const postagens = await prisma.postagens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postagensFindFirstArgs>(args?: SelectSubset<T, postagensFindFirstArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagensFindFirstOrThrowArgs} args - Arguments to find a Postagens
     * @example
     * // Get one Postagens
     * const postagens = await prisma.postagens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postagensFindFirstOrThrowArgs>(args?: SelectSubset<T, postagensFindFirstOrThrowArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Postagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Postagens
     * const postagens = await prisma.postagens.findMany()
     * 
     * // Get first 10 Postagens
     * const postagens = await prisma.postagens.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const postagensWithPost_idOnly = await prisma.postagens.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends postagensFindManyArgs>(args?: SelectSubset<T, postagensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Postagens.
     * @param {postagensCreateArgs} args - Arguments to create a Postagens.
     * @example
     * // Create one Postagens
     * const Postagens = await prisma.postagens.create({
     *   data: {
     *     // ... data to create a Postagens
     *   }
     * })
     * 
     */
    create<T extends postagensCreateArgs>(args: SelectSubset<T, postagensCreateArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Postagens.
     * @param {postagensCreateManyArgs} args - Arguments to create many Postagens.
     * @example
     * // Create many Postagens
     * const postagens = await prisma.postagens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postagensCreateManyArgs>(args?: SelectSubset<T, postagensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Postagens.
     * @param {postagensDeleteArgs} args - Arguments to delete one Postagens.
     * @example
     * // Delete one Postagens
     * const Postagens = await prisma.postagens.delete({
     *   where: {
     *     // ... filter to delete one Postagens
     *   }
     * })
     * 
     */
    delete<T extends postagensDeleteArgs>(args: SelectSubset<T, postagensDeleteArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Postagens.
     * @param {postagensUpdateArgs} args - Arguments to update one Postagens.
     * @example
     * // Update one Postagens
     * const postagens = await prisma.postagens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postagensUpdateArgs>(args: SelectSubset<T, postagensUpdateArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Postagens.
     * @param {postagensDeleteManyArgs} args - Arguments to filter Postagens to delete.
     * @example
     * // Delete a few Postagens
     * const { count } = await prisma.postagens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postagensDeleteManyArgs>(args?: SelectSubset<T, postagensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Postagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Postagens
     * const postagens = await prisma.postagens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postagensUpdateManyArgs>(args: SelectSubset<T, postagensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Postagens.
     * @param {postagensUpsertArgs} args - Arguments to update or create a Postagens.
     * @example
     * // Update or create a Postagens
     * const postagens = await prisma.postagens.upsert({
     *   create: {
     *     // ... data to create a Postagens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Postagens we want to update
     *   }
     * })
     */
    upsert<T extends postagensUpsertArgs>(args: SelectSubset<T, postagensUpsertArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Postagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagensCountArgs} args - Arguments to filter Postagens to count.
     * @example
     * // Count the number of Postagens
     * const count = await prisma.postagens.count({
     *   where: {
     *     // ... the filter for the Postagens we want to count
     *   }
     * })
    **/
    count<T extends postagensCountArgs>(
      args?: Subset<T, postagensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostagensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Postagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostagensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostagensAggregateArgs>(args: Subset<T, PostagensAggregateArgs>): Prisma.PrismaPromise<GetPostagensAggregateType<T>>

    /**
     * Group by Postagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagensGroupByArgs} args - Group by arguments.
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
      T extends postagensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postagensGroupByArgs['orderBy'] }
        : { orderBy?: postagensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postagensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostagensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the postagens model
   */
  readonly fields: postagensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for postagens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postagensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postagem_comentarios<T extends postagens$postagem_comentariosArgs<ExtArgs> = {}>(args?: Subset<T, postagens$postagem_comentariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagem_comentariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postagem_likes<T extends postagens$postagem_likesArgs<ExtArgs> = {}>(args?: Subset<T, postagens$postagem_likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cadastros<T extends postagens$cadastrosArgs<ExtArgs> = {}>(args?: Subset<T, postagens$cadastrosArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the postagens model
   */
  interface postagensFieldRefs {
    readonly post_id: FieldRef<"postagens", 'Int'>
    readonly user_id: FieldRef<"postagens", 'Int'>
    readonly post_name: FieldRef<"postagens", 'String'>
    readonly post_text: FieldRef<"postagens", 'String'>
    readonly post_data: FieldRef<"postagens", 'DateTime'>
    readonly post_image: FieldRef<"postagens", 'Bytes'>
    readonly post_gender: FieldRef<"postagens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * postagens findUnique
   */
  export type postagensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * Filter, which postagens to fetch.
     */
    where: postagensWhereUniqueInput
  }

  /**
   * postagens findUniqueOrThrow
   */
  export type postagensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * Filter, which postagens to fetch.
     */
    where: postagensWhereUniqueInput
  }

  /**
   * postagens findFirst
   */
  export type postagensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * Filter, which postagens to fetch.
     */
    where?: postagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagens to fetch.
     */
    orderBy?: postagensOrderByWithRelationInput | postagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postagens.
     */
    cursor?: postagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postagens.
     */
    distinct?: PostagensScalarFieldEnum | PostagensScalarFieldEnum[]
  }

  /**
   * postagens findFirstOrThrow
   */
  export type postagensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * Filter, which postagens to fetch.
     */
    where?: postagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagens to fetch.
     */
    orderBy?: postagensOrderByWithRelationInput | postagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postagens.
     */
    cursor?: postagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postagens.
     */
    distinct?: PostagensScalarFieldEnum | PostagensScalarFieldEnum[]
  }

  /**
   * postagens findMany
   */
  export type postagensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * Filter, which postagens to fetch.
     */
    where?: postagensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagens to fetch.
     */
    orderBy?: postagensOrderByWithRelationInput | postagensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing postagens.
     */
    cursor?: postagensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagens.
     */
    skip?: number
    distinct?: PostagensScalarFieldEnum | PostagensScalarFieldEnum[]
  }

  /**
   * postagens create
   */
  export type postagensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * The data needed to create a postagens.
     */
    data?: XOR<postagensCreateInput, postagensUncheckedCreateInput>
  }

  /**
   * postagens createMany
   */
  export type postagensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many postagens.
     */
    data: postagensCreateManyInput | postagensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * postagens update
   */
  export type postagensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * The data needed to update a postagens.
     */
    data: XOR<postagensUpdateInput, postagensUncheckedUpdateInput>
    /**
     * Choose, which postagens to update.
     */
    where: postagensWhereUniqueInput
  }

  /**
   * postagens updateMany
   */
  export type postagensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update postagens.
     */
    data: XOR<postagensUpdateManyMutationInput, postagensUncheckedUpdateManyInput>
    /**
     * Filter which postagens to update
     */
    where?: postagensWhereInput
    /**
     * Limit how many postagens to update.
     */
    limit?: number
  }

  /**
   * postagens upsert
   */
  export type postagensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * The filter to search for the postagens to update in case it exists.
     */
    where: postagensWhereUniqueInput
    /**
     * In case the postagens found by the `where` argument doesn't exist, create a new postagens with this data.
     */
    create: XOR<postagensCreateInput, postagensUncheckedCreateInput>
    /**
     * In case the postagens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postagensUpdateInput, postagensUncheckedUpdateInput>
  }

  /**
   * postagens delete
   */
  export type postagensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    /**
     * Filter which postagens to delete.
     */
    where: postagensWhereUniqueInput
  }

  /**
   * postagens deleteMany
   */
  export type postagensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postagens to delete
     */
    where?: postagensWhereInput
    /**
     * Limit how many postagens to delete.
     */
    limit?: number
  }

  /**
   * postagens.postagem_comentarios
   */
  export type postagens$postagem_comentariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_comentarios
     */
    select?: postagem_comentariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_comentarios
     */
    omit?: postagem_comentariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_comentariosInclude<ExtArgs> | null
    where?: postagem_comentariosWhereInput
    orderBy?: postagem_comentariosOrderByWithRelationInput | postagem_comentariosOrderByWithRelationInput[]
    cursor?: postagem_comentariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Postagem_comentariosScalarFieldEnum | Postagem_comentariosScalarFieldEnum[]
  }

  /**
   * postagens.postagem_likes
   */
  export type postagens$postagem_likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    where?: postagem_likesWhereInput
    orderBy?: postagem_likesOrderByWithRelationInput | postagem_likesOrderByWithRelationInput[]
    cursor?: postagem_likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Postagem_likesScalarFieldEnum | Postagem_likesScalarFieldEnum[]
  }

  /**
   * postagens.cadastros
   */
  export type postagens$cadastrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    where?: cadastrosWhereInput
  }

  /**
   * postagens without action
   */
  export type postagensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
  }


  /**
   * Model postagem_likes
   */

  export type AggregatePostagem_likes = {
    _count: Postagem_likesCountAggregateOutputType | null
    _avg: Postagem_likesAvgAggregateOutputType | null
    _sum: Postagem_likesSumAggregateOutputType | null
    _min: Postagem_likesMinAggregateOutputType | null
    _max: Postagem_likesMaxAggregateOutputType | null
  }

  export type Postagem_likesAvgAggregateOutputType = {
    id_like: number | null
    post_id: number | null
    user_id: number | null
  }

  export type Postagem_likesSumAggregateOutputType = {
    id_like: number | null
    post_id: number | null
    user_id: number | null
  }

  export type Postagem_likesMinAggregateOutputType = {
    id_like: number | null
    post_id: number | null
    user_id: number | null
    data_like: Date | null
  }

  export type Postagem_likesMaxAggregateOutputType = {
    id_like: number | null
    post_id: number | null
    user_id: number | null
    data_like: Date | null
  }

  export type Postagem_likesCountAggregateOutputType = {
    id_like: number
    post_id: number
    user_id: number
    data_like: number
    _all: number
  }


  export type Postagem_likesAvgAggregateInputType = {
    id_like?: true
    post_id?: true
    user_id?: true
  }

  export type Postagem_likesSumAggregateInputType = {
    id_like?: true
    post_id?: true
    user_id?: true
  }

  export type Postagem_likesMinAggregateInputType = {
    id_like?: true
    post_id?: true
    user_id?: true
    data_like?: true
  }

  export type Postagem_likesMaxAggregateInputType = {
    id_like?: true
    post_id?: true
    user_id?: true
    data_like?: true
  }

  export type Postagem_likesCountAggregateInputType = {
    id_like?: true
    post_id?: true
    user_id?: true
    data_like?: true
    _all?: true
  }

  export type Postagem_likesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postagem_likes to aggregate.
     */
    where?: postagem_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_likes to fetch.
     */
    orderBy?: postagem_likesOrderByWithRelationInput | postagem_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postagem_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned postagem_likes
    **/
    _count?: true | Postagem_likesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Postagem_likesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Postagem_likesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Postagem_likesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Postagem_likesMaxAggregateInputType
  }

  export type GetPostagem_likesAggregateType<T extends Postagem_likesAggregateArgs> = {
        [P in keyof T & keyof AggregatePostagem_likes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostagem_likes[P]>
      : GetScalarType<T[P], AggregatePostagem_likes[P]>
  }




  export type postagem_likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postagem_likesWhereInput
    orderBy?: postagem_likesOrderByWithAggregationInput | postagem_likesOrderByWithAggregationInput[]
    by: Postagem_likesScalarFieldEnum[] | Postagem_likesScalarFieldEnum
    having?: postagem_likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Postagem_likesCountAggregateInputType | true
    _avg?: Postagem_likesAvgAggregateInputType
    _sum?: Postagem_likesSumAggregateInputType
    _min?: Postagem_likesMinAggregateInputType
    _max?: Postagem_likesMaxAggregateInputType
  }

  export type Postagem_likesGroupByOutputType = {
    id_like: number
    post_id: number | null
    user_id: number | null
    data_like: Date | null
    _count: Postagem_likesCountAggregateOutputType | null
    _avg: Postagem_likesAvgAggregateOutputType | null
    _sum: Postagem_likesSumAggregateOutputType | null
    _min: Postagem_likesMinAggregateOutputType | null
    _max: Postagem_likesMaxAggregateOutputType | null
  }

  type GetPostagem_likesGroupByPayload<T extends postagem_likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Postagem_likesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Postagem_likesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Postagem_likesGroupByOutputType[P]>
            : GetScalarType<T[P], Postagem_likesGroupByOutputType[P]>
        }
      >
    >


  export type postagem_likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_like?: boolean
    post_id?: boolean
    user_id?: boolean
    data_like?: boolean
    postagens?: boolean | postagem_likes$postagensArgs<ExtArgs>
    cadastros?: boolean | postagem_likes$cadastrosArgs<ExtArgs>
  }, ExtArgs["result"]["postagem_likes"]>



  export type postagem_likesSelectScalar = {
    id_like?: boolean
    post_id?: boolean
    user_id?: boolean
    data_like?: boolean
  }

  export type postagem_likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_like" | "post_id" | "user_id" | "data_like", ExtArgs["result"]["postagem_likes"]>
  export type postagem_likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postagens?: boolean | postagem_likes$postagensArgs<ExtArgs>
    cadastros?: boolean | postagem_likes$cadastrosArgs<ExtArgs>
  }

  export type $postagem_likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "postagem_likes"
    objects: {
      postagens: Prisma.$postagensPayload<ExtArgs> | null
      cadastros: Prisma.$cadastrosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_like: number
      post_id: number | null
      user_id: number | null
      data_like: Date | null
    }, ExtArgs["result"]["postagem_likes"]>
    composites: {}
  }

  type postagem_likesGetPayload<S extends boolean | null | undefined | postagem_likesDefaultArgs> = $Result.GetResult<Prisma.$postagem_likesPayload, S>

  type postagem_likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postagem_likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Postagem_likesCountAggregateInputType | true
    }

  export interface postagem_likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['postagem_likes'], meta: { name: 'postagem_likes' } }
    /**
     * Find zero or one Postagem_likes that matches the filter.
     * @param {postagem_likesFindUniqueArgs} args - Arguments to find a Postagem_likes
     * @example
     * // Get one Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postagem_likesFindUniqueArgs>(args: SelectSubset<T, postagem_likesFindUniqueArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Postagem_likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postagem_likesFindUniqueOrThrowArgs} args - Arguments to find a Postagem_likes
     * @example
     * // Get one Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postagem_likesFindUniqueOrThrowArgs>(args: SelectSubset<T, postagem_likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagem_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_likesFindFirstArgs} args - Arguments to find a Postagem_likes
     * @example
     * // Get one Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postagem_likesFindFirstArgs>(args?: SelectSubset<T, postagem_likesFindFirstArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Postagem_likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_likesFindFirstOrThrowArgs} args - Arguments to find a Postagem_likes
     * @example
     * // Get one Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postagem_likesFindFirstOrThrowArgs>(args?: SelectSubset<T, postagem_likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Postagem_likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.findMany()
     * 
     * // Get first 10 Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.findMany({ take: 10 })
     * 
     * // Only select the `id_like`
     * const postagem_likesWithId_likeOnly = await prisma.postagem_likes.findMany({ select: { id_like: true } })
     * 
     */
    findMany<T extends postagem_likesFindManyArgs>(args?: SelectSubset<T, postagem_likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Postagem_likes.
     * @param {postagem_likesCreateArgs} args - Arguments to create a Postagem_likes.
     * @example
     * // Create one Postagem_likes
     * const Postagem_likes = await prisma.postagem_likes.create({
     *   data: {
     *     // ... data to create a Postagem_likes
     *   }
     * })
     * 
     */
    create<T extends postagem_likesCreateArgs>(args: SelectSubset<T, postagem_likesCreateArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Postagem_likes.
     * @param {postagem_likesCreateManyArgs} args - Arguments to create many Postagem_likes.
     * @example
     * // Create many Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postagem_likesCreateManyArgs>(args?: SelectSubset<T, postagem_likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Postagem_likes.
     * @param {postagem_likesDeleteArgs} args - Arguments to delete one Postagem_likes.
     * @example
     * // Delete one Postagem_likes
     * const Postagem_likes = await prisma.postagem_likes.delete({
     *   where: {
     *     // ... filter to delete one Postagem_likes
     *   }
     * })
     * 
     */
    delete<T extends postagem_likesDeleteArgs>(args: SelectSubset<T, postagem_likesDeleteArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Postagem_likes.
     * @param {postagem_likesUpdateArgs} args - Arguments to update one Postagem_likes.
     * @example
     * // Update one Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postagem_likesUpdateArgs>(args: SelectSubset<T, postagem_likesUpdateArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Postagem_likes.
     * @param {postagem_likesDeleteManyArgs} args - Arguments to filter Postagem_likes to delete.
     * @example
     * // Delete a few Postagem_likes
     * const { count } = await prisma.postagem_likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postagem_likesDeleteManyArgs>(args?: SelectSubset<T, postagem_likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Postagem_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postagem_likesUpdateManyArgs>(args: SelectSubset<T, postagem_likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Postagem_likes.
     * @param {postagem_likesUpsertArgs} args - Arguments to update or create a Postagem_likes.
     * @example
     * // Update or create a Postagem_likes
     * const postagem_likes = await prisma.postagem_likes.upsert({
     *   create: {
     *     // ... data to create a Postagem_likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Postagem_likes we want to update
     *   }
     * })
     */
    upsert<T extends postagem_likesUpsertArgs>(args: SelectSubset<T, postagem_likesUpsertArgs<ExtArgs>>): Prisma__postagem_likesClient<$Result.GetResult<Prisma.$postagem_likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Postagem_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_likesCountArgs} args - Arguments to filter Postagem_likes to count.
     * @example
     * // Count the number of Postagem_likes
     * const count = await prisma.postagem_likes.count({
     *   where: {
     *     // ... the filter for the Postagem_likes we want to count
     *   }
     * })
    **/
    count<T extends postagem_likesCountArgs>(
      args?: Subset<T, postagem_likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Postagem_likesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Postagem_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Postagem_likesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Postagem_likesAggregateArgs>(args: Subset<T, Postagem_likesAggregateArgs>): Prisma.PrismaPromise<GetPostagem_likesAggregateType<T>>

    /**
     * Group by Postagem_likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postagem_likesGroupByArgs} args - Group by arguments.
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
      T extends postagem_likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postagem_likesGroupByArgs['orderBy'] }
        : { orderBy?: postagem_likesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postagem_likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostagem_likesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the postagem_likes model
   */
  readonly fields: postagem_likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for postagem_likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postagem_likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postagens<T extends postagem_likes$postagensArgs<ExtArgs> = {}>(args?: Subset<T, postagem_likes$postagensArgs<ExtArgs>>): Prisma__postagensClient<$Result.GetResult<Prisma.$postagensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cadastros<T extends postagem_likes$cadastrosArgs<ExtArgs> = {}>(args?: Subset<T, postagem_likes$cadastrosArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the postagem_likes model
   */
  interface postagem_likesFieldRefs {
    readonly id_like: FieldRef<"postagem_likes", 'Int'>
    readonly post_id: FieldRef<"postagem_likes", 'Int'>
    readonly user_id: FieldRef<"postagem_likes", 'Int'>
    readonly data_like: FieldRef<"postagem_likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * postagem_likes findUnique
   */
  export type postagem_likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * Filter, which postagem_likes to fetch.
     */
    where: postagem_likesWhereUniqueInput
  }

  /**
   * postagem_likes findUniqueOrThrow
   */
  export type postagem_likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * Filter, which postagem_likes to fetch.
     */
    where: postagem_likesWhereUniqueInput
  }

  /**
   * postagem_likes findFirst
   */
  export type postagem_likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * Filter, which postagem_likes to fetch.
     */
    where?: postagem_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_likes to fetch.
     */
    orderBy?: postagem_likesOrderByWithRelationInput | postagem_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postagem_likes.
     */
    cursor?: postagem_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postagem_likes.
     */
    distinct?: Postagem_likesScalarFieldEnum | Postagem_likesScalarFieldEnum[]
  }

  /**
   * postagem_likes findFirstOrThrow
   */
  export type postagem_likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * Filter, which postagem_likes to fetch.
     */
    where?: postagem_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_likes to fetch.
     */
    orderBy?: postagem_likesOrderByWithRelationInput | postagem_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postagem_likes.
     */
    cursor?: postagem_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postagem_likes.
     */
    distinct?: Postagem_likesScalarFieldEnum | Postagem_likesScalarFieldEnum[]
  }

  /**
   * postagem_likes findMany
   */
  export type postagem_likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * Filter, which postagem_likes to fetch.
     */
    where?: postagem_likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postagem_likes to fetch.
     */
    orderBy?: postagem_likesOrderByWithRelationInput | postagem_likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing postagem_likes.
     */
    cursor?: postagem_likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postagem_likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postagem_likes.
     */
    skip?: number
    distinct?: Postagem_likesScalarFieldEnum | Postagem_likesScalarFieldEnum[]
  }

  /**
   * postagem_likes create
   */
  export type postagem_likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * The data needed to create a postagem_likes.
     */
    data?: XOR<postagem_likesCreateInput, postagem_likesUncheckedCreateInput>
  }

  /**
   * postagem_likes createMany
   */
  export type postagem_likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many postagem_likes.
     */
    data: postagem_likesCreateManyInput | postagem_likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * postagem_likes update
   */
  export type postagem_likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * The data needed to update a postagem_likes.
     */
    data: XOR<postagem_likesUpdateInput, postagem_likesUncheckedUpdateInput>
    /**
     * Choose, which postagem_likes to update.
     */
    where: postagem_likesWhereUniqueInput
  }

  /**
   * postagem_likes updateMany
   */
  export type postagem_likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update postagem_likes.
     */
    data: XOR<postagem_likesUpdateManyMutationInput, postagem_likesUncheckedUpdateManyInput>
    /**
     * Filter which postagem_likes to update
     */
    where?: postagem_likesWhereInput
    /**
     * Limit how many postagem_likes to update.
     */
    limit?: number
  }

  /**
   * postagem_likes upsert
   */
  export type postagem_likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * The filter to search for the postagem_likes to update in case it exists.
     */
    where: postagem_likesWhereUniqueInput
    /**
     * In case the postagem_likes found by the `where` argument doesn't exist, create a new postagem_likes with this data.
     */
    create: XOR<postagem_likesCreateInput, postagem_likesUncheckedCreateInput>
    /**
     * In case the postagem_likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postagem_likesUpdateInput, postagem_likesUncheckedUpdateInput>
  }

  /**
   * postagem_likes delete
   */
  export type postagem_likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
    /**
     * Filter which postagem_likes to delete.
     */
    where: postagem_likesWhereUniqueInput
  }

  /**
   * postagem_likes deleteMany
   */
  export type postagem_likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postagem_likes to delete
     */
    where?: postagem_likesWhereInput
    /**
     * Limit how many postagem_likes to delete.
     */
    limit?: number
  }

  /**
   * postagem_likes.postagens
   */
  export type postagem_likes$postagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagens
     */
    select?: postagensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagens
     */
    omit?: postagensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagensInclude<ExtArgs> | null
    where?: postagensWhereInput
  }

  /**
   * postagem_likes.cadastros
   */
  export type postagem_likes$cadastrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    where?: cadastrosWhereInput
  }

  /**
   * postagem_likes without action
   */
  export type postagem_likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postagem_likes
     */
    select?: postagem_likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the postagem_likes
     */
    omit?: postagem_likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postagem_likesInclude<ExtArgs> | null
  }


  /**
   * Model artigos
   */

  export type AggregateArtigos = {
    _count: ArtigosCountAggregateOutputType | null
    _avg: ArtigosAvgAggregateOutputType | null
    _sum: ArtigosSumAggregateOutputType | null
    _min: ArtigosMinAggregateOutputType | null
    _max: ArtigosMaxAggregateOutputType | null
  }

  export type ArtigosAvgAggregateOutputType = {
    artigos_id: number | null
  }

  export type ArtigosSumAggregateOutputType = {
    artigos_id: number | null
  }

  export type ArtigosMinAggregateOutputType = {
    artigos_id: number | null
    artigos_gender: string | null
    artigos_titulo: string | null
    artigos_description: string | null
    artigos_url: string | null
    artigos_autor: string | null
  }

  export type ArtigosMaxAggregateOutputType = {
    artigos_id: number | null
    artigos_gender: string | null
    artigos_titulo: string | null
    artigos_description: string | null
    artigos_url: string | null
    artigos_autor: string | null
  }

  export type ArtigosCountAggregateOutputType = {
    artigos_id: number
    artigos_gender: number
    artigos_titulo: number
    artigos_description: number
    artigos_url: number
    artigos_autor: number
    _all: number
  }


  export type ArtigosAvgAggregateInputType = {
    artigos_id?: true
  }

  export type ArtigosSumAggregateInputType = {
    artigos_id?: true
  }

  export type ArtigosMinAggregateInputType = {
    artigos_id?: true
    artigos_gender?: true
    artigos_titulo?: true
    artigos_description?: true
    artigos_url?: true
    artigos_autor?: true
  }

  export type ArtigosMaxAggregateInputType = {
    artigos_id?: true
    artigos_gender?: true
    artigos_titulo?: true
    artigos_description?: true
    artigos_url?: true
    artigos_autor?: true
  }

  export type ArtigosCountAggregateInputType = {
    artigos_id?: true
    artigos_gender?: true
    artigos_titulo?: true
    artigos_description?: true
    artigos_url?: true
    artigos_autor?: true
    _all?: true
  }

  export type ArtigosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artigos to aggregate.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationInput | artigosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artigos
    **/
    _count?: true | ArtigosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtigosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtigosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtigosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtigosMaxAggregateInputType
  }

  export type GetArtigosAggregateType<T extends ArtigosAggregateArgs> = {
        [P in keyof T & keyof AggregateArtigos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtigos[P]>
      : GetScalarType<T[P], AggregateArtigos[P]>
  }




  export type artigosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artigosWhereInput
    orderBy?: artigosOrderByWithAggregationInput | artigosOrderByWithAggregationInput[]
    by: ArtigosScalarFieldEnum[] | ArtigosScalarFieldEnum
    having?: artigosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtigosCountAggregateInputType | true
    _avg?: ArtigosAvgAggregateInputType
    _sum?: ArtigosSumAggregateInputType
    _min?: ArtigosMinAggregateInputType
    _max?: ArtigosMaxAggregateInputType
  }

  export type ArtigosGroupByOutputType = {
    artigos_id: number
    artigos_gender: string | null
    artigos_titulo: string | null
    artigos_description: string | null
    artigos_url: string | null
    artigos_autor: string | null
    _count: ArtigosCountAggregateOutputType | null
    _avg: ArtigosAvgAggregateOutputType | null
    _sum: ArtigosSumAggregateOutputType | null
    _min: ArtigosMinAggregateOutputType | null
    _max: ArtigosMaxAggregateOutputType | null
  }

  type GetArtigosGroupByPayload<T extends artigosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtigosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtigosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtigosGroupByOutputType[P]>
            : GetScalarType<T[P], ArtigosGroupByOutputType[P]>
        }
      >
    >


  export type artigosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artigos_id?: boolean
    artigos_gender?: boolean
    artigos_titulo?: boolean
    artigos_description?: boolean
    artigos_url?: boolean
    artigos_autor?: boolean
    artigos_favoritos?: boolean | artigos$artigos_favoritosArgs<ExtArgs>
    _count?: boolean | ArtigosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artigos"]>



  export type artigosSelectScalar = {
    artigos_id?: boolean
    artigos_gender?: boolean
    artigos_titulo?: boolean
    artigos_description?: boolean
    artigos_url?: boolean
    artigos_autor?: boolean
  }

  export type artigosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artigos_id" | "artigos_gender" | "artigos_titulo" | "artigos_description" | "artigos_url" | "artigos_autor", ExtArgs["result"]["artigos"]>
  export type artigosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artigos_favoritos?: boolean | artigos$artigos_favoritosArgs<ExtArgs>
    _count?: boolean | ArtigosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $artigosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artigos"
    objects: {
      artigos_favoritos: Prisma.$artigos_favoritosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      artigos_id: number
      artigos_gender: string | null
      artigos_titulo: string | null
      artigos_description: string | null
      artigos_url: string | null
      artigos_autor: string | null
    }, ExtArgs["result"]["artigos"]>
    composites: {}
  }

  type artigosGetPayload<S extends boolean | null | undefined | artigosDefaultArgs> = $Result.GetResult<Prisma.$artigosPayload, S>

  type artigosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<artigosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtigosCountAggregateInputType | true
    }

  export interface artigosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artigos'], meta: { name: 'artigos' } }
    /**
     * Find zero or one Artigos that matches the filter.
     * @param {artigosFindUniqueArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends artigosFindUniqueArgs>(args: SelectSubset<T, artigosFindUniqueArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artigos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {artigosFindUniqueOrThrowArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends artigosFindUniqueOrThrowArgs>(args: SelectSubset<T, artigosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artigos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosFindFirstArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends artigosFindFirstArgs>(args?: SelectSubset<T, artigosFindFirstArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artigos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosFindFirstOrThrowArgs} args - Arguments to find a Artigos
     * @example
     * // Get one Artigos
     * const artigos = await prisma.artigos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends artigosFindFirstOrThrowArgs>(args?: SelectSubset<T, artigosFindFirstOrThrowArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artigos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artigos
     * const artigos = await prisma.artigos.findMany()
     * 
     * // Get first 10 Artigos
     * const artigos = await prisma.artigos.findMany({ take: 10 })
     * 
     * // Only select the `artigos_id`
     * const artigosWithArtigos_idOnly = await prisma.artigos.findMany({ select: { artigos_id: true } })
     * 
     */
    findMany<T extends artigosFindManyArgs>(args?: SelectSubset<T, artigosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artigos.
     * @param {artigosCreateArgs} args - Arguments to create a Artigos.
     * @example
     * // Create one Artigos
     * const Artigos = await prisma.artigos.create({
     *   data: {
     *     // ... data to create a Artigos
     *   }
     * })
     * 
     */
    create<T extends artigosCreateArgs>(args: SelectSubset<T, artigosCreateArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artigos.
     * @param {artigosCreateManyArgs} args - Arguments to create many Artigos.
     * @example
     * // Create many Artigos
     * const artigos = await prisma.artigos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends artigosCreateManyArgs>(args?: SelectSubset<T, artigosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artigos.
     * @param {artigosDeleteArgs} args - Arguments to delete one Artigos.
     * @example
     * // Delete one Artigos
     * const Artigos = await prisma.artigos.delete({
     *   where: {
     *     // ... filter to delete one Artigos
     *   }
     * })
     * 
     */
    delete<T extends artigosDeleteArgs>(args: SelectSubset<T, artigosDeleteArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artigos.
     * @param {artigosUpdateArgs} args - Arguments to update one Artigos.
     * @example
     * // Update one Artigos
     * const artigos = await prisma.artigos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends artigosUpdateArgs>(args: SelectSubset<T, artigosUpdateArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artigos.
     * @param {artigosDeleteManyArgs} args - Arguments to filter Artigos to delete.
     * @example
     * // Delete a few Artigos
     * const { count } = await prisma.artigos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends artigosDeleteManyArgs>(args?: SelectSubset<T, artigosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artigos
     * const artigos = await prisma.artigos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends artigosUpdateManyArgs>(args: SelectSubset<T, artigosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artigos.
     * @param {artigosUpsertArgs} args - Arguments to update or create a Artigos.
     * @example
     * // Update or create a Artigos
     * const artigos = await prisma.artigos.upsert({
     *   create: {
     *     // ... data to create a Artigos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artigos we want to update
     *   }
     * })
     */
    upsert<T extends artigosUpsertArgs>(args: SelectSubset<T, artigosUpsertArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosCountArgs} args - Arguments to filter Artigos to count.
     * @example
     * // Count the number of Artigos
     * const count = await prisma.artigos.count({
     *   where: {
     *     // ... the filter for the Artigos we want to count
     *   }
     * })
    **/
    count<T extends artigosCountArgs>(
      args?: Subset<T, artigosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtigosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtigosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtigosAggregateArgs>(args: Subset<T, ArtigosAggregateArgs>): Prisma.PrismaPromise<GetArtigosAggregateType<T>>

    /**
     * Group by Artigos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigosGroupByArgs} args - Group by arguments.
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
      T extends artigosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artigosGroupByArgs['orderBy'] }
        : { orderBy?: artigosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, artigosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtigosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artigos model
   */
  readonly fields: artigosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artigos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artigosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artigos_favoritos<T extends artigos$artigos_favoritosArgs<ExtArgs> = {}>(args?: Subset<T, artigos$artigos_favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the artigos model
   */
  interface artigosFieldRefs {
    readonly artigos_id: FieldRef<"artigos", 'Int'>
    readonly artigos_gender: FieldRef<"artigos", 'String'>
    readonly artigos_titulo: FieldRef<"artigos", 'String'>
    readonly artigos_description: FieldRef<"artigos", 'String'>
    readonly artigos_url: FieldRef<"artigos", 'String'>
    readonly artigos_autor: FieldRef<"artigos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * artigos findUnique
   */
  export type artigosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where: artigosWhereUniqueInput
  }

  /**
   * artigos findUniqueOrThrow
   */
  export type artigosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where: artigosWhereUniqueInput
  }

  /**
   * artigos findFirst
   */
  export type artigosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationInput | artigosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artigos.
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artigos.
     */
    distinct?: ArtigosScalarFieldEnum | ArtigosScalarFieldEnum[]
  }

  /**
   * artigos findFirstOrThrow
   */
  export type artigosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationInput | artigosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artigos.
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artigos.
     */
    distinct?: ArtigosScalarFieldEnum | ArtigosScalarFieldEnum[]
  }

  /**
   * artigos findMany
   */
  export type artigosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * Filter, which artigos to fetch.
     */
    where?: artigosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos to fetch.
     */
    orderBy?: artigosOrderByWithRelationInput | artigosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artigos.
     */
    cursor?: artigosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos.
     */
    skip?: number
    distinct?: ArtigosScalarFieldEnum | ArtigosScalarFieldEnum[]
  }

  /**
   * artigos create
   */
  export type artigosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * The data needed to create a artigos.
     */
    data?: XOR<artigosCreateInput, artigosUncheckedCreateInput>
  }

  /**
   * artigos createMany
   */
  export type artigosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artigos.
     */
    data: artigosCreateManyInput | artigosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * artigos update
   */
  export type artigosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * The data needed to update a artigos.
     */
    data: XOR<artigosUpdateInput, artigosUncheckedUpdateInput>
    /**
     * Choose, which artigos to update.
     */
    where: artigosWhereUniqueInput
  }

  /**
   * artigos updateMany
   */
  export type artigosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artigos.
     */
    data: XOR<artigosUpdateManyMutationInput, artigosUncheckedUpdateManyInput>
    /**
     * Filter which artigos to update
     */
    where?: artigosWhereInput
    /**
     * Limit how many artigos to update.
     */
    limit?: number
  }

  /**
   * artigos upsert
   */
  export type artigosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * The filter to search for the artigos to update in case it exists.
     */
    where: artigosWhereUniqueInput
    /**
     * In case the artigos found by the `where` argument doesn't exist, create a new artigos with this data.
     */
    create: XOR<artigosCreateInput, artigosUncheckedCreateInput>
    /**
     * In case the artigos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artigosUpdateInput, artigosUncheckedUpdateInput>
  }

  /**
   * artigos delete
   */
  export type artigosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    /**
     * Filter which artigos to delete.
     */
    where: artigosWhereUniqueInput
  }

  /**
   * artigos deleteMany
   */
  export type artigosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artigos to delete
     */
    where?: artigosWhereInput
    /**
     * Limit how many artigos to delete.
     */
    limit?: number
  }

  /**
   * artigos.artigos_favoritos
   */
  export type artigos$artigos_favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    where?: artigos_favoritosWhereInput
    orderBy?: artigos_favoritosOrderByWithRelationInput | artigos_favoritosOrderByWithRelationInput[]
    cursor?: artigos_favoritosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Artigos_favoritosScalarFieldEnum | Artigos_favoritosScalarFieldEnum[]
  }

  /**
   * artigos without action
   */
  export type artigosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
  }


  /**
   * Model artigos_favoritos
   */

  export type AggregateArtigos_favoritos = {
    _count: Artigos_favoritosCountAggregateOutputType | null
    _avg: Artigos_favoritosAvgAggregateOutputType | null
    _sum: Artigos_favoritosSumAggregateOutputType | null
    _min: Artigos_favoritosMinAggregateOutputType | null
    _max: Artigos_favoritosMaxAggregateOutputType | null
  }

  export type Artigos_favoritosAvgAggregateOutputType = {
    artigos_fav_id: number | null
    user_id: number | null
    artigos_id: number | null
  }

  export type Artigos_favoritosSumAggregateOutputType = {
    artigos_fav_id: number | null
    user_id: number | null
    artigos_id: number | null
  }

  export type Artigos_favoritosMinAggregateOutputType = {
    artigos_fav_id: number | null
    user_id: number | null
    artigos_id: number | null
  }

  export type Artigos_favoritosMaxAggregateOutputType = {
    artigos_fav_id: number | null
    user_id: number | null
    artigos_id: number | null
  }

  export type Artigos_favoritosCountAggregateOutputType = {
    artigos_fav_id: number
    user_id: number
    artigos_id: number
    _all: number
  }


  export type Artigos_favoritosAvgAggregateInputType = {
    artigos_fav_id?: true
    user_id?: true
    artigos_id?: true
  }

  export type Artigos_favoritosSumAggregateInputType = {
    artigos_fav_id?: true
    user_id?: true
    artigos_id?: true
  }

  export type Artigos_favoritosMinAggregateInputType = {
    artigos_fav_id?: true
    user_id?: true
    artigos_id?: true
  }

  export type Artigos_favoritosMaxAggregateInputType = {
    artigos_fav_id?: true
    user_id?: true
    artigos_id?: true
  }

  export type Artigos_favoritosCountAggregateInputType = {
    artigos_fav_id?: true
    user_id?: true
    artigos_id?: true
    _all?: true
  }

  export type Artigos_favoritosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artigos_favoritos to aggregate.
     */
    where?: artigos_favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos_favoritos to fetch.
     */
    orderBy?: artigos_favoritosOrderByWithRelationInput | artigos_favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: artigos_favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos_favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos_favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned artigos_favoritos
    **/
    _count?: true | Artigos_favoritosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Artigos_favoritosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Artigos_favoritosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Artigos_favoritosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Artigos_favoritosMaxAggregateInputType
  }

  export type GetArtigos_favoritosAggregateType<T extends Artigos_favoritosAggregateArgs> = {
        [P in keyof T & keyof AggregateArtigos_favoritos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtigos_favoritos[P]>
      : GetScalarType<T[P], AggregateArtigos_favoritos[P]>
  }




  export type artigos_favoritosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: artigos_favoritosWhereInput
    orderBy?: artigos_favoritosOrderByWithAggregationInput | artigos_favoritosOrderByWithAggregationInput[]
    by: Artigos_favoritosScalarFieldEnum[] | Artigos_favoritosScalarFieldEnum
    having?: artigos_favoritosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Artigos_favoritosCountAggregateInputType | true
    _avg?: Artigos_favoritosAvgAggregateInputType
    _sum?: Artigos_favoritosSumAggregateInputType
    _min?: Artigos_favoritosMinAggregateInputType
    _max?: Artigos_favoritosMaxAggregateInputType
  }

  export type Artigos_favoritosGroupByOutputType = {
    artigos_fav_id: number
    user_id: number | null
    artigos_id: number | null
    _count: Artigos_favoritosCountAggregateOutputType | null
    _avg: Artigos_favoritosAvgAggregateOutputType | null
    _sum: Artigos_favoritosSumAggregateOutputType | null
    _min: Artigos_favoritosMinAggregateOutputType | null
    _max: Artigos_favoritosMaxAggregateOutputType | null
  }

  type GetArtigos_favoritosGroupByPayload<T extends artigos_favoritosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Artigos_favoritosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Artigos_favoritosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Artigos_favoritosGroupByOutputType[P]>
            : GetScalarType<T[P], Artigos_favoritosGroupByOutputType[P]>
        }
      >
    >


  export type artigos_favoritosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artigos_fav_id?: boolean
    user_id?: boolean
    artigos_id?: boolean
    cadastros?: boolean | artigos_favoritos$cadastrosArgs<ExtArgs>
    artigos?: boolean | artigos_favoritos$artigosArgs<ExtArgs>
  }, ExtArgs["result"]["artigos_favoritos"]>



  export type artigos_favoritosSelectScalar = {
    artigos_fav_id?: boolean
    user_id?: boolean
    artigos_id?: boolean
  }

  export type artigos_favoritosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"artigos_fav_id" | "user_id" | "artigos_id", ExtArgs["result"]["artigos_favoritos"]>
  export type artigos_favoritosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cadastros?: boolean | artigos_favoritos$cadastrosArgs<ExtArgs>
    artigos?: boolean | artigos_favoritos$artigosArgs<ExtArgs>
  }

  export type $artigos_favoritosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "artigos_favoritos"
    objects: {
      cadastros: Prisma.$cadastrosPayload<ExtArgs> | null
      artigos: Prisma.$artigosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      artigos_fav_id: number
      user_id: number | null
      artigos_id: number | null
    }, ExtArgs["result"]["artigos_favoritos"]>
    composites: {}
  }

  type artigos_favoritosGetPayload<S extends boolean | null | undefined | artigos_favoritosDefaultArgs> = $Result.GetResult<Prisma.$artigos_favoritosPayload, S>

  type artigos_favoritosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<artigos_favoritosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Artigos_favoritosCountAggregateInputType | true
    }

  export interface artigos_favoritosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['artigos_favoritos'], meta: { name: 'artigos_favoritos' } }
    /**
     * Find zero or one Artigos_favoritos that matches the filter.
     * @param {artigos_favoritosFindUniqueArgs} args - Arguments to find a Artigos_favoritos
     * @example
     * // Get one Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends artigos_favoritosFindUniqueArgs>(args: SelectSubset<T, artigos_favoritosFindUniqueArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artigos_favoritos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {artigos_favoritosFindUniqueOrThrowArgs} args - Arguments to find a Artigos_favoritos
     * @example
     * // Get one Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends artigos_favoritosFindUniqueOrThrowArgs>(args: SelectSubset<T, artigos_favoritosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artigos_favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigos_favoritosFindFirstArgs} args - Arguments to find a Artigos_favoritos
     * @example
     * // Get one Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends artigos_favoritosFindFirstArgs>(args?: SelectSubset<T, artigos_favoritosFindFirstArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artigos_favoritos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigos_favoritosFindFirstOrThrowArgs} args - Arguments to find a Artigos_favoritos
     * @example
     * // Get one Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends artigos_favoritosFindFirstOrThrowArgs>(args?: SelectSubset<T, artigos_favoritosFindFirstOrThrowArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artigos_favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigos_favoritosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.findMany()
     * 
     * // Get first 10 Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.findMany({ take: 10 })
     * 
     * // Only select the `artigos_fav_id`
     * const artigos_favoritosWithArtigos_fav_idOnly = await prisma.artigos_favoritos.findMany({ select: { artigos_fav_id: true } })
     * 
     */
    findMany<T extends artigos_favoritosFindManyArgs>(args?: SelectSubset<T, artigos_favoritosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artigos_favoritos.
     * @param {artigos_favoritosCreateArgs} args - Arguments to create a Artigos_favoritos.
     * @example
     * // Create one Artigos_favoritos
     * const Artigos_favoritos = await prisma.artigos_favoritos.create({
     *   data: {
     *     // ... data to create a Artigos_favoritos
     *   }
     * })
     * 
     */
    create<T extends artigos_favoritosCreateArgs>(args: SelectSubset<T, artigos_favoritosCreateArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artigos_favoritos.
     * @param {artigos_favoritosCreateManyArgs} args - Arguments to create many Artigos_favoritos.
     * @example
     * // Create many Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends artigos_favoritosCreateManyArgs>(args?: SelectSubset<T, artigos_favoritosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artigos_favoritos.
     * @param {artigos_favoritosDeleteArgs} args - Arguments to delete one Artigos_favoritos.
     * @example
     * // Delete one Artigos_favoritos
     * const Artigos_favoritos = await prisma.artigos_favoritos.delete({
     *   where: {
     *     // ... filter to delete one Artigos_favoritos
     *   }
     * })
     * 
     */
    delete<T extends artigos_favoritosDeleteArgs>(args: SelectSubset<T, artigos_favoritosDeleteArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artigos_favoritos.
     * @param {artigos_favoritosUpdateArgs} args - Arguments to update one Artigos_favoritos.
     * @example
     * // Update one Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends artigos_favoritosUpdateArgs>(args: SelectSubset<T, artigos_favoritosUpdateArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artigos_favoritos.
     * @param {artigos_favoritosDeleteManyArgs} args - Arguments to filter Artigos_favoritos to delete.
     * @example
     * // Delete a few Artigos_favoritos
     * const { count } = await prisma.artigos_favoritos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends artigos_favoritosDeleteManyArgs>(args?: SelectSubset<T, artigos_favoritosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artigos_favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigos_favoritosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends artigos_favoritosUpdateManyArgs>(args: SelectSubset<T, artigos_favoritosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artigos_favoritos.
     * @param {artigos_favoritosUpsertArgs} args - Arguments to update or create a Artigos_favoritos.
     * @example
     * // Update or create a Artigos_favoritos
     * const artigos_favoritos = await prisma.artigos_favoritos.upsert({
     *   create: {
     *     // ... data to create a Artigos_favoritos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artigos_favoritos we want to update
     *   }
     * })
     */
    upsert<T extends artigos_favoritosUpsertArgs>(args: SelectSubset<T, artigos_favoritosUpsertArgs<ExtArgs>>): Prisma__artigos_favoritosClient<$Result.GetResult<Prisma.$artigos_favoritosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artigos_favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigos_favoritosCountArgs} args - Arguments to filter Artigos_favoritos to count.
     * @example
     * // Count the number of Artigos_favoritos
     * const count = await prisma.artigos_favoritos.count({
     *   where: {
     *     // ... the filter for the Artigos_favoritos we want to count
     *   }
     * })
    **/
    count<T extends artigos_favoritosCountArgs>(
      args?: Subset<T, artigos_favoritosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Artigos_favoritosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artigos_favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Artigos_favoritosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Artigos_favoritosAggregateArgs>(args: Subset<T, Artigos_favoritosAggregateArgs>): Prisma.PrismaPromise<GetArtigos_favoritosAggregateType<T>>

    /**
     * Group by Artigos_favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {artigos_favoritosGroupByArgs} args - Group by arguments.
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
      T extends artigos_favoritosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: artigos_favoritosGroupByArgs['orderBy'] }
        : { orderBy?: artigos_favoritosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, artigos_favoritosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtigos_favoritosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the artigos_favoritos model
   */
  readonly fields: artigos_favoritosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for artigos_favoritos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__artigos_favoritosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cadastros<T extends artigos_favoritos$cadastrosArgs<ExtArgs> = {}>(args?: Subset<T, artigos_favoritos$cadastrosArgs<ExtArgs>>): Prisma__cadastrosClient<$Result.GetResult<Prisma.$cadastrosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    artigos<T extends artigos_favoritos$artigosArgs<ExtArgs> = {}>(args?: Subset<T, artigos_favoritos$artigosArgs<ExtArgs>>): Prisma__artigosClient<$Result.GetResult<Prisma.$artigosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the artigos_favoritos model
   */
  interface artigos_favoritosFieldRefs {
    readonly artigos_fav_id: FieldRef<"artigos_favoritos", 'Int'>
    readonly user_id: FieldRef<"artigos_favoritos", 'Int'>
    readonly artigos_id: FieldRef<"artigos_favoritos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * artigos_favoritos findUnique
   */
  export type artigos_favoritosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * Filter, which artigos_favoritos to fetch.
     */
    where: artigos_favoritosWhereUniqueInput
  }

  /**
   * artigos_favoritos findUniqueOrThrow
   */
  export type artigos_favoritosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * Filter, which artigos_favoritos to fetch.
     */
    where: artigos_favoritosWhereUniqueInput
  }

  /**
   * artigos_favoritos findFirst
   */
  export type artigos_favoritosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * Filter, which artigos_favoritos to fetch.
     */
    where?: artigos_favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos_favoritos to fetch.
     */
    orderBy?: artigos_favoritosOrderByWithRelationInput | artigos_favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artigos_favoritos.
     */
    cursor?: artigos_favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos_favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos_favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artigos_favoritos.
     */
    distinct?: Artigos_favoritosScalarFieldEnum | Artigos_favoritosScalarFieldEnum[]
  }

  /**
   * artigos_favoritos findFirstOrThrow
   */
  export type artigos_favoritosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * Filter, which artigos_favoritos to fetch.
     */
    where?: artigos_favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos_favoritos to fetch.
     */
    orderBy?: artigos_favoritosOrderByWithRelationInput | artigos_favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for artigos_favoritos.
     */
    cursor?: artigos_favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos_favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos_favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of artigos_favoritos.
     */
    distinct?: Artigos_favoritosScalarFieldEnum | Artigos_favoritosScalarFieldEnum[]
  }

  /**
   * artigos_favoritos findMany
   */
  export type artigos_favoritosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * Filter, which artigos_favoritos to fetch.
     */
    where?: artigos_favoritosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of artigos_favoritos to fetch.
     */
    orderBy?: artigos_favoritosOrderByWithRelationInput | artigos_favoritosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing artigos_favoritos.
     */
    cursor?: artigos_favoritosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` artigos_favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` artigos_favoritos.
     */
    skip?: number
    distinct?: Artigos_favoritosScalarFieldEnum | Artigos_favoritosScalarFieldEnum[]
  }

  /**
   * artigos_favoritos create
   */
  export type artigos_favoritosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * The data needed to create a artigos_favoritos.
     */
    data?: XOR<artigos_favoritosCreateInput, artigos_favoritosUncheckedCreateInput>
  }

  /**
   * artigos_favoritos createMany
   */
  export type artigos_favoritosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many artigos_favoritos.
     */
    data: artigos_favoritosCreateManyInput | artigos_favoritosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * artigos_favoritos update
   */
  export type artigos_favoritosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * The data needed to update a artigos_favoritos.
     */
    data: XOR<artigos_favoritosUpdateInput, artigos_favoritosUncheckedUpdateInput>
    /**
     * Choose, which artigos_favoritos to update.
     */
    where: artigos_favoritosWhereUniqueInput
  }

  /**
   * artigos_favoritos updateMany
   */
  export type artigos_favoritosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update artigos_favoritos.
     */
    data: XOR<artigos_favoritosUpdateManyMutationInput, artigos_favoritosUncheckedUpdateManyInput>
    /**
     * Filter which artigos_favoritos to update
     */
    where?: artigos_favoritosWhereInput
    /**
     * Limit how many artigos_favoritos to update.
     */
    limit?: number
  }

  /**
   * artigos_favoritos upsert
   */
  export type artigos_favoritosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * The filter to search for the artigos_favoritos to update in case it exists.
     */
    where: artigos_favoritosWhereUniqueInput
    /**
     * In case the artigos_favoritos found by the `where` argument doesn't exist, create a new artigos_favoritos with this data.
     */
    create: XOR<artigos_favoritosCreateInput, artigos_favoritosUncheckedCreateInput>
    /**
     * In case the artigos_favoritos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<artigos_favoritosUpdateInput, artigos_favoritosUncheckedUpdateInput>
  }

  /**
   * artigos_favoritos delete
   */
  export type artigos_favoritosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
    /**
     * Filter which artigos_favoritos to delete.
     */
    where: artigos_favoritosWhereUniqueInput
  }

  /**
   * artigos_favoritos deleteMany
   */
  export type artigos_favoritosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which artigos_favoritos to delete
     */
    where?: artigos_favoritosWhereInput
    /**
     * Limit how many artigos_favoritos to delete.
     */
    limit?: number
  }

  /**
   * artigos_favoritos.cadastros
   */
  export type artigos_favoritos$cadastrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cadastros
     */
    select?: cadastrosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cadastros
     */
    omit?: cadastrosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cadastrosInclude<ExtArgs> | null
    where?: cadastrosWhereInput
  }

  /**
   * artigos_favoritos.artigos
   */
  export type artigos_favoritos$artigosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos
     */
    select?: artigosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos
     */
    omit?: artigosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigosInclude<ExtArgs> | null
    where?: artigosWhereInput
  }

  /**
   * artigos_favoritos without action
   */
  export type artigos_favoritosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the artigos_favoritos
     */
    select?: artigos_favoritosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the artigos_favoritos
     */
    omit?: artigos_favoritosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: artigos_favoritosInclude<ExtArgs> | null
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


  export const CadastrosScalarFieldEnum: {
    user_id: 'user_id',
    user_age: 'user_age',
    user_mail: 'user_mail',
    user_firstname: 'user_firstname',
    user_secondname: 'user_secondname',
    user_phone: 'user_phone',
    user_password_hash: 'user_password_hash'
  };

  export type CadastrosScalarFieldEnum = (typeof CadastrosScalarFieldEnum)[keyof typeof CadastrosScalarFieldEnum]


  export const CalendariosScalarFieldEnum: {
    calendar_id: 'calendar_id',
    user_id: 'user_id',
    calendar_data: 'calendar_data',
    calendar_consulta: 'calendar_consulta'
  };

  export type CalendariosScalarFieldEnum = (typeof CalendariosScalarFieldEnum)[keyof typeof CalendariosScalarFieldEnum]


  export const PerfisScalarFieldEnum: {
    user_id: 'user_id',
    user_name: 'user_name',
    user_image: 'user_image'
  };

  export type PerfisScalarFieldEnum = (typeof PerfisScalarFieldEnum)[keyof typeof PerfisScalarFieldEnum]


  export const Postagem_comentariosScalarFieldEnum: {
    comentario_id: 'comentario_id',
    post_id: 'post_id',
    user_id: 'user_id',
    comentario_text: 'comentario_text',
    comentario_data: 'comentario_data'
  };

  export type Postagem_comentariosScalarFieldEnum = (typeof Postagem_comentariosScalarFieldEnum)[keyof typeof Postagem_comentariosScalarFieldEnum]


  export const PostagensScalarFieldEnum: {
    post_id: 'post_id',
    user_id: 'user_id',
    post_name: 'post_name',
    post_text: 'post_text',
    post_data: 'post_data',
    post_image: 'post_image',
    post_gender: 'post_gender'
  };

  export type PostagensScalarFieldEnum = (typeof PostagensScalarFieldEnum)[keyof typeof PostagensScalarFieldEnum]


  export const Postagem_likesScalarFieldEnum: {
    id_like: 'id_like',
    post_id: 'post_id',
    user_id: 'user_id',
    data_like: 'data_like'
  };

  export type Postagem_likesScalarFieldEnum = (typeof Postagem_likesScalarFieldEnum)[keyof typeof Postagem_likesScalarFieldEnum]


  export const ArtigosScalarFieldEnum: {
    artigos_id: 'artigos_id',
    artigos_gender: 'artigos_gender',
    artigos_titulo: 'artigos_titulo',
    artigos_description: 'artigos_description',
    artigos_url: 'artigos_url',
    artigos_autor: 'artigos_autor'
  };

  export type ArtigosScalarFieldEnum = (typeof ArtigosScalarFieldEnum)[keyof typeof ArtigosScalarFieldEnum]


  export const Artigos_favoritosScalarFieldEnum: {
    artigos_fav_id: 'artigos_fav_id',
    user_id: 'user_id',
    artigos_id: 'artigos_id'
  };

  export type Artigos_favoritosScalarFieldEnum = (typeof Artigos_favoritosScalarFieldEnum)[keyof typeof Artigos_favoritosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const cadastrosOrderByRelevanceFieldEnum: {
    user_mail: 'user_mail',
    user_firstname: 'user_firstname',
    user_secondname: 'user_secondname',
    user_phone: 'user_phone',
    user_password_hash: 'user_password_hash'
  };

  export type cadastrosOrderByRelevanceFieldEnum = (typeof cadastrosOrderByRelevanceFieldEnum)[keyof typeof cadastrosOrderByRelevanceFieldEnum]


  export const calendariosOrderByRelevanceFieldEnum: {
    calendar_consulta: 'calendar_consulta'
  };

  export type calendariosOrderByRelevanceFieldEnum = (typeof calendariosOrderByRelevanceFieldEnum)[keyof typeof calendariosOrderByRelevanceFieldEnum]


  export const perfisOrderByRelevanceFieldEnum: {
    user_name: 'user_name'
  };

  export type perfisOrderByRelevanceFieldEnum = (typeof perfisOrderByRelevanceFieldEnum)[keyof typeof perfisOrderByRelevanceFieldEnum]


  export const postagem_comentariosOrderByRelevanceFieldEnum: {
    comentario_text: 'comentario_text'
  };

  export type postagem_comentariosOrderByRelevanceFieldEnum = (typeof postagem_comentariosOrderByRelevanceFieldEnum)[keyof typeof postagem_comentariosOrderByRelevanceFieldEnum]


  export const postagensOrderByRelevanceFieldEnum: {
    post_name: 'post_name',
    post_text: 'post_text',
    post_gender: 'post_gender'
  };

  export type postagensOrderByRelevanceFieldEnum = (typeof postagensOrderByRelevanceFieldEnum)[keyof typeof postagensOrderByRelevanceFieldEnum]


  export const artigosOrderByRelevanceFieldEnum: {
    artigos_gender: 'artigos_gender',
    artigos_titulo: 'artigos_titulo',
    artigos_description: 'artigos_description',
    artigos_url: 'artigos_url',
    artigos_autor: 'artigos_autor'
  };

  export type artigosOrderByRelevanceFieldEnum = (typeof artigosOrderByRelevanceFieldEnum)[keyof typeof artigosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cadastrosWhereInput = {
    AND?: cadastrosWhereInput | cadastrosWhereInput[]
    OR?: cadastrosWhereInput[]
    NOT?: cadastrosWhereInput | cadastrosWhereInput[]
    user_id?: IntFilter<"cadastros"> | number
    user_age?: IntNullableFilter<"cadastros"> | number | null
    user_mail?: StringNullableFilter<"cadastros"> | string | null
    user_firstname?: StringNullableFilter<"cadastros"> | string | null
    user_secondname?: StringNullableFilter<"cadastros"> | string | null
    user_phone?: StringNullableFilter<"cadastros"> | string | null
    user_password_hash?: StringNullableFilter<"cadastros"> | string | null
    artigos_favoritos?: Artigos_favoritosListRelationFilter
    calendarios?: CalendariosListRelationFilter
    perfis?: XOR<PerfisNullableScalarRelationFilter, perfisWhereInput> | null
    postagem_comentarios?: Postagem_comentariosListRelationFilter
    postagem_likes?: Postagem_likesListRelationFilter
    postagens?: PostagensListRelationFilter
  }

  export type cadastrosOrderByWithRelationInput = {
    user_id?: SortOrder
    user_age?: SortOrderInput | SortOrder
    user_mail?: SortOrderInput | SortOrder
    user_firstname?: SortOrderInput | SortOrder
    user_secondname?: SortOrderInput | SortOrder
    user_phone?: SortOrderInput | SortOrder
    user_password_hash?: SortOrderInput | SortOrder
    artigos_favoritos?: artigos_favoritosOrderByRelationAggregateInput
    calendarios?: calendariosOrderByRelationAggregateInput
    perfis?: perfisOrderByWithRelationInput
    postagem_comentarios?: postagem_comentariosOrderByRelationAggregateInput
    postagem_likes?: postagem_likesOrderByRelationAggregateInput
    postagens?: postagensOrderByRelationAggregateInput
    _relevance?: cadastrosOrderByRelevanceInput
  }

  export type cadastrosWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    user_mail?: string
    AND?: cadastrosWhereInput | cadastrosWhereInput[]
    OR?: cadastrosWhereInput[]
    NOT?: cadastrosWhereInput | cadastrosWhereInput[]
    user_age?: IntNullableFilter<"cadastros"> | number | null
    user_firstname?: StringNullableFilter<"cadastros"> | string | null
    user_secondname?: StringNullableFilter<"cadastros"> | string | null
    user_phone?: StringNullableFilter<"cadastros"> | string | null
    user_password_hash?: StringNullableFilter<"cadastros"> | string | null
    artigos_favoritos?: Artigos_favoritosListRelationFilter
    calendarios?: CalendariosListRelationFilter
    perfis?: XOR<PerfisNullableScalarRelationFilter, perfisWhereInput> | null
    postagem_comentarios?: Postagem_comentariosListRelationFilter
    postagem_likes?: Postagem_likesListRelationFilter
    postagens?: PostagensListRelationFilter
  }, "user_id" | "user_mail">

  export type cadastrosOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_age?: SortOrderInput | SortOrder
    user_mail?: SortOrderInput | SortOrder
    user_firstname?: SortOrderInput | SortOrder
    user_secondname?: SortOrderInput | SortOrder
    user_phone?: SortOrderInput | SortOrder
    user_password_hash?: SortOrderInput | SortOrder
    _count?: cadastrosCountOrderByAggregateInput
    _avg?: cadastrosAvgOrderByAggregateInput
    _max?: cadastrosMaxOrderByAggregateInput
    _min?: cadastrosMinOrderByAggregateInput
    _sum?: cadastrosSumOrderByAggregateInput
  }

  export type cadastrosScalarWhereWithAggregatesInput = {
    AND?: cadastrosScalarWhereWithAggregatesInput | cadastrosScalarWhereWithAggregatesInput[]
    OR?: cadastrosScalarWhereWithAggregatesInput[]
    NOT?: cadastrosScalarWhereWithAggregatesInput | cadastrosScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"cadastros"> | number
    user_age?: IntNullableWithAggregatesFilter<"cadastros"> | number | null
    user_mail?: StringNullableWithAggregatesFilter<"cadastros"> | string | null
    user_firstname?: StringNullableWithAggregatesFilter<"cadastros"> | string | null
    user_secondname?: StringNullableWithAggregatesFilter<"cadastros"> | string | null
    user_phone?: StringNullableWithAggregatesFilter<"cadastros"> | string | null
    user_password_hash?: StringNullableWithAggregatesFilter<"cadastros"> | string | null
  }

  export type calendariosWhereInput = {
    AND?: calendariosWhereInput | calendariosWhereInput[]
    OR?: calendariosWhereInput[]
    NOT?: calendariosWhereInput | calendariosWhereInput[]
    calendar_id?: IntFilter<"calendarios"> | number
    user_id?: IntNullableFilter<"calendarios"> | number | null
    calendar_data?: DateTimeNullableFilter<"calendarios"> | Date | string | null
    calendar_consulta?: StringNullableFilter<"calendarios"> | string | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }

  export type calendariosOrderByWithRelationInput = {
    calendar_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    calendar_data?: SortOrderInput | SortOrder
    calendar_consulta?: SortOrderInput | SortOrder
    cadastros?: cadastrosOrderByWithRelationInput
    _relevance?: calendariosOrderByRelevanceInput
  }

  export type calendariosWhereUniqueInput = Prisma.AtLeast<{
    calendar_id?: number
    AND?: calendariosWhereInput | calendariosWhereInput[]
    OR?: calendariosWhereInput[]
    NOT?: calendariosWhereInput | calendariosWhereInput[]
    user_id?: IntNullableFilter<"calendarios"> | number | null
    calendar_data?: DateTimeNullableFilter<"calendarios"> | Date | string | null
    calendar_consulta?: StringNullableFilter<"calendarios"> | string | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }, "calendar_id">

  export type calendariosOrderByWithAggregationInput = {
    calendar_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    calendar_data?: SortOrderInput | SortOrder
    calendar_consulta?: SortOrderInput | SortOrder
    _count?: calendariosCountOrderByAggregateInput
    _avg?: calendariosAvgOrderByAggregateInput
    _max?: calendariosMaxOrderByAggregateInput
    _min?: calendariosMinOrderByAggregateInput
    _sum?: calendariosSumOrderByAggregateInput
  }

  export type calendariosScalarWhereWithAggregatesInput = {
    AND?: calendariosScalarWhereWithAggregatesInput | calendariosScalarWhereWithAggregatesInput[]
    OR?: calendariosScalarWhereWithAggregatesInput[]
    NOT?: calendariosScalarWhereWithAggregatesInput | calendariosScalarWhereWithAggregatesInput[]
    calendar_id?: IntWithAggregatesFilter<"calendarios"> | number
    user_id?: IntNullableWithAggregatesFilter<"calendarios"> | number | null
    calendar_data?: DateTimeNullableWithAggregatesFilter<"calendarios"> | Date | string | null
    calendar_consulta?: StringNullableWithAggregatesFilter<"calendarios"> | string | null
  }

  export type perfisWhereInput = {
    AND?: perfisWhereInput | perfisWhereInput[]
    OR?: perfisWhereInput[]
    NOT?: perfisWhereInput | perfisWhereInput[]
    user_id?: IntFilter<"perfis"> | number
    user_name?: StringNullableFilter<"perfis"> | string | null
    user_image?: BytesNullableFilter<"perfis"> | Bytes | null
    cadastros?: XOR<CadastrosScalarRelationFilter, cadastrosWhereInput>
  }

  export type perfisOrderByWithRelationInput = {
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    user_image?: SortOrderInput | SortOrder
    cadastros?: cadastrosOrderByWithRelationInput
    _relevance?: perfisOrderByRelevanceInput
  }

  export type perfisWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: perfisWhereInput | perfisWhereInput[]
    OR?: perfisWhereInput[]
    NOT?: perfisWhereInput | perfisWhereInput[]
    user_name?: StringNullableFilter<"perfis"> | string | null
    user_image?: BytesNullableFilter<"perfis"> | Bytes | null
    cadastros?: XOR<CadastrosScalarRelationFilter, cadastrosWhereInput>
  }, "user_id">

  export type perfisOrderByWithAggregationInput = {
    user_id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    user_image?: SortOrderInput | SortOrder
    _count?: perfisCountOrderByAggregateInput
    _avg?: perfisAvgOrderByAggregateInput
    _max?: perfisMaxOrderByAggregateInput
    _min?: perfisMinOrderByAggregateInput
    _sum?: perfisSumOrderByAggregateInput
  }

  export type perfisScalarWhereWithAggregatesInput = {
    AND?: perfisScalarWhereWithAggregatesInput | perfisScalarWhereWithAggregatesInput[]
    OR?: perfisScalarWhereWithAggregatesInput[]
    NOT?: perfisScalarWhereWithAggregatesInput | perfisScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"perfis"> | number
    user_name?: StringNullableWithAggregatesFilter<"perfis"> | string | null
    user_image?: BytesNullableWithAggregatesFilter<"perfis"> | Bytes | null
  }

  export type postagem_comentariosWhereInput = {
    AND?: postagem_comentariosWhereInput | postagem_comentariosWhereInput[]
    OR?: postagem_comentariosWhereInput[]
    NOT?: postagem_comentariosWhereInput | postagem_comentariosWhereInput[]
    comentario_id?: IntFilter<"postagem_comentarios"> | number
    post_id?: IntNullableFilter<"postagem_comentarios"> | number | null
    user_id?: IntNullableFilter<"postagem_comentarios"> | number | null
    comentario_text?: StringNullableFilter<"postagem_comentarios"> | string | null
    comentario_data?: DateTimeNullableFilter<"postagem_comentarios"> | Date | string | null
    postagens?: XOR<PostagensNullableScalarRelationFilter, postagensWhereInput> | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }

  export type postagem_comentariosOrderByWithRelationInput = {
    comentario_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comentario_text?: SortOrderInput | SortOrder
    comentario_data?: SortOrderInput | SortOrder
    postagens?: postagensOrderByWithRelationInput
    cadastros?: cadastrosOrderByWithRelationInput
    _relevance?: postagem_comentariosOrderByRelevanceInput
  }

  export type postagem_comentariosWhereUniqueInput = Prisma.AtLeast<{
    comentario_id?: number
    AND?: postagem_comentariosWhereInput | postagem_comentariosWhereInput[]
    OR?: postagem_comentariosWhereInput[]
    NOT?: postagem_comentariosWhereInput | postagem_comentariosWhereInput[]
    post_id?: IntNullableFilter<"postagem_comentarios"> | number | null
    user_id?: IntNullableFilter<"postagem_comentarios"> | number | null
    comentario_text?: StringNullableFilter<"postagem_comentarios"> | string | null
    comentario_data?: DateTimeNullableFilter<"postagem_comentarios"> | Date | string | null
    postagens?: XOR<PostagensNullableScalarRelationFilter, postagensWhereInput> | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }, "comentario_id">

  export type postagem_comentariosOrderByWithAggregationInput = {
    comentario_id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    comentario_text?: SortOrderInput | SortOrder
    comentario_data?: SortOrderInput | SortOrder
    _count?: postagem_comentariosCountOrderByAggregateInput
    _avg?: postagem_comentariosAvgOrderByAggregateInput
    _max?: postagem_comentariosMaxOrderByAggregateInput
    _min?: postagem_comentariosMinOrderByAggregateInput
    _sum?: postagem_comentariosSumOrderByAggregateInput
  }

  export type postagem_comentariosScalarWhereWithAggregatesInput = {
    AND?: postagem_comentariosScalarWhereWithAggregatesInput | postagem_comentariosScalarWhereWithAggregatesInput[]
    OR?: postagem_comentariosScalarWhereWithAggregatesInput[]
    NOT?: postagem_comentariosScalarWhereWithAggregatesInput | postagem_comentariosScalarWhereWithAggregatesInput[]
    comentario_id?: IntWithAggregatesFilter<"postagem_comentarios"> | number
    post_id?: IntNullableWithAggregatesFilter<"postagem_comentarios"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"postagem_comentarios"> | number | null
    comentario_text?: StringNullableWithAggregatesFilter<"postagem_comentarios"> | string | null
    comentario_data?: DateTimeNullableWithAggregatesFilter<"postagem_comentarios"> | Date | string | null
  }

  export type postagensWhereInput = {
    AND?: postagensWhereInput | postagensWhereInput[]
    OR?: postagensWhereInput[]
    NOT?: postagensWhereInput | postagensWhereInput[]
    post_id?: IntFilter<"postagens"> | number
    user_id?: IntNullableFilter<"postagens"> | number | null
    post_name?: StringNullableFilter<"postagens"> | string | null
    post_text?: StringNullableFilter<"postagens"> | string | null
    post_data?: DateTimeNullableFilter<"postagens"> | Date | string | null
    post_image?: BytesNullableFilter<"postagens"> | Bytes | null
    post_gender?: StringNullableFilter<"postagens"> | string | null
    postagem_comentarios?: Postagem_comentariosListRelationFilter
    postagem_likes?: Postagem_likesListRelationFilter
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }

  export type postagensOrderByWithRelationInput = {
    post_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    post_name?: SortOrderInput | SortOrder
    post_text?: SortOrderInput | SortOrder
    post_data?: SortOrderInput | SortOrder
    post_image?: SortOrderInput | SortOrder
    post_gender?: SortOrderInput | SortOrder
    postagem_comentarios?: postagem_comentariosOrderByRelationAggregateInput
    postagem_likes?: postagem_likesOrderByRelationAggregateInput
    cadastros?: cadastrosOrderByWithRelationInput
    _relevance?: postagensOrderByRelevanceInput
  }

  export type postagensWhereUniqueInput = Prisma.AtLeast<{
    post_id?: number
    AND?: postagensWhereInput | postagensWhereInput[]
    OR?: postagensWhereInput[]
    NOT?: postagensWhereInput | postagensWhereInput[]
    user_id?: IntNullableFilter<"postagens"> | number | null
    post_name?: StringNullableFilter<"postagens"> | string | null
    post_text?: StringNullableFilter<"postagens"> | string | null
    post_data?: DateTimeNullableFilter<"postagens"> | Date | string | null
    post_image?: BytesNullableFilter<"postagens"> | Bytes | null
    post_gender?: StringNullableFilter<"postagens"> | string | null
    postagem_comentarios?: Postagem_comentariosListRelationFilter
    postagem_likes?: Postagem_likesListRelationFilter
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }, "post_id">

  export type postagensOrderByWithAggregationInput = {
    post_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    post_name?: SortOrderInput | SortOrder
    post_text?: SortOrderInput | SortOrder
    post_data?: SortOrderInput | SortOrder
    post_image?: SortOrderInput | SortOrder
    post_gender?: SortOrderInput | SortOrder
    _count?: postagensCountOrderByAggregateInput
    _avg?: postagensAvgOrderByAggregateInput
    _max?: postagensMaxOrderByAggregateInput
    _min?: postagensMinOrderByAggregateInput
    _sum?: postagensSumOrderByAggregateInput
  }

  export type postagensScalarWhereWithAggregatesInput = {
    AND?: postagensScalarWhereWithAggregatesInput | postagensScalarWhereWithAggregatesInput[]
    OR?: postagensScalarWhereWithAggregatesInput[]
    NOT?: postagensScalarWhereWithAggregatesInput | postagensScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"postagens"> | number
    user_id?: IntNullableWithAggregatesFilter<"postagens"> | number | null
    post_name?: StringNullableWithAggregatesFilter<"postagens"> | string | null
    post_text?: StringNullableWithAggregatesFilter<"postagens"> | string | null
    post_data?: DateTimeNullableWithAggregatesFilter<"postagens"> | Date | string | null
    post_image?: BytesNullableWithAggregatesFilter<"postagens"> | Bytes | null
    post_gender?: StringNullableWithAggregatesFilter<"postagens"> | string | null
  }

  export type postagem_likesWhereInput = {
    AND?: postagem_likesWhereInput | postagem_likesWhereInput[]
    OR?: postagem_likesWhereInput[]
    NOT?: postagem_likesWhereInput | postagem_likesWhereInput[]
    id_like?: IntFilter<"postagem_likes"> | number
    post_id?: IntNullableFilter<"postagem_likes"> | number | null
    user_id?: IntNullableFilter<"postagem_likes"> | number | null
    data_like?: DateTimeNullableFilter<"postagem_likes"> | Date | string | null
    postagens?: XOR<PostagensNullableScalarRelationFilter, postagensWhereInput> | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }

  export type postagem_likesOrderByWithRelationInput = {
    id_like?: SortOrder
    post_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    data_like?: SortOrderInput | SortOrder
    postagens?: postagensOrderByWithRelationInput
    cadastros?: cadastrosOrderByWithRelationInput
  }

  export type postagem_likesWhereUniqueInput = Prisma.AtLeast<{
    id_like?: number
    AND?: postagem_likesWhereInput | postagem_likesWhereInput[]
    OR?: postagem_likesWhereInput[]
    NOT?: postagem_likesWhereInput | postagem_likesWhereInput[]
    post_id?: IntNullableFilter<"postagem_likes"> | number | null
    user_id?: IntNullableFilter<"postagem_likes"> | number | null
    data_like?: DateTimeNullableFilter<"postagem_likes"> | Date | string | null
    postagens?: XOR<PostagensNullableScalarRelationFilter, postagensWhereInput> | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
  }, "id_like">

  export type postagem_likesOrderByWithAggregationInput = {
    id_like?: SortOrder
    post_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    data_like?: SortOrderInput | SortOrder
    _count?: postagem_likesCountOrderByAggregateInput
    _avg?: postagem_likesAvgOrderByAggregateInput
    _max?: postagem_likesMaxOrderByAggregateInput
    _min?: postagem_likesMinOrderByAggregateInput
    _sum?: postagem_likesSumOrderByAggregateInput
  }

  export type postagem_likesScalarWhereWithAggregatesInput = {
    AND?: postagem_likesScalarWhereWithAggregatesInput | postagem_likesScalarWhereWithAggregatesInput[]
    OR?: postagem_likesScalarWhereWithAggregatesInput[]
    NOT?: postagem_likesScalarWhereWithAggregatesInput | postagem_likesScalarWhereWithAggregatesInput[]
    id_like?: IntWithAggregatesFilter<"postagem_likes"> | number
    post_id?: IntNullableWithAggregatesFilter<"postagem_likes"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"postagem_likes"> | number | null
    data_like?: DateTimeNullableWithAggregatesFilter<"postagem_likes"> | Date | string | null
  }

  export type artigosWhereInput = {
    AND?: artigosWhereInput | artigosWhereInput[]
    OR?: artigosWhereInput[]
    NOT?: artigosWhereInput | artigosWhereInput[]
    artigos_id?: IntFilter<"artigos"> | number
    artigos_gender?: StringNullableFilter<"artigos"> | string | null
    artigos_titulo?: StringNullableFilter<"artigos"> | string | null
    artigos_description?: StringNullableFilter<"artigos"> | string | null
    artigos_url?: StringNullableFilter<"artigos"> | string | null
    artigos_autor?: StringNullableFilter<"artigos"> | string | null
    artigos_favoritos?: Artigos_favoritosListRelationFilter
  }

  export type artigosOrderByWithRelationInput = {
    artigos_id?: SortOrder
    artigos_gender?: SortOrderInput | SortOrder
    artigos_titulo?: SortOrderInput | SortOrder
    artigos_description?: SortOrderInput | SortOrder
    artigos_url?: SortOrderInput | SortOrder
    artigos_autor?: SortOrderInput | SortOrder
    artigos_favoritos?: artigos_favoritosOrderByRelationAggregateInput
    _relevance?: artigosOrderByRelevanceInput
  }

  export type artigosWhereUniqueInput = Prisma.AtLeast<{
    artigos_id?: number
    AND?: artigosWhereInput | artigosWhereInput[]
    OR?: artigosWhereInput[]
    NOT?: artigosWhereInput | artigosWhereInput[]
    artigos_gender?: StringNullableFilter<"artigos"> | string | null
    artigos_titulo?: StringNullableFilter<"artigos"> | string | null
    artigos_description?: StringNullableFilter<"artigos"> | string | null
    artigos_url?: StringNullableFilter<"artigos"> | string | null
    artigos_autor?: StringNullableFilter<"artigos"> | string | null
    artigos_favoritos?: Artigos_favoritosListRelationFilter
  }, "artigos_id">

  export type artigosOrderByWithAggregationInput = {
    artigos_id?: SortOrder
    artigos_gender?: SortOrderInput | SortOrder
    artigos_titulo?: SortOrderInput | SortOrder
    artigos_description?: SortOrderInput | SortOrder
    artigos_url?: SortOrderInput | SortOrder
    artigos_autor?: SortOrderInput | SortOrder
    _count?: artigosCountOrderByAggregateInput
    _avg?: artigosAvgOrderByAggregateInput
    _max?: artigosMaxOrderByAggregateInput
    _min?: artigosMinOrderByAggregateInput
    _sum?: artigosSumOrderByAggregateInput
  }

  export type artigosScalarWhereWithAggregatesInput = {
    AND?: artigosScalarWhereWithAggregatesInput | artigosScalarWhereWithAggregatesInput[]
    OR?: artigosScalarWhereWithAggregatesInput[]
    NOT?: artigosScalarWhereWithAggregatesInput | artigosScalarWhereWithAggregatesInput[]
    artigos_id?: IntWithAggregatesFilter<"artigos"> | number
    artigos_gender?: StringNullableWithAggregatesFilter<"artigos"> | string | null
    artigos_titulo?: StringNullableWithAggregatesFilter<"artigos"> | string | null
    artigos_description?: StringNullableWithAggregatesFilter<"artigos"> | string | null
    artigos_url?: StringNullableWithAggregatesFilter<"artigos"> | string | null
    artigos_autor?: StringNullableWithAggregatesFilter<"artigos"> | string | null
  }

  export type artigos_favoritosWhereInput = {
    AND?: artigos_favoritosWhereInput | artigos_favoritosWhereInput[]
    OR?: artigos_favoritosWhereInput[]
    NOT?: artigos_favoritosWhereInput | artigos_favoritosWhereInput[]
    artigos_fav_id?: IntFilter<"artigos_favoritos"> | number
    user_id?: IntNullableFilter<"artigos_favoritos"> | number | null
    artigos_id?: IntNullableFilter<"artigos_favoritos"> | number | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
    artigos?: XOR<ArtigosNullableScalarRelationFilter, artigosWhereInput> | null
  }

  export type artigos_favoritosOrderByWithRelationInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    artigos_id?: SortOrderInput | SortOrder
    cadastros?: cadastrosOrderByWithRelationInput
    artigos?: artigosOrderByWithRelationInput
  }

  export type artigos_favoritosWhereUniqueInput = Prisma.AtLeast<{
    artigos_fav_id?: number
    AND?: artigos_favoritosWhereInput | artigos_favoritosWhereInput[]
    OR?: artigos_favoritosWhereInput[]
    NOT?: artigos_favoritosWhereInput | artigos_favoritosWhereInput[]
    user_id?: IntNullableFilter<"artigos_favoritos"> | number | null
    artigos_id?: IntNullableFilter<"artigos_favoritos"> | number | null
    cadastros?: XOR<CadastrosNullableScalarRelationFilter, cadastrosWhereInput> | null
    artigos?: XOR<ArtigosNullableScalarRelationFilter, artigosWhereInput> | null
  }, "artigos_fav_id">

  export type artigos_favoritosOrderByWithAggregationInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    artigos_id?: SortOrderInput | SortOrder
    _count?: artigos_favoritosCountOrderByAggregateInput
    _avg?: artigos_favoritosAvgOrderByAggregateInput
    _max?: artigos_favoritosMaxOrderByAggregateInput
    _min?: artigos_favoritosMinOrderByAggregateInput
    _sum?: artigos_favoritosSumOrderByAggregateInput
  }

  export type artigos_favoritosScalarWhereWithAggregatesInput = {
    AND?: artigos_favoritosScalarWhereWithAggregatesInput | artigos_favoritosScalarWhereWithAggregatesInput[]
    OR?: artigos_favoritosScalarWhereWithAggregatesInput[]
    NOT?: artigos_favoritosScalarWhereWithAggregatesInput | artigos_favoritosScalarWhereWithAggregatesInput[]
    artigos_fav_id?: IntWithAggregatesFilter<"artigos_favoritos"> | number
    user_id?: IntNullableWithAggregatesFilter<"artigos_favoritos"> | number | null
    artigos_id?: IntNullableWithAggregatesFilter<"artigos_favoritos"> | number | null
  }

  export type cadastrosCreateInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosCreateNestedManyWithoutCadastrosInput
    perfis?: perfisCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutCadastrosInput
    postagens?: postagensCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosUncheckedCreateNestedManyWithoutCadastrosInput
    perfis?: perfisUncheckedCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput
    postagens?: postagensUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUpdateInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUncheckedUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUncheckedUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosCreateManyInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
  }

  export type cadastrosUpdateManyMutationInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cadastrosUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendariosCreateInput = {
    calendar_data?: Date | string | null
    calendar_consulta?: string | null
    cadastros?: cadastrosCreateNestedOneWithoutCalendariosInput
  }

  export type calendariosUncheckedCreateInput = {
    calendar_id?: number
    user_id?: number | null
    calendar_data?: Date | string | null
    calendar_consulta?: string | null
  }

  export type calendariosUpdateInput = {
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
    cadastros?: cadastrosUpdateOneWithoutCalendariosNestedInput
  }

  export type calendariosUncheckedUpdateInput = {
    calendar_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendariosCreateManyInput = {
    calendar_id?: number
    user_id?: number | null
    calendar_data?: Date | string | null
    calendar_consulta?: string | null
  }

  export type calendariosUpdateManyMutationInput = {
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendariosUncheckedUpdateManyInput = {
    calendar_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type perfisCreateInput = {
    user_name?: string | null
    user_image?: Bytes | null
    cadastros: cadastrosCreateNestedOneWithoutPerfisInput
  }

  export type perfisUncheckedCreateInput = {
    user_id: number
    user_name?: string | null
    user_image?: Bytes | null
  }

  export type perfisUpdateInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    cadastros?: cadastrosUpdateOneRequiredWithoutPerfisNestedInput
  }

  export type perfisUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type perfisCreateManyInput = {
    user_id: number
    user_name?: string | null
    user_image?: Bytes | null
  }

  export type perfisUpdateManyMutationInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type perfisUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type postagem_comentariosCreateInput = {
    comentario_text?: string | null
    comentario_data?: Date | string | null
    postagens?: postagensCreateNestedOneWithoutPostagem_comentariosInput
    cadastros?: cadastrosCreateNestedOneWithoutPostagem_comentariosInput
  }

  export type postagem_comentariosUncheckedCreateInput = {
    comentario_id?: number
    post_id?: number | null
    user_id?: number | null
    comentario_text?: string | null
    comentario_data?: Date | string | null
  }

  export type postagem_comentariosUpdateInput = {
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postagens?: postagensUpdateOneWithoutPostagem_comentariosNestedInput
    cadastros?: cadastrosUpdateOneWithoutPostagem_comentariosNestedInput
  }

  export type postagem_comentariosUncheckedUpdateInput = {
    comentario_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_comentariosCreateManyInput = {
    comentario_id?: number
    post_id?: number | null
    user_id?: number | null
    comentario_text?: string | null
    comentario_data?: Date | string | null
  }

  export type postagem_comentariosUpdateManyMutationInput = {
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_comentariosUncheckedUpdateManyInput = {
    comentario_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagensCreateInput = {
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutPostagensInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutPostagensInput
    cadastros?: cadastrosCreateNestedOneWithoutPostagensInput
  }

  export type postagensUncheckedCreateInput = {
    post_id?: number
    user_id?: number | null
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutPostagensInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutPostagensInput
  }

  export type postagensUpdateInput = {
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutPostagensNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutPostagensNestedInput
    cadastros?: cadastrosUpdateOneWithoutPostagensNestedInput
  }

  export type postagensUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutPostagensNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutPostagensNestedInput
  }

  export type postagensCreateManyInput = {
    post_id?: number
    user_id?: number | null
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
  }

  export type postagensUpdateManyMutationInput = {
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postagensUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postagem_likesCreateInput = {
    data_like?: Date | string | null
    postagens?: postagensCreateNestedOneWithoutPostagem_likesInput
    cadastros?: cadastrosCreateNestedOneWithoutPostagem_likesInput
  }

  export type postagem_likesUncheckedCreateInput = {
    id_like?: number
    post_id?: number | null
    user_id?: number | null
    data_like?: Date | string | null
  }

  export type postagem_likesUpdateInput = {
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postagens?: postagensUpdateOneWithoutPostagem_likesNestedInput
    cadastros?: cadastrosUpdateOneWithoutPostagem_likesNestedInput
  }

  export type postagem_likesUncheckedUpdateInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_likesCreateManyInput = {
    id_like?: number
    post_id?: number | null
    user_id?: number | null
    data_like?: Date | string | null
  }

  export type postagem_likesUpdateManyMutationInput = {
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_likesUncheckedUpdateManyInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artigosCreateInput = {
    artigos_gender?: string | null
    artigos_titulo?: string | null
    artigos_description?: string | null
    artigos_url?: string | null
    artigos_autor?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutArtigosInput
  }

  export type artigosUncheckedCreateInput = {
    artigos_id?: number
    artigos_gender?: string | null
    artigos_titulo?: string | null
    artigos_description?: string | null
    artigos_url?: string | null
    artigos_autor?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutArtigosInput
  }

  export type artigosUpdateInput = {
    artigos_gender?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_titulo?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_description?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_url?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_autor?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutArtigosNestedInput
  }

  export type artigosUncheckedUpdateInput = {
    artigos_id?: IntFieldUpdateOperationsInput | number
    artigos_gender?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_titulo?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_description?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_url?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_autor?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutArtigosNestedInput
  }

  export type artigosCreateManyInput = {
    artigos_id?: number
    artigos_gender?: string | null
    artigos_titulo?: string | null
    artigos_description?: string | null
    artigos_url?: string | null
    artigos_autor?: string | null
  }

  export type artigosUpdateManyMutationInput = {
    artigos_gender?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_titulo?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_description?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_url?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_autor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artigosUncheckedUpdateManyInput = {
    artigos_id?: IntFieldUpdateOperationsInput | number
    artigos_gender?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_titulo?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_description?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_url?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_autor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artigos_favoritosCreateInput = {
    cadastros?: cadastrosCreateNestedOneWithoutArtigos_favoritosInput
    artigos?: artigosCreateNestedOneWithoutArtigos_favoritosInput
  }

  export type artigos_favoritosUncheckedCreateInput = {
    artigos_fav_id?: number
    user_id?: number | null
    artigos_id?: number | null
  }

  export type artigos_favoritosUpdateInput = {
    cadastros?: cadastrosUpdateOneWithoutArtigos_favoritosNestedInput
    artigos?: artigosUpdateOneWithoutArtigos_favoritosNestedInput
  }

  export type artigos_favoritosUncheckedUpdateInput = {
    artigos_fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    artigos_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type artigos_favoritosCreateManyInput = {
    artigos_fav_id?: number
    user_id?: number | null
    artigos_id?: number | null
  }

  export type artigos_favoritosUpdateManyMutationInput = {

  }

  export type artigos_favoritosUncheckedUpdateManyInput = {
    artigos_fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    artigos_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Artigos_favoritosListRelationFilter = {
    every?: artigos_favoritosWhereInput
    some?: artigos_favoritosWhereInput
    none?: artigos_favoritosWhereInput
  }

  export type CalendariosListRelationFilter = {
    every?: calendariosWhereInput
    some?: calendariosWhereInput
    none?: calendariosWhereInput
  }

  export type PerfisNullableScalarRelationFilter = {
    is?: perfisWhereInput | null
    isNot?: perfisWhereInput | null
  }

  export type Postagem_comentariosListRelationFilter = {
    every?: postagem_comentariosWhereInput
    some?: postagem_comentariosWhereInput
    none?: postagem_comentariosWhereInput
  }

  export type Postagem_likesListRelationFilter = {
    every?: postagem_likesWhereInput
    some?: postagem_likesWhereInput
    none?: postagem_likesWhereInput
  }

  export type PostagensListRelationFilter = {
    every?: postagensWhereInput
    some?: postagensWhereInput
    none?: postagensWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type artigos_favoritosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type calendariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postagem_comentariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postagem_likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postagensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cadastrosOrderByRelevanceInput = {
    fields: cadastrosOrderByRelevanceFieldEnum | cadastrosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cadastrosCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_age?: SortOrder
    user_mail?: SortOrder
    user_firstname?: SortOrder
    user_secondname?: SortOrder
    user_phone?: SortOrder
    user_password_hash?: SortOrder
  }

  export type cadastrosAvgOrderByAggregateInput = {
    user_id?: SortOrder
    user_age?: SortOrder
  }

  export type cadastrosMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_age?: SortOrder
    user_mail?: SortOrder
    user_firstname?: SortOrder
    user_secondname?: SortOrder
    user_phone?: SortOrder
    user_password_hash?: SortOrder
  }

  export type cadastrosMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_age?: SortOrder
    user_mail?: SortOrder
    user_firstname?: SortOrder
    user_secondname?: SortOrder
    user_phone?: SortOrder
    user_password_hash?: SortOrder
  }

  export type cadastrosSumOrderByAggregateInput = {
    user_id?: SortOrder
    user_age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CadastrosNullableScalarRelationFilter = {
    is?: cadastrosWhereInput | null
    isNot?: cadastrosWhereInput | null
  }

  export type calendariosOrderByRelevanceInput = {
    fields: calendariosOrderByRelevanceFieldEnum | calendariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type calendariosCountOrderByAggregateInput = {
    calendar_id?: SortOrder
    user_id?: SortOrder
    calendar_data?: SortOrder
    calendar_consulta?: SortOrder
  }

  export type calendariosAvgOrderByAggregateInput = {
    calendar_id?: SortOrder
    user_id?: SortOrder
  }

  export type calendariosMaxOrderByAggregateInput = {
    calendar_id?: SortOrder
    user_id?: SortOrder
    calendar_data?: SortOrder
    calendar_consulta?: SortOrder
  }

  export type calendariosMinOrderByAggregateInput = {
    calendar_id?: SortOrder
    user_id?: SortOrder
    calendar_data?: SortOrder
    calendar_consulta?: SortOrder
  }

  export type calendariosSumOrderByAggregateInput = {
    calendar_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type CadastrosScalarRelationFilter = {
    is?: cadastrosWhereInput
    isNot?: cadastrosWhereInput
  }

  export type perfisOrderByRelevanceInput = {
    fields: perfisOrderByRelevanceFieldEnum | perfisOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type perfisCountOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_image?: SortOrder
  }

  export type perfisAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type perfisMaxOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_image?: SortOrder
  }

  export type perfisMinOrderByAggregateInput = {
    user_id?: SortOrder
    user_name?: SortOrder
    user_image?: SortOrder
  }

  export type perfisSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type PostagensNullableScalarRelationFilter = {
    is?: postagensWhereInput | null
    isNot?: postagensWhereInput | null
  }

  export type postagem_comentariosOrderByRelevanceInput = {
    fields: postagem_comentariosOrderByRelevanceFieldEnum | postagem_comentariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type postagem_comentariosCountOrderByAggregateInput = {
    comentario_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    comentario_text?: SortOrder
    comentario_data?: SortOrder
  }

  export type postagem_comentariosAvgOrderByAggregateInput = {
    comentario_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type postagem_comentariosMaxOrderByAggregateInput = {
    comentario_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    comentario_text?: SortOrder
    comentario_data?: SortOrder
  }

  export type postagem_comentariosMinOrderByAggregateInput = {
    comentario_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    comentario_text?: SortOrder
    comentario_data?: SortOrder
  }

  export type postagem_comentariosSumOrderByAggregateInput = {
    comentario_id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type postagensOrderByRelevanceInput = {
    fields: postagensOrderByRelevanceFieldEnum | postagensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type postagensCountOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    post_name?: SortOrder
    post_text?: SortOrder
    post_data?: SortOrder
    post_image?: SortOrder
    post_gender?: SortOrder
  }

  export type postagensAvgOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type postagensMaxOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    post_name?: SortOrder
    post_text?: SortOrder
    post_data?: SortOrder
    post_image?: SortOrder
    post_gender?: SortOrder
  }

  export type postagensMinOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
    post_name?: SortOrder
    post_text?: SortOrder
    post_data?: SortOrder
    post_image?: SortOrder
    post_gender?: SortOrder
  }

  export type postagensSumOrderByAggregateInput = {
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type postagem_likesCountOrderByAggregateInput = {
    id_like?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    data_like?: SortOrder
  }

  export type postagem_likesAvgOrderByAggregateInput = {
    id_like?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type postagem_likesMaxOrderByAggregateInput = {
    id_like?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    data_like?: SortOrder
  }

  export type postagem_likesMinOrderByAggregateInput = {
    id_like?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    data_like?: SortOrder
  }

  export type postagem_likesSumOrderByAggregateInput = {
    id_like?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type artigosOrderByRelevanceInput = {
    fields: artigosOrderByRelevanceFieldEnum | artigosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type artigosCountOrderByAggregateInput = {
    artigos_id?: SortOrder
    artigos_gender?: SortOrder
    artigos_titulo?: SortOrder
    artigos_description?: SortOrder
    artigos_url?: SortOrder
    artigos_autor?: SortOrder
  }

  export type artigosAvgOrderByAggregateInput = {
    artigos_id?: SortOrder
  }

  export type artigosMaxOrderByAggregateInput = {
    artigos_id?: SortOrder
    artigos_gender?: SortOrder
    artigos_titulo?: SortOrder
    artigos_description?: SortOrder
    artigos_url?: SortOrder
    artigos_autor?: SortOrder
  }

  export type artigosMinOrderByAggregateInput = {
    artigos_id?: SortOrder
    artigos_gender?: SortOrder
    artigos_titulo?: SortOrder
    artigos_description?: SortOrder
    artigos_url?: SortOrder
    artigos_autor?: SortOrder
  }

  export type artigosSumOrderByAggregateInput = {
    artigos_id?: SortOrder
  }

  export type ArtigosNullableScalarRelationFilter = {
    is?: artigosWhereInput | null
    isNot?: artigosWhereInput | null
  }

  export type artigos_favoritosCountOrderByAggregateInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrder
    artigos_id?: SortOrder
  }

  export type artigos_favoritosAvgOrderByAggregateInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrder
    artigos_id?: SortOrder
  }

  export type artigos_favoritosMaxOrderByAggregateInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrder
    artigos_id?: SortOrder
  }

  export type artigos_favoritosMinOrderByAggregateInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrder
    artigos_id?: SortOrder
  }

  export type artigos_favoritosSumOrderByAggregateInput = {
    artigos_fav_id?: SortOrder
    user_id?: SortOrder
    artigos_id?: SortOrder
  }

  export type artigos_favoritosCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<artigos_favoritosCreateWithoutCadastrosInput, artigos_favoritosUncheckedCreateWithoutCadastrosInput> | artigos_favoritosCreateWithoutCadastrosInput[] | artigos_favoritosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutCadastrosInput | artigos_favoritosCreateOrConnectWithoutCadastrosInput[]
    createMany?: artigos_favoritosCreateManyCadastrosInputEnvelope
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
  }

  export type calendariosCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<calendariosCreateWithoutCadastrosInput, calendariosUncheckedCreateWithoutCadastrosInput> | calendariosCreateWithoutCadastrosInput[] | calendariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: calendariosCreateOrConnectWithoutCadastrosInput | calendariosCreateOrConnectWithoutCadastrosInput[]
    createMany?: calendariosCreateManyCadastrosInputEnvelope
    connect?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
  }

  export type perfisCreateNestedOneWithoutCadastrosInput = {
    create?: XOR<perfisCreateWithoutCadastrosInput, perfisUncheckedCreateWithoutCadastrosInput>
    connectOrCreate?: perfisCreateOrConnectWithoutCadastrosInput
    connect?: perfisWhereUniqueInput
  }

  export type postagem_comentariosCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<postagem_comentariosCreateWithoutCadastrosInput, postagem_comentariosUncheckedCreateWithoutCadastrosInput> | postagem_comentariosCreateWithoutCadastrosInput[] | postagem_comentariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutCadastrosInput | postagem_comentariosCreateOrConnectWithoutCadastrosInput[]
    createMany?: postagem_comentariosCreateManyCadastrosInputEnvelope
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
  }

  export type postagem_likesCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<postagem_likesCreateWithoutCadastrosInput, postagem_likesUncheckedCreateWithoutCadastrosInput> | postagem_likesCreateWithoutCadastrosInput[] | postagem_likesUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutCadastrosInput | postagem_likesCreateOrConnectWithoutCadastrosInput[]
    createMany?: postagem_likesCreateManyCadastrosInputEnvelope
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
  }

  export type postagensCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<postagensCreateWithoutCadastrosInput, postagensUncheckedCreateWithoutCadastrosInput> | postagensCreateWithoutCadastrosInput[] | postagensUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagensCreateOrConnectWithoutCadastrosInput | postagensCreateOrConnectWithoutCadastrosInput[]
    createMany?: postagensCreateManyCadastrosInputEnvelope
    connect?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
  }

  export type artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<artigos_favoritosCreateWithoutCadastrosInput, artigos_favoritosUncheckedCreateWithoutCadastrosInput> | artigos_favoritosCreateWithoutCadastrosInput[] | artigos_favoritosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutCadastrosInput | artigos_favoritosCreateOrConnectWithoutCadastrosInput[]
    createMany?: artigos_favoritosCreateManyCadastrosInputEnvelope
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
  }

  export type calendariosUncheckedCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<calendariosCreateWithoutCadastrosInput, calendariosUncheckedCreateWithoutCadastrosInput> | calendariosCreateWithoutCadastrosInput[] | calendariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: calendariosCreateOrConnectWithoutCadastrosInput | calendariosCreateOrConnectWithoutCadastrosInput[]
    createMany?: calendariosCreateManyCadastrosInputEnvelope
    connect?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
  }

  export type perfisUncheckedCreateNestedOneWithoutCadastrosInput = {
    create?: XOR<perfisCreateWithoutCadastrosInput, perfisUncheckedCreateWithoutCadastrosInput>
    connectOrCreate?: perfisCreateOrConnectWithoutCadastrosInput
    connect?: perfisWhereUniqueInput
  }

  export type postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<postagem_comentariosCreateWithoutCadastrosInput, postagem_comentariosUncheckedCreateWithoutCadastrosInput> | postagem_comentariosCreateWithoutCadastrosInput[] | postagem_comentariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutCadastrosInput | postagem_comentariosCreateOrConnectWithoutCadastrosInput[]
    createMany?: postagem_comentariosCreateManyCadastrosInputEnvelope
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
  }

  export type postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<postagem_likesCreateWithoutCadastrosInput, postagem_likesUncheckedCreateWithoutCadastrosInput> | postagem_likesCreateWithoutCadastrosInput[] | postagem_likesUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutCadastrosInput | postagem_likesCreateOrConnectWithoutCadastrosInput[]
    createMany?: postagem_likesCreateManyCadastrosInputEnvelope
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
  }

  export type postagensUncheckedCreateNestedManyWithoutCadastrosInput = {
    create?: XOR<postagensCreateWithoutCadastrosInput, postagensUncheckedCreateWithoutCadastrosInput> | postagensCreateWithoutCadastrosInput[] | postagensUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagensCreateOrConnectWithoutCadastrosInput | postagensCreateOrConnectWithoutCadastrosInput[]
    createMany?: postagensCreateManyCadastrosInputEnvelope
    connect?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type artigos_favoritosUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<artigos_favoritosCreateWithoutCadastrosInput, artigos_favoritosUncheckedCreateWithoutCadastrosInput> | artigos_favoritosCreateWithoutCadastrosInput[] | artigos_favoritosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutCadastrosInput | artigos_favoritosCreateOrConnectWithoutCadastrosInput[]
    upsert?: artigos_favoritosUpsertWithWhereUniqueWithoutCadastrosInput | artigos_favoritosUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: artigos_favoritosCreateManyCadastrosInputEnvelope
    set?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    disconnect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    delete?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    update?: artigos_favoritosUpdateWithWhereUniqueWithoutCadastrosInput | artigos_favoritosUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: artigos_favoritosUpdateManyWithWhereWithoutCadastrosInput | artigos_favoritosUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: artigos_favoritosScalarWhereInput | artigos_favoritosScalarWhereInput[]
  }

  export type calendariosUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<calendariosCreateWithoutCadastrosInput, calendariosUncheckedCreateWithoutCadastrosInput> | calendariosCreateWithoutCadastrosInput[] | calendariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: calendariosCreateOrConnectWithoutCadastrosInput | calendariosCreateOrConnectWithoutCadastrosInput[]
    upsert?: calendariosUpsertWithWhereUniqueWithoutCadastrosInput | calendariosUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: calendariosCreateManyCadastrosInputEnvelope
    set?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    disconnect?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    delete?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    connect?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    update?: calendariosUpdateWithWhereUniqueWithoutCadastrosInput | calendariosUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: calendariosUpdateManyWithWhereWithoutCadastrosInput | calendariosUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: calendariosScalarWhereInput | calendariosScalarWhereInput[]
  }

  export type perfisUpdateOneWithoutCadastrosNestedInput = {
    create?: XOR<perfisCreateWithoutCadastrosInput, perfisUncheckedCreateWithoutCadastrosInput>
    connectOrCreate?: perfisCreateOrConnectWithoutCadastrosInput
    upsert?: perfisUpsertWithoutCadastrosInput
    disconnect?: perfisWhereInput | boolean
    delete?: perfisWhereInput | boolean
    connect?: perfisWhereUniqueInput
    update?: XOR<XOR<perfisUpdateToOneWithWhereWithoutCadastrosInput, perfisUpdateWithoutCadastrosInput>, perfisUncheckedUpdateWithoutCadastrosInput>
  }

  export type postagem_comentariosUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<postagem_comentariosCreateWithoutCadastrosInput, postagem_comentariosUncheckedCreateWithoutCadastrosInput> | postagem_comentariosCreateWithoutCadastrosInput[] | postagem_comentariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutCadastrosInput | postagem_comentariosCreateOrConnectWithoutCadastrosInput[]
    upsert?: postagem_comentariosUpsertWithWhereUniqueWithoutCadastrosInput | postagem_comentariosUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: postagem_comentariosCreateManyCadastrosInputEnvelope
    set?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    disconnect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    delete?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    update?: postagem_comentariosUpdateWithWhereUniqueWithoutCadastrosInput | postagem_comentariosUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: postagem_comentariosUpdateManyWithWhereWithoutCadastrosInput | postagem_comentariosUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: postagem_comentariosScalarWhereInput | postagem_comentariosScalarWhereInput[]
  }

  export type postagem_likesUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<postagem_likesCreateWithoutCadastrosInput, postagem_likesUncheckedCreateWithoutCadastrosInput> | postagem_likesCreateWithoutCadastrosInput[] | postagem_likesUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutCadastrosInput | postagem_likesCreateOrConnectWithoutCadastrosInput[]
    upsert?: postagem_likesUpsertWithWhereUniqueWithoutCadastrosInput | postagem_likesUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: postagem_likesCreateManyCadastrosInputEnvelope
    set?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    disconnect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    delete?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    update?: postagem_likesUpdateWithWhereUniqueWithoutCadastrosInput | postagem_likesUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: postagem_likesUpdateManyWithWhereWithoutCadastrosInput | postagem_likesUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: postagem_likesScalarWhereInput | postagem_likesScalarWhereInput[]
  }

  export type postagensUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<postagensCreateWithoutCadastrosInput, postagensUncheckedCreateWithoutCadastrosInput> | postagensCreateWithoutCadastrosInput[] | postagensUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagensCreateOrConnectWithoutCadastrosInput | postagensCreateOrConnectWithoutCadastrosInput[]
    upsert?: postagensUpsertWithWhereUniqueWithoutCadastrosInput | postagensUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: postagensCreateManyCadastrosInputEnvelope
    set?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    disconnect?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    delete?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    connect?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    update?: postagensUpdateWithWhereUniqueWithoutCadastrosInput | postagensUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: postagensUpdateManyWithWhereWithoutCadastrosInput | postagensUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: postagensScalarWhereInput | postagensScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<artigos_favoritosCreateWithoutCadastrosInput, artigos_favoritosUncheckedCreateWithoutCadastrosInput> | artigos_favoritosCreateWithoutCadastrosInput[] | artigos_favoritosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutCadastrosInput | artigos_favoritosCreateOrConnectWithoutCadastrosInput[]
    upsert?: artigos_favoritosUpsertWithWhereUniqueWithoutCadastrosInput | artigos_favoritosUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: artigos_favoritosCreateManyCadastrosInputEnvelope
    set?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    disconnect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    delete?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    update?: artigos_favoritosUpdateWithWhereUniqueWithoutCadastrosInput | artigos_favoritosUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: artigos_favoritosUpdateManyWithWhereWithoutCadastrosInput | artigos_favoritosUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: artigos_favoritosScalarWhereInput | artigos_favoritosScalarWhereInput[]
  }

  export type calendariosUncheckedUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<calendariosCreateWithoutCadastrosInput, calendariosUncheckedCreateWithoutCadastrosInput> | calendariosCreateWithoutCadastrosInput[] | calendariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: calendariosCreateOrConnectWithoutCadastrosInput | calendariosCreateOrConnectWithoutCadastrosInput[]
    upsert?: calendariosUpsertWithWhereUniqueWithoutCadastrosInput | calendariosUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: calendariosCreateManyCadastrosInputEnvelope
    set?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    disconnect?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    delete?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    connect?: calendariosWhereUniqueInput | calendariosWhereUniqueInput[]
    update?: calendariosUpdateWithWhereUniqueWithoutCadastrosInput | calendariosUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: calendariosUpdateManyWithWhereWithoutCadastrosInput | calendariosUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: calendariosScalarWhereInput | calendariosScalarWhereInput[]
  }

  export type perfisUncheckedUpdateOneWithoutCadastrosNestedInput = {
    create?: XOR<perfisCreateWithoutCadastrosInput, perfisUncheckedCreateWithoutCadastrosInput>
    connectOrCreate?: perfisCreateOrConnectWithoutCadastrosInput
    upsert?: perfisUpsertWithoutCadastrosInput
    disconnect?: perfisWhereInput | boolean
    delete?: perfisWhereInput | boolean
    connect?: perfisWhereUniqueInput
    update?: XOR<XOR<perfisUpdateToOneWithWhereWithoutCadastrosInput, perfisUpdateWithoutCadastrosInput>, perfisUncheckedUpdateWithoutCadastrosInput>
  }

  export type postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<postagem_comentariosCreateWithoutCadastrosInput, postagem_comentariosUncheckedCreateWithoutCadastrosInput> | postagem_comentariosCreateWithoutCadastrosInput[] | postagem_comentariosUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutCadastrosInput | postagem_comentariosCreateOrConnectWithoutCadastrosInput[]
    upsert?: postagem_comentariosUpsertWithWhereUniqueWithoutCadastrosInput | postagem_comentariosUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: postagem_comentariosCreateManyCadastrosInputEnvelope
    set?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    disconnect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    delete?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    update?: postagem_comentariosUpdateWithWhereUniqueWithoutCadastrosInput | postagem_comentariosUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: postagem_comentariosUpdateManyWithWhereWithoutCadastrosInput | postagem_comentariosUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: postagem_comentariosScalarWhereInput | postagem_comentariosScalarWhereInput[]
  }

  export type postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<postagem_likesCreateWithoutCadastrosInput, postagem_likesUncheckedCreateWithoutCadastrosInput> | postagem_likesCreateWithoutCadastrosInput[] | postagem_likesUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutCadastrosInput | postagem_likesCreateOrConnectWithoutCadastrosInput[]
    upsert?: postagem_likesUpsertWithWhereUniqueWithoutCadastrosInput | postagem_likesUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: postagem_likesCreateManyCadastrosInputEnvelope
    set?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    disconnect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    delete?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    update?: postagem_likesUpdateWithWhereUniqueWithoutCadastrosInput | postagem_likesUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: postagem_likesUpdateManyWithWhereWithoutCadastrosInput | postagem_likesUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: postagem_likesScalarWhereInput | postagem_likesScalarWhereInput[]
  }

  export type postagensUncheckedUpdateManyWithoutCadastrosNestedInput = {
    create?: XOR<postagensCreateWithoutCadastrosInput, postagensUncheckedCreateWithoutCadastrosInput> | postagensCreateWithoutCadastrosInput[] | postagensUncheckedCreateWithoutCadastrosInput[]
    connectOrCreate?: postagensCreateOrConnectWithoutCadastrosInput | postagensCreateOrConnectWithoutCadastrosInput[]
    upsert?: postagensUpsertWithWhereUniqueWithoutCadastrosInput | postagensUpsertWithWhereUniqueWithoutCadastrosInput[]
    createMany?: postagensCreateManyCadastrosInputEnvelope
    set?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    disconnect?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    delete?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    connect?: postagensWhereUniqueInput | postagensWhereUniqueInput[]
    update?: postagensUpdateWithWhereUniqueWithoutCadastrosInput | postagensUpdateWithWhereUniqueWithoutCadastrosInput[]
    updateMany?: postagensUpdateManyWithWhereWithoutCadastrosInput | postagensUpdateManyWithWhereWithoutCadastrosInput[]
    deleteMany?: postagensScalarWhereInput | postagensScalarWhereInput[]
  }

  export type cadastrosCreateNestedOneWithoutCalendariosInput = {
    create?: XOR<cadastrosCreateWithoutCalendariosInput, cadastrosUncheckedCreateWithoutCalendariosInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutCalendariosInput
    connect?: cadastrosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cadastrosUpdateOneWithoutCalendariosNestedInput = {
    create?: XOR<cadastrosCreateWithoutCalendariosInput, cadastrosUncheckedCreateWithoutCalendariosInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutCalendariosInput
    upsert?: cadastrosUpsertWithoutCalendariosInput
    disconnect?: cadastrosWhereInput | boolean
    delete?: cadastrosWhereInput | boolean
    connect?: cadastrosWhereUniqueInput
    update?: XOR<XOR<cadastrosUpdateToOneWithWhereWithoutCalendariosInput, cadastrosUpdateWithoutCalendariosInput>, cadastrosUncheckedUpdateWithoutCalendariosInput>
  }

  export type cadastrosCreateNestedOneWithoutPerfisInput = {
    create?: XOR<cadastrosCreateWithoutPerfisInput, cadastrosUncheckedCreateWithoutPerfisInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPerfisInput
    connect?: cadastrosWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type cadastrosUpdateOneRequiredWithoutPerfisNestedInput = {
    create?: XOR<cadastrosCreateWithoutPerfisInput, cadastrosUncheckedCreateWithoutPerfisInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPerfisInput
    upsert?: cadastrosUpsertWithoutPerfisInput
    connect?: cadastrosWhereUniqueInput
    update?: XOR<XOR<cadastrosUpdateToOneWithWhereWithoutPerfisInput, cadastrosUpdateWithoutPerfisInput>, cadastrosUncheckedUpdateWithoutPerfisInput>
  }

  export type postagensCreateNestedOneWithoutPostagem_comentariosInput = {
    create?: XOR<postagensCreateWithoutPostagem_comentariosInput, postagensUncheckedCreateWithoutPostagem_comentariosInput>
    connectOrCreate?: postagensCreateOrConnectWithoutPostagem_comentariosInput
    connect?: postagensWhereUniqueInput
  }

  export type cadastrosCreateNestedOneWithoutPostagem_comentariosInput = {
    create?: XOR<cadastrosCreateWithoutPostagem_comentariosInput, cadastrosUncheckedCreateWithoutPostagem_comentariosInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPostagem_comentariosInput
    connect?: cadastrosWhereUniqueInput
  }

  export type postagensUpdateOneWithoutPostagem_comentariosNestedInput = {
    create?: XOR<postagensCreateWithoutPostagem_comentariosInput, postagensUncheckedCreateWithoutPostagem_comentariosInput>
    connectOrCreate?: postagensCreateOrConnectWithoutPostagem_comentariosInput
    upsert?: postagensUpsertWithoutPostagem_comentariosInput
    disconnect?: postagensWhereInput | boolean
    delete?: postagensWhereInput | boolean
    connect?: postagensWhereUniqueInput
    update?: XOR<XOR<postagensUpdateToOneWithWhereWithoutPostagem_comentariosInput, postagensUpdateWithoutPostagem_comentariosInput>, postagensUncheckedUpdateWithoutPostagem_comentariosInput>
  }

  export type cadastrosUpdateOneWithoutPostagem_comentariosNestedInput = {
    create?: XOR<cadastrosCreateWithoutPostagem_comentariosInput, cadastrosUncheckedCreateWithoutPostagem_comentariosInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPostagem_comentariosInput
    upsert?: cadastrosUpsertWithoutPostagem_comentariosInput
    disconnect?: cadastrosWhereInput | boolean
    delete?: cadastrosWhereInput | boolean
    connect?: cadastrosWhereUniqueInput
    update?: XOR<XOR<cadastrosUpdateToOneWithWhereWithoutPostagem_comentariosInput, cadastrosUpdateWithoutPostagem_comentariosInput>, cadastrosUncheckedUpdateWithoutPostagem_comentariosInput>
  }

  export type postagem_comentariosCreateNestedManyWithoutPostagensInput = {
    create?: XOR<postagem_comentariosCreateWithoutPostagensInput, postagem_comentariosUncheckedCreateWithoutPostagensInput> | postagem_comentariosCreateWithoutPostagensInput[] | postagem_comentariosUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutPostagensInput | postagem_comentariosCreateOrConnectWithoutPostagensInput[]
    createMany?: postagem_comentariosCreateManyPostagensInputEnvelope
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
  }

  export type postagem_likesCreateNestedManyWithoutPostagensInput = {
    create?: XOR<postagem_likesCreateWithoutPostagensInput, postagem_likesUncheckedCreateWithoutPostagensInput> | postagem_likesCreateWithoutPostagensInput[] | postagem_likesUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutPostagensInput | postagem_likesCreateOrConnectWithoutPostagensInput[]
    createMany?: postagem_likesCreateManyPostagensInputEnvelope
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
  }

  export type cadastrosCreateNestedOneWithoutPostagensInput = {
    create?: XOR<cadastrosCreateWithoutPostagensInput, cadastrosUncheckedCreateWithoutPostagensInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPostagensInput
    connect?: cadastrosWhereUniqueInput
  }

  export type postagem_comentariosUncheckedCreateNestedManyWithoutPostagensInput = {
    create?: XOR<postagem_comentariosCreateWithoutPostagensInput, postagem_comentariosUncheckedCreateWithoutPostagensInput> | postagem_comentariosCreateWithoutPostagensInput[] | postagem_comentariosUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutPostagensInput | postagem_comentariosCreateOrConnectWithoutPostagensInput[]
    createMany?: postagem_comentariosCreateManyPostagensInputEnvelope
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
  }

  export type postagem_likesUncheckedCreateNestedManyWithoutPostagensInput = {
    create?: XOR<postagem_likesCreateWithoutPostagensInput, postagem_likesUncheckedCreateWithoutPostagensInput> | postagem_likesCreateWithoutPostagensInput[] | postagem_likesUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutPostagensInput | postagem_likesCreateOrConnectWithoutPostagensInput[]
    createMany?: postagem_likesCreateManyPostagensInputEnvelope
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
  }

  export type postagem_comentariosUpdateManyWithoutPostagensNestedInput = {
    create?: XOR<postagem_comentariosCreateWithoutPostagensInput, postagem_comentariosUncheckedCreateWithoutPostagensInput> | postagem_comentariosCreateWithoutPostagensInput[] | postagem_comentariosUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutPostagensInput | postagem_comentariosCreateOrConnectWithoutPostagensInput[]
    upsert?: postagem_comentariosUpsertWithWhereUniqueWithoutPostagensInput | postagem_comentariosUpsertWithWhereUniqueWithoutPostagensInput[]
    createMany?: postagem_comentariosCreateManyPostagensInputEnvelope
    set?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    disconnect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    delete?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    update?: postagem_comentariosUpdateWithWhereUniqueWithoutPostagensInput | postagem_comentariosUpdateWithWhereUniqueWithoutPostagensInput[]
    updateMany?: postagem_comentariosUpdateManyWithWhereWithoutPostagensInput | postagem_comentariosUpdateManyWithWhereWithoutPostagensInput[]
    deleteMany?: postagem_comentariosScalarWhereInput | postagem_comentariosScalarWhereInput[]
  }

  export type postagem_likesUpdateManyWithoutPostagensNestedInput = {
    create?: XOR<postagem_likesCreateWithoutPostagensInput, postagem_likesUncheckedCreateWithoutPostagensInput> | postagem_likesCreateWithoutPostagensInput[] | postagem_likesUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutPostagensInput | postagem_likesCreateOrConnectWithoutPostagensInput[]
    upsert?: postagem_likesUpsertWithWhereUniqueWithoutPostagensInput | postagem_likesUpsertWithWhereUniqueWithoutPostagensInput[]
    createMany?: postagem_likesCreateManyPostagensInputEnvelope
    set?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    disconnect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    delete?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    update?: postagem_likesUpdateWithWhereUniqueWithoutPostagensInput | postagem_likesUpdateWithWhereUniqueWithoutPostagensInput[]
    updateMany?: postagem_likesUpdateManyWithWhereWithoutPostagensInput | postagem_likesUpdateManyWithWhereWithoutPostagensInput[]
    deleteMany?: postagem_likesScalarWhereInput | postagem_likesScalarWhereInput[]
  }

  export type cadastrosUpdateOneWithoutPostagensNestedInput = {
    create?: XOR<cadastrosCreateWithoutPostagensInput, cadastrosUncheckedCreateWithoutPostagensInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPostagensInput
    upsert?: cadastrosUpsertWithoutPostagensInput
    disconnect?: cadastrosWhereInput | boolean
    delete?: cadastrosWhereInput | boolean
    connect?: cadastrosWhereUniqueInput
    update?: XOR<XOR<cadastrosUpdateToOneWithWhereWithoutPostagensInput, cadastrosUpdateWithoutPostagensInput>, cadastrosUncheckedUpdateWithoutPostagensInput>
  }

  export type postagem_comentariosUncheckedUpdateManyWithoutPostagensNestedInput = {
    create?: XOR<postagem_comentariosCreateWithoutPostagensInput, postagem_comentariosUncheckedCreateWithoutPostagensInput> | postagem_comentariosCreateWithoutPostagensInput[] | postagem_comentariosUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_comentariosCreateOrConnectWithoutPostagensInput | postagem_comentariosCreateOrConnectWithoutPostagensInput[]
    upsert?: postagem_comentariosUpsertWithWhereUniqueWithoutPostagensInput | postagem_comentariosUpsertWithWhereUniqueWithoutPostagensInput[]
    createMany?: postagem_comentariosCreateManyPostagensInputEnvelope
    set?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    disconnect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    delete?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    connect?: postagem_comentariosWhereUniqueInput | postagem_comentariosWhereUniqueInput[]
    update?: postagem_comentariosUpdateWithWhereUniqueWithoutPostagensInput | postagem_comentariosUpdateWithWhereUniqueWithoutPostagensInput[]
    updateMany?: postagem_comentariosUpdateManyWithWhereWithoutPostagensInput | postagem_comentariosUpdateManyWithWhereWithoutPostagensInput[]
    deleteMany?: postagem_comentariosScalarWhereInput | postagem_comentariosScalarWhereInput[]
  }

  export type postagem_likesUncheckedUpdateManyWithoutPostagensNestedInput = {
    create?: XOR<postagem_likesCreateWithoutPostagensInput, postagem_likesUncheckedCreateWithoutPostagensInput> | postagem_likesCreateWithoutPostagensInput[] | postagem_likesUncheckedCreateWithoutPostagensInput[]
    connectOrCreate?: postagem_likesCreateOrConnectWithoutPostagensInput | postagem_likesCreateOrConnectWithoutPostagensInput[]
    upsert?: postagem_likesUpsertWithWhereUniqueWithoutPostagensInput | postagem_likesUpsertWithWhereUniqueWithoutPostagensInput[]
    createMany?: postagem_likesCreateManyPostagensInputEnvelope
    set?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    disconnect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    delete?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    connect?: postagem_likesWhereUniqueInput | postagem_likesWhereUniqueInput[]
    update?: postagem_likesUpdateWithWhereUniqueWithoutPostagensInput | postagem_likesUpdateWithWhereUniqueWithoutPostagensInput[]
    updateMany?: postagem_likesUpdateManyWithWhereWithoutPostagensInput | postagem_likesUpdateManyWithWhereWithoutPostagensInput[]
    deleteMany?: postagem_likesScalarWhereInput | postagem_likesScalarWhereInput[]
  }

  export type postagensCreateNestedOneWithoutPostagem_likesInput = {
    create?: XOR<postagensCreateWithoutPostagem_likesInput, postagensUncheckedCreateWithoutPostagem_likesInput>
    connectOrCreate?: postagensCreateOrConnectWithoutPostagem_likesInput
    connect?: postagensWhereUniqueInput
  }

  export type cadastrosCreateNestedOneWithoutPostagem_likesInput = {
    create?: XOR<cadastrosCreateWithoutPostagem_likesInput, cadastrosUncheckedCreateWithoutPostagem_likesInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPostagem_likesInput
    connect?: cadastrosWhereUniqueInput
  }

  export type postagensUpdateOneWithoutPostagem_likesNestedInput = {
    create?: XOR<postagensCreateWithoutPostagem_likesInput, postagensUncheckedCreateWithoutPostagem_likesInput>
    connectOrCreate?: postagensCreateOrConnectWithoutPostagem_likesInput
    upsert?: postagensUpsertWithoutPostagem_likesInput
    disconnect?: postagensWhereInput | boolean
    delete?: postagensWhereInput | boolean
    connect?: postagensWhereUniqueInput
    update?: XOR<XOR<postagensUpdateToOneWithWhereWithoutPostagem_likesInput, postagensUpdateWithoutPostagem_likesInput>, postagensUncheckedUpdateWithoutPostagem_likesInput>
  }

  export type cadastrosUpdateOneWithoutPostagem_likesNestedInput = {
    create?: XOR<cadastrosCreateWithoutPostagem_likesInput, cadastrosUncheckedCreateWithoutPostagem_likesInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutPostagem_likesInput
    upsert?: cadastrosUpsertWithoutPostagem_likesInput
    disconnect?: cadastrosWhereInput | boolean
    delete?: cadastrosWhereInput | boolean
    connect?: cadastrosWhereUniqueInput
    update?: XOR<XOR<cadastrosUpdateToOneWithWhereWithoutPostagem_likesInput, cadastrosUpdateWithoutPostagem_likesInput>, cadastrosUncheckedUpdateWithoutPostagem_likesInput>
  }

  export type artigos_favoritosCreateNestedManyWithoutArtigosInput = {
    create?: XOR<artigos_favoritosCreateWithoutArtigosInput, artigos_favoritosUncheckedCreateWithoutArtigosInput> | artigos_favoritosCreateWithoutArtigosInput[] | artigos_favoritosUncheckedCreateWithoutArtigosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutArtigosInput | artigos_favoritosCreateOrConnectWithoutArtigosInput[]
    createMany?: artigos_favoritosCreateManyArtigosInputEnvelope
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
  }

  export type artigos_favoritosUncheckedCreateNestedManyWithoutArtigosInput = {
    create?: XOR<artigos_favoritosCreateWithoutArtigosInput, artigos_favoritosUncheckedCreateWithoutArtigosInput> | artigos_favoritosCreateWithoutArtigosInput[] | artigos_favoritosUncheckedCreateWithoutArtigosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutArtigosInput | artigos_favoritosCreateOrConnectWithoutArtigosInput[]
    createMany?: artigos_favoritosCreateManyArtigosInputEnvelope
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
  }

  export type artigos_favoritosUpdateManyWithoutArtigosNestedInput = {
    create?: XOR<artigos_favoritosCreateWithoutArtigosInput, artigos_favoritosUncheckedCreateWithoutArtigosInput> | artigos_favoritosCreateWithoutArtigosInput[] | artigos_favoritosUncheckedCreateWithoutArtigosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutArtigosInput | artigos_favoritosCreateOrConnectWithoutArtigosInput[]
    upsert?: artigos_favoritosUpsertWithWhereUniqueWithoutArtigosInput | artigos_favoritosUpsertWithWhereUniqueWithoutArtigosInput[]
    createMany?: artigos_favoritosCreateManyArtigosInputEnvelope
    set?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    disconnect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    delete?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    update?: artigos_favoritosUpdateWithWhereUniqueWithoutArtigosInput | artigos_favoritosUpdateWithWhereUniqueWithoutArtigosInput[]
    updateMany?: artigos_favoritosUpdateManyWithWhereWithoutArtigosInput | artigos_favoritosUpdateManyWithWhereWithoutArtigosInput[]
    deleteMany?: artigos_favoritosScalarWhereInput | artigos_favoritosScalarWhereInput[]
  }

  export type artigos_favoritosUncheckedUpdateManyWithoutArtigosNestedInput = {
    create?: XOR<artigos_favoritosCreateWithoutArtigosInput, artigos_favoritosUncheckedCreateWithoutArtigosInput> | artigos_favoritosCreateWithoutArtigosInput[] | artigos_favoritosUncheckedCreateWithoutArtigosInput[]
    connectOrCreate?: artigos_favoritosCreateOrConnectWithoutArtigosInput | artigos_favoritosCreateOrConnectWithoutArtigosInput[]
    upsert?: artigos_favoritosUpsertWithWhereUniqueWithoutArtigosInput | artigos_favoritosUpsertWithWhereUniqueWithoutArtigosInput[]
    createMany?: artigos_favoritosCreateManyArtigosInputEnvelope
    set?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    disconnect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    delete?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    connect?: artigos_favoritosWhereUniqueInput | artigos_favoritosWhereUniqueInput[]
    update?: artigos_favoritosUpdateWithWhereUniqueWithoutArtigosInput | artigos_favoritosUpdateWithWhereUniqueWithoutArtigosInput[]
    updateMany?: artigos_favoritosUpdateManyWithWhereWithoutArtigosInput | artigos_favoritosUpdateManyWithWhereWithoutArtigosInput[]
    deleteMany?: artigos_favoritosScalarWhereInput | artigos_favoritosScalarWhereInput[]
  }

  export type cadastrosCreateNestedOneWithoutArtigos_favoritosInput = {
    create?: XOR<cadastrosCreateWithoutArtigos_favoritosInput, cadastrosUncheckedCreateWithoutArtigos_favoritosInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutArtigos_favoritosInput
    connect?: cadastrosWhereUniqueInput
  }

  export type artigosCreateNestedOneWithoutArtigos_favoritosInput = {
    create?: XOR<artigosCreateWithoutArtigos_favoritosInput, artigosUncheckedCreateWithoutArtigos_favoritosInput>
    connectOrCreate?: artigosCreateOrConnectWithoutArtigos_favoritosInput
    connect?: artigosWhereUniqueInput
  }

  export type cadastrosUpdateOneWithoutArtigos_favoritosNestedInput = {
    create?: XOR<cadastrosCreateWithoutArtigos_favoritosInput, cadastrosUncheckedCreateWithoutArtigos_favoritosInput>
    connectOrCreate?: cadastrosCreateOrConnectWithoutArtigos_favoritosInput
    upsert?: cadastrosUpsertWithoutArtigos_favoritosInput
    disconnect?: cadastrosWhereInput | boolean
    delete?: cadastrosWhereInput | boolean
    connect?: cadastrosWhereUniqueInput
    update?: XOR<XOR<cadastrosUpdateToOneWithWhereWithoutArtigos_favoritosInput, cadastrosUpdateWithoutArtigos_favoritosInput>, cadastrosUncheckedUpdateWithoutArtigos_favoritosInput>
  }

  export type artigosUpdateOneWithoutArtigos_favoritosNestedInput = {
    create?: XOR<artigosCreateWithoutArtigos_favoritosInput, artigosUncheckedCreateWithoutArtigos_favoritosInput>
    connectOrCreate?: artigosCreateOrConnectWithoutArtigos_favoritosInput
    upsert?: artigosUpsertWithoutArtigos_favoritosInput
    disconnect?: artigosWhereInput | boolean
    delete?: artigosWhereInput | boolean
    connect?: artigosWhereUniqueInput
    update?: XOR<XOR<artigosUpdateToOneWithWhereWithoutArtigos_favoritosInput, artigosUpdateWithoutArtigos_favoritosInput>, artigosUncheckedUpdateWithoutArtigos_favoritosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | null
    notIn?: Bytes[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type artigos_favoritosCreateWithoutCadastrosInput = {
    artigos?: artigosCreateNestedOneWithoutArtigos_favoritosInput
  }

  export type artigos_favoritosUncheckedCreateWithoutCadastrosInput = {
    artigos_fav_id?: number
    artigos_id?: number | null
  }

  export type artigos_favoritosCreateOrConnectWithoutCadastrosInput = {
    where: artigos_favoritosWhereUniqueInput
    create: XOR<artigos_favoritosCreateWithoutCadastrosInput, artigos_favoritosUncheckedCreateWithoutCadastrosInput>
  }

  export type artigos_favoritosCreateManyCadastrosInputEnvelope = {
    data: artigos_favoritosCreateManyCadastrosInput | artigos_favoritosCreateManyCadastrosInput[]
    skipDuplicates?: boolean
  }

  export type calendariosCreateWithoutCadastrosInput = {
    calendar_data?: Date | string | null
    calendar_consulta?: string | null
  }

  export type calendariosUncheckedCreateWithoutCadastrosInput = {
    calendar_id?: number
    calendar_data?: Date | string | null
    calendar_consulta?: string | null
  }

  export type calendariosCreateOrConnectWithoutCadastrosInput = {
    where: calendariosWhereUniqueInput
    create: XOR<calendariosCreateWithoutCadastrosInput, calendariosUncheckedCreateWithoutCadastrosInput>
  }

  export type calendariosCreateManyCadastrosInputEnvelope = {
    data: calendariosCreateManyCadastrosInput | calendariosCreateManyCadastrosInput[]
    skipDuplicates?: boolean
  }

  export type perfisCreateWithoutCadastrosInput = {
    user_name?: string | null
    user_image?: Bytes | null
  }

  export type perfisUncheckedCreateWithoutCadastrosInput = {
    user_name?: string | null
    user_image?: Bytes | null
  }

  export type perfisCreateOrConnectWithoutCadastrosInput = {
    where: perfisWhereUniqueInput
    create: XOR<perfisCreateWithoutCadastrosInput, perfisUncheckedCreateWithoutCadastrosInput>
  }

  export type postagem_comentariosCreateWithoutCadastrosInput = {
    comentario_text?: string | null
    comentario_data?: Date | string | null
    postagens?: postagensCreateNestedOneWithoutPostagem_comentariosInput
  }

  export type postagem_comentariosUncheckedCreateWithoutCadastrosInput = {
    comentario_id?: number
    post_id?: number | null
    comentario_text?: string | null
    comentario_data?: Date | string | null
  }

  export type postagem_comentariosCreateOrConnectWithoutCadastrosInput = {
    where: postagem_comentariosWhereUniqueInput
    create: XOR<postagem_comentariosCreateWithoutCadastrosInput, postagem_comentariosUncheckedCreateWithoutCadastrosInput>
  }

  export type postagem_comentariosCreateManyCadastrosInputEnvelope = {
    data: postagem_comentariosCreateManyCadastrosInput | postagem_comentariosCreateManyCadastrosInput[]
    skipDuplicates?: boolean
  }

  export type postagem_likesCreateWithoutCadastrosInput = {
    data_like?: Date | string | null
    postagens?: postagensCreateNestedOneWithoutPostagem_likesInput
  }

  export type postagem_likesUncheckedCreateWithoutCadastrosInput = {
    id_like?: number
    post_id?: number | null
    data_like?: Date | string | null
  }

  export type postagem_likesCreateOrConnectWithoutCadastrosInput = {
    where: postagem_likesWhereUniqueInput
    create: XOR<postagem_likesCreateWithoutCadastrosInput, postagem_likesUncheckedCreateWithoutCadastrosInput>
  }

  export type postagem_likesCreateManyCadastrosInputEnvelope = {
    data: postagem_likesCreateManyCadastrosInput | postagem_likesCreateManyCadastrosInput[]
    skipDuplicates?: boolean
  }

  export type postagensCreateWithoutCadastrosInput = {
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutPostagensInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutPostagensInput
  }

  export type postagensUncheckedCreateWithoutCadastrosInput = {
    post_id?: number
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutPostagensInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutPostagensInput
  }

  export type postagensCreateOrConnectWithoutCadastrosInput = {
    where: postagensWhereUniqueInput
    create: XOR<postagensCreateWithoutCadastrosInput, postagensUncheckedCreateWithoutCadastrosInput>
  }

  export type postagensCreateManyCadastrosInputEnvelope = {
    data: postagensCreateManyCadastrosInput | postagensCreateManyCadastrosInput[]
    skipDuplicates?: boolean
  }

  export type artigos_favoritosUpsertWithWhereUniqueWithoutCadastrosInput = {
    where: artigos_favoritosWhereUniqueInput
    update: XOR<artigos_favoritosUpdateWithoutCadastrosInput, artigos_favoritosUncheckedUpdateWithoutCadastrosInput>
    create: XOR<artigos_favoritosCreateWithoutCadastrosInput, artigos_favoritosUncheckedCreateWithoutCadastrosInput>
  }

  export type artigos_favoritosUpdateWithWhereUniqueWithoutCadastrosInput = {
    where: artigos_favoritosWhereUniqueInput
    data: XOR<artigos_favoritosUpdateWithoutCadastrosInput, artigos_favoritosUncheckedUpdateWithoutCadastrosInput>
  }

  export type artigos_favoritosUpdateManyWithWhereWithoutCadastrosInput = {
    where: artigos_favoritosScalarWhereInput
    data: XOR<artigos_favoritosUpdateManyMutationInput, artigos_favoritosUncheckedUpdateManyWithoutCadastrosInput>
  }

  export type artigos_favoritosScalarWhereInput = {
    AND?: artigos_favoritosScalarWhereInput | artigos_favoritosScalarWhereInput[]
    OR?: artigos_favoritosScalarWhereInput[]
    NOT?: artigos_favoritosScalarWhereInput | artigos_favoritosScalarWhereInput[]
    artigos_fav_id?: IntFilter<"artigos_favoritos"> | number
    user_id?: IntNullableFilter<"artigos_favoritos"> | number | null
    artigos_id?: IntNullableFilter<"artigos_favoritos"> | number | null
  }

  export type calendariosUpsertWithWhereUniqueWithoutCadastrosInput = {
    where: calendariosWhereUniqueInput
    update: XOR<calendariosUpdateWithoutCadastrosInput, calendariosUncheckedUpdateWithoutCadastrosInput>
    create: XOR<calendariosCreateWithoutCadastrosInput, calendariosUncheckedCreateWithoutCadastrosInput>
  }

  export type calendariosUpdateWithWhereUniqueWithoutCadastrosInput = {
    where: calendariosWhereUniqueInput
    data: XOR<calendariosUpdateWithoutCadastrosInput, calendariosUncheckedUpdateWithoutCadastrosInput>
  }

  export type calendariosUpdateManyWithWhereWithoutCadastrosInput = {
    where: calendariosScalarWhereInput
    data: XOR<calendariosUpdateManyMutationInput, calendariosUncheckedUpdateManyWithoutCadastrosInput>
  }

  export type calendariosScalarWhereInput = {
    AND?: calendariosScalarWhereInput | calendariosScalarWhereInput[]
    OR?: calendariosScalarWhereInput[]
    NOT?: calendariosScalarWhereInput | calendariosScalarWhereInput[]
    calendar_id?: IntFilter<"calendarios"> | number
    user_id?: IntNullableFilter<"calendarios"> | number | null
    calendar_data?: DateTimeNullableFilter<"calendarios"> | Date | string | null
    calendar_consulta?: StringNullableFilter<"calendarios"> | string | null
  }

  export type perfisUpsertWithoutCadastrosInput = {
    update: XOR<perfisUpdateWithoutCadastrosInput, perfisUncheckedUpdateWithoutCadastrosInput>
    create: XOR<perfisCreateWithoutCadastrosInput, perfisUncheckedCreateWithoutCadastrosInput>
    where?: perfisWhereInput
  }

  export type perfisUpdateToOneWithWhereWithoutCadastrosInput = {
    where?: perfisWhereInput
    data: XOR<perfisUpdateWithoutCadastrosInput, perfisUncheckedUpdateWithoutCadastrosInput>
  }

  export type perfisUpdateWithoutCadastrosInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type perfisUncheckedUpdateWithoutCadastrosInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    user_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
  }

  export type postagem_comentariosUpsertWithWhereUniqueWithoutCadastrosInput = {
    where: postagem_comentariosWhereUniqueInput
    update: XOR<postagem_comentariosUpdateWithoutCadastrosInput, postagem_comentariosUncheckedUpdateWithoutCadastrosInput>
    create: XOR<postagem_comentariosCreateWithoutCadastrosInput, postagem_comentariosUncheckedCreateWithoutCadastrosInput>
  }

  export type postagem_comentariosUpdateWithWhereUniqueWithoutCadastrosInput = {
    where: postagem_comentariosWhereUniqueInput
    data: XOR<postagem_comentariosUpdateWithoutCadastrosInput, postagem_comentariosUncheckedUpdateWithoutCadastrosInput>
  }

  export type postagem_comentariosUpdateManyWithWhereWithoutCadastrosInput = {
    where: postagem_comentariosScalarWhereInput
    data: XOR<postagem_comentariosUpdateManyMutationInput, postagem_comentariosUncheckedUpdateManyWithoutCadastrosInput>
  }

  export type postagem_comentariosScalarWhereInput = {
    AND?: postagem_comentariosScalarWhereInput | postagem_comentariosScalarWhereInput[]
    OR?: postagem_comentariosScalarWhereInput[]
    NOT?: postagem_comentariosScalarWhereInput | postagem_comentariosScalarWhereInput[]
    comentario_id?: IntFilter<"postagem_comentarios"> | number
    post_id?: IntNullableFilter<"postagem_comentarios"> | number | null
    user_id?: IntNullableFilter<"postagem_comentarios"> | number | null
    comentario_text?: StringNullableFilter<"postagem_comentarios"> | string | null
    comentario_data?: DateTimeNullableFilter<"postagem_comentarios"> | Date | string | null
  }

  export type postagem_likesUpsertWithWhereUniqueWithoutCadastrosInput = {
    where: postagem_likesWhereUniqueInput
    update: XOR<postagem_likesUpdateWithoutCadastrosInput, postagem_likesUncheckedUpdateWithoutCadastrosInput>
    create: XOR<postagem_likesCreateWithoutCadastrosInput, postagem_likesUncheckedCreateWithoutCadastrosInput>
  }

  export type postagem_likesUpdateWithWhereUniqueWithoutCadastrosInput = {
    where: postagem_likesWhereUniqueInput
    data: XOR<postagem_likesUpdateWithoutCadastrosInput, postagem_likesUncheckedUpdateWithoutCadastrosInput>
  }

  export type postagem_likesUpdateManyWithWhereWithoutCadastrosInput = {
    where: postagem_likesScalarWhereInput
    data: XOR<postagem_likesUpdateManyMutationInput, postagem_likesUncheckedUpdateManyWithoutCadastrosInput>
  }

  export type postagem_likesScalarWhereInput = {
    AND?: postagem_likesScalarWhereInput | postagem_likesScalarWhereInput[]
    OR?: postagem_likesScalarWhereInput[]
    NOT?: postagem_likesScalarWhereInput | postagem_likesScalarWhereInput[]
    id_like?: IntFilter<"postagem_likes"> | number
    post_id?: IntNullableFilter<"postagem_likes"> | number | null
    user_id?: IntNullableFilter<"postagem_likes"> | number | null
    data_like?: DateTimeNullableFilter<"postagem_likes"> | Date | string | null
  }

  export type postagensUpsertWithWhereUniqueWithoutCadastrosInput = {
    where: postagensWhereUniqueInput
    update: XOR<postagensUpdateWithoutCadastrosInput, postagensUncheckedUpdateWithoutCadastrosInput>
    create: XOR<postagensCreateWithoutCadastrosInput, postagensUncheckedCreateWithoutCadastrosInput>
  }

  export type postagensUpdateWithWhereUniqueWithoutCadastrosInput = {
    where: postagensWhereUniqueInput
    data: XOR<postagensUpdateWithoutCadastrosInput, postagensUncheckedUpdateWithoutCadastrosInput>
  }

  export type postagensUpdateManyWithWhereWithoutCadastrosInput = {
    where: postagensScalarWhereInput
    data: XOR<postagensUpdateManyMutationInput, postagensUncheckedUpdateManyWithoutCadastrosInput>
  }

  export type postagensScalarWhereInput = {
    AND?: postagensScalarWhereInput | postagensScalarWhereInput[]
    OR?: postagensScalarWhereInput[]
    NOT?: postagensScalarWhereInput | postagensScalarWhereInput[]
    post_id?: IntFilter<"postagens"> | number
    user_id?: IntNullableFilter<"postagens"> | number | null
    post_name?: StringNullableFilter<"postagens"> | string | null
    post_text?: StringNullableFilter<"postagens"> | string | null
    post_data?: DateTimeNullableFilter<"postagens"> | Date | string | null
    post_image?: BytesNullableFilter<"postagens"> | Bytes | null
    post_gender?: StringNullableFilter<"postagens"> | string | null
  }

  export type cadastrosCreateWithoutCalendariosInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutCadastrosInput
    perfis?: perfisCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutCadastrosInput
    postagens?: postagensCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateWithoutCalendariosInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput
    perfis?: perfisUncheckedCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput
    postagens?: postagensUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosCreateOrConnectWithoutCalendariosInput = {
    where: cadastrosWhereUniqueInput
    create: XOR<cadastrosCreateWithoutCalendariosInput, cadastrosUncheckedCreateWithoutCalendariosInput>
  }

  export type cadastrosUpsertWithoutCalendariosInput = {
    update: XOR<cadastrosUpdateWithoutCalendariosInput, cadastrosUncheckedUpdateWithoutCalendariosInput>
    create: XOR<cadastrosCreateWithoutCalendariosInput, cadastrosUncheckedCreateWithoutCalendariosInput>
    where?: cadastrosWhereInput
  }

  export type cadastrosUpdateToOneWithWhereWithoutCalendariosInput = {
    where?: cadastrosWhereInput
    data: XOR<cadastrosUpdateWithoutCalendariosInput, cadastrosUncheckedUpdateWithoutCalendariosInput>
  }

  export type cadastrosUpdateWithoutCalendariosInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateWithoutCalendariosInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUncheckedUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosCreateWithoutPerfisInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosCreateNestedManyWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutCadastrosInput
    postagens?: postagensCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateWithoutPerfisInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput
    postagens?: postagensUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosCreateOrConnectWithoutPerfisInput = {
    where: cadastrosWhereUniqueInput
    create: XOR<cadastrosCreateWithoutPerfisInput, cadastrosUncheckedCreateWithoutPerfisInput>
  }

  export type cadastrosUpsertWithoutPerfisInput = {
    update: XOR<cadastrosUpdateWithoutPerfisInput, cadastrosUncheckedUpdateWithoutPerfisInput>
    create: XOR<cadastrosCreateWithoutPerfisInput, cadastrosUncheckedCreateWithoutPerfisInput>
    where?: cadastrosWhereInput
  }

  export type cadastrosUpdateToOneWithWhereWithoutPerfisInput = {
    where?: cadastrosWhereInput
    data: XOR<cadastrosUpdateWithoutPerfisInput, cadastrosUncheckedUpdateWithoutPerfisInput>
  }

  export type cadastrosUpdateWithoutPerfisInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUpdateManyWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateWithoutPerfisInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type postagensCreateWithoutPostagem_comentariosInput = {
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_likes?: postagem_likesCreateNestedManyWithoutPostagensInput
    cadastros?: cadastrosCreateNestedOneWithoutPostagensInput
  }

  export type postagensUncheckedCreateWithoutPostagem_comentariosInput = {
    post_id?: number
    user_id?: number | null
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutPostagensInput
  }

  export type postagensCreateOrConnectWithoutPostagem_comentariosInput = {
    where: postagensWhereUniqueInput
    create: XOR<postagensCreateWithoutPostagem_comentariosInput, postagensUncheckedCreateWithoutPostagem_comentariosInput>
  }

  export type cadastrosCreateWithoutPostagem_comentariosInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosCreateNestedManyWithoutCadastrosInput
    perfis?: perfisCreateNestedOneWithoutCadastrosInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutCadastrosInput
    postagens?: postagensCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateWithoutPostagem_comentariosInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosUncheckedCreateNestedManyWithoutCadastrosInput
    perfis?: perfisUncheckedCreateNestedOneWithoutCadastrosInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput
    postagens?: postagensUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosCreateOrConnectWithoutPostagem_comentariosInput = {
    where: cadastrosWhereUniqueInput
    create: XOR<cadastrosCreateWithoutPostagem_comentariosInput, cadastrosUncheckedCreateWithoutPostagem_comentariosInput>
  }

  export type postagensUpsertWithoutPostagem_comentariosInput = {
    update: XOR<postagensUpdateWithoutPostagem_comentariosInput, postagensUncheckedUpdateWithoutPostagem_comentariosInput>
    create: XOR<postagensCreateWithoutPostagem_comentariosInput, postagensUncheckedCreateWithoutPostagem_comentariosInput>
    where?: postagensWhereInput
  }

  export type postagensUpdateToOneWithWhereWithoutPostagem_comentariosInput = {
    where?: postagensWhereInput
    data: XOR<postagensUpdateWithoutPostagem_comentariosInput, postagensUncheckedUpdateWithoutPostagem_comentariosInput>
  }

  export type postagensUpdateWithoutPostagem_comentariosInput = {
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_likes?: postagem_likesUpdateManyWithoutPostagensNestedInput
    cadastros?: cadastrosUpdateOneWithoutPostagensNestedInput
  }

  export type postagensUncheckedUpdateWithoutPostagem_comentariosInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutPostagensNestedInput
  }

  export type cadastrosUpsertWithoutPostagem_comentariosInput = {
    update: XOR<cadastrosUpdateWithoutPostagem_comentariosInput, cadastrosUncheckedUpdateWithoutPostagem_comentariosInput>
    create: XOR<cadastrosCreateWithoutPostagem_comentariosInput, cadastrosUncheckedCreateWithoutPostagem_comentariosInput>
    where?: cadastrosWhereInput
  }

  export type cadastrosUpdateToOneWithWhereWithoutPostagem_comentariosInput = {
    where?: cadastrosWhereInput
    data: XOR<cadastrosUpdateWithoutPostagem_comentariosInput, cadastrosUncheckedUpdateWithoutPostagem_comentariosInput>
  }

  export type cadastrosUpdateWithoutPostagem_comentariosInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUpdateOneWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateWithoutPostagem_comentariosInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUncheckedUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUncheckedUpdateOneWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type postagem_comentariosCreateWithoutPostagensInput = {
    comentario_text?: string | null
    comentario_data?: Date | string | null
    cadastros?: cadastrosCreateNestedOneWithoutPostagem_comentariosInput
  }

  export type postagem_comentariosUncheckedCreateWithoutPostagensInput = {
    comentario_id?: number
    user_id?: number | null
    comentario_text?: string | null
    comentario_data?: Date | string | null
  }

  export type postagem_comentariosCreateOrConnectWithoutPostagensInput = {
    where: postagem_comentariosWhereUniqueInput
    create: XOR<postagem_comentariosCreateWithoutPostagensInput, postagem_comentariosUncheckedCreateWithoutPostagensInput>
  }

  export type postagem_comentariosCreateManyPostagensInputEnvelope = {
    data: postagem_comentariosCreateManyPostagensInput | postagem_comentariosCreateManyPostagensInput[]
    skipDuplicates?: boolean
  }

  export type postagem_likesCreateWithoutPostagensInput = {
    data_like?: Date | string | null
    cadastros?: cadastrosCreateNestedOneWithoutPostagem_likesInput
  }

  export type postagem_likesUncheckedCreateWithoutPostagensInput = {
    id_like?: number
    user_id?: number | null
    data_like?: Date | string | null
  }

  export type postagem_likesCreateOrConnectWithoutPostagensInput = {
    where: postagem_likesWhereUniqueInput
    create: XOR<postagem_likesCreateWithoutPostagensInput, postagem_likesUncheckedCreateWithoutPostagensInput>
  }

  export type postagem_likesCreateManyPostagensInputEnvelope = {
    data: postagem_likesCreateManyPostagensInput | postagem_likesCreateManyPostagensInput[]
    skipDuplicates?: boolean
  }

  export type cadastrosCreateWithoutPostagensInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosCreateNestedManyWithoutCadastrosInput
    perfis?: perfisCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateWithoutPostagensInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosUncheckedCreateNestedManyWithoutCadastrosInput
    perfis?: perfisUncheckedCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosCreateOrConnectWithoutPostagensInput = {
    where: cadastrosWhereUniqueInput
    create: XOR<cadastrosCreateWithoutPostagensInput, cadastrosUncheckedCreateWithoutPostagensInput>
  }

  export type postagem_comentariosUpsertWithWhereUniqueWithoutPostagensInput = {
    where: postagem_comentariosWhereUniqueInput
    update: XOR<postagem_comentariosUpdateWithoutPostagensInput, postagem_comentariosUncheckedUpdateWithoutPostagensInput>
    create: XOR<postagem_comentariosCreateWithoutPostagensInput, postagem_comentariosUncheckedCreateWithoutPostagensInput>
  }

  export type postagem_comentariosUpdateWithWhereUniqueWithoutPostagensInput = {
    where: postagem_comentariosWhereUniqueInput
    data: XOR<postagem_comentariosUpdateWithoutPostagensInput, postagem_comentariosUncheckedUpdateWithoutPostagensInput>
  }

  export type postagem_comentariosUpdateManyWithWhereWithoutPostagensInput = {
    where: postagem_comentariosScalarWhereInput
    data: XOR<postagem_comentariosUpdateManyMutationInput, postagem_comentariosUncheckedUpdateManyWithoutPostagensInput>
  }

  export type postagem_likesUpsertWithWhereUniqueWithoutPostagensInput = {
    where: postagem_likesWhereUniqueInput
    update: XOR<postagem_likesUpdateWithoutPostagensInput, postagem_likesUncheckedUpdateWithoutPostagensInput>
    create: XOR<postagem_likesCreateWithoutPostagensInput, postagem_likesUncheckedCreateWithoutPostagensInput>
  }

  export type postagem_likesUpdateWithWhereUniqueWithoutPostagensInput = {
    where: postagem_likesWhereUniqueInput
    data: XOR<postagem_likesUpdateWithoutPostagensInput, postagem_likesUncheckedUpdateWithoutPostagensInput>
  }

  export type postagem_likesUpdateManyWithWhereWithoutPostagensInput = {
    where: postagem_likesScalarWhereInput
    data: XOR<postagem_likesUpdateManyMutationInput, postagem_likesUncheckedUpdateManyWithoutPostagensInput>
  }

  export type cadastrosUpsertWithoutPostagensInput = {
    update: XOR<cadastrosUpdateWithoutPostagensInput, cadastrosUncheckedUpdateWithoutPostagensInput>
    create: XOR<cadastrosCreateWithoutPostagensInput, cadastrosUncheckedCreateWithoutPostagensInput>
    where?: cadastrosWhereInput
  }

  export type cadastrosUpdateToOneWithWhereWithoutPostagensInput = {
    where?: cadastrosWhereInput
    data: XOR<cadastrosUpdateWithoutPostagensInput, cadastrosUncheckedUpdateWithoutPostagensInput>
  }

  export type cadastrosUpdateWithoutPostagensInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateWithoutPostagensInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUncheckedUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUncheckedUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type postagensCreateWithoutPostagem_likesInput = {
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutPostagensInput
    cadastros?: cadastrosCreateNestedOneWithoutPostagensInput
  }

  export type postagensUncheckedCreateWithoutPostagem_likesInput = {
    post_id?: number
    user_id?: number | null
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutPostagensInput
  }

  export type postagensCreateOrConnectWithoutPostagem_likesInput = {
    where: postagensWhereUniqueInput
    create: XOR<postagensCreateWithoutPostagem_likesInput, postagensUncheckedCreateWithoutPostagem_likesInput>
  }

  export type cadastrosCreateWithoutPostagem_likesInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosCreateNestedManyWithoutCadastrosInput
    perfis?: perfisCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutCadastrosInput
    postagens?: postagensCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateWithoutPostagem_likesInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    artigos_favoritos?: artigos_favoritosUncheckedCreateNestedManyWithoutCadastrosInput
    calendarios?: calendariosUncheckedCreateNestedManyWithoutCadastrosInput
    perfis?: perfisUncheckedCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagens?: postagensUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosCreateOrConnectWithoutPostagem_likesInput = {
    where: cadastrosWhereUniqueInput
    create: XOR<cadastrosCreateWithoutPostagem_likesInput, cadastrosUncheckedCreateWithoutPostagem_likesInput>
  }

  export type postagensUpsertWithoutPostagem_likesInput = {
    update: XOR<postagensUpdateWithoutPostagem_likesInput, postagensUncheckedUpdateWithoutPostagem_likesInput>
    create: XOR<postagensCreateWithoutPostagem_likesInput, postagensUncheckedCreateWithoutPostagem_likesInput>
    where?: postagensWhereInput
  }

  export type postagensUpdateToOneWithWhereWithoutPostagem_likesInput = {
    where?: postagensWhereInput
    data: XOR<postagensUpdateWithoutPostagem_likesInput, postagensUncheckedUpdateWithoutPostagem_likesInput>
  }

  export type postagensUpdateWithoutPostagem_likesInput = {
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutPostagensNestedInput
    cadastros?: cadastrosUpdateOneWithoutPostagensNestedInput
  }

  export type postagensUncheckedUpdateWithoutPostagem_likesInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutPostagensNestedInput
  }

  export type cadastrosUpsertWithoutPostagem_likesInput = {
    update: XOR<cadastrosUpdateWithoutPostagem_likesInput, cadastrosUncheckedUpdateWithoutPostagem_likesInput>
    create: XOR<cadastrosCreateWithoutPostagem_likesInput, cadastrosUncheckedCreateWithoutPostagem_likesInput>
    where?: cadastrosWhereInput
  }

  export type cadastrosUpdateToOneWithWhereWithoutPostagem_likesInput = {
    where?: cadastrosWhereInput
    data: XOR<cadastrosUpdateWithoutPostagem_likesInput, cadastrosUncheckedUpdateWithoutPostagem_likesInput>
  }

  export type cadastrosUpdateWithoutPostagem_likesInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateWithoutPostagem_likesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_favoritos?: artigos_favoritosUncheckedUpdateManyWithoutCadastrosNestedInput
    calendarios?: calendariosUncheckedUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUncheckedUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type artigos_favoritosCreateWithoutArtigosInput = {
    cadastros?: cadastrosCreateNestedOneWithoutArtigos_favoritosInput
  }

  export type artigos_favoritosUncheckedCreateWithoutArtigosInput = {
    artigos_fav_id?: number
    user_id?: number | null
  }

  export type artigos_favoritosCreateOrConnectWithoutArtigosInput = {
    where: artigos_favoritosWhereUniqueInput
    create: XOR<artigos_favoritosCreateWithoutArtigosInput, artigos_favoritosUncheckedCreateWithoutArtigosInput>
  }

  export type artigos_favoritosCreateManyArtigosInputEnvelope = {
    data: artigos_favoritosCreateManyArtigosInput | artigos_favoritosCreateManyArtigosInput[]
    skipDuplicates?: boolean
  }

  export type artigos_favoritosUpsertWithWhereUniqueWithoutArtigosInput = {
    where: artigos_favoritosWhereUniqueInput
    update: XOR<artigos_favoritosUpdateWithoutArtigosInput, artigos_favoritosUncheckedUpdateWithoutArtigosInput>
    create: XOR<artigos_favoritosCreateWithoutArtigosInput, artigos_favoritosUncheckedCreateWithoutArtigosInput>
  }

  export type artigos_favoritosUpdateWithWhereUniqueWithoutArtigosInput = {
    where: artigos_favoritosWhereUniqueInput
    data: XOR<artigos_favoritosUpdateWithoutArtigosInput, artigos_favoritosUncheckedUpdateWithoutArtigosInput>
  }

  export type artigos_favoritosUpdateManyWithWhereWithoutArtigosInput = {
    where: artigos_favoritosScalarWhereInput
    data: XOR<artigos_favoritosUpdateManyMutationInput, artigos_favoritosUncheckedUpdateManyWithoutArtigosInput>
  }

  export type cadastrosCreateWithoutArtigos_favoritosInput = {
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    calendarios?: calendariosCreateNestedManyWithoutCadastrosInput
    perfis?: perfisCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesCreateNestedManyWithoutCadastrosInput
    postagens?: postagensCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosUncheckedCreateWithoutArtigos_favoritosInput = {
    user_id?: number
    user_age?: number | null
    user_mail?: string | null
    user_firstname?: string | null
    user_secondname?: string | null
    user_phone?: string | null
    user_password_hash?: string | null
    calendarios?: calendariosUncheckedCreateNestedManyWithoutCadastrosInput
    perfis?: perfisUncheckedCreateNestedOneWithoutCadastrosInput
    postagem_comentarios?: postagem_comentariosUncheckedCreateNestedManyWithoutCadastrosInput
    postagem_likes?: postagem_likesUncheckedCreateNestedManyWithoutCadastrosInput
    postagens?: postagensUncheckedCreateNestedManyWithoutCadastrosInput
  }

  export type cadastrosCreateOrConnectWithoutArtigos_favoritosInput = {
    where: cadastrosWhereUniqueInput
    create: XOR<cadastrosCreateWithoutArtigos_favoritosInput, cadastrosUncheckedCreateWithoutArtigos_favoritosInput>
  }

  export type artigosCreateWithoutArtigos_favoritosInput = {
    artigos_gender?: string | null
    artigos_titulo?: string | null
    artigos_description?: string | null
    artigos_url?: string | null
    artigos_autor?: string | null
  }

  export type artigosUncheckedCreateWithoutArtigos_favoritosInput = {
    artigos_id?: number
    artigos_gender?: string | null
    artigos_titulo?: string | null
    artigos_description?: string | null
    artigos_url?: string | null
    artigos_autor?: string | null
  }

  export type artigosCreateOrConnectWithoutArtigos_favoritosInput = {
    where: artigosWhereUniqueInput
    create: XOR<artigosCreateWithoutArtigos_favoritosInput, artigosUncheckedCreateWithoutArtigos_favoritosInput>
  }

  export type cadastrosUpsertWithoutArtigos_favoritosInput = {
    update: XOR<cadastrosUpdateWithoutArtigos_favoritosInput, cadastrosUncheckedUpdateWithoutArtigos_favoritosInput>
    create: XOR<cadastrosCreateWithoutArtigos_favoritosInput, cadastrosUncheckedCreateWithoutArtigos_favoritosInput>
    where?: cadastrosWhereInput
  }

  export type cadastrosUpdateToOneWithWhereWithoutArtigos_favoritosInput = {
    where?: cadastrosWhereInput
    data: XOR<cadastrosUpdateWithoutArtigos_favoritosInput, cadastrosUncheckedUpdateWithoutArtigos_favoritosInput>
  }

  export type cadastrosUpdateWithoutArtigos_favoritosInput = {
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    calendarios?: calendariosUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUpdateManyWithoutCadastrosNestedInput
  }

  export type cadastrosUncheckedUpdateWithoutArtigos_favoritosInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    user_age?: NullableIntFieldUpdateOperationsInput | number | null
    user_mail?: NullableStringFieldUpdateOperationsInput | string | null
    user_firstname?: NullableStringFieldUpdateOperationsInput | string | null
    user_secondname?: NullableStringFieldUpdateOperationsInput | string | null
    user_phone?: NullableStringFieldUpdateOperationsInput | string | null
    user_password_hash?: NullableStringFieldUpdateOperationsInput | string | null
    calendarios?: calendariosUncheckedUpdateManyWithoutCadastrosNestedInput
    perfis?: perfisUncheckedUpdateOneWithoutCadastrosNestedInput
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutCadastrosNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutCadastrosNestedInput
    postagens?: postagensUncheckedUpdateManyWithoutCadastrosNestedInput
  }

  export type artigosUpsertWithoutArtigos_favoritosInput = {
    update: XOR<artigosUpdateWithoutArtigos_favoritosInput, artigosUncheckedUpdateWithoutArtigos_favoritosInput>
    create: XOR<artigosCreateWithoutArtigos_favoritosInput, artigosUncheckedCreateWithoutArtigos_favoritosInput>
    where?: artigosWhereInput
  }

  export type artigosUpdateToOneWithWhereWithoutArtigos_favoritosInput = {
    where?: artigosWhereInput
    data: XOR<artigosUpdateWithoutArtigos_favoritosInput, artigosUncheckedUpdateWithoutArtigos_favoritosInput>
  }

  export type artigosUpdateWithoutArtigos_favoritosInput = {
    artigos_gender?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_titulo?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_description?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_url?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_autor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artigosUncheckedUpdateWithoutArtigos_favoritosInput = {
    artigos_id?: IntFieldUpdateOperationsInput | number
    artigos_gender?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_titulo?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_description?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_url?: NullableStringFieldUpdateOperationsInput | string | null
    artigos_autor?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type artigos_favoritosCreateManyCadastrosInput = {
    artigos_fav_id?: number
    artigos_id?: number | null
  }

  export type calendariosCreateManyCadastrosInput = {
    calendar_id?: number
    calendar_data?: Date | string | null
    calendar_consulta?: string | null
  }

  export type postagem_comentariosCreateManyCadastrosInput = {
    comentario_id?: number
    post_id?: number | null
    comentario_text?: string | null
    comentario_data?: Date | string | null
  }

  export type postagem_likesCreateManyCadastrosInput = {
    id_like?: number
    post_id?: number | null
    data_like?: Date | string | null
  }

  export type postagensCreateManyCadastrosInput = {
    post_id?: number
    post_name?: string | null
    post_text?: string | null
    post_data?: Date | string | null
    post_image?: Bytes | null
    post_gender?: string | null
  }

  export type artigos_favoritosUpdateWithoutCadastrosInput = {
    artigos?: artigosUpdateOneWithoutArtigos_favoritosNestedInput
  }

  export type artigos_favoritosUncheckedUpdateWithoutCadastrosInput = {
    artigos_fav_id?: IntFieldUpdateOperationsInput | number
    artigos_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type artigos_favoritosUncheckedUpdateManyWithoutCadastrosInput = {
    artigos_fav_id?: IntFieldUpdateOperationsInput | number
    artigos_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type calendariosUpdateWithoutCadastrosInput = {
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendariosUncheckedUpdateWithoutCadastrosInput = {
    calendar_id?: IntFieldUpdateOperationsInput | number
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type calendariosUncheckedUpdateManyWithoutCadastrosInput = {
    calendar_id?: IntFieldUpdateOperationsInput | number
    calendar_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendar_consulta?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postagem_comentariosUpdateWithoutCadastrosInput = {
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postagens?: postagensUpdateOneWithoutPostagem_comentariosNestedInput
  }

  export type postagem_comentariosUncheckedUpdateWithoutCadastrosInput = {
    comentario_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_comentariosUncheckedUpdateManyWithoutCadastrosInput = {
    comentario_id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_likesUpdateWithoutCadastrosInput = {
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    postagens?: postagensUpdateOneWithoutPostagem_likesNestedInput
  }

  export type postagem_likesUncheckedUpdateWithoutCadastrosInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_likesUncheckedUpdateManyWithoutCadastrosInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagensUpdateWithoutCadastrosInput = {
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_comentarios?: postagem_comentariosUpdateManyWithoutPostagensNestedInput
    postagem_likes?: postagem_likesUpdateManyWithoutPostagensNestedInput
  }

  export type postagensUncheckedUpdateWithoutCadastrosInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
    postagem_comentarios?: postagem_comentariosUncheckedUpdateManyWithoutPostagensNestedInput
    postagem_likes?: postagem_likesUncheckedUpdateManyWithoutPostagensNestedInput
  }

  export type postagensUncheckedUpdateManyWithoutCadastrosInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    post_name?: NullableStringFieldUpdateOperationsInput | string | null
    post_text?: NullableStringFieldUpdateOperationsInput | string | null
    post_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_image?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    post_gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postagem_comentariosCreateManyPostagensInput = {
    comentario_id?: number
    user_id?: number | null
    comentario_text?: string | null
    comentario_data?: Date | string | null
  }

  export type postagem_likesCreateManyPostagensInput = {
    id_like?: number
    user_id?: number | null
    data_like?: Date | string | null
  }

  export type postagem_comentariosUpdateWithoutPostagensInput = {
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cadastros?: cadastrosUpdateOneWithoutPostagem_comentariosNestedInput
  }

  export type postagem_comentariosUncheckedUpdateWithoutPostagensInput = {
    comentario_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_comentariosUncheckedUpdateManyWithoutPostagensInput = {
    comentario_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    comentario_text?: NullableStringFieldUpdateOperationsInput | string | null
    comentario_data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_likesUpdateWithoutPostagensInput = {
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cadastros?: cadastrosUpdateOneWithoutPostagem_likesNestedInput
  }

  export type postagem_likesUncheckedUpdateWithoutPostagensInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postagem_likesUncheckedUpdateManyWithoutPostagensInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    data_like?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type artigos_favoritosCreateManyArtigosInput = {
    artigos_fav_id?: number
    user_id?: number | null
  }

  export type artigos_favoritosUpdateWithoutArtigosInput = {
    cadastros?: cadastrosUpdateOneWithoutArtigos_favoritosNestedInput
  }

  export type artigos_favoritosUncheckedUpdateWithoutArtigosInput = {
    artigos_fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type artigos_favoritosUncheckedUpdateManyWithoutArtigosInput = {
    artigos_fav_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
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