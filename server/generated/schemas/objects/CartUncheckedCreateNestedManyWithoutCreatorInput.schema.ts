import { z } from 'zod';
import { CartCreateWithoutCreatorInputObjectSchema } from './CartCreateWithoutCreatorInput.schema';
import { CartUncheckedCreateWithoutCreatorInputObjectSchema } from './CartUncheckedCreateWithoutCreatorInput.schema';
import { CartCreateOrConnectWithoutCreatorInputObjectSchema } from './CartCreateOrConnectWithoutCreatorInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateNestedManyWithoutCreatorInput> =
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
      connect: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CartUncheckedCreateNestedManyWithoutCreatorInputObjectSchema =
  Schema;
