-- CreateTable
CREATE TABLE "ProfitSummary" (
    "id" TEXT NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "ganancia_total" DOUBLE PRECISION NOT NULL,
    "tipo_periodo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProfitSummary_pkey" PRIMARY KEY ("id")
);
