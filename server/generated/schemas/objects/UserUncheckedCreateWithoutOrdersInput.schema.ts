import { z } from 'zod';
import { UserAddressUncheckedCreateNestedOneWithoutUserAddressInputObjectSchema } from './UserAddressUncheckedCreateNestedOneWithoutUserAddressInput.schema';
import { ProductUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { CartUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutCreatorInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutCreatorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutOrdersInput> = z
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
    cartItems: z
      .lazy(() => CartUncheckedCreateNestedManyWithoutCreatorInputObjectSchema)
      .optional(),
    reviews: z
      .lazy(
        () => ReviewUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutOrdersInputObjectSchema = Schema;
