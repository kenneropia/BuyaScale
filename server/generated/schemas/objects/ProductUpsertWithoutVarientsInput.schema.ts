import { z } from 'zod';
import { ProductUpdateWithoutVarientsInputObjectSchema } from './ProductUpdateWithoutVarientsInput.schema';
import { ProductUncheckedUpdateWithoutVarientsInputObjectSchema } from './ProductUncheckedUpdateWithoutVarientsInput.schema';
import { ProductCreateWithoutVarientsInputObjectSchema } from './ProductCreateWithoutVarientsInput.schema';
import { ProductUncheckedCreateWithoutVarientsInputObjectSchema } from './ProductUncheckedCreateWithoutVarientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutVarientsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutVarientsInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutVarientsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutVarientsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutVarientsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutVarientsInputObjectSchema = Schema;
