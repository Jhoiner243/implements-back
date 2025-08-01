/*
  Warnings:

  - Added the required column `indentification` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clientes" ADD COLUMN     "indentification" TEXT NOT NULL;
