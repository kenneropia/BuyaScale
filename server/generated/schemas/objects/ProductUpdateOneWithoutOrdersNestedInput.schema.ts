import { z } from 'zod';
import { ProductCreateWithoutOrdersInputObjectSchema } from './ProductCreateWithoutOrdersInput.schema';
import { ProductUncheckedCreateWithoutOrdersInputObjectSchema } from './ProductUncheckedCreateWithoutOrdersInput.schema';
import { ProductCreateOrConnectWithoutOrdersInputObjectSchema } from './ProductCreateOrConnectWithoutOrdersInput.schema';
import { ProductUpsertWithoutOrdersInputObjectSchema } from './ProductUpsertWithoutOrdersInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutOrdersInputObjectSchema } from './ProductUpdateWithoutOrdersInput.schema';
import { ProductUncheckedUpdateWithoutOrdersInputObjectSchema } from './ProductUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneWithoutOrdersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => ProductUpsertWithoutOrdersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateOneWithoutOrdersNestedInputObjectSchema = Schema;
