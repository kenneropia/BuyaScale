import { z } from 'zod';
import { CategoryCreateWithoutProductsInputObjectSchema } from './CategoryCreateWithoutProductsInput.schema';
import { CategoryUncheckedCreateWithoutProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutProductsInput.schema';
import { CategoryCreateOrConnectWithoutProductsInputObjectSchema } from './CategoryCreateOrConnectWithoutProductsInput.schema';
import { CategoryUpsertWithoutProductsInputObjectSchema } from './CategoryUpsertWithoutProductsInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutProductsInputObjectSchema } from './CategoryUpdateWithoutProductsInput.schema';
import { CategoryUncheckedUpdateWithoutProductsInputObjectSchema } from './CategoryUncheckedUpdateWithoutProductsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutProductsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutProductsInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutProductsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CategoryCreateOrConnectWithoutProductsInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => CategoryUpsertWithoutProductsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CategoryUpdateWithoutProductsInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CategoryUpdateOneWithoutProductsNestedInputObjectSchema = Schema;
