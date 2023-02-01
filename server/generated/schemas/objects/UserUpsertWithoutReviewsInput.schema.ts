import { z } from 'zod';
import { UserUpdateWithoutReviewsInputObjectSchema } from './UserUpdateWithoutReviewsInput.schema';
import { UserUncheckedUpdateWithoutReviewsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewsInput.schema';
import { UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReviewsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReviewsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutReviewsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReviewsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutReviewsInputObjectSchema = Schema;
