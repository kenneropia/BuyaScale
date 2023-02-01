import { z } from 'zod';
import { CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
import { CouponOrderByWithAggregationInputObjectSchema } from './objects/CouponOrderByWithAggregationInput.schema';
import { CouponScalarWhereWithAggregatesInputObjectSchema } from './objects/CouponScalarWhereWithAggregatesInput.schema';
import { CouponScalarFieldEnumSchema } from './enums/CouponScalarFieldEnum.schema';

export const CouponGroupBySchema = z.object({
  where: CouponWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CouponOrderByWithAggregationInputObjectSchema,
      CouponOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CouponScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CouponScalarFieldEnumSchema),
});
