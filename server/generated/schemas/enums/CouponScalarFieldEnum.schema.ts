import { z } from 'zod';

export const CouponScalarFieldEnumSchema = z.enum(['id', 'token', 'expires']);
