/*
  Warnings:

  - A unique constraint covering the columns `[creatorId,productId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "userAddressId" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserAddress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "homeIdNumber" TEXT,
    "closestLandmark" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    CONSTRAINT "UserAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserAddress" ("closestLandmark", "homeIdNumber", "id", "lga", "note", "postalCode", "street", "town") SELECT "closestLandmark", "homeIdNumber", "id", "lga", "note", "postalCode", "street", "town" FROM "UserAddress";
DROP TABLE "UserAddress";
ALTER TABLE "new_UserAddress" RENAME TO "UserAddress";
CREATE UNIQUE INDEX "UserAddress_userId_key" ON "UserAddress"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Review_creatorId_productId_key" ON "Review"("creatorId", "productId");
