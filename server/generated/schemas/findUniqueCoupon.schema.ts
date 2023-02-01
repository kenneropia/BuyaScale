import { z } from 'zod';
import { CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';

export const CouponFindUniqueSchema = z.object({
  where: CouponWhereUniqueInputObjectSchema,
});
