import { z } from 'zod';
import { CartCreateInputObjectSchema } from './objects/CartCreateInput.schema';
import { CartUncheckedCreateInputObjectSchema } from './objects/CartUncheckedCreateInput.schema';

export const CartCreateOneSchema = z.object({
  data: z.union([
    CartCreateInputObjectSchema,
    CartUncheckedCreateInputObjectSchema,
  ]),
});
