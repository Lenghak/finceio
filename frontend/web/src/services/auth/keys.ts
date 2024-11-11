import { CacheKeyManager, type QueryKeyPrimitive } from "@/types/keys";

// Auth-specific operation types
type AuthOperationType =
  | "sign-in"
  | "sign-up"
  | "sign-out"
  | "reset-password"
  | "forgot-password"
  | "resend-otp"
  | "verify-email"
  | "refresh"
  | "session"
  | "deactivate"
  | "delete";

// Auth-specific params interface (extend as needed)
interface AuthParams {
  email?: string;
  provider?: string;
  token?: string;
}

// Auth-specific cache manager
export class AuthCacheManager extends CacheKeyManager<AuthParams> {
  constructor() {
    super("auth");
  }

  // Override operation to use auth-specific types
  operation(
    type: AuthOperationType,
    params?: AuthParams,
  ): readonly [string, string, string, QueryKeyPrimitive] {
    return [
      ...this.all(),
      "operation",
      type,
      params ? CacheKeyManager.serializeKeyPart(params) : "empty",
    ];
  }
}

// Create the auth keys instance
export const authKeys = new AuthCacheManager();
