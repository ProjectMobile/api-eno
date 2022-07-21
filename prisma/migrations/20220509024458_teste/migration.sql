-- AlterTable
ALTER TABLE "event" ADD COLUMN     "eventOf" TEXT;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_eventOf_fkey" FOREIGN KEY ("eventOf") REFERENCES "event"("id") ON DELETE SET NULL ON UPDATE CASCADE;
