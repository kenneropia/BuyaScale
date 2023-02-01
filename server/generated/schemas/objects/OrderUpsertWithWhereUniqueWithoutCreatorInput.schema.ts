import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutCreatorInputObjectSchema } from './OrderUpdateWithoutCreatorInput.schema';
import { OrderUncheckedUpdateWithoutCreatorInputObjectSchema } from './OrderUncheckedUpdateWithoutCreatorInput.schema';
import { OrderCreateWithoutCreatorInputObjectSchema } from './OrderCreateWithoutCreatorInput.schema';
import { OrderUncheckedCreateWithoutCreatorInputObjectSchema } from './OrderUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpsertWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => OrderUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => OrderCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => OrderUncheckedCreateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const OrderUpsertWithWhereUniqueWithoutCreatorInputObjectSchema = Schema;
