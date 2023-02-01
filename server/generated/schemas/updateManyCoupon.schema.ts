import { z } from 'zod';
import { CouponUpdateManyMutationInputObjectSchema } from './objects/CouponUpdateManyMutationInput.schema';
import { CouponWhereInputObjectSchema } from './objects/CouponWhereInput.schema';

export const CouponUpdateManySchema = z.object({
  data: CouponUpdateManyMutationInputObjectSchema,
  where: CouponWhereInputObjectSchema.optional(),
});
