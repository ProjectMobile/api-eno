/*
  Warnings:

  - Added the required column `eventCode` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "eventCode" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "batch" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "numBatch" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "batch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "batch" ADD CONSTRAINT "batch_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
