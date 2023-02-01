import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ProductUpdateOneWithoutOrdersNestedInputObjectSchema } from './ProductUpdateOneWithoutOrdersNestedInput.schema';
import { VarientUpdateOneWithoutOrdersNestedInputObjectSchema } from './VarientUpdateOneWithoutOrdersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithoutCreatorInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    quality: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
    varient: z
      .lazy(() => VarientUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderUpdateWithoutCreatorInputObjectSchema = Schema;
