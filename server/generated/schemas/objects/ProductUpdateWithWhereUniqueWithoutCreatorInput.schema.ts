import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCreatorInputObjectSchema } from './ProductUpdateWithoutCreatorInput.schema';
import { ProductUncheckedUpdateWithoutCreatorInputObjectSchema } from './ProductUncheckedUpdateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutCreatorInputObjectSchema =
  Schema;
