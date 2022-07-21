-- CreateTable
CREATE TABLE "favoriteEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "favoriteEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favoriteEvent" ADD CONSTRAINT "favoriteEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favoriteEvent" ADD CONSTRAINT "favoriteEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
