import { z } from 'zod';
import { ProductUpdateInputObjectSchema } from './objects/ProductUpdateInput.schema';
import { ProductUncheckedUpdateInputObjectSchema } from './objects/ProductUncheckedUpdateInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';

export const ProductUpdateOneSchema = z.object({
  data: z.union([
    ProductUpdateInputObjectSchema,
    ProductUncheckedUpdateInputObjectSchema,
  ]),
  where: ProductWhereUniqueInputObjectSchema,
});
