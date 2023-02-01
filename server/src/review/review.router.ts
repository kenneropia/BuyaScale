import { router, publicProcedure, privateProcedure } from "../trpc";
import { z } from "zod";
import { db } from "src/db";
import { LimitAndPage } from "src/utils";
import { TRPCError } from "@trpc/server";
import { reviewSchema } from "./review.schema";

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
  deleteReview: privateProcedure
    .input(z.object({ reviewId: z.string().uuid() }))
    .mutation(async ({ input, ctx }) => {
      const review = await db.review.findFirst({
        where: {
          creatorId: ctx.user.id,
          OR: [
            {
              id: input.reviewId,
              creator: {
                role: "Admin",
              },
            },
            {
              id: input.reviewId,
              creator: {
                role: "Moderator",
              },
            },
          ],
        },
      });
      return review && (await db.review.delete({ where: { id: review.id } }));
    }),
  createReview: privateProcedure
    .input(reviewSchema)
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
