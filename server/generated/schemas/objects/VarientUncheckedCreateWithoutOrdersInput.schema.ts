import { z } from 'zod';
import { CartUncheckedCreateNestedManyWithoutVarientInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedCreateWithoutOrdersInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    productId: z.string().optional().nullable(),
    previewImage: z.string().optional().nullable(),
    carts: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutVarientInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientUncheckedCreateWithoutOrdersInputObjectSchema = Schema;
