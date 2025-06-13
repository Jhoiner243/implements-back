/* eslint-disable @typescript-eslint/no-explicit-any */
export function inyectarEmpresaId(data: any, empresaId: string): any {
  if (Array.isArray(data)) {
    return data.map((item) => inyectarEmpresaId(item, empresaId));
  }

  if (typeof data === "object" && data !== null) {
    const nuevo = { ...data };

    // Solo inyectamos si NO lo tiene
    if (!("empresaId" in nuevo)) {
      nuevo.empresaId = empresaId;
    }

    // Buscamos campos anidados (ej: create, connectOrCreate, update, etc.)
    for (const key of Object.keys(nuevo)) {
      if (
        typeof nuevo[key] === "object" &&
        nuevo[key] !== null &&
        ["create", "connectOrCreate", "update", "upsert"].includes(key)
      ) {
        nuevo[key] = inyectarEmpresaId(nuevo[key], empresaId);
      }
    }

    return nuevo;
  }

  return data;
}
