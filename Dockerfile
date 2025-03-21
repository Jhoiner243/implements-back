# Etapa 1: Construcción
FROM node:22-alpine AS builder

# Configuración del entorno
WORKDIR /app

# Instalar dependencias del sistema
RUN apk add --no-cache libc6-compat

# Habilitar pnpm globalmente
RUN corepack enable && corepack prepare pnpm@10.5.2 --activate

# Copiar solo los archivos necesarios para instalar dependencias (optimiza el cache)
COPY package.json ./
COPY tsconfig.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./

# Instalar todas las dependencias con hoisting apropiado para resolver problemas de módulos
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Copiar el resto del código fuente
COPY . .

# Instalar explícitamente prisma y generar el cliente
RUN pnpm run prisma:generate

# Compilar el proyecto
RUN pnpm run build

# Eliminar dependencias de desarrollo después de generar el cliente Prisma
RUN pnpm prune --prod

# Etapa 2: Imagen final
FROM node:22-alpine AS runner

WORKDIR /app

# Instalar solo las dependencias necesarias
RUN apk add --no-cache libc6-compat

# Copiar archivos compilados desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/tsconfig*.json ./
COPY --from=builder /app/prisma ./

# Exponer el puerto
EXPOSE 3000

# Habilitar pnpm globalmente en la etapa de ejecución
RUN corepack enable && corepack prepare pnpm@10.5.2 --activate
RUN pnpx prisma:migrate

# Comando de inicio
CMD ["sh", "-c", "node", "dist/server.js"]
