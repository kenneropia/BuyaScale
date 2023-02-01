import { z } from "zod";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const RoleEnum = z.enum(["Customer", "Moderator", "Admin"]);

export const uploadBody = z.object({
  id: z.string().uuid(),
  type: z.enum(["product", "varient"]),
  image: z.instanceof(Buffer),
  extension: z.string().startsWith("image"),
});

export const LimitAndPage = z.object({
  limit: z.number().min(1).default(5),
  page: z.number().min(1).default(1),
});

export const createToken = (user: { email: string; id: string }) => {
  return jwt.sign(user, "thisShouldBeMovedToDotEnvLater", {
    expiresIn: 60 * 60 * 24 * 20,
  });
};

export const isCorrect = async (passwordHash: string, rawPassword: string) =>
  await bcrypt.compare(rawPassword, passwordHash);
