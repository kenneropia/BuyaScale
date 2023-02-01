import { z } from 'zod';
import { UserAddressOrderByWithRelationInputObjectSchema } from './objects/UserAddressOrderByWithRelationInput.schema';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';
import { UserAddressScalarFieldEnumSchema } from './enums/UserAddressScalarFieldEnum.schema';

export const UserAddressFindFirstSchema = z.object({
  orderBy: z
    .union([
      UserAddressOrderByWithRelationInputObjectSchema,
      UserAddressOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: UserAddressWhereInputObjectSchema.optional(),
  cursor: UserAddressWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserAddressScalarFieldEnumSchema).optional(),
});
