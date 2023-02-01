import { z } from 'zod';
import { UserCreateWithoutCartItemsInputObjectSchema } from './UserCreateWithoutCartItemsInput.schema';
import { UserUncheckedCreateWithoutCartItemsInputObjectSchema } from './UserUncheckedCreateWithoutCartItemsInput.schema';
import { UserCreateOrConnectWithoutCartItemsInputObjectSchema } from './UserCreateOrConnectWithoutCartItemsInput.schema';
import { UserUpsertWithoutCartItemsInputObjectSchema } from './UserUpsertWithoutCartItemsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCartItemsInputObjectSchema } from './UserUpdateWithoutCartItemsInput.schema';
import { UserUncheckedUpdateWithoutCartItemsInputObjectSchema } from './UserUncheckedUpdateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutCartItemsNestedInput> = z
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
    upsert: z
      .lazy(() => UserUpsertWithoutCartItemsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutCartItemsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCartItemsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutCartItemsNestedInputObjectSchema = Schema;
