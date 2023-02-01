import { z } from 'zod';
import { ReviewUpdateManyMutationInputObjectSchema } from './objects/ReviewUpdateManyMutationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';

export const ReviewUpdateManySchema = z.object({
  data: ReviewUpdateManyMutationInputObjectSchema,
  where: ReviewWhereInputObjectSchema.optional(),
});
