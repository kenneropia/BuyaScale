import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';

export const CartDeleteOneSchema = z.object({
  where: CartWhereUniqueInputObjectSchema,
});
