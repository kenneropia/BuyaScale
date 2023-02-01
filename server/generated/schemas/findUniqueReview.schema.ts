import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';

export const ReviewFindUniqueSchema = z.object({
  where: ReviewWhereUniqueInputObjectSchema,
});
