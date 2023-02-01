import { z } from 'zod';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';
import { UserCreateOrConnectWithoutOrdersInputObjectSchema } from './UserCreateOrConnectWithoutOrdersInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrdersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutOrdersInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutOrdersInputObjectSchema = Schema;
