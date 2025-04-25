-- CreateEnum
CREATE TYPE "TipoPeriodo" AS ENUM ('Mensual', 'Semanal', 'Anual');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "token" TEXT;
