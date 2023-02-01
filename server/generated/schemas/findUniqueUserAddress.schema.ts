import { z } from 'zod';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressFindUniqueSchema = z.object({
  where: UserAddressWhereUniqueInputObjectSchema,
});
