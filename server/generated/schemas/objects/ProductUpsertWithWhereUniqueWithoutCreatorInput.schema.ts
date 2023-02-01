import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCreatorInputObjectSchema } from './ProductUpdateWithoutCreatorInput.schema';
import { ProductUncheckedUpdateWithoutCreatorInputObjectSchema } from './ProductUncheckedUpdateWithoutCreatorInput.schema';
import { ProductCreateWithoutCreatorInputObjectSchema } from './ProductCreateWithoutCreatorInput.schema';
import { ProductUncheckedCreateWithoutCreatorInputObjectSchema } from './ProductUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutCreatorInputObjectSchema =
  Schema;
