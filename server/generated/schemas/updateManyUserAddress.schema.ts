import { z } from 'zod';
import { UserAddressUpdateManyMutationInputObjectSchema } from './objects/UserAddressUpdateManyMutationInput.schema';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';

export const UserAddressUpdateManySchema = z.object({
  data: UserAddressUpdateManyMutationInputObjectSchema,
  where: UserAddressWhereInputObjectSchema.optional(),
});
