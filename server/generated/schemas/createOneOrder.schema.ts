import { z } from 'zod';
import { OrderCreateInputObjectSchema } from './objects/OrderCreateInput.schema';
import { OrderUncheckedCreateInputObjectSchema } from './objects/OrderUncheckedCreateInput.schema';

export const OrderCreateOneSchema = z.object({
  data: z.union([
    OrderCreateInputObjectSchema,
    OrderUncheckedCreateInputObjectSchema,
  ]),
});
