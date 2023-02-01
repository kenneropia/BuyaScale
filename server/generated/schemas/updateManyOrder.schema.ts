import { z } from 'zod';
import { OrderUpdateManyMutationInputObjectSchema } from './objects/OrderUpdateManyMutationInput.schema';
import { OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';

export const OrderUpdateManySchema = z.object({
  data: OrderUpdateManyMutationInputObjectSchema,
  where: OrderWhereInputObjectSchema.optional(),
});
