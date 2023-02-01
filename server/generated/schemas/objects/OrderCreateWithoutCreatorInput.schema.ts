import { z } from 'zod';
import { ProductCreateNestedOneWithoutOrdersInputObjectSchema } from './ProductCreateNestedOneWithoutOrdersInput.schema';
import { VarientCreateNestedOneWithoutOrdersInputObjectSchema } from './VarientCreateNestedOneWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderCreateWithoutCreatorInput> = z
  .object({
    id: z.string().optional(),
    quality: z.number().optional(),
    price: z.number(),
    product: z
      .lazy(() => ProductCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
    varient: z
      .lazy(() => VarientCreateNestedOneWithoutOrdersInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderCreateWithoutCreatorInputObjectSchema = Schema;
