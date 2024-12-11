import { NestFactory } from "@nestjs/core";
import { AuthModule } from "~/modules/auth/auth.module.js";

const authContext = NestFactory.createApplicationContext(AuthModule).then(
  () => {
    return {
      // other services...
    };
  },
);

export default authContext;
