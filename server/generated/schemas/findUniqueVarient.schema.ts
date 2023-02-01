import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './objects/VarientWhereUniqueInput.schema';

export const VarientFindUniqueSchema = z.object({
  where: VarientWhereUniqueInputObjectSchema,
});
