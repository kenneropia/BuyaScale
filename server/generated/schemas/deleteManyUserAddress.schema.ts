import { z } from 'zod';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';

export const UserAddressDeleteManySchema = z.object({
  where: UserAddressWhereInputObjectSchema.optional(),
});
