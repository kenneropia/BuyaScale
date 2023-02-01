import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutCartInputObjectSchema } from './ProductCreateWithoutCartInput.schema';
import { ProductUncheckedCreateWithoutCartInputObjectSchema } from './ProductUncheckedCreateWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutCartInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutCartInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutCartInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutCartInputObjectSchema = Schema;
