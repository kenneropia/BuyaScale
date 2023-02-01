import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutVarientInputObjectSchema } from './OrderUpdateWithoutVarientInput.schema';
import { OrderUncheckedUpdateWithoutVarientInputObjectSchema } from './OrderUncheckedUpdateWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutVarientInput> =
  z
    .object({
      where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderUpdateWithoutVarientInputObjectSchema),
        z.lazy(() => OrderUncheckedUpdateWithoutVarientInputObjectSchema),
      ]),
    })
    .strict();

export const OrderUpdateWithWhereUniqueWithoutVarientInputObjectSchema = Schema;
