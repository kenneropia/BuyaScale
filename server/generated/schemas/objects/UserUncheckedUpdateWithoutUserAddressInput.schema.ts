import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCreatorNestedInput.schema';
import { CartUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './CartUncheckedUpdateManyWithoutCreatorNestedInput.schema';
import { OrderUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutCreatorNestedInput.schema';
import { ReviewUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutCreatorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUserAddressInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    fullName: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    passwordHash: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    userAddressId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    products: z
      .lazy(
        () => ProductUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema,
      )
      .optional(),
    cartItems: z
      .lazy(() => CartUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(
        () => ReviewUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateWithoutUserAddressInputObjectSchema = Schema;
