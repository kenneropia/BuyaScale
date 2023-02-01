import { z } from 'zod';
import { CartCreateWithoutVarientInputObjectSchema } from './CartCreateWithoutVarientInput.schema';
import { CartUncheckedCreateWithoutVarientInputObjectSchema } from './CartUncheckedCreateWithoutVarientInput.schema';
import { CartCreateOrConnectWithoutVarientInputObjectSchema } from './CartCreateOrConnectWithoutVarientInput.schema';
import { CartUpsertWithWhereUniqueWithoutVarientInputObjectSchema } from './CartUpsertWithWhereUniqueWithoutVarientInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithWhereUniqueWithoutVarientInputObjectSchema } from './CartUpdateWithWhereUniqueWithoutVarientInput.schema';
import { CartUpdateManyWithWhereWithoutVarientInputObjectSchema } from './CartUpdateManyWithWhereWithoutVarientInput.schema';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateManyWithoutVarientNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartCreateWithoutVarientInputObjectSchema),
          z.lazy(() => CartCreateWithoutVarientInputObjectSchema).array(),
          z.lazy(() => CartUncheckedCreateWithoutVarientInputObjectSchema),
          z
            .lazy(() => CartUncheckedCreateWithoutVarientInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CartCreateOrConnectWithoutVarientInputObjectSchema),
          z
            .lazy(() => CartCreateOrConnectWithoutVarientInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CartUpsertWithWhereUniqueWithoutVarientInputObjectSchema,
          ),
          z
            .lazy(
              () => CartUpsertWithWhereUniqueWithoutVarientInputObjectSchema,
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
            () => CartUpdateWithWhereUniqueWithoutVarientInputObjectSchema,
          ),
          z
            .lazy(
              () => CartUpdateWithWhereUniqueWithoutVarientInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CartUpdateManyWithWhereWithoutVarientInputObjectSchema),
          z
            .lazy(() => CartUpdateManyWithWhereWithoutVarientInputObjectSchema)
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

export const CartUncheckedUpdateManyWithoutVarientNestedInputObjectSchema =
  Schema;
