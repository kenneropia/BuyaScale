import {
  router,
  publicProcedure,
  privateProcedure,
  adminProcedure,
} from "src/trpc";
import { z } from "zod";
import { db } from "src/db";

import { LimitAndPage } from "src/utils/others";
import deleteFile from "src/utils/deleteFile";
import { createProductSchema } from "./product.schema";

export const productRouter = router({
  createProductByAdmin: adminProcedure
    .input(createProductSchema)
    .mutation(async ({ input }) => {
      return await db.product.create({ data: { ...input } });
    }),
  createVarientByAdmin: adminProcedure
    .input(
      createProductSchema
        .omit({
          quantityLeft: true,
          categoryId: true,
          createrId: true,
          note: true,
        })
        .merge(z.object({ productId: z.string().uuid() }))
    )
    .mutation(async ({ input }) => {
      return await db.varient.create({ data: { ...input } });
    }),
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
  deleteProductByAdmin: adminProcedure
    .input(z.string().uuid())
    .mutation(async ({ input }) => {
      const product = await db.product.delete({ where: { id: input } });
      deleteFile(product.previewImage);
      return Boolean(product);
    }),
  deleteVarientByAdmin: adminProcedure
    .input(z.string().uuid())
    .mutation(async ({ input }) => {
      const varient = await db.varient.delete({ where: { id: input } });
      deleteFile(varient.previewImage);
      return Boolean(varient);
    }),
});
