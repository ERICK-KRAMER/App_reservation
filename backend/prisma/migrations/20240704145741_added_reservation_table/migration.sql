-- CreateTable
CREATE TABLE "reservation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
