import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutVarientInputObjectSchema } from './CartUpdateWithoutVarientInput.schema';
import { CartUncheckedUpdateWithoutVarientInputObjectSchema } from './CartUncheckedUpdateWithoutVarientInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithWhereUniqueWithoutVarientInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateWithoutVarientInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutVarientInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateWithWhereUniqueWithoutVarientInputObjectSchema = Schema;
