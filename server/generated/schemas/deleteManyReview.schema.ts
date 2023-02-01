import { z } from 'zod';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';

export const ReviewDeleteManySchema = z.object({
  where: ReviewWhereInputObjectSchema.optional(),
});
