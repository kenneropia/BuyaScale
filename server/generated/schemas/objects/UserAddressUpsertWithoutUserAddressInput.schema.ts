import { z } from 'zod';
import { UserAddressUpdateWithoutUserAddressInputObjectSchema } from './UserAddressUpdateWithoutUserAddressInput.schema';
import { UserAddressUncheckedUpdateWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedUpdateWithoutUserAddressInput.schema';
import { UserAddressCreateWithoutUserAddressInputObjectSchema } from './UserAddressCreateWithoutUserAddressInput.schema';
import { UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateWithoutUserAddressInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAddressUpsertWithoutUserAddressInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserAddressUpdateWithoutUserAddressInputObjectSchema),
      z.lazy(
        () => UserAddressUncheckedUpdateWithoutUserAddressInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserAddressCreateWithoutUserAddressInputObjectSchema),
      z.lazy(
        () => UserAddressUncheckedCreateWithoutUserAddressInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserAddressUpsertWithoutUserAddressInputObjectSchema = Schema;
