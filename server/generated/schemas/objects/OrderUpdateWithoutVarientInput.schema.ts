import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutOrdersNestedInputObjectSchema } from './UserUpdateOneWithoutOrdersNestedInput.schema';
import { ProductUpdateOneWithoutOrdersNestedInputObjectSchema } from './ProductUpdateOneWithoutOrdersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithoutVarientInput> = z
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
    creator: z
      .lazy(() => UserUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderUpdateWithoutVarientInputObjectSchema = Schema;
