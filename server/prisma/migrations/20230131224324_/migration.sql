/*
  Warnings:

  - You are about to drop the `_CartToProduct` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CartToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `previewImage` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `homeId` on the `UserAddress` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_CartToProduct_B_index";

-- DropIndex
DROP INDEX "_CartToProduct_AB_unique";

-- DropIndex
DROP INDEX "_CartToUser_B_index";

-- DropIndex
DROP INDEX "_CartToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CartToProduct";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CartToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "productId" TEXT,
    "varientId" TEXT,
    "price" DECIMAL,
    CONSTRAINT "Cart_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Cart_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cart" ("id", "price") SELECT "id", "price" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
CREATE TABLE "new_UserAddress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "homeIdNumber" TEXT,
    "closestLandmark" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "lga" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "note" TEXT NOT NULL
);
INSERT INTO "new_UserAddress" ("closestLandmark", "id", "lga", "note", "postalCode", "street", "town") SELECT "closestLandmark", "id", "lga", "note", "postalCode", "street", "town" FROM "UserAddress";
DROP TABLE "UserAddress";
ALTER TABLE "new_UserAddress" RENAME TO "UserAddress";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
