import { z } from "zod";

export const createSubscriptionSchema = z.object({
  interval: z.enum(["monthly", "weekly"]),
});

export const newSubscriptionItemSchema = z.object({
  quantity: z.number().default(1),
  productId: z.string().uuid(),
  varientId: z.string().uuid().optional(),
  subscriptionId: z.string().uuid(),
});

// quantity Int @default(1)
// price Int
// creator      User? @relation(fields: [creatorId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// creatorId        String?
// product         Product? @relation(fields: [productId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// productId       String?
// varient         Varient? @relation(fields: [varientId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// varientId       String?
