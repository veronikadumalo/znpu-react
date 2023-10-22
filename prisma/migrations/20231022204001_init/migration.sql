/*
  Warnings:

  - Made the column `email` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
