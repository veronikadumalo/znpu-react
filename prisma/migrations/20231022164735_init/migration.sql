/*
  Warnings:

  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LinkToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_B_fkey";

-- DropTable
DROP TABLE "Link";

-- DropTable
DROP TABLE "_LinkToUser";

-- CreateTable
CREATE TABLE "Deparments" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Deparments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deparmentId" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_deparmentId_fkey" FOREIGN KEY ("deparmentId") REFERENCES "Deparments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
