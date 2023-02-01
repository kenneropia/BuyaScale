import { z } from 'zod';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';

export const OrderDeleteManySchema = z.object({
  where: OrderWhereInputObjectSchema.optional(),
});
