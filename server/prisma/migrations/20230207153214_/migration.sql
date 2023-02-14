-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CartItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creatorId" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "productId" TEXT,
    "varientId" TEXT,
    "price" DECIMAL,
    "orderId" TEXT,
    "subscriptionId" TEXT,
    CONSTRAINT "CartItem_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CartItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "CartItem_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE NO ACTION ON UPDATE CASCADE
);
INSERT INTO "new_CartItem" ("creatorId", "id", "orderId", "price", "productId", "quantity", "subscriptionId", "varientId") SELECT "creatorId", "id", "orderId", "price", "productId", "quantity", "subscriptionId", "varientId" FROM "CartItem";
DROP TABLE "CartItem";
ALTER TABLE "new_CartItem" RENAME TO "CartItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
