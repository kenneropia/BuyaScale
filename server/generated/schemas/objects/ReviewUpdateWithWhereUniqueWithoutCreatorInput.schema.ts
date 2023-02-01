import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutCreatorInputObjectSchema } from './ReviewUpdateWithoutCreatorInput.schema';
import { ReviewUncheckedUpdateWithoutCreatorInputObjectSchema } from './ReviewUncheckedUpdateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutCreatorInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewUpdateWithoutCreatorInputObjectSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutCreatorInputObjectSchema),
      ]),
    })
    .strict();

export const ReviewUpdateWithWhereUniqueWithoutCreatorInputObjectSchema =
  Schema;
