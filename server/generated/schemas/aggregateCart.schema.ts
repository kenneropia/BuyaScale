import { z } from 'zod';
import { CartOrderByWithRelationInputObjectSchema } from './objects/CartOrderByWithRelationInput.schema';
import { CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';
import { CartCountAggregateInputObjectSchema } from './objects/CartCountAggregateInput.schema';
import { CartMinAggregateInputObjectSchema } from './objects/CartMinAggregateInput.schema';
import { CartMaxAggregateInputObjectSchema } from './objects/CartMaxAggregateInput.schema';
import { CartAvgAggregateInputObjectSchema } from './objects/CartAvgAggregateInput.schema';
import { CartSumAggregateInputObjectSchema } from './objects/CartSumAggregateInput.schema';

export const CartAggregateSchema = z.object({
  orderBy: z
    .union([
      CartOrderByWithRelationInputObjectSchema,
      CartOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CartWhereInputObjectSchema.optional(),
  cursor: CartWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), CartCountAggregateInputObjectSchema])
    .optional(),
  _min: CartMinAggregateInputObjectSchema.optional(),
  _max: CartMaxAggregateInputObjectSchema.optional(),
  _avg: CartAvgAggregateInputObjectSchema.optional(),
  _sum: CartSumAggregateInputObjectSchema.optional(),
});
