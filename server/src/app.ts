import { router } from "./trpc";
import { userRouter } from "src/user/user.router";
import { productRouter } from "src/product/product.router";
import { reviewRouter } from "./review/review.router";
import { orderRouter } from "./order/order.router";
import { cartRouter } from "./cart/cart.router";

export const appRouter = router({
  user: userRouter, // put procedures under "user" namespace
  product: productRouter,
  review: reviewRouter,
  order: orderRouter,
  cart: cartRouter,
});

export type AppRouter = typeof appRouter;
