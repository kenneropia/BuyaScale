import { z } from "zod";

export const createCartSchema = z.object({
  productId: z.string().uuid(),
  varientId: z.string().uuid(),
  quantity: z.number(),
});

// quantity Int @default(1)
// price Int
// creator      User? @relation(fields: [creatorId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// creatorId        String?
// product         Product? @relation(fields: [productId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// productId       String?
// varient         Varient? @relation(fields: [varientId], references: [id], onDelete: SetNull, onUpdate: Cascade)
// varientId       String?
