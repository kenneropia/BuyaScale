import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { OrderUncheckedUpdateManyWithoutVarientNestedInputObjectSchema } from './OrderUncheckedUpdateManyWithoutVarientNestedInput.schema';
import { CartUncheckedUpdateManyWithoutVarientNestedInputObjectSchema } from './CartUncheckedUpdateManyWithoutVarientNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUncheckedUpdateWithoutProductInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    previewImage: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    orders: z
      .lazy(() => OrderUncheckedUpdateManyWithoutVarientNestedInputObjectSchema)
      .optional(),
    carts: z
      .lazy(() => CartUncheckedUpdateManyWithoutVarientNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientUncheckedUpdateWithoutProductInputObjectSchema = Schema;
