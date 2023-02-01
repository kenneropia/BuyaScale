import { z } from 'zod';

export const UserAddressScalarFieldEnumSchema = z.enum([
  'id',
  'userId',
  'homeIdNumber',
  'closestLandmark',
  'street',
  'lga',
  'postalCode',
  'town',
  'note',
]);
