import { z } from 'zod';
import { UserAddressCreateInputObjectSchema } from './objects/UserAddressCreateInput.schema';
import { UserAddressUncheckedCreateInputObjectSchema } from './objects/UserAddressUncheckedCreateInput.schema';

export const UserAddressCreateOneSchema = z.object({
  data: z.union([
    UserAddressCreateInputObjectSchema,
    UserAddressUncheckedCreateInputObjectSchema,
  ]),
});
