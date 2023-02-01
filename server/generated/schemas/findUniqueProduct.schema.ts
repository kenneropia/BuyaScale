import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './objects/ProductWhereUniqueInput.schema';

export const ProductFindUniqueSchema = z.object({
  where: ProductWhereUniqueInputObjectSchema,
});
