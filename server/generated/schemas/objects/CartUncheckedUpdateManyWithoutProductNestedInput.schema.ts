import { z } from 'zod';
import { CartCreateWithoutProductInputObjectSchema } from './CartCreateWithoutProductInput.schema';
import { CartUncheckedCreateWithoutProductInputObjectSchema } from './CartUncheckedCreateWithoutProductInput.schema';
import { CartCreateOrConnectWithoutProductInputObjectSchema } from './CartCreateOrConnectWithoutProductInput.schema';
import { CartUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './CartUpsertWithWhereUniqueWithoutProductInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './CartUpdateWithWhereUniqueWithoutProductInput.schema';
import { CartUpdateManyWithWhereWithoutProductInputObjectSchema } from './CartUpdateManyWithWhereWithoutProductInput.schema';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartCreateWithoutProductInputObjectSchema),
          z.lazy(() => CartCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => CartUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => CartUncheckedCreateWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CartCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => CartCreateOrConnectWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CartUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => CartUpsertWithWhereUniqueWithoutProductInputObjectSchema,
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
            () => CartUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () => CartUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CartUpdateManyWithWhereWithoutProductInputObjectSchema),
          z
            .lazy(() => CartUpdateManyWithWhereWithoutProductInputObjectSchema)
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

export const CartUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
