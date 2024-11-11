// Parameters for data fetching control
export interface FetchParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  search?: string;
  [k: string | number | symbol]: unknown;
}

// Generic type for collection filtering
export type CollectionFilters<TEntity> = Partial<TEntity> & FetchParams;

// Parameters for entity mutations
export interface MutationParams<TEntity> {
  entityId: string | number;
  payload?: Partial<TEntity>;
}

// Type for valid query key primitives
export type QueryKeyPrimitive = string | number | boolean | null | undefined;
export type QueryKeyObject = Record<string, QueryKeyPrimitive>;
export type ValidKeyElement = QueryKeyPrimitive | QueryKeyObject;

// Main class for managing cache keys
export class CacheKeyManager<TEntity> {
  private readonly scope: string;

  constructor(scope: string) {
    this.scope = scope;
  }

  // Utility method to safely serialize objects for query keys
  static serializeKeyPart(value: unknown): QueryKeyPrimitive {
    if (value === null || value === undefined) {
      return "null";
    }

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  }

  // Base scope key
  all(): readonly [string] {
    return [this.scope];
  }

  // Collection-related query keys
  collections(): readonly [string, string] {
    return [this.scope, "collections"];
  }

  collection(
    filters?: CollectionFilters<TEntity>,
  ): readonly [string, string, QueryKeyPrimitive] {
    return [
      this.scope,
      "collections",
      filters ? CacheKeyManager.serializeKeyPart(filters) : "unfiltered",
    ];
  }

  // Single entity query keys
  single(): readonly [string, string] {
    return [this.scope, "single"];
  }

  detail(
    entityId: string | number,
  ): readonly [string, string, QueryKeyPrimitive] {
    return [this.scope, "single", CacheKeyManager.serializeKeyPart(entityId)];
  }

  // Data mutation keys
  mutations(): readonly [string, "mutation"] {
    return [this.scope, "mutation"];
  }

  mutation(
    type: "CREATE" | "UPDATE" | "DELETE",
    params?: MutationParams<TEntity>,
  ): readonly [string, string, string, QueryKeyPrimitive] {
    return [
      this.scope,
      "mutation",
      type,
      params ? CacheKeyManager.serializeKeyPart(params) : "empty",
    ];
  }

  // Domain-specific operation keys
  operations(): readonly [string, string] {
    return [this.scope, "operation"];
  }

  operation(
    name: string,
    params?: unknown,
  ): readonly [string, string, string, QueryKeyPrimitive] {
    return [
      this.scope,
      "operation",
      name,
      params ? CacheKeyManager.serializeKeyPart(params) : "empty",
    ];
  }

  // Flexible key composition
  compose(...segments: unknown[]): readonly QueryKeyPrimitive[] {
    return [
      this.scope,
      ...segments.map((segment) => CacheKeyManager.serializeKeyPart(segment)),
    ];
  }
}
