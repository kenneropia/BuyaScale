import { z } from 'zod';
import { OrderWhereUniqueInputObjectSchema } from './objects/OrderWhereUniqueInput.schema';

export const OrderFindUniqueSchema = z.object({
  where: OrderWhereUniqueInputObjectSchema,
});
