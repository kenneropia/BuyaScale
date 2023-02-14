import { z } from "zod";

export const createProductSchema = z.object({
  createrId: z.string().uuid(),
  categoryId: z.string().uuid(),
  title: z.string(),
  quantityLeft: z.number(),
  note: z.string(),
  price: z.number(),
});

// id            String   @id @default(uuid())
//   creator       User? @relation(fields: [creatorId], references: [id], onDelete: SetNull, onUpdate: Cascade)
//   creatorId     String?
//   category      Category? @relation(fields: [categoryId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//   categoryId    String?
//   previewImage  String?
//   createdAt     DateTime @default(now())
//   updatedAt     DateTime @updatedAt
//   title          String @unique
//   quantityLeft  Int
//   note          String
//   varients      Varient[]
//   cart   Cart[]
//   price Int
//   orders  Order[]
//   reviews Review[]
