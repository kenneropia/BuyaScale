import { z } from 'zod';
import { UserCreateWithoutReviewsInputObjectSchema } from './UserCreateWithoutReviewsInput.schema';
import { UserUncheckedCreateWithoutReviewsInputObjectSchema } from './UserUncheckedCreateWithoutReviewsInput.schema';
import { UserCreateOrConnectWithoutReviewsInputObjectSchema } from './UserCreateOrConnectWithoutReviewsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewsInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UserCreateNestedOneWithoutReviewsInputObjectSchema = Schema;
