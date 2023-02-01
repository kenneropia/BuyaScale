import { z } from 'zod';
import { VarientUpdateWithoutOrdersInputObjectSchema } from './VarientUpdateWithoutOrdersInput.schema';
import { VarientUncheckedUpdateWithoutOrdersInputObjectSchema } from './VarientUncheckedUpdateWithoutOrdersInput.schema';
import { VarientCreateWithoutOrdersInputObjectSchema } from './VarientCreateWithoutOrdersInput.schema';
import { VarientUncheckedCreateWithoutOrdersInputObjectSchema } from './VarientUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => VarientUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => VarientUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VarientCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => VarientUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const VarientUpsertWithoutOrdersInputObjectSchema = Schema;
