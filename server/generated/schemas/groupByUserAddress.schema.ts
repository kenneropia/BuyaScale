import { z } from 'zod';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';
import { UserAddressOrderByWithAggregationInputObjectSchema } from './objects/UserAddressOrderByWithAggregationInput.schema';
import { UserAddressScalarWhereWithAggregatesInputObjectSchema } from './objects/UserAddressScalarWhereWithAggregatesInput.schema';
import { UserAddressScalarFieldEnumSchema } from './enums/UserAddressScalarFieldEnum.schema';

export const UserAddressGroupBySchema = z.object({
  where: UserAddressWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserAddressOrderByWithAggregationInputObjectSchema,
      UserAddressOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserAddressScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserAddressScalarFieldEnumSchema),
});
