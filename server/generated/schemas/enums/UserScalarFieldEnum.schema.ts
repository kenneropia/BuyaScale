import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'role',
  'createdAt',
  'updatedAt',
  'email',
  'fullName',
  'passwordHash',
  'userAddressId',
]);
