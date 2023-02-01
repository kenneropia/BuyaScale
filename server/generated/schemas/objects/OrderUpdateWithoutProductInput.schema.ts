import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutOrdersNestedInputObjectSchema } from './UserUpdateOneWithoutOrdersNestedInput.schema';
import { VarientUpdateOneWithoutOrdersNestedInputObjectSchema } from './VarientUpdateOneWithoutOrdersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderUpdateWithoutProductInput> = z
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
    varient: z
      .lazy(() => VarientUpdateOneWithoutOrdersNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderUpdateWithoutProductInputObjectSchema = Schema;
