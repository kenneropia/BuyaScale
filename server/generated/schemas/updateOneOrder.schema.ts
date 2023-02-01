import { z } from 'zod';
import { OrderUpdateInputObjectSchema } from './objects/OrderUpdateInput.schema';
import { OrderUncheckedUpdateInputObjectSchema } from './objects/OrderUncheckedUpdateInput.schema';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderUpdateOneSchema = z.object({
  data: z.union([
    OrderUpdateInputObjectSchema,
    OrderUncheckedUpdateInputObjectSchema,
  ]),
  where: OrderWhereUniqueInputObjectSchema,
});
