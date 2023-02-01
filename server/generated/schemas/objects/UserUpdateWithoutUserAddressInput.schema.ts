import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCreatorNestedInputObjectSchema } from './ProductUpdateManyWithoutCreatorNestedInput.schema';
import { CartUpdateManyWithoutCreatorNestedInputObjectSchema } from './CartUpdateManyWithoutCreatorNestedInput.schema';
import { OrderUpdateManyWithoutCreatorNestedInputObjectSchema } from './OrderUpdateManyWithoutCreatorNestedInput.schema';
import { ReviewUpdateManyWithoutCreatorNestedInputObjectSchema } from './ReviewUpdateManyWithoutCreatorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithoutUserAddressInput> = z
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
      .lazy(() => ProductUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
    cartItems: z
      .lazy(() => CartUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(() => ReviewUpdateManyWithoutCreatorNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateWithoutUserAddressInputObjectSchema = Schema;
