import { z } from "zod";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

export const RoleEnum = z.enum(["Moderator", "Admin"]);

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

export type TransactionSuccessfulType = {
  event: "charge.success" | "charge.failed";
  data: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: any;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: {
      customer_id: string;
      order_id: string;
    };
    log: {
      time_spent: number;
      attempts: number;
      authentication: string;
      errors: number;
      success: boolean;
      mobile: boolean;
      input: any[];
      channel: any;
      history: [
        {
          type: string;
          message: string;
          time: number;
        },
        {
          type: string;
          message: string;
          time: number;
        },
        {
          type: string;
          message: string;
          time: number;
        }
      ];
    };
    fees: any;
    customer: {
      id: number;
      first_name: string;
      last_name: string;
      email: string;
      customer_code: string;
      phone: any;
      metadata: any;
      risk_action: string;
    };
    authorization: {
      authorization_code: string;
      bin: string;
      last4: string;
      exp_month: string;
      exp_year: string;
      card_type: string;
      bank: string;
      country_code: string;
      brand: string;
      account_name: string;
    };
    plan: any;
  };
};
