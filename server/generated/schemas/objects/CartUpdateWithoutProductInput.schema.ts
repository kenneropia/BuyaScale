import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutCartItemsNestedInputObjectSchema } from './UserUpdateOneWithoutCartItemsNestedInput.schema';
import { VarientUpdateOneWithoutCartsNestedInputObjectSchema } from './VarientUpdateOneWithoutCartsNestedInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutProductInput> = z
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
    varient: z
      .lazy(() => VarientUpdateOneWithoutCartsNestedInputObjectSchema)
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

export const CartUpdateWithoutProductInputObjectSchema = Schema;
