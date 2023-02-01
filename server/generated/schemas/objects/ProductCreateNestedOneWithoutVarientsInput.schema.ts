import { z } from 'zod';
import { ProductCreateWithoutVarientsInputObjectSchema } from './ProductCreateWithoutVarientsInput.schema';
import { ProductUncheckedCreateWithoutVarientsInputObjectSchema } from './ProductUncheckedCreateWithoutVarientsInput.schema';
import { ProductCreateOrConnectWithoutVarientsInputObjectSchema } from './ProductCreateOrConnectWithoutVarientsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutVarientsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutVarientsInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutVarientsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutVarientsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutVarientsInputObjectSchema = Schema;
