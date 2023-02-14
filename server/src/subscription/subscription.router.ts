import { router, privateProcedure } from "src/trpc";
import { z } from "zod";
import { db } from "src/db";

import {
  createSubscriptionSchema,
  newSubscriptionItemSchema,
} from "./subscription.schema";
import { TRPCError } from "@trpc/server";

export const subscriptionRouter = router({
  createSubscriptions: privateProcedure
    .input(createSubscriptionSchema)
    .query(async ({ ctx, input }) => {
      const subscription = await db.subscription.create({
        data: { interval: input.interval, creatorId: ctx.user.id },
      });
      return subscription;
    }),
  addItemsToSubscription: privateProcedure
    .input(newSubscriptionItemSchema)
    .mutation(async ({ input, ctx }) => {
      const subscription = await db.subscription.findUnique({
        where: { id: input.subscriptionId },
      });
      if (!subscription) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "subscription not found",
        });
      }

      return await db.subscriptionItem.create({
        data: {
          ...input,
          creatorId: ctx.user.id,
        },
      });
    }),
  removeItemsToSubscription: privateProcedure
    .input(z.string().uuid())
    .mutation(async ({ input, ctx }) => {
      const subscriptionItem = await db.subscription.findUnique({
        where: { id: input, creatorId: ctx.user.id },
      });
      if (!subscriptionItem) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "subscription not found",
        });
      }

      return await db.subscriptionItem.delete({
        where: { id: subscriptionItem.id },
      });
    }),
  cancelSubscription: privateProcedure
    .input(z.string().uuid())
    .mutation(async ({ input, ctx }) => {
      const subscription = await db.subscription.findUnique({
        where: { id: input, creatorId: ctx.user.id },
      });
      if (!subscription) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "subscription not found",
        });
      }

      return await db.subscription.delete({
        where: { id: subscription.id },
      });
    }),
});
