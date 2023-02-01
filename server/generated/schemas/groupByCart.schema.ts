import { z } from 'zod';
import { CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
import { CartOrderByWithAggregationInputObjectSchema } from './objects/CartOrderByWithAggregationInput.schema';
import { CartScalarWhereWithAggregatesInputObjectSchema } from './objects/CartScalarWhereWithAggregatesInput.schema';
import { CartScalarFieldEnumSchema } from './enums/CartScalarFieldEnum.schema';

export const CartGroupBySchema = z.object({
  where: CartWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      CartOrderByWithAggregationInputObjectSchema,
      CartOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: CartScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(CartScalarFieldEnumSchema),
});
