import { z } from 'zod';
import { UserAddressUpdateInputObjectSchema } from './objects/UserAddressUpdateInput.schema';
import { UserAddressUncheckedUpdateInputObjectSchema } from './objects/UserAddressUncheckedUpdateInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';

export const UserAddressUpdateOneSchema = z.object({
  data: z.union([
    UserAddressUpdateInputObjectSchema,
    UserAddressUncheckedUpdateInputObjectSchema,
  ]),
  where: UserAddressWhereUniqueInputObjectSchema,
});
