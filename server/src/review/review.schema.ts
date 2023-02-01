import { z } from "zod";

export const reviewSchema = z.object({
  productId: z.string().optional().nullable(),
  note: z.string(),
  rating: z.number(),
});
