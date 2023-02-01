import { z } from 'zod';
import { CouponUpdateInputObjectSchema } from './objects/CouponUpdateInput.schema';
import { CouponUncheckedUpdateInputObjectSchema } from './objects/CouponUncheckedUpdateInput.schema';
import { CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';

export const CouponUpdateOneSchema = z.object({
  data: z.union([
    CouponUpdateInputObjectSchema,
    CouponUncheckedUpdateInputObjectSchema,
  ]),
  where: CouponWhereUniqueInputObjectSchema,
});
