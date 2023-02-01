import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCartItemsNestedInputObjectSchema } from './UserUpdateOneWithoutCartItemsNestedInput.schema';
import { ProductUpdateOneWithoutCartNestedInputObjectSchema } from './ProductUpdateOneWithoutCartNestedInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutVarientInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    creator: z
      .lazy(() => UserUpdateOneWithoutCartItemsNestedInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneWithoutCartNestedInputObjectSchema)
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const CartUpdateWithoutVarientInputObjectSchema = Schema;
