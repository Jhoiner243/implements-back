-- CreateTable
CREATE TABLE "GrowtRate" (
    "id" TEXT NOT NULL,
    "porcentaje" DOUBLE PRECISION NOT NULL,
    "fechaActual" TEXT NOT NULL,
    "fechaAnterior" TEXT NOT NULL,
    "tipoPeriodo" "TipoPeriodo" NOT NULL,

    CONSTRAINT "GrowtRate_pkey" PRIMARY KEY ("id")
);
