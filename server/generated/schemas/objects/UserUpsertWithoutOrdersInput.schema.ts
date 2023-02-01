import { z } from 'zod';
import { UserUpdateWithoutOrdersInputObjectSchema } from './UserUpdateWithoutOrdersInput.schema';
import { UserUncheckedUpdateWithoutOrdersInputObjectSchema } from './UserUncheckedUpdateWithoutOrdersInput.schema';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutOrdersInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOrdersInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOrdersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutOrdersInputObjectSchema = Schema;
