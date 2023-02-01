import { z } from 'zod';
import { OrderOrderByWithRelationInputObjectSchema } from './objects/OrderOrderByWithRelationInput.schema';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderScalarFieldEnumSchema } from './enums/OrderScalarFieldEnum.schema';

export const OrderFindFirstSchema = z.object({
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
  distinct: z.array(OrderScalarFieldEnumSchema).optional(),
});
