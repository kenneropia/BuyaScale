import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { VarientUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './VarientUncheckedUpdateManyWithoutProductNestedInput.schema';
import { CartUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './CartUncheckedUpdateManyWithoutProductNestedInput.schema';
import { OrderUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutProductNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutCategoryInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    creatorId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    previewImage: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    quantityLeft: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    note: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    varients: z
      .lazy(
        () => VarientUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
      )
      .optional(),
    cart: z
      .lazy(() => CartUncheckedUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    orders: z
      .lazy(() => OrderUncheckedUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(
        () => ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedUpdateWithoutCategoryInputObjectSchema = Schema;
