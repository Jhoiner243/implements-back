/*
  Warnings:

  - You are about to drop the column `id_usuario` on the `Factura` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_id_usuario_fkey";

-- AlterTable
ALTER TABLE "Factura" DROP COLUMN "id_usuario";
