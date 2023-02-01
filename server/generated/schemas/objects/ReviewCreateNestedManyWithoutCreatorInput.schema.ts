import { z } from 'zod';
import { ReviewCreateWithoutCreatorInputObjectSchema } from './ReviewCreateWithoutCreatorInput.schema';
import { ReviewUncheckedCreateWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateWithoutCreatorInput.schema';
import { ReviewCreateOrConnectWithoutCreatorInputObjectSchema } from './ReviewCreateOrConnectWithoutCreatorInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutCreatorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReviewCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => ReviewCreateWithoutCreatorInputObjectSchema).array(),
        z.lazy(() => ReviewUncheckedCreateWithoutCreatorInputObjectSchema),
        z
          .lazy(() => ReviewUncheckedCreateWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReviewCreateOrConnectWithoutCreatorInputObjectSchema),
        z
          .lazy(() => ReviewCreateOrConnectWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReviewCreateNestedManyWithoutCreatorInputObjectSchema = Schema;
