import { z } from 'zod';
import { VarientUpdateManyMutationInputObjectSchema } from './objects/VarientUpdateManyMutationInput.schema';
import { VarientWhereInputObjectSchema } from './objects/VarientWhereInput.schema';

export const VarientUpdateManySchema = z.object({
  data: VarientUpdateManyMutationInputObjectSchema,
  where: VarientWhereInputObjectSchema.optional(),
});
