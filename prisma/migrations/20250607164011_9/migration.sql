-- AlterTable
ALTER TABLE "Clientes" ADD COLUMN     "idCliente" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Factura" ADD COLUMN     "idFactura" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Productos" ADD COLUMN     "idProducto" SERIAL NOT NULL;
