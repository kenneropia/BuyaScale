import { z } from 'zod';

export const VarientScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'productId',
  'previewImage',
]);
