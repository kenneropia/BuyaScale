import { z } from 'zod';
import { UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';
import { UserCreateOrConnectWithoutReviewsInputObjectSchema } from './UserCreateOrConnectWithoutReviewsInput.schema';
import { UserUpsertWithoutReviewsInputObjectSchema } from './UserUpsertWithoutReviewsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReviewsInputObjectSchema } from './UserUpdateWithoutReviewsInput.schema';
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutReviewsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutReviewsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutReviewsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutReviewsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutReviewsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutReviewsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneWithoutReviewsNestedInputObjectSchema = Schema;
