import { z } from 'zod';
import { CartCreateWithoutVarientInputObjectSchema } from './CartCreateWithoutVarientInput.schema';
import { CartUncheckedCreateWithoutVarientInputObjectSchema } from './CartUncheckedCreateWithoutVarientInput.schema';
import { CartCreateOrConnectWithoutVarientInputObjectSchema } from './CartCreateOrConnectWithoutVarientInput.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateNestedManyWithoutVarientInput> = z
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
    connect: z
      .union([
        z.lazy(() => CartWhereUniqueInputObjectSchema),
        z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CartCreateNestedManyWithoutVarientInputObjectSchema = Schema;
