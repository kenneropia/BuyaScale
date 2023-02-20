// @filename: trpc.ts
import * as trpcExpress from "@trpc/server/adapters/express";
import jwt from "jsonwebtoken";
import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server";
import { db } from "src/db";
import { z } from "zod";
import { RoleEnum } from "src/utils/others";
import { Prisma, User } from "@prisma/client";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime";
// created for each request
export const createContext = ({
  req,
}: trpcExpress.CreateExpressContextOptions): {
  authorization: string;
  user?: User;
  isAdmin?: boolean;
} => {
  const { authorization } = req.headers;

  return { authorization: authorization as string };
}; // no context
type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    // P2022: Unique constraint failed
    // Prisma error codes: https://www.prisma.io/docs/reference/api-reference/error-reference#error-codes

    if (shape.code === "P2002" || shape.code === -32603) {
      console.log({
        message: error.message,
        code: "BAD_REQUEST",
        data: { ...shape.data, httpStatus: 400, code: 400 },
      });
      return {
        message: error.message,
        code: "BAD_REQUEST",
        data: { ...shape.data, httpStatus: 400, code: 400 },
      };
    }
    return shape;
  },
});

export const middleware = t.middleware;

export const router = t.router;
export const publicProcedure = t.procedure;

const isAuth = t.middleware(async ({ ctx, next }) => {
  if (!ctx.authorization) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  const token = ctx.authorization.split(" ")[1];

  // console.log(token);

  const payload = jwt.verify(token, "thisShouldBeMovedToDotEnvLater") as {
    id: string;
  };
  const user = await db.user.findUnique({ where: { id: payload.id } });

  if (!user) {
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "This user doesn't exist",
    });
  }
  const isAdminBol = RoleEnum.safeParse(ctx.user?.role).success;
  return next({
    ctx: { ...ctx, user, isAdmin: isAdminBol },
  });
});

const isAdminOrMod = t.middleware(async ({ ctx, next }) => {
  console.log(ctx.user);
  if (!RoleEnum.safeParse(ctx.user?.role).success) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "this route is only for admins and mods",
    });
  }
  return next();
});

const isAdmin = t.middleware(async ({ ctx, next }) => {
  if (!((ctx.user?.role as z.infer<typeof RoleEnum>) == "Admin")) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "this route is only for admins",
    });
  }
  return next();
});

export const adminProcedure = t.procedure.use(isAuth).use(isAdminOrMod);

export const privateProcedure = t.procedure.use(isAuth);
