import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutOrdersInputObjectSchema } from './ProductCreateWithoutOrdersInput.schema';
import { ProductUncheckedCreateWithoutOrdersInputObjectSchema } from './ProductUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
