import { z } from 'zod';
import { ProductOrderByWithRelationInputObjectSchema } from './objects/ProductOrderByWithRelationInput.schema';
import { ProductWhereInputObjectSchema } from './objects/ProductWhereInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';
import { ProductCountAggregateInputObjectSchema } from './objects/ProductCountAggregateInput.schema';
import { ProductMinAggregateInputObjectSchema } from './objects/ProductMinAggregateInput.schema';
import { ProductMaxAggregateInputObjectSchema } from './objects/ProductMaxAggregateInput.schema';
import { ProductAvgAggregateInputObjectSchema } from './objects/ProductAvgAggregateInput.schema';
import { ProductSumAggregateInputObjectSchema } from './objects/ProductSumAggregateInput.schema';

export const ProductAggregateSchema = z.object({
  orderBy: z
    .union([
      ProductOrderByWithRelationInputObjectSchema,
      ProductOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProductWhereInputObjectSchema.optional(),
  cursor: ProductWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProductCountAggregateInputObjectSchema])
    .optional(),
  _min: ProductMinAggregateInputObjectSchema.optional(),
  _max: ProductMaxAggregateInputObjectSchema.optional(),
  _avg: ProductAvgAggregateInputObjectSchema.optional(),
  _sum: ProductSumAggregateInputObjectSchema.optional(),
});
