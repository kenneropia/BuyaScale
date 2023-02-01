import { z } from 'zod';
import { CouponOrderByWithRelationInputObjectSchema } from './objects/CouponOrderByWithRelationInput.schema';
import { CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';
import { CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
import { CouponScalarFieldEnumSchema } from './enums/CouponScalarFieldEnum.schema';

export const CouponFindFirstSchema = z.object({
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
  distinct: z.array(CouponScalarFieldEnumSchema).optional(),
});
