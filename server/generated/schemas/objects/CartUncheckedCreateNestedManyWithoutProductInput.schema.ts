import { z } from 'zod';
import { CartCreateWithoutProductInputObjectSchema } from './CartCreateWithoutProductInput.schema';
import { CartUncheckedCreateWithoutProductInputObjectSchema } from './CartUncheckedCreateWithoutProductInput.schema';
import { CartCreateOrConnectWithoutProductInputObjectSchema } from './CartCreateOrConnectWithoutProductInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateNestedManyWithoutProductInput> =
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
      connect: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CartUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
