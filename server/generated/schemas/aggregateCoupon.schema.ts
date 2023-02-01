import { z } from 'zod';
import { CouponOrderByWithRelationInputObjectSchema } from './objects/CouponOrderByWithRelationInput.schema';
import { CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
import { CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
import { CouponCountAggregateInputObjectSchema } from './objects/CouponCountAggregateInput.schema';
import { CouponMinAggregateInputObjectSchema } from './objects/CouponMinAggregateInput.schema';
import { CouponMaxAggregateInputObjectSchema } from './objects/CouponMaxAggregateInput.schema';

export const CouponAggregateSchema = z.object({
  orderBy: z
    .union([
      CouponOrderByWithRelationInputObjectSchema,
      CouponOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CouponWhereInputObjectSchema.optional(),
  cursor: CouponWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CouponCountAggregateInputObjectSchema])
    .optional(),
  _min: CouponMinAggregateInputObjectSchema.optional(),
  _max: CouponMaxAggregateInputObjectSchema.optional(),
});
