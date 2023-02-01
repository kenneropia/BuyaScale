import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum([
  'id',
  'creatorId',
  'productId',
  'note',
  'rating',
]);
