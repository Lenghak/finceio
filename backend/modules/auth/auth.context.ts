import { AuthModule } from "@modules/auth/auth.module.js";
import { NestFactory } from "@nestjs/core";

const authContext = NestFactory.createApplicationContext(AuthModule).then(
  () => {
    return {
      // other services...
    };
  },
);

export default authContext;
