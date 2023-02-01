import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutCreatorInputObjectSchema } from './OrderUpdateWithoutCreatorInput.schema';
import { OrderUncheckedUpdateWithoutCreatorInputObjectSchema } from './OrderUncheckedUpdateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => OrderUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const OrderUpdateWithWhereUniqueWithoutCreatorInputObjectSchema = Schema;
