import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutCreatorInputObjectSchema } from './ReviewUpdateWithoutCreatorInput.schema';
import { ReviewUncheckedUpdateWithoutCreatorInputObjectSchema } from './ReviewUncheckedUpdateWithoutCreatorInput.schema';
import { ReviewCreateWithoutCreatorInputObjectSchema } from './ReviewCreateWithoutCreatorInput.schema';
import { ReviewUncheckedCreateWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReviewUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReviewCreateWithoutCreatorInputObjectSchema),
        z.lazy(() => ReviewUncheckedCreateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const ReviewUpsertWithWhereUniqueWithoutCreatorInputObjectSchema =
  Schema;
