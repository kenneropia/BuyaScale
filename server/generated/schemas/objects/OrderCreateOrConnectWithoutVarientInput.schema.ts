import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutVarientInputObjectSchema } from './OrderCreateWithoutVarientInput.schema';
import { OrderUncheckedCreateWithoutVarientInputObjectSchema } from './OrderUncheckedCreateWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateOrConnectWithoutVarientInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderCreateWithoutVarientInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutVarientInputObjectSchema),
    ]),
  })
  .strict();

export const OrderCreateOrConnectWithoutVarientInputObjectSchema = Schema;
