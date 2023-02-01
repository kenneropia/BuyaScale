import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutCreatorInputObjectSchema } from './CartUpdateWithoutCreatorInput.schema';
import { CartUncheckedUpdateWithoutCreatorInputObjectSchema } from './CartUncheckedUpdateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithWhereUniqueWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateWithoutCreatorInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateWithWhereUniqueWithoutCreatorInputObjectSchema = Schema;
