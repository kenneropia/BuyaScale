/*
  Warnings:

  - You are about to drop the column `productId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `varientId` on the `Order` table. All the data in the column will be lost.
  - Made the column `productId` on table `CartItem` required. This step will fail if there are existing NULL values in that column.
  - Made the column `varientId` on table `CartItem` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "productId" TEXT NOT NULL,
    "varientId" TEXT NOT NULL,
    "price" DECIMAL,
    "orderId" TEXT,
    "subscriptionId" TEXT,
    CONSTRAINT "CartItem_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CartItem_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CartItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "CartItem_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_CartItem" ("creatorId", "id", "orderId", "price", "productId", "quantity", "subscriptionId", "varientId") SELECT "creatorId", "id", "orderId", "price", "productId", "quantity", "subscriptionId", "varientId" FROM "CartItem";
DROP TABLE "CartItem";
ALTER TABLE "new_CartItem" RENAME TO "CartItem";
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "price" INTEGER NOT NULL,
    "creatorId" TEXT,
    "couponId" TEXT,
    "ordered" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Order_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Order_couponId_fkey" FOREIGN KEY ("couponId") REFERENCES "Coupon" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("couponId", "creatorId", "id", "price", "quantity", "status") SELECT "couponId", "creatorId", "id", "price", "quantity", "status" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
