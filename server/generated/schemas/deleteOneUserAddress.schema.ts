import { z } from 'zod';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressDeleteOneSchema = z.object({
  where: UserAddressWhereUniqueInputObjectSchema,
});
