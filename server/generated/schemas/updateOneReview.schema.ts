import { z } from 'zod';
import { ReviewUpdateInputObjectSchema } from './objects/ReviewUpdateInput.schema';
import { ReviewUncheckedUpdateInputObjectSchema } from './objects/ReviewUncheckedUpdateInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewUpdateOneSchema = z.object({
  data: z.union([
    ReviewUpdateInputObjectSchema,
    ReviewUncheckedUpdateInputObjectSchema,
  ]),
  where: ReviewWhereUniqueInputObjectSchema,
});
