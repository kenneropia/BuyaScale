import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutProductInputObjectSchema } from './CartUpdateWithoutProductInput.schema';
import { CartUncheckedUpdateWithoutProductInputObjectSchema } from './CartUncheckedUpdateWithoutProductInput.schema';
import { CartCreateWithoutProductInputObjectSchema } from './CartCreateWithoutProductInput.schema';
import { CartUncheckedCreateWithoutProductInputObjectSchema } from './CartUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithWhereUniqueWithoutProductInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CartUpdateWithoutProductInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutProductInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutProductInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithWhereUniqueWithoutProductInputObjectSchema = Schema;
