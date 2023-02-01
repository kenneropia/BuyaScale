import { z } from 'zod';
import { OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';
import { OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyWithoutOrdersInputObjectSchema } from './OrderUncheckedUpdateManyWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateManyWithWhereWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => OrderScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => OrderUpdateManyMutationInputObjectSchema),
      z.lazy(() => OrderUncheckedUpdateManyWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const OrderUpdateManyWithWhereWithoutCreatorInputObjectSchema = Schema;
