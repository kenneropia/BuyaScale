import { z } from 'zod';
import { UserUpdateWithoutCartItemsInputObjectSchema } from './UserUpdateWithoutCartItemsInput.schema';
import { UserUncheckedUpdateWithoutCartItemsInputObjectSchema } from './UserUncheckedUpdateWithoutCartItemsInput.schema';
import { UserCreateWithoutCartItemsInputObjectSchema } from './UserCreateWithoutCartItemsInput.schema';
import { UserUncheckedCreateWithoutCartItemsInputObjectSchema } from './UserUncheckedCreateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutCartItemsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCartItemsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCartItemsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCartItemsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCartItemsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCartItemsInputObjectSchema = Schema;
