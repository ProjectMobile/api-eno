/*
  Warnings:

  - The primary key for the `partner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `partner` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "partner" DROP CONSTRAINT "partner_pkey",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "lat" DOUBLE PRECISION,
ADD COLUMN     "long" DOUBLE PRECISION,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "webSite" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "partner_pkey" PRIMARY KEY ("id");
