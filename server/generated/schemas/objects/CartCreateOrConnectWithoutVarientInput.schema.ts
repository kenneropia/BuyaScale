import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutVarientInputObjectSchema } from './CartCreateWithoutVarientInput.schema';
import { CartUncheckedCreateWithoutVarientInputObjectSchema } from './CartUncheckedCreateWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutVarientInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutVarientInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutVarientInputObjectSchema),
    ]),
  })
  .strict();

export const CartCreateOrConnectWithoutVarientInputObjectSchema = Schema;
