import { z } from 'zod';
import { ProductUpdateWithoutCartInputObjectSchema } from './ProductUpdateWithoutCartInput.schema';
import { ProductUncheckedUpdateWithoutCartInputObjectSchema } from './ProductUncheckedUpdateWithoutCartInput.schema';
import { ProductCreateWithoutCartInputObjectSchema } from './ProductCreateWithoutCartInput.schema';
import { ProductUncheckedCreateWithoutCartInputObjectSchema } from './ProductUncheckedCreateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutCartInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutCartInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutCartInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCartInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutCartInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutCartInputObjectSchema = Schema;
