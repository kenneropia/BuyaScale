import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';

export const CartFindUniqueSchema = z.object({
  where: CartWhereUniqueInputObjectSchema,
});
