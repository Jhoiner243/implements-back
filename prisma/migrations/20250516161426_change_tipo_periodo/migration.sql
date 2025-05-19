/*
  Warnings:

  - You are about to drop the `Ai_Queries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Detalle_factura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notifications` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `tipo_periodo` on the `ProfitSummary` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Ai_Queries" DROP CONSTRAINT "Ai_Queries_userId_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_factura" DROP CONSTRAINT "Detalle_factura_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_factura" DROP CONSTRAINT "Detalle_factura_productoId_fkey";

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_id_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Notifications" DROP CONSTRAINT "Notifications_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFavorite" DROP CONSTRAINT "ProductFavorite_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFavorite" DROP CONSTRAINT "ProductFavorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "StockHistory" DROP CONSTRAINT "StockHistory_productoId_fkey";

-- AlterTable
ALTER TABLE "ProfitSummary" DROP COLUMN "tipo_periodo",
ADD COLUMN     "tipo_periodo" "TipoPeriodo" NOT NULL;

-- DropTable
DROP TABLE "Ai_Queries";

-- DropTable
DROP TABLE "Detalle_factura";

-- DropTable
DROP TABLE "Notifications";

-- DropTable
DROP TABLE "tokens";

-- CreateTable
CREATE TABLE "DetalleFactura" (
    "id" TEXT NOT NULL,
    "facturaId" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetalleFactura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiQuery" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiQuery_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Factura" ADD CONSTRAINT "Factura_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleFactura" ADD CONSTRAINT "DetalleFactura_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFavorite" ADD CONSTRAINT "ProductFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFavorite" ADD CONSTRAINT "ProductFavorite_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiQuery" ADD CONSTRAINT "AiQuery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockHistory" ADD CONSTRAINT "StockHistory_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailLog" ADD CONSTRAINT "EmailLog_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "Factura"("id") ON DELETE CASCADE ON UPDATE CASCADE;
