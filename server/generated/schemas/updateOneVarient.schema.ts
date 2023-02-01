import { z } from 'zod';
import { VarientUpdateInputObjectSchema } from './objects/VarientUpdateInput.schema';
import { VarientUncheckedUpdateInputObjectSchema } from './objects/VarientUncheckedUpdateInput.schema';
import { VarientWhereUniqueInputObjectSchema } from './objects/VarientWhereUniqueInput.schema';

export const VarientUpdateOneSchema = z.object({
  data: z.union([
    VarientUpdateInputObjectSchema,
    VarientUncheckedUpdateInputObjectSchema,
  ]),
  where: VarientWhereUniqueInputObjectSchema,
});
