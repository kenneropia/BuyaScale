import { z } from 'zod';
import { UserAddressCreateWithoutUserAddressInputObjectSchema } from './UserAddressCreateWithoutUserAddressInput.schema';
import { UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserAddressInput.schema';
import { UserAddressCreateOrConnectWithoutUserAddressInputObjectSchema } from './UserAddressCreateOrConnectWithoutUserAddressInput.schema';
import { UserAddressUpsertWithoutUserAddressInputObjectSchema } from './UserAddressUpsertWithoutUserAddressInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './UserAddressWhereUniqueInput.schema';
import { UserAddressUpdateWithoutUserAddressInputObjectSchema } from './UserAddressUpdateWithoutUserAddressInput.schema';
import { UserAddressUncheckedUpdateWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedUpdateWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressUncheckedUpdateOneWithoutUserAddressNestedInput> =
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
      upsert: z
        .lazy(() => UserAddressUpsertWithoutUserAddressInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserAddressWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserAddressUpdateWithoutUserAddressInputObjectSchema),
          z.lazy(
            () => UserAddressUncheckedUpdateWithoutUserAddressInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserAddressUncheckedUpdateOneWithoutUserAddressNestedInputObjectSchema =
  Schema;
