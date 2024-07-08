/*
  Warnings:

  - A unique constraint covering the columns `[startDate]` on the table `reservation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[endDate]` on the table `reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reservation_startDate_key" ON "reservation"("startDate");

-- CreateIndex
CREATE UNIQUE INDEX "reservation_endDate_key" ON "reservation"("endDate");
