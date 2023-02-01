import { z } from 'zod';
import { CouponCreateInputObjectSchema } from './objects/CouponCreateInput.schema';
import { CouponUncheckedCreateInputObjectSchema } from './objects/CouponUncheckedCreateInput.schema';

export const CouponCreateOneSchema = z.object({
  data: z.union([
    CouponCreateInputObjectSchema,
    CouponUncheckedCreateInputObjectSchema,
  ]),
});
