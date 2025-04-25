-- CreateEnum
CREATE TYPE "StatusFactura" AS ENUM ('Pagada', 'Pendiente', 'Fiada', 'Vencida');

-- AlterEnum
ALTER TYPE "TipoPeriodo" ADD VALUE 'Diario';

-- AlterTable
ALTER TABLE "Factura" ADD COLUMN     "status" "StatusFactura" NOT NULL DEFAULT 'Pendiente';
