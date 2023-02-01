import { z } from 'zod';
import { UserCreateWithoutCartItemsInputObjectSchema } from './UserCreateWithoutCartItemsInput.schema';
import { UserUncheckedCreateWithoutCartItemsInputObjectSchema } from './UserUncheckedCreateWithoutCartItemsInput.schema';
import { UserCreateOrConnectWithoutCartItemsInputObjectSchema } from './UserCreateOrConnectWithoutCartItemsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCartItemsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutCartItemsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutCartItemsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutCartItemsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutCartItemsInputObjectSchema = Schema;
