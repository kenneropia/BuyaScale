import { z } from 'zod';
import { ProductCreateWithoutCreatorInputObjectSchema } from './ProductCreateWithoutCreatorInput.schema';
import { ProductUncheckedCreateWithoutCreatorInputObjectSchema } from './ProductUncheckedCreateWithoutCreatorInput.schema';
import { ProductCreateOrConnectWithoutCreatorInputObjectSchema } from './ProductCreateOrConnectWithoutCreatorInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutCreatorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => ProductCreateWithoutCreatorInputObjectSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutCreatorInputObjectSchema),
        z
          .lazy(() => ProductUncheckedCreateWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutCreatorInputObjectSchema),
        z
          .lazy(() => ProductCreateOrConnectWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductCreateNestedManyWithoutCreatorInputObjectSchema = Schema;
