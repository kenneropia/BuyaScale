import { z } from 'zod';
import { ProductCreateWithoutVarientsInputObjectSchema } from './ProductCreateWithoutVarientsInput.schema';
import { ProductUncheckedCreateWithoutVarientsInputObjectSchema } from './ProductUncheckedCreateWithoutVarientsInput.schema';
import { ProductCreateOrConnectWithoutVarientsInputObjectSchema } from './ProductCreateOrConnectWithoutVarientsInput.schema';
import { ProductUpsertWithoutVarientsInputObjectSchema } from './ProductUpsertWithoutVarientsInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutVarientsInputObjectSchema } from './ProductUpdateWithoutVarientsInput.schema';
import { ProductUncheckedUpdateWithoutVarientsInputObjectSchema } from './ProductUncheckedUpdateWithoutVarientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutVarientsNestedInput> = z
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
    upsert: z
      .lazy(() => ProductUpsertWithoutVarientsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutVarientsInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutVarientsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutVarientsNestedInputObjectSchema = Schema;
