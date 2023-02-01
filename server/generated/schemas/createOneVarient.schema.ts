import { z } from 'zod';
import { VarientCreateInputObjectSchema } from './objects/VarientCreateInput.schema';
import { VarientUncheckedCreateInputObjectSchema } from './objects/VarientUncheckedCreateInput.schema';

export const VarientCreateOneSchema = z.object({
  data: z.union([
    VarientCreateInputObjectSchema,
    VarientUncheckedCreateInputObjectSchema,
  ]),
});
