import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutVarientInputObjectSchema } from './CartUpdateWithoutVarientInput.schema';
import { CartUncheckedUpdateWithoutVarientInputObjectSchema } from './CartUncheckedUpdateWithoutVarientInput.schema';
import { CartCreateWithoutVarientInputObjectSchema } from './CartCreateWithoutVarientInput.schema';
import { CartUncheckedCreateWithoutVarientInputObjectSchema } from './CartUncheckedCreateWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithWhereUniqueWithoutVarientInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CartUpdateWithoutVarientInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutVarientInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutVarientInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutVarientInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithWhereUniqueWithoutVarientInputObjectSchema = Schema;
