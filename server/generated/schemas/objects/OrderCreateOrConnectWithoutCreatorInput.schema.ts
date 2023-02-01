import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderCreateWithoutCreatorInputObjectSchema } from './OrderCreateWithoutCreatorInput.schema';
import { OrderUncheckedCreateWithoutCreatorInputObjectSchema } from './OrderUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateOrConnectWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => OrderCreateWithoutCreatorInputObjectSchema),
      z.lazy(() => OrderUncheckedCreateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const OrderCreateOrConnectWithoutCreatorInputObjectSchema = Schema;
