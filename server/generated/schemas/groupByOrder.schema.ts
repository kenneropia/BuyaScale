import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
import { OrderOrderByWithAggregationInputObjectSchema } from './objects/OrderOrderByWithAggregationInput.schema';
import { OrderScalarWhereWithAggregatesInputObjectSchema } from './objects/OrderScalarWhereWithAggregatesInput.schema';
import { OrderScalarFieldEnumSchema } from './enums/OrderScalarFieldEnum.schema';

export const OrderGroupBySchema = z.object({
  where: OrderWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      OrderOrderByWithAggregationInputObjectSchema,
      OrderOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: OrderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(OrderScalarFieldEnumSchema),
});
