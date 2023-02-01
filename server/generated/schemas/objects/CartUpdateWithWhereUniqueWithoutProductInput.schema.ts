import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutProductInputObjectSchema } from './CartUpdateWithoutProductInput.schema';
import { CartUncheckedUpdateWithoutProductInputObjectSchema } from './CartUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithWhereUniqueWithoutProductInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateWithoutProductInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema;
