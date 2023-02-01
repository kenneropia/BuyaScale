import { z } from 'zod';
import { VarientCreateWithoutOrdersInputObjectSchema } from './VarientCreateWithoutOrdersInput.schema';
import { VarientUncheckedCreateWithoutOrdersInputObjectSchema } from './VarientUncheckedCreateWithoutOrdersInput.schema';
import { VarientCreateOrConnectWithoutOrdersInputObjectSchema } from './VarientCreateOrConnectWithoutOrdersInput.schema';
import { VarientUpsertWithoutOrdersInputObjectSchema } from './VarientUpsertWithoutOrdersInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './VarientWhereUniqueInput.schema';
import { VarientUpdateWithoutOrdersInputObjectSchema } from './VarientUpdateWithoutOrdersInput.schema';
import { VarientUncheckedUpdateWithoutOrdersInputObjectSchema } from './VarientUncheckedUpdateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpdateOneWithoutOrdersNestedInput> = z
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
    upsert: z
      .lazy(() => VarientUpsertWithoutOrdersInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VarientWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VarientUpdateWithoutOrdersInputObjectSchema),
        z.lazy(() => VarientUncheckedUpdateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const VarientUpdateOneWithoutOrdersNestedInputObjectSchema = Schema;
