import { z } from 'zod';
import { UserAddressCreateWithoutUserAddressInputObjectSchema } from './UserAddressCreateWithoutUserAddressInput.schema';
import { UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserAddressInput.schema';
import { UserAddressCreateOrConnectWithoutUserAddressInputObjectSchema } from './UserAddressCreateOrConnectWithoutUserAddressInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressCreateNestedOneWithoutUserAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserAddressCreateWithoutUserAddressInputObjectSchema),
          z.lazy(
            () => UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserAddressCreateOrConnectWithoutUserAddressInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserAddressWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserAddressCreateNestedOneWithoutUserAddressInputObjectSchema =
  Schema;
