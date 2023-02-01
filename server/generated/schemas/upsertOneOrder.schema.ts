import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';
import { OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';
import { OrderUncheckedCreateInputObjectSchema } from './objects/OrderUncheckedCreateInput.schema';
import { OrderUpdateInputObjectSchema } from './objects/OrderUpdateInput.schema';
import { OrderUncheckedUpdateInputObjectSchema } from './objects/OrderUncheckedUpdateInput.schema';

export const OrderUpsertSchema = z.object({
  where: OrderWhereUniqueInputObjectSchema,
  create: z.union([
    OrderCreateInputObjectSchema,
    OrderUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    OrderUpdateInputObjectSchema,
    OrderUncheckedUpdateInputObjectSchema,
  ]),
});
