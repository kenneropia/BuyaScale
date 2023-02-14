import {
  router,
  publicProcedure,
  privateProcedure,
  adminProcedure,
} from "../trpc";
import { z } from "zod";
import { db } from "src/db";
import { LimitAndPage } from "src/utils/others";
import { TRPCError } from "@trpc/server";
import { createReviewSchema } from "./review.schema";

export const reviewRouter = router({
  getReviewById: publicProcedure
    .input(z.string().uuid())
    .query(async ({ input }) => {
      return await db.review.findUnique({ where: { id: input }, select: {} });
    }),
  getAllreviewsByProductId: publicProcedure
    .input(LimitAndPage.merge(z.object({ productId: z.string().uuid() })))
    .query(async ({ input }) => {
      const page = Number(input.page) || 1;
      const limit = Number(input.limit) || 5;
      const skip = (page - 1) * limit;
      return {
        count: await db.review.count(),
        reviews: await db.review.findMany({
          take: limit,
          skip: skip,
          where: { productId: input.productId },
        }),
      };
    }),

  getAllreviews: adminProcedure
    .input(LimitAndPage.merge(z.object({ productId: z.string().uuid() })))
    .query(async ({ input }) => {
      const page = Number(input.page) || 1;
      const limit = Number(input.limit) || 5;
      const skip = (page - 1) * limit;
      return {
        count: await db.review.count(),
        reviews: await db.review.findMany({
          take: limit,
          skip: skip,
        }),
      };
    }),

  getAllreviewsByUserId: publicProcedure
    .input(LimitAndPage.merge(z.object({ userId: z.string().uuid() })))
    .query(async ({ input }) => {
      const page = Number(input.page) || 1;
      const limit = Number(input.limit) || 5;
      const skip = (page - 1) * limit;
      return {
        count: await db.review.count(),
        reviews: await db.review.findMany({
          take: limit,
          skip: skip,
          where: { creatorId: input.userId },
        }),
      };
    }),
  deleteReviewByUser: privateProcedure
    .input(z.string().uuid())
    .mutation(async ({ input, ctx }) => {
      let review = await db.review.findFirst({
        where: {
          creatorId: ctx.user.id,
          id: input,
        },
      });

      const deletedReview = await db.review.delete({
        where: { id: review?.id },
      });
      return Boolean(deletedReview);
    }),

  deleteReviewByAdmin: adminProcedure
    .input(z.string().uuid())
    .mutation(async ({ input, ctx }) => {
      const deletedReview = await db.review.delete({
        where: { id: input },
      });
      return Boolean(deletedReview);
    }),

  createReview: privateProcedure
    .input(createReviewSchema)
    .mutation(async ({ input, ctx }) => {
      const isOrdered = await db.order.findFirst({
        where: { creatorId: ctx.user.id, productId: input.productId },
      });
      if (!isOrdered) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "",
        });
      }
      return await db.review.create({
        data: { ...input, creatorId: ctx.user.id },
      });
    }),
});
