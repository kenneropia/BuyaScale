import { z } from 'zod';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutReviewsInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutProductInput> = z
  .object({
    where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ReviewUpdateManyMutationInputObjectSchema),
      z.lazy(() => ReviewUncheckedUpdateManyWithoutReviewsInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewUpdateManyWithWhereWithoutProductInputObjectSchema = Schema;
