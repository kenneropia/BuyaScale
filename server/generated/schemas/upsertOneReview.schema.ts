import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCreateInputObjectSchema } from './objects/ReviewCreateInput.schema';
import { ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';
import { ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';

export const ReviewUpsertSchema = z.object({
  where: ReviewWhereUniqueInputObjectSchema,
  create: z.union([
    ReviewCreateInputObjectSchema,
    ReviewUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ReviewUpdateInputObjectSchema,
    ReviewUncheckedUpdateInputObjectSchema,
  ]),
});
