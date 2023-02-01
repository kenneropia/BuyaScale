import { z } from 'zod';
import { OrderCreateWithoutCreatorInputObjectSchema } from './OrderCreateWithoutCreatorInput.schema';
import { OrderUncheckedCreateWithoutCreatorInputObjectSchema } from './OrderUncheckedCreateWithoutCreatorInput.schema';
import { OrderCreateOrConnectWithoutCreatorInputObjectSchema } from './OrderCreateOrConnectWithoutCreatorInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateNestedManyWithoutCreatorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OrderCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => OrderCreateWithoutCreatorInputObjectSchema).array(),
        z.lazy(() => OrderUncheckedCreateWithoutCreatorInputObjectSchema),
        z
          .lazy(() => OrderUncheckedCreateWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OrderCreateOrConnectWithoutCreatorInputObjectSchema),
        z
          .lazy(() => OrderCreateOrConnectWithoutCreatorInputObjectSchema)
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

export const OrderCreateNestedManyWithoutCreatorInputObjectSchema = Schema;
