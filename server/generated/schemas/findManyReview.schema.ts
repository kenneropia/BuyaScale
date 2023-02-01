import { z } from 'zod';
import { ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewScalarFieldEnumSchema } from './enums/ReviewScalarFieldEnum.schema';

export const ReviewFindManySchema = z.object({
  orderBy: z
    .union([
      ReviewOrderByWithRelationInputObjectSchema,
      ReviewOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReviewWhereInputObjectSchema.optional(),
  cursor: ReviewWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ReviewScalarFieldEnumSchema).optional(),
});
