import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutProductInputObjectSchema } from './OrderUpdateWithoutProductInput.schema';
import { OrderUncheckedUpdateWithoutProductInputObjectSchema } from './OrderUncheckedUpdateWithoutProductInput.schema';
import { OrderCreateWithoutProductInputObjectSchema } from './OrderCreateWithoutProductInput.schema';
import { OrderUncheckedCreateWithoutProductInputObjectSchema } from './OrderUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderUpdateWithoutProductInputObjectSchema),
        z.lazy(() => OrderUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => OrderCreateWithoutProductInputObjectSchema),
        z.lazy(() => OrderUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const OrderUpsertWithWhereUniqueWithoutProductInputObjectSchema = Schema;
