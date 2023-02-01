import { z } from "zod";

export const userAddressSchema = z.object({
  homeIdNumber: z.string(),
  closestLandmark: z.string(),
  street: z.string(),
  lga: z.string(),
  postalCode: z.string(),
  town: z.string(),
  note: z.string(),
});

export const userSchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  token: z.string().optional(),
});
