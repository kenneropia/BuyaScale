import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderDeleteOneSchema = z.object({
  where: OrderWhereUniqueInputObjectSchema,
});
