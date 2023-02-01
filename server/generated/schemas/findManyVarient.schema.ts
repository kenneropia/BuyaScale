import { z } from 'zod';
import { VarientOrderByWithRelationInputObjectSchema } from './objects/VarientOrderByWithRelationInput.schema';
import { VarientWhereInputObjectSchema } from './objects/VarientWhereInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './objects/VarientWhereUniqueInput.schema';
import { VarientScalarFieldEnumSchema } from './enums/VarientScalarFieldEnum.schema';

export const VarientFindManySchema = z.object({
  orderBy: z
    .union([
      VarientOrderByWithRelationInputObjectSchema,
      VarientOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VarientWhereInputObjectSchema.optional(),
  cursor: VarientWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VarientScalarFieldEnumSchema).optional(),
});
