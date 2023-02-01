import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCartItemsInputObjectSchema } from './UserCreateWithoutCartItemsInput.schema';
import { UserUncheckedCreateWithoutCartItemsInputObjectSchema } from './UserUncheckedCreateWithoutCartItemsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCartItemsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutCartItemsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCartItemsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutCartItemsInputObjectSchema = Schema;
