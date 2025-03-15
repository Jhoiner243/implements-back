/*
  Warnings:

  - You are about to drop the column `clienteId` on the `Factura` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Factura` table. All the data in the column will be lost.
  - Added the required column `id_cliente` to the `Factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_usuario` to the `Factura` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusEmail" AS ENUM ('Success', 'Failed');

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_userId_fkey";

-- AlterTable
ALTER TABLE "Factura" DROP COLUMN "clienteId",
DROP COLUMN "userId",
ADD COLUMN     "id_cliente" TEXT NOT NULL,
ADD COLUMN     "id_usuario" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "EmailLog" (
    "id" TEXT NOT NULL,
    "facturaId" TEXT NOT NULL,
    "status" "StatusEmail" NOT NULL,

    CONSTRAINT "EmailLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
