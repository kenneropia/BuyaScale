import { z } from 'zod';
import { ProductCreateWithoutCartInputObjectSchema } from './ProductCreateWithoutCartInput.schema';
import { ProductUncheckedCreateWithoutCartInputObjectSchema } from './ProductUncheckedCreateWithoutCartInput.schema';
import { ProductCreateOrConnectWithoutCartInputObjectSchema } from './ProductCreateOrConnectWithoutCartInput.schema';
import { ProductUpsertWithoutCartInputObjectSchema } from './ProductUpsertWithoutCartInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCartInputObjectSchema } from './ProductUpdateWithoutCartInput.schema';
import { ProductUncheckedUpdateWithoutCartInputObjectSchema } from './ProductUncheckedUpdateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutCartNestedInput> = z
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
    upsert: z.lazy(() => ProductUpsertWithoutCartInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutCartInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutCartInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutCartNestedInputObjectSchema = Schema;
