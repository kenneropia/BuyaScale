import { router, privateProcedure, adminProcedure } from "src/trpc";
import { z } from "zod";
import { db } from "src/db";

import { LimitAndPage } from "src/utils/others";
import { createOrderSchema, orderStatusSchema } from "./order.schema";
import { TRPCError } from "@trpc/server";

export const orderRouter = router({
  createOrder: privateProcedure
    .input(createOrderSchema)
    .mutation(async ({ input }) => {
      const coupon = await db.coupon.findFirst({
        where: { code: input.couponCode },
      });
      if (!input.couponCode && !coupon) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "invalid coupon",
        });
      }

      const cart = await db.cartItem.findMany({
        where: { orderId: null },
        include: { product: true },
      });
      const cartPriceSum = cart.reduce(
        (accu, curr) => accu + (curr.product?.price || 0),
        0
      );
      const price = (coupon?.percentage || 100 / 100) * cartPriceSum;

      return await db.$transaction(async (tx) => {
        const order = await tx.order.create({
          data: {
            ...input,
            price,

            cartItems: { create: { ...cart } },
          },
        });
        if (!order) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "unsuccessful order",
          });
        }
        await tx.cartItem.updateMany({
          where: { orderId: null },
          data: { orderId: order.id },
        });
        return order;
      });
    }),
  deleteOrder: privateProcedure
    .input(z.string().uuid())
    .mutation(async ({ input, ctx }) => {
      const order = await db.order.findFirst({
        where: {
          creatorId: ctx.user.id,
          id: input,
          status: "pending",
        },
      });
      if (!order) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "unsuccessful order remove",
        });
      }
      return await db.order.delete({
        where: {
          id: order.id,
        },
      });
    }),

  orderById: privateProcedure
    .input(z.string().uuid())
    .query(async ({ input, ctx }) => {
      const userObj = ctx.isAdmin ? { creatorId: ctx.user.id } : {};
      return await db.order.findFirst({
        where: { id: input, ...userObj },
        include: { cartItems: true },
      });
    }),
  allOrders: privateProcedure
    .input(LimitAndPage.merge(z.object({ status: orderStatusSchema })))
    .query(async ({ input, ctx }) => {
      const page = Number(input.page) || 1;
      const limit = Number(input.limit) || 5;
      const skip = (page - 1) * limit;
      const userObj = ctx.isAdmin ? { creatorId: ctx.user.id } : {};
      return {
        count: await db.order.count({
          where: { ...userObj, status: input.status },
        }),
        orders: await db.order.findMany({
          where: {
            ...userObj,
            status: input.status,
          },
          take: limit,
          skip: skip,
        }),
      };
    }),
});
