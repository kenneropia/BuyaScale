import { z } from 'zod';
import { UserCreateWithoutUserAddressInputObjectSchema } from './UserCreateWithoutUserAddressInput.schema';
import { UserUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserUncheckedCreateWithoutUserAddressInput.schema';
import { UserCreateOrConnectWithoutUserAddressInputObjectSchema } from './UserCreateOrConnectWithoutUserAddressInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserAddressInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutUserAddressInputObjectSchema = Schema;
