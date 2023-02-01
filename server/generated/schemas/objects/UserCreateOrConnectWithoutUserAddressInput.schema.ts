import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserAddressInputObjectSchema } from './UserCreateWithoutUserAddressInput.schema';
import { UserUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserAddressInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutUserAddressInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutUserAddressInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutUserAddressInputObjectSchema = Schema;
