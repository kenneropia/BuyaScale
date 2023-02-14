import express from "express";
import crypto from "crypto";
import { TransactionSuccessfulType } from "./others";
import { db } from "src/db";

let secret = process.env.PAYSTACK_PUBLIC_KEY;

const hookRouter = express.Router();

hookRouter.post("/", async (req, res) => {
  //validate event
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (hash == req.headers["x-paystack-signature"]) {
    // Retrieve the request's body
    const event = req.body;
    await handleEventSwitch(event);
    // Do something with event
  }
  res.send(200);
});

const handleEventSwitch = async ({
  data,
  event,
}: TransactionSuccessfulType) => {
  let isSuccessFul = false;

  switch (event) {
    case "charge.success":
      try {
        const order = await db.order.findUnique({
          where: { id: data.metadata.order_id },
        });
        if (order) {
          await db.order.update({
            data: { status: "verified" },
            where: { id: order.id },
          });
        }
        isSuccessFul = true;
      } catch (err) {
        isSuccessFul = false;
      }

      break;

    default:
      isSuccessFul = true;
      break;
  }
  return isSuccessFul;
};

export default hookRouter;
