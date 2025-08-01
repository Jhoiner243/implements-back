/*
  Warnings:

  - You are about to drop the column `indentification` on the `Clientes` table. All the data in the column will be lost.
  - Added the required column `identification` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Clientes" DROP COLUMN "indentification",
ADD COLUMN     "identification" TEXT NOT NULL;
