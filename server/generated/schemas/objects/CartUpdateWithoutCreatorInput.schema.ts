import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneWithoutCartNestedInputObjectSchema } from './ProductUpdateOneWithoutCartNestedInput.schema';
import { VarientUpdateOneWithoutCartsNestedInputObjectSchema } from './VarientUpdateOneWithoutCartsNestedInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateWithoutCreatorInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneWithoutCartNestedInputObjectSchema)
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

export const CartUpdateWithoutCreatorInputObjectSchema = Schema;
