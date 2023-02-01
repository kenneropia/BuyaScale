import { z } from 'zod';
import { CartOrderByWithRelationInputObjectSchema } from './objects/CartOrderByWithRelationInput.schema';
import { CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';
import { CartScalarFieldEnumSchema } from './enums/CartScalarFieldEnum.schema';

export const CartFindFirstSchema = z.object({
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
  distinct: z.array(CartScalarFieldEnumSchema).optional(),
});
