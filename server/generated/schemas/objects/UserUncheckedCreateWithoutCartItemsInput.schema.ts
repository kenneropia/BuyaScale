import { z } from 'zod';
import { UserAddressUncheckedCreateNestedOneWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateNestedOneWithoutUserAddressInput.schema';
import { ProductUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { OrderUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCartItemsInput> = z
  .object({
    id: z.string().optional(),
    role: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    email: z.string(),
    fullName: z.string(),
    passwordHash: z.string().optional().nullable(),
    userAddress: z
      .lazy(
        () =>
          UserAddressUncheckedCreateNestedOneWithoutUserAddressInputObjectSchema,
      )
      .optional(),
    userAddressId: z.string().optional().nullable(),
    products: z
      .lazy(
        () => ProductUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
      )
      .optional(),
    orders: z
      .lazy(() => OrderUncheckedCreateNestedManyWithoutCreatorInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(
        () => ReviewUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutCartItemsInputObjectSchema = Schema;
