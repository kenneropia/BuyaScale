import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientCreateWithoutOrdersInputObjectSchema } from './VarientCreateWithoutOrdersInput.schema';
import { VarientUncheckedCreateWithoutOrdersInputObjectSchema } from './VarientUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => VarientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VarientCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => VarientUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const VarientCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
