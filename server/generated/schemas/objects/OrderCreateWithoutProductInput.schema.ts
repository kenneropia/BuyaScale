import { z } from 'zod';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { VarientCreateNestedOneWithoutOrdersInputObjectSchema } from './VarientCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    quality: z.number().optional(),
    price: z.number(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
    varient: z
      .lazy(() => VarientCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderCreateWithoutProductInputObjectSchema = Schema;
