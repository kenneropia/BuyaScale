import { z } from 'zod';
import { OrderCreateWithoutProductInputObjectSchema } from './OrderCreateWithoutProductInput.schema';
import { OrderUncheckedCreateWithoutProductInputObjectSchema } from './OrderUncheckedCreateWithoutProductInput.schema';
import { OrderCreateOrConnectWithoutProductInputObjectSchema } from './OrderCreateOrConnectWithoutProductInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => OrderCreateWithoutProductInputObjectSchema),
          z.lazy(() => OrderCreateWithoutProductInputObjectSchema).array(),
          z.lazy(() => OrderUncheckedCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => OrderUncheckedCreateWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => OrderCreateOrConnectWithoutProductInputObjectSchema),
          z
            .lazy(() => OrderCreateOrConnectWithoutProductInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => OrderWhereUniqueInputObjectSchema),
          z.lazy(() => OrderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const OrderUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
