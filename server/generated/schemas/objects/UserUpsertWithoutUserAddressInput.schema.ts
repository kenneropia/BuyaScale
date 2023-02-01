import { z } from 'zod';
import { UserUpdateWithoutUserAddressInputObjectSchema } from './UserUpdateWithoutUserAddressInput.schema';
import { UserUncheckedUpdateWithoutUserAddressInputObjectSchema } from './UserUncheckedUpdateWithoutUserAddressInput.schema';
import { UserCreateWithoutUserAddressInputObjectSchema } from './UserCreateWithoutUserAddressInput.schema';
import { UserUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutUserAddressInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutUserAddressInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutUserAddressInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutUserAddressInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutUserAddressInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutUserAddressInputObjectSchema = Schema;
