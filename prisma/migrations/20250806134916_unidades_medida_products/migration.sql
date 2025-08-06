-- CreateEnum
CREATE TYPE "public"."UnidadesMedidaProducts" AS ENUM ('KGM', 'UND', 'LBR', 'GLL');

-- AlterTable
ALTER TABLE "public"."Productos" ADD COLUMN     "unidadMedida" "public"."UnidadesMedidaProducts" NOT NULL DEFAULT 'KGM';
