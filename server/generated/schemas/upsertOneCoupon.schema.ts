import { z } from 'zod';
import { CouponWhereUniqueInputObjectSchema } from './objects/CouponWhereUniqueInput.schema';
import { CouponCreateInputObjectSchema } from './objects/CouponCreateInput.schema';
import { CouponUncheckedCreateInputObjectSchema } from './objects/CouponUncheckedCreateInput.schema';
import { CouponUpdateInputObjectSchema } from './objects/CouponUpdateInput.schema';
import { CouponUncheckedUpdateInputObjectSchema } from './objects/CouponUncheckedUpdateInput.schema';

export const CouponUpsertSchema = z.object({
  where: CouponWhereUniqueInputObjectSchema,
  create: z.union([
    CouponCreateInputObjectSchema,
    CouponUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CouponUpdateInputObjectSchema,
    CouponUncheckedUpdateInputObjectSchema,
  ]),
});
