-- CreateTable
CREATE TABLE "accommodation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adderes" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accommodation_pkey" PRIMARY KEY ("id")
);
