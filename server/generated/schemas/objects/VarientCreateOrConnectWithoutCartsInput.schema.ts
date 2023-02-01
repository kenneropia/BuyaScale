import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientCreateWithoutCartsInputObjectSchema } from './VarientCreateWithoutCartsInput.schema';
import { VarientUncheckedCreateWithoutCartsInputObjectSchema } from './VarientUncheckedCreateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateOrConnectWithoutCartsInput> = z
  .object({
    where: z.lazy(() => VarientWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VarientCreateWithoutCartsInputObjectSchema),
      z.lazy(() => VarientUncheckedCreateWithoutCartsInputObjectSchema),
    ]),
  })
  .strict();

export const VarientCreateOrConnectWithoutCartsInputObjectSchema = Schema;
