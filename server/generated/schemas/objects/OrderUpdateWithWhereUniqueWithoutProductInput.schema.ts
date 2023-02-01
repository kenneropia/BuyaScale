import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutProductInputObjectSchema } from './OrderUpdateWithoutProductInput.schema';
import { OrderUncheckedUpdateWithoutProductInputObjectSchema } from './OrderUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderUpdateWithoutProductInputObjectSchema),
        z.lazy(() => OrderUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const OrderUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema;
