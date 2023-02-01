import { z } from 'zod';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';
import { CartUpdateManyMutationInputObjectSchema } from './CartUpdateManyMutationInput.schema';
import { CartUncheckedUpdateManyWithoutCartInputObjectSchema } from './CartUncheckedUpdateManyWithoutCartInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateManyWithWhereWithoutProductInput> = z
  .object({
    where: z.lazy(() => CartScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateManyMutationInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateManyWithoutCartInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateManyWithWhereWithoutProductInputObjectSchema = Schema;
