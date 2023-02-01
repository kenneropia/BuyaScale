import { z } from 'zod';
import { UserCreateNestedOneWithoutOrdersInputObjectSchema } from './UserCreateNestedOneWithoutOrdersInput.schema';
import { ProductCreateNestedOneWithoutOrdersInputObjectSchema } from './ProductCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateWithoutVarientInput> = z
  .object({
    id: z.string().optional(),
    quality: z.number().optional(),
    price: z.number(),
    creator: z
      .lazy(() => UserCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderCreateWithoutVarientInputObjectSchema = Schema;
