import { z } from 'zod';
import { ReviewCreateInputObjectSchema } from './objects/ReviewCreateInput.schema';
import { ReviewUncheckedCreateInputObjectSchema } from './objects/ReviewUncheckedCreateInput.schema';

export const ReviewCreateOneSchema = z.object({
  data: z.union([
    ReviewCreateInputObjectSchema,
    ReviewUncheckedCreateInputObjectSchema,
  ]),
});
