/*
  Warnings:

  - You are about to drop the column `quality` on the `Order` table. All the data in the column will be lost.
  - Made the column `productId` on table `Varient` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `code` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `percentage` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cartId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `productId` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN "orderId" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Varient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "previewImage" TEXT,
    CONSTRAINT "Varient_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Varient" ("id", "previewImage", "productId", "title") SELECT "id", "previewImage", "productId", "title" FROM "Varient";
DROP TABLE "Varient";
ALTER TABLE "new_Varient" RENAME TO "Varient";
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "productId" TEXT,
    "note" TEXT NOT NULL,
    "rating" DECIMAL NOT NULL,
    CONSTRAINT "Review_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("creatorId", "id", "note", "productId", "rating") SELECT "creatorId", "id", "note", "productId", "rating" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_creatorId_productId_key" ON "Review"("creatorId", "productId");
CREATE TABLE "new_Coupon" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    "percentage" INTEGER NOT NULL
);
INSERT INTO "new_Coupon" ("expires", "id", "token") SELECT "expires", "id", "token" FROM "Coupon";
DROP TABLE "Coupon";
ALTER TABLE "new_Coupon" RENAME TO "Coupon";
CREATE UNIQUE INDEX "Coupon_code_key" ON "Coupon"("code");
CREATE UNIQUE INDEX "Coupon_token_key" ON "Coupon"("token");
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "price" INTEGER NOT NULL,
    "creatorId" TEXT,
    "productId" TEXT NOT NULL,
    "varientId" TEXT,
    "couponId" TEXT,
    "cartId" TEXT NOT NULL,
    CONSTRAINT "Order_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("creatorId", "id", "price", "productId", "varientId") SELECT "creatorId", "id", "price", "productId", "varientId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_cartId_key" ON "Order"("cartId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
