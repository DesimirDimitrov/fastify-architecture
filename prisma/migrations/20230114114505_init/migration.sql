/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "examples" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "more_details" TEXT,

    CONSTRAINT "examples_pkey" PRIMARY KEY ("id")
);
