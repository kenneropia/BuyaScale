import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model == "User" && params.action == "create") {
    const salt = await bcrypt.genSalt(
      process.env.NODE_ENV == "development" ? 5 : 10
    );
    params.args.data.passwordHash = await bcrypt.hash(
      params.args.data.passwordHash,
      salt
    );
    let res = await next(params);
    return res;
  }
  return next(params);
});

export const db = prisma;
