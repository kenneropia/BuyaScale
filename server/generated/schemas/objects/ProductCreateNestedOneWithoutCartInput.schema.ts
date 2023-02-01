import { z } from 'zod';
import { ProductCreateWithoutCartInputObjectSchema } from './ProductCreateWithoutCartInput.schema';
import { ProductUncheckedCreateWithoutCartInputObjectSchema } from './ProductUncheckedCreateWithoutCartInput.schema';
import { ProductCreateOrConnectWithoutCartInputObjectSchema } from './ProductCreateOrConnectWithoutCartInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutCartInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutCartInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutCartInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutCartInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutCartInputObjectSchema = Schema;
