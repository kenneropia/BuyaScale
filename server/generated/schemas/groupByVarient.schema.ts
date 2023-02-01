import { z } from 'zod';
import { VarientWhereInputObjectSchema } from './objects/VarientWhereInput.schema';
import { VarientOrderByWithAggregationInputObjectSchema } from './objects/VarientOrderByWithAggregationInput.schema';
import { VarientScalarWhereWithAggregatesInputObjectSchema } from './objects/VarientScalarWhereWithAggregatesInput.schema';
import { VarientScalarFieldEnumSchema } from './enums/VarientScalarFieldEnum.schema';

export const VarientGroupBySchema = z.object({
  where: VarientWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VarientOrderByWithAggregationInputObjectSchema,
      VarientOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VarientScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VarientScalarFieldEnumSchema),
});
