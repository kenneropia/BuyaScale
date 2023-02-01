import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutVarientInputObjectSchema } from './OrderUpdateWithoutVarientInput.schema';
import { OrderUncheckedUpdateWithoutVarientInputObjectSchema } from './OrderUncheckedUpdateWithoutVarientInput.schema';
import { OrderCreateWithoutVarientInputObjectSchema } from './OrderCreateWithoutVarientInput.schema';
import { OrderUncheckedCreateWithoutVarientInputObjectSchema } from './OrderUncheckedCreateWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutVarientInput> =
  z
    .object({
      where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderUpdateWithoutVarientInputObjectSchema),
        z.lazy(() => OrderUncheckedUpdateWithoutVarientInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => OrderCreateWithoutVarientInputObjectSchema),
        z.lazy(() => OrderUncheckedCreateWithoutVarientInputObjectSchema),
      ]),
    })
    .strict();

export const OrderUpsertWithWhereUniqueWithoutVarientInputObjectSchema = Schema;
