import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';

export const ProductDeleteOneSchema = z.object({
  where: ProductWhereUniqueInputObjectSchema,
});
