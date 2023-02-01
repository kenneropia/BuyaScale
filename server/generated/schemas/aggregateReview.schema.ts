import { z } from 'zod';
import { ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCountAggregateInputObjectSchema } from './objects/ReviewCountAggregateInput.schema';
import { ReviewMinAggregateInputObjectSchema } from './objects/ReviewMinAggregateInput.schema';
import { ReviewMaxAggregateInputObjectSchema } from './objects/ReviewMaxAggregateInput.schema';
import { ReviewAvgAggregateInputObjectSchema } from './objects/ReviewAvgAggregateInput.schema';
import { ReviewSumAggregateInputObjectSchema } from './objects/ReviewSumAggregateInput.schema';

export const ReviewAggregateSchema = z.object({
  orderBy: z
    .union([
      ReviewOrderByWithRelationInputObjectSchema,
      ReviewOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReviewWhereInputObjectSchema.optional(),
  cursor: ReviewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ReviewCountAggregateInputObjectSchema])
    .optional(),
  _min: ReviewMinAggregateInputObjectSchema.optional(),
  _max: ReviewMaxAggregateInputObjectSchema.optional(),
  _avg: ReviewAvgAggregateInputObjectSchema.optional(),
  _sum: ReviewSumAggregateInputObjectSchema.optional(),
});
