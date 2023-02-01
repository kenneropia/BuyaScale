import { z } from 'zod';
import { ProductCreateNestedOneWithoutVarientsInputObjectSchema } from './ProductCreateNestedOneWithoutVarientsInput.schema';
import { OrderCreateNestedManyWithoutVarientInputObjectSchema } from './OrderCreateNestedManyWithoutVarientInput.schema';
import { CartCreateNestedManyWithoutVarientInputObjectSchema } from './CartCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutVarientsInputObjectSchema)
      .optional(),
    previewImage: z.string().optional().nullable(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientCreateInputObjectSchema = Schema;
