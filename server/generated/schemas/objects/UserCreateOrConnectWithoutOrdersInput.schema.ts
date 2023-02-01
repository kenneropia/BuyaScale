import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrdersInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrdersInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutOrdersInputObjectSchema = Schema;
