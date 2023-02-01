import { z } from 'zod';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithoutCreatorInputObjectSchema } from './CartUpdateWithoutCreatorInput.schema';
import { CartUncheckedUpdateWithoutCreatorInputObjectSchema } from './CartUncheckedUpdateWithoutCreatorInput.schema';
import { CartCreateWithoutCreatorInputObjectSchema } from './CartCreateWithoutCreatorInput.schema';
import { CartUncheckedCreateWithoutCreatorInputObjectSchema } from './CartUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpsertWithWhereUniqueWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => CartWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CartUpdateWithoutCreatorInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateWithoutCreatorInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CartCreateWithoutCreatorInputObjectSchema),
      z.lazy(() => CartUncheckedCreateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpsertWithWhereUniqueWithoutCreatorInputObjectSchema = Schema;
