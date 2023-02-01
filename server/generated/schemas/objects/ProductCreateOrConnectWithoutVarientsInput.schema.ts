import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutVarientsInputObjectSchema } from './ProductCreateWithoutVarientsInput.schema';
import { ProductUncheckedCreateWithoutVarientsInputObjectSchema } from './ProductUncheckedCreateWithoutVarientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutVarientsInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutVarientsInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutVarientsInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutVarientsInputObjectSchema = Schema;
