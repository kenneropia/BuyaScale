import { z } from 'zod';
import { ProductCreateWithoutCreatorInputObjectSchema } from './ProductCreateWithoutCreatorInput.schema';
import { ProductUncheckedCreateWithoutCreatorInputObjectSchema } from './ProductUncheckedCreateWithoutCreatorInput.schema';
import { ProductCreateOrConnectWithoutCreatorInputObjectSchema } from './ProductCreateOrConnectWithoutCreatorInput.schema';
import { ProductUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { ProductUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './ProductUpdateManyWithWhereWithoutCreatorInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithoutCreatorNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProductUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ProductUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => ProductUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductUpdateManyWithWhereWithoutCreatorInputObjectSchema),
        z
          .lazy(() => ProductUpdateManyWithWhereWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateManyWithoutCreatorNestedInputObjectSchema = Schema;
