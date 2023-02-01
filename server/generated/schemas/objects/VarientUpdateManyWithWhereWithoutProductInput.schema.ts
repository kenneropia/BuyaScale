import { z } from 'zod';
import { VarientScalarWhereInputObjectSchema } from './VarientScalarWhereInput.schema';
import { VarientUpdateManyMutationInputObjectSchema } from './VarientUpdateManyMutationInput.schema';
import { VarientUncheckedUpdateManyWithoutVarientsInputObjectSchema } from './VarientUncheckedUpdateManyWithoutVarientsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => VarientScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VarientUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => VarientUncheckedUpdateManyWithoutVarientsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VarientUpdateManyWithWhereWithoutProductInputObjectSchema = Schema;
