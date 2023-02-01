import { z } from 'zod';
import { UserAddressCreateNestedOneWithoutUserAddressInputObjectSchema } from './UserAddressCreateNestedOneWithoutUserAddressInput.schema';
import { ProductCreateNestedManyWithoutCreatorInputObjectSchema } from './ProductCreateNestedManyWithoutCreatorInput.schema';
import { CartCreateNestedManyWithoutCreatorInputObjectSchema } from './CartCreateNestedManyWithoutCreatorInput.schema';
import { OrderCreateNestedManyWithoutCreatorInputObjectSchema } from './OrderCreateNestedManyWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutReviewsInput> = z
  .object({
    id: z.string().optional(),
    role: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    email: z.string(),
    fullName: z.string(),
    passwordHash: z.string().optional().nullable(),
    userAddress: z
      .lazy(() => UserAddressCreateNestedOneWithoutUserAddressInputObjectSchema)
      .optional(),
    userAddressId: z.string().optional().nullable(),
    products: z
      .lazy(() => ProductCreateNestedManyWithoutCreatorInputObjectSchema)
      .optional(),
    cartItems: z
      .lazy(() => CartCreateNestedManyWithoutCreatorInputObjectSchema)
      .optional(),
    orders: z
      .lazy(() => OrderCreateNestedManyWithoutCreatorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateWithoutReviewsInputObjectSchema = Schema;
