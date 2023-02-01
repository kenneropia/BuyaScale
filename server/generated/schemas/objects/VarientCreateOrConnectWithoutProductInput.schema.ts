import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientCreateWithoutProductInputObjectSchema } from './VarientCreateWithoutProductInput.schema';
import { VarientUncheckedCreateWithoutProductInputObjectSchema } from './VarientUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => VarientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VarientCreateWithoutProductInputObjectSchema),
      z.lazy(() => VarientUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const VarientCreateOrConnectWithoutProductInputObjectSchema = Schema;
