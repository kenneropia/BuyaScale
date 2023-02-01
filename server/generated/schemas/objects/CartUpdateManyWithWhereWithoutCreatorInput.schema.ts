import { z } from 'zod';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';
import { CartUpdateManyMutationInputObjectSchema } from './CartUpdateManyMutationInput.schema';
import { CartUncheckedUpdateManyWithoutCartItemsInputObjectSchema } from './CartUncheckedUpdateManyWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateManyWithWhereWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => CartScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CartUpdateManyMutationInputObjectSchema),
      z.lazy(() => CartUncheckedUpdateManyWithoutCartItemsInputObjectSchema),
    ]),
  })
  .strict();

export const CartUpdateManyWithWhereWithoutCreatorInputObjectSchema = Schema;
