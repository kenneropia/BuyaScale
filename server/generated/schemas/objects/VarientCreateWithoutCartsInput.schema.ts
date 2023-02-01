import { z } from 'zod';
import { ProductCreateNestedOneWithoutVarientsInputObjectSchema } from './ProductCreateNestedOneWithoutVarientsInput.schema';
import { OrderCreateNestedManyWithoutVarientInputObjectSchema } from './OrderCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateWithoutCartsInput> = z
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
  })
  .strict();

export const VarientCreateWithoutCartsInputObjectSchema = Schema;
