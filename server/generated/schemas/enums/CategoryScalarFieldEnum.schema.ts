import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum([
  'title',
  'id',
  'createdAt',
  'updatedAt',
]);
