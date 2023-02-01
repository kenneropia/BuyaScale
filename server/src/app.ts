import { router } from "./trpc";
import { userRouter } from "src/user/user.router";
import { productRouter } from "src/product/product.router";

export const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
  product: productRouter,
});

export type AppRouter = typeof appRouter;
