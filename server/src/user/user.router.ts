import { router, publicProcedure, privateProcedure } from "../trpc";
import { z } from "zod";
import { db } from "src/db";
import { TRPCError } from "@trpc/server";

import { userAddressSchema, userSchema } from "./user.schema";
import { createToken, isCorrect } from "src/utils/others";

export const userRouter = router({
  signup: publicProcedure
    .input(userSchema.extend({ password: z.string().min(8).max(10) }))
    .mutation(async ({ input }) => {
      let checkUser = await db.user.findFirst({
        select: { email: true },
        where: { email: input.email },
      });
      if (checkUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "This email is already used",
        });
      }

      const { email, fullName, id } = await db.user.create({
        data: {
          fullName: input.fullName,
          email: input.email,
          passwordHash: input.password,
        },
      });

      const token = createToken({ id, email });
      return { email, fullName, id, token };
    }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8).max(10),
      })
    )
    .output(userSchema)
    .mutation(async ({ input }) => {
      let user = await db.user.findFirstOrThrow({
        select: { email: true, fullName: true, id: true, passwordHash: true },
        where: { email: input.email, lol: "lol", ok: "ok" },
      });
      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "wrong details",
        });
      }

      if (!isCorrect(user.passwordHash!, input.password)) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "wrong details",
        });
      }

      const token = createToken({ email: user.email, id: user.id });
      return { ...user, token, id: null };
    }),
  profile: privateProcedure.query(async ({ ctx }) => {
    const user = await db.user.findFirst({
      where: {
        id: ctx.user.id,
      },
      include: { userAddress: true },
    });
    return { user };
  }),
  updateUserAddress: privateProcedure
    .input(userAddressSchema)
    .mutation(async ({ input, ctx }) => {
      return await db.userAddress.upsert({
        where: { id: ctx.user.id },
        create: input,
        update: { ...input },
      });
    }),
});
