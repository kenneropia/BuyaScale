import { z } from 'zod';
import { VarientCreateWithoutOrdersInputObjectSchema } from './VarientCreateWithoutOrdersInput.schema';
import { VarientUncheckedCreateWithoutOrdersInputObjectSchema } from './VarientUncheckedCreateWithoutOrdersInput.schema';
import { VarientCreateOrConnectWithoutOrdersInputObjectSchema } from './VarientCreateOrConnectWithoutOrdersInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientCreateNestedOneWithoutOrdersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VarientCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => VarientUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => VarientCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => VarientWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const VarientCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
