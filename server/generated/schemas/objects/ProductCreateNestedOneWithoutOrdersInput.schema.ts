import { z } from 'zod';
import { ProductCreateWithoutOrdersInputObjectSchema } from './ProductCreateWithoutOrdersInput.schema';
import { ProductUncheckedCreateWithoutOrdersInputObjectSchema } from './ProductUncheckedCreateWithoutOrdersInput.schema';
import { ProductCreateOrConnectWithoutOrdersInputObjectSchema } from './ProductCreateOrConnectWithoutOrdersInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutOrdersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
