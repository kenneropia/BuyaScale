import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutProductInputObjectSchema } from './OrderCreateWithoutProductInput.schema';
import { OrderUncheckedCreateWithoutProductInputObjectSchema } from './OrderUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderCreateWithoutProductInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const OrderCreateOrConnectWithoutProductInputObjectSchema = Schema;
