// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server/src/app";
export const trpc = createTRPCReact<AppRouter>();
