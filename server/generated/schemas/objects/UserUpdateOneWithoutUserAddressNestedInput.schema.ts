import { z } from 'zod';
import { UserCreateWithoutUserAddressInputObjectSchema } from './UserCreateWithoutUserAddressInput.schema';
import { UserUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressInput.schema';
import { UserCreateOrConnectWithoutUserAddressInputObjectSchema } from './UserCreateOrConnectWithoutUserAddressInput.schema';
import { UserUpsertWithoutUserAddressInputObjectSchema } from './UserUpsertWithoutUserAddressInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUserAddressInputObjectSchema } from './UserUpdateWithoutUserAddressInput.schema';
import { UserUncheckedUpdateWithoutUserAddressInputObjectSchema } from './UserUncheckedUpdateWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutUserAddressNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutUserAddressInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserAddressInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutUserAddressInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => UserUpsertWithoutUserAddressInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutUserAddressInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutUserAddressInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutUserAddressNestedInputObjectSchema = Schema;
