import { z } from 'zod';
import { VarientWhereUniqueInputObjectSchema } from './objects/VarientWhereUniqueInput.schema';
import { VarientCreateInputObjectSchema } from './objects/VarientCreateInput.schema';
import { VarientUncheckedCreateInputObjectSchema } from './objects/VarientUncheckedCreateInput.schema';
import { VarientUpdateInputObjectSchema } from './objects/VarientUpdateInput.schema';
import { VarientUncheckedUpdateInputObjectSchema } from './objects/VarientUncheckedUpdateInput.schema';

export const VarientUpsertSchema = z.object({
  where: VarientWhereUniqueInputObjectSchema,
  create: z.union([
    VarientCreateInputObjectSchema,
    VarientUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VarientUpdateInputObjectSchema,
    VarientUncheckedUpdateInputObjectSchema,
  ]),
});
