import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'creatorId',
  'categoryId',
  'previewImage',
  'createdAt',
  'updatedAt',
  'title',
  'quantityLeft',
  'note',
  'price',
]);
