import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './objects/VarientWhereUniqueInput.schema';

export const VarientDeleteOneSchema = z.object({
  where: VarientWhereUniqueInputObjectSchema,
});
