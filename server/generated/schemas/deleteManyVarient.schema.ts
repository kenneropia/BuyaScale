import { z } from 'zod';
import { VarientWhereInputObjectSchema } from './objects/VarientWhereInput.schema';

export const VarientDeleteManySchema = z.object({
  where: VarientWhereInputObjectSchema.optional(),
});
