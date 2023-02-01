import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneWithoutVarientsNestedInputObjectSchema } from './ProductUpdateOneWithoutVarientsNestedInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CartUpdateManyWithoutVarientNestedInputObjectSchema } from './CartUpdateManyWithoutVarientNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VarientUpdateWithoutOrdersInput> = z
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
    product: z
      .lazy(() => ProductUpdateOneWithoutVarientsNestedInputObjectSchema)
      .optional(),
    previewImage: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    carts: z
      .lazy(() => CartUpdateManyWithoutVarientNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const VarientUpdateWithoutOrdersInputObjectSchema = Schema;
