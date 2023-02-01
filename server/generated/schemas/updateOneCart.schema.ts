import { z } from 'zod';
import { CartUpdateInputObjectSchema } from './objects/CartUpdateInput.schema';
import { CartUncheckedUpdateInputObjectSchema } from './objects/CartUncheckedUpdateInput.schema';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';

export const CartUpdateOneSchema = z.object({
  data: z.union([
    CartUpdateInputObjectSchema,
    CartUncheckedUpdateInputObjectSchema,
  ]),
  where: CartWhereUniqueInputObjectSchema,
});
