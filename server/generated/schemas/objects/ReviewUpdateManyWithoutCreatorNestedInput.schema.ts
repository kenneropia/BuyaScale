import { z } from 'zod';
import { ReviewCreateWithoutCreatorInputObjectSchema } from './ReviewCreateWithoutCreatorInput.schema';
import { ReviewUncheckedCreateWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateWithoutCreatorInput.schema';
import { ReviewCreateOrConnectWithoutCreatorInputObjectSchema } from './ReviewCreateOrConnectWithoutCreatorInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutCreatorInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutCreatorInput.schema';
import { ReviewUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutCreatorInput.schema';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateManyWithoutCreatorNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ReviewUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => ReviewUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ReviewUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
        ),
        z
          .lazy(
            () => ReviewUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ReviewUpdateManyWithWhereWithoutCreatorInputObjectSchema),
        z
          .lazy(() => ReviewUpdateManyWithWhereWithoutCreatorInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ReviewScalarWhereInputObjectSchema),
        z.lazy(() => ReviewScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReviewUpdateManyWithoutCreatorNestedInputObjectSchema = Schema;
