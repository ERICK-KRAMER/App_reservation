/*
  Warnings:

  - You are about to drop the column `adderes` on the `accommodation` table. All the data in the column will be lost.
  - Added the required column `address` to the `accommodation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accommodation" DROP COLUMN "adderes",
ADD COLUMN     "address" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
