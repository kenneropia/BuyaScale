import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutProductInputObjectSchema } from './CartCreateWithoutProductInput.schema';
import { CartUncheckedCreateWithoutProductInputObjectSchema } from './CartUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutProductInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const CartCreateOrConnectWithoutProductInputObjectSchema = Schema;
