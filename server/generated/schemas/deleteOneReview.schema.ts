import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewDeleteOneSchema = z.object({
  where: ReviewWhereUniqueInputObjectSchema,
});
