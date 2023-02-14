import { z } from "zod";

export const createOrderSchema = z.object({
  cartId: z.string().uuid(),
  quantity: z.number(),
  couponCode: z.string().max(100).optional(),
});

export const orderStatusSchema = z.enum([
  "pending",
  "paid",
  "verified",
  "delivered",
]);

// productId: z.string(),
// varientId: z.string().optional(),
// quantity Int @default(1)
// price Int
// creator      User? @relation(fields: [creatorId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// creatorId        String?
// product         Product? @relation(fields: [productId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// productId       String?
// varient         Varient? @relation(fields: [varientId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// varientId       String?
