import { z } from 'zod';
import { CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';

export const CouponDeleteOneSchema = z.object({
  where: CouponWhereUniqueInputObjectSchema,
});
