import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutProductsNestedInputObjectSchema } from './UserUpdateOneWithoutProductsNestedInput.schema';
import { CategoryUpdateOneWithoutProductsNestedInputObjectSchema } from './CategoryUpdateOneWithoutProductsNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { VarientUpdateManyWithoutProductNestedInputObjectSchema } from './VarientUpdateManyWithoutProductNestedInput.schema';
import { CartUpdateManyWithoutProductNestedInputObjectSchema } from './CartUpdateManyWithoutProductNestedInput.schema';
import { OrderUpdateManyWithoutProductNestedInputObjectSchema } from './OrderUpdateManyWithoutProductNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithoutReviewsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    creator: z
      .lazy(() => UserUpdateOneWithoutProductsNestedInputObjectSchema)
      .optional(),
    category: z
      .lazy(() => CategoryUpdateOneWithoutProductsNestedInputObjectSchema)
      .optional(),
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
      .lazy(() => VarientUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    cart: z
      .lazy(() => CartUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    orders: z
      .lazy(() => OrderUpdateManyWithoutProductNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductUpdateWithoutReviewsInputObjectSchema = Schema;
