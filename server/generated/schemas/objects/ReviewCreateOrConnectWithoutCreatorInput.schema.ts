import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutCreatorInputObjectSchema } from './ReviewCreateWithoutCreatorInput.schema';
import { ReviewUncheckedCreateWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutCreatorInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutCreatorInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutCreatorInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewCreateOrConnectWithoutCreatorInputObjectSchema = Schema;
