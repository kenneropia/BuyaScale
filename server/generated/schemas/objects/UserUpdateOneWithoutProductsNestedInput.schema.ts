import { z } from 'zod';
import { UserCreateWithoutProductsInputObjectSchema } from './UserCreateWithoutProductsInput.schema';
import { UserUncheckedCreateWithoutProductsInputObjectSchema } from './UserUncheckedCreateWithoutProductsInput.schema';
import { UserCreateOrConnectWithoutProductsInputObjectSchema } from './UserCreateOrConnectWithoutProductsInput.schema';
import { UserUpsertWithoutProductsInputObjectSchema } from './UserUpsertWithoutProductsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProductsInputObjectSchema } from './UserUpdateWithoutProductsInput.schema';
import { UserUncheckedUpdateWithoutProductsInputObjectSchema } from './UserUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutProductsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProductsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutProductsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutProductsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutProductsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
