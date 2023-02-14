import { z } from "zod";

export const createReviewSchema = z.object({
  productId: z.string().optional().nullable(),
  note: z.string(),
  rating: z.number(),
});
