import * as trpcExpress from "@trpc/server/adapters/express";
import { renderTrpcPanel } from "trpc-panel";
import { z } from "zod";
import { writeFile } from "fs/promises";
import morgan from "morgan";
import express from "express";
import type { Request, Response } from "express";
import multer from "multer";
import fs from "fs";

import { appRouter } from "./app";
import { createContext } from "./trpc";
import { db } from "./db";
import path from "path";
import { uploadBody } from "./utils";
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.post(
  "/uploads/",
  upload.single("image"),
  async (
    { body, file }: Request<never, never, z.infer<typeof uploadBody>>,
    res: Response
  ) => {
    if (!fs.existsSync("./uploads")) {
      fs.mkdirSync("./uploads");
    }
    const checkBody = uploadBody.safeParse({
      ...body,
      image: file?.buffer,
      extension: file?.mimetype,
    });
    if (!checkBody.success) {
      const error = {
        code: "BAD_REQUEST",
        message: checkBody.error?.issues,
      };
      return res.status(400).json({ ...error });
    }
    if (body.type == "product") {
      db.product
        .update({
          where: { id: body.id },
          data: {
            previewImage: `/uploads/${body.id}.${file?.mimetype.split("/")[1]}`,
          },
        })
        .then(async (data) => {
          data &&
            writeFile(
              `./uploads/${body.id}.${file?.mimetype.split("/")[1]}`,
              file?.buffer as Buffer
            );
        });
    } else {
      db.varient
        .update({
          where: { id: body.id },
          data: {
            previewImage: `/uploads/${body.id}.${file?.mimetype.split("/")[1]}`,
          },
        })
        .then(async (data) => {
          data &&
            writeFile(
              `./uploads/${body.id}.${file?.mimetype.split("/")[1]}`,
              file?.buffer as Buffer
            );
        });
    }

    return res.send();
  }
);
app.use(morgan("tiny"));

app.use("/panel", (_, res) => {
  return res.send(
    renderTrpcPanel(appRouter, { url: `http://localhost:${PORT}/trpc` })
  );
});

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get("/get", (_, res) => {
  return res.json({ get: "lol" });
});

const PORT = process.env.PORT || 4000;

const runApp = async () => {
  app.listen(PORT);
};

runApp()
  .then((_) => {
    console.log(`server is online on PORT:${PORT}`);
  })
  .catch((err) => {
    console.error(err);
  });
