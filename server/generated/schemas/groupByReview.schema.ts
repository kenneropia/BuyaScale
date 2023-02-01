import { z } from 'zod';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewOrderByWithAggregationInputObjectSchema } from './objects/ReviewOrderByWithAggregationInput.schema';
import { ReviewScalarWhereWithAggregatesInputObjectSchema } from './objects/ReviewScalarWhereWithAggregatesInput.schema';
import { ReviewScalarFieldEnumSchema } from './enums/ReviewScalarFieldEnum.schema';

export const ReviewGroupBySchema = z.object({
  where: ReviewWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ReviewOrderByWithAggregationInputObjectSchema,
      ReviewOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ReviewScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ReviewScalarFieldEnumSchema),
});
