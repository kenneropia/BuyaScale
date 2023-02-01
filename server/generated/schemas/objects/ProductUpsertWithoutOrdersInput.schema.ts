import { z } from 'zod';
import { ProductUpdateWithoutOrdersInputObjectSchema } from './ProductUpdateWithoutOrdersInput.schema';
import { ProductUncheckedUpdateWithoutOrdersInputObjectSchema } from './ProductUncheckedUpdateWithoutOrdersInput.schema';
import { ProductCreateWithoutOrdersInputObjectSchema } from './ProductCreateWithoutOrdersInput.schema';
import { ProductUncheckedCreateWithoutOrdersInputObjectSchema } from './ProductUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutOrdersInputObjectSchema = Schema;
