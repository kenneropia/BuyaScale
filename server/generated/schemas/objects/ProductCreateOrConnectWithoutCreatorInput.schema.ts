import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutCreatorInputObjectSchema } from './ProductCreateWithoutCreatorInput.schema';
import { ProductUncheckedCreateWithoutCreatorInputObjectSchema } from './ProductUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCreatorInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutCreatorInputObjectSchema = Schema;
