import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';
import { CartCreateInputObjectSchema } from './objects/CartCreateInput.schema';
import { CartUncheckedCreateInputObjectSchema } from './objects/CartUncheckedCreateInput.schema';
import { CartUpdateInputObjectSchema } from './objects/CartUpdateInput.schema';
import { CartUncheckedUpdateInputObjectSchema } from './objects/CartUncheckedUpdateInput.schema';

export const CartUpsertSchema = z.object({
  where: CartWhereUniqueInputObjectSchema,
  create: z.union([
    CartCreateInputObjectSchema,
    CartUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    CartUpdateInputObjectSchema,
    CartUncheckedUpdateInputObjectSchema,
  ]),
});
