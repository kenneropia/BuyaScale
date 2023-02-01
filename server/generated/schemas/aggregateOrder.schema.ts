import { z } from 'zod';
import { OrderOrderByWithRelationInputObjectSchema } from './objects/OrderOrderByWithRelationInput.schema';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderCountAggregateInputObjectSchema } from './objects/OrderCountAggregateInput.schema';
import { OrderMinAggregateInputObjectSchema } from './objects/OrderMinAggregateInput.schema';
import { OrderMaxAggregateInputObjectSchema } from './objects/OrderMaxAggregateInput.schema';
import { OrderAvgAggregateInputObjectSchema } from './objects/OrderAvgAggregateInput.schema';
import { OrderSumAggregateInputObjectSchema } from './objects/OrderSumAggregateInput.schema';

export const OrderAggregateSchema = z.object({
  orderBy: z
    .union([
      OrderOrderByWithRelationInputObjectSchema,
      OrderOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: OrderWhereInputObjectSchema.optional(),
  cursor: OrderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), OrderCountAggregateInputObjectSchema])
    .optional(),
  _min: OrderMinAggregateInputObjectSchema.optional(),
  _max: OrderMaxAggregateInputObjectSchema.optional(),
  _avg: OrderAvgAggregateInputObjectSchema.optional(),
  _sum: OrderSumAggregateInputObjectSchema.optional(),
});
