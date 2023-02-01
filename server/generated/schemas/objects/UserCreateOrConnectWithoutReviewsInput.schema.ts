import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutReviewsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutReviewsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutReviewsInputObjectSchema = Schema;
