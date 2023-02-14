/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `cartId` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `rating` on the `Review` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Int`.
  - Added the required column `cartItemId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cart";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "productId" TEXT,
    "varientId" TEXT,
    "price" DECIMAL,
    "subscriptionId" TEXT NOT NULL,
    "orderId" TEXT,
    CONSTRAINT "CartItem_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "orderId" TEXT,
    "interval" TEXT NOT NULL DEFAULT 'monthly',
    CONSTRAINT "Subscription_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "price" INTEGER NOT NULL,
    "creatorId" TEXT,
    "productId" TEXT NOT NULL,
    "varientId" TEXT,
    "couponId" TEXT,
    "cartItemId" TEXT NOT NULL,
    CONSTRAINT "Order_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "Order_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "Order_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "Order_cartItemId_fkey" FOREIGN KEY ("cartItemId") REFERENCES "CartItem" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("couponId", "creatorId", "id", "price", "productId", "quantity", "status", "varientId") SELECT "couponId", "creatorId", "id", "price", "productId", "quantity", "status", "varientId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_cartItemId_key" ON "Order"("cartItemId");
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "productId" TEXT,
    "note" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    CONSTRAINT "Review_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("creatorId", "id", "note", "productId", "rating") SELECT "creatorId", "id", "note", "productId", "rating" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_creatorId_productId_key" ON "Review"("creatorId", "productId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_creatorId_key" ON "Subscription"("creatorId");
