import { z } from 'zod';

export const CartScalarFieldEnumSchema = z.enum([
  'id',
  'creatorId',
  'productId',
  'varientId',
  'price',
]);
