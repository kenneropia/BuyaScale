import { router, privateProcedure } from "src/trpc";
import { z } from "zod";
import { db } from "src/db";

import { createCartSchema } from "./cart.schema";
import { TRPCError } from "@trpc/server";
import { LimitAndPage } from "src/utils/others";

export const cartRouter = router({
  getAllCartItems: privateProcedure
    .input(LimitAndPage)
    .query(async ({ ctx, input }) => {
      const page = Number(input.page) || 1;
      const limit = Number(input.limit) || 5;
      const skip = (page - 1) * limit;

      const userObj = ctx.isAdmin ? { creatorId: ctx.user.id } : {};
      return {
        count: await db.cartItem.count(),
        cartItems: await db.cartItem.findMany({
          take: limit,
          where: { ...userObj },
          skip: skip,
        }),
      };
    }),
  addToCart: privateProcedure
    .input(createCartSchema)
    .mutation(async ({ input, ctx }) => {
      const product = await db.product.findUnique({
        where: { id: input.productId },
      });
      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "product not found",
        });
      }
      const varient = await db.varient.findUnique({
        where: { id: input.varientId },
      });
      const varientObj = varient ? { varientId: varient.id } : {};
      return await db.cartItem.create({
        data: {
          creatorId: ctx.user.id,
          productId: input.productId,
          ...varientObj,
        },
      });
    }),
  removeFromCart: privateProcedure
    .input(z.string().uuid())
    .mutation(async ({ input, ctx }) => {
      const cartItem = await db.cartItem.findFirst({
        where: {
          creatorId: ctx.user.id,
          id: input,
        },
      });
      if (!cartItem) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "unsuccessful cart remove",
        });
      }
      return await db.cartItem.delete({
        where: {
          id: cartItem.id,
        },
      });
    }),
});
