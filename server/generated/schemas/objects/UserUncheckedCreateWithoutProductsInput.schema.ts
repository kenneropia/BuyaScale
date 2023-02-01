import { z } from 'zod';
import { UserAddressUncheckedCreateNestedOneWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateNestedOneWithoutUserAddressInput.schema';
import { CartUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { OrderUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutProductsInput> = z
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
    cartItems: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutCreatorInputObjectSchema)
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

export const UserUncheckedCreateWithoutProductsInputObjectSchema = Schema;
