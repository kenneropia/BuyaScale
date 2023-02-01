import { z } from 'zod';
import { ProductCreateInputObjectSchema } from './objects/ProductCreateInput.schema';
import { ProductUncheckedCreateInputObjectSchema } from './objects/ProductUncheckedCreateInput.schema';

export const ProductCreateOneSchema = z.object({
  data: z.union([
    ProductCreateInputObjectSchema,
    ProductUncheckedCreateInputObjectSchema,
  ]),
});
