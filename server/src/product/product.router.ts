import { router, publicProcedure, privateProcedure } from "src/trpc";
import { z } from "zod";
import { db } from "src/db";

import { LimitAndPage, transformEnumToTruple } from "src/utils";

export const productRouter = router({
  productById: publicProcedure
    .input(z.string().uuid())
    .query(async ({ input }) => {
      return await db.product.findUnique({
        where: { id: input },
        include: { varients: true, reviews: true },
      });
    }),
  allProducts: publicProcedure.input(LimitAndPage).query(async ({ input }) => {
    const page = Number(input.page) || 1;
    const limit = Number(input.limit) || 5;
    const skip = (page - 1) * limit;
    return {
      count: await db.product.count(),
      products: await db.product.findMany({
        take: limit,

        skip: skip,
      }),
    };
  }),
});
