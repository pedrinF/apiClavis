-- CreateTable
CREATE TABLE "Visit" (
    "id" SERIAL NOT NULL,
    "nameVisitor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);
