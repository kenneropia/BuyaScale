-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SubscriptionItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "productId" TEXT NOT NULL,
    "varientId" TEXT,
    "creatorId" TEXT NOT NULL,
    "subscriptionId" TEXT,
    CONSTRAINT "SubscriptionItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SubscriptionItem_varientId_fkey" FOREIGN KEY ("varientId") REFERENCES "Varient" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SubscriptionItem_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SubscriptionItem_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "Subscription" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SubscriptionItem" ("creatorId", "id", "productId", "quantity", "subscriptionId", "varientId") SELECT "creatorId", "id", "productId", "quantity", "subscriptionId", "varientId" FROM "SubscriptionItem";
DROP TABLE "SubscriptionItem";
ALTER TABLE "new_SubscriptionItem" RENAME TO "SubscriptionItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
