import { z } from 'zod';

export const OrderScalarFieldEnumSchema = z.enum([
  'id',
  'quality',
  'price',
  'creatorId',
  'productId',
  'varientId',
]);
