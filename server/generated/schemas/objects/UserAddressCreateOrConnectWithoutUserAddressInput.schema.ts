import { z } from 'zod';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressCreateWithoutUserAddressInputObjectSchema } from './UserAddressCreateWithoutUserAddressInput.schema';
import { UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressCreateOrConnectWithoutUserAddressInput> =
  z
    .object({
      where: z.lazy(() => UserAddressWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserAddressCreateWithoutUserAddressInputObjectSchema),
        z.lazy(
          () => UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserAddressCreateOrConnectWithoutUserAddressInputObjectSchema =
  Schema;
