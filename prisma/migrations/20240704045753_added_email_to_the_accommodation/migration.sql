-- CreateTable
CREATE TABLE "accommodation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "image" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accommodation_email_key" ON "accommodation"("email");

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
