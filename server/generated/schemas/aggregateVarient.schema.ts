import { z } from 'zod';
import { VarientOrderByWithRelationInputObjectSchema } from './objects/VarientOrderByWithRelationInput.schema';
import { VarientWhereInputObjectSchema } from './objects/VarientWhereInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './objects/VarientWhereUniqueInput.schema';
import { VarientCountAggregateInputObjectSchema } from './objects/VarientCountAggregateInput.schema';
import { VarientMinAggregateInputObjectSchema } from './objects/VarientMinAggregateInput.schema';
import { VarientMaxAggregateInputObjectSchema } from './objects/VarientMaxAggregateInput.schema';

export const VarientAggregateSchema = z.object({
  orderBy: z
    .union([
      VarientOrderByWithRelationInputObjectSchema,
      VarientOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VarientWhereInputObjectSchema.optional(),
  cursor: VarientWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), VarientCountAggregateInputObjectSchema])
    .optional(),
  _min: VarientMinAggregateInputObjectSchema.optional(),
  _max: VarientMaxAggregateInputObjectSchema.optional(),
});
