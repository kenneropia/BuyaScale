import { z } from 'zod';
import { CartCreateWithoutCreatorInputObjectSchema } from './CartCreateWithoutCreatorInput.schema';
import { CartUncheckedCreateWithoutCreatorInputObjectSchema } from './CartUncheckedCreateWithoutCreatorInput.schema';
import { CartCreateOrConnectWithoutCreatorInputObjectSchema } from './CartCreateOrConnectWithoutCreatorInput.schema';
import { CartUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './CartUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './CartUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { CartUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './CartUpdateManyWithWhereWithoutCreatorInput.schema';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateManyWithoutCreatorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartCreateWithoutCreatorInputObjectSchema),
          z.lazy(() => CartCreateWithoutCreatorInputObjectSchema).array(),
          z.lazy(() => CartUncheckedCreateWithoutCreatorInputObjectSchema),
          z
            .lazy(() => CartUncheckedCreateWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CartCreateOrConnectWithoutCreatorInputObjectSchema),
          z
            .lazy(() => CartCreateOrConnectWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CartUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
          ),
          z
            .lazy(
              () => CartUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CartUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
          ),
          z
            .lazy(
              () => CartUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CartUpdateManyWithWhereWithoutCreatorInputObjectSchema),
          z
            .lazy(() => CartUpdateManyWithWhereWithoutCreatorInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CartScalarWhereInputObjectSchema),
          z.lazy(() => CartScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CartUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema =
  Schema;
