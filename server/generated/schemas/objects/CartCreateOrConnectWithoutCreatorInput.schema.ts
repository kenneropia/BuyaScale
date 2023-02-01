import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutCreatorInputObjectSchema } from './CartCreateWithoutCreatorInput.schema';
import { CartUncheckedCreateWithoutCreatorInputObjectSchema } from './CartUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateOrConnectWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CartCreateWithoutCreatorInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const CartCreateOrConnectWithoutCreatorInputObjectSchema = Schema;
