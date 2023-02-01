import { z } from 'zod';
import { CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';

export const CouponDeleteManySchema = z.object({
  where: CouponWhereInputObjectSchema.optional(),
});
