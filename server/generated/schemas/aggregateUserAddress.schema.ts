import { z } from 'zod';
import { UserAddressOrderByWithRelationInputObjectSchema } from './objects/UserAddressOrderByWithRelationInput.schema';
import { UserAddressWhereInputObjectSchema } from './objects/UserAddressWhereInput.schema';
import { UserAddressWhereUniqueInputObjectSchema } from './objects/UserAddressWhereUniqueInput.schema';
import { UserAddressCountAggregateInputObjectSchema } from './objects/UserAddressCountAggregateInput.schema';
import { UserAddressMinAggregateInputObjectSchema } from './objects/UserAddressMinAggregateInput.schema';
import { UserAddressMaxAggregateInputObjectSchema } from './objects/UserAddressMaxAggregateInput.schema';

export const UserAddressAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), UserAddressCountAggregateInputObjectSchema])
    .optional(),
  _min: UserAddressMinAggregateInputObjectSchema.optional(),
  _max: UserAddressMaxAggregateInputObjectSchema.optional(),
});
