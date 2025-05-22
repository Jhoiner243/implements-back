# Etapa 1: Builder
FROM node:22-alpine AS builder
WORKDIR /app

# 1. Instalamos dumb-init y habilitamos Corepack
RUN apk update \
 && apk add --no-cache dumb-init libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@10.5.2 --activate

# 2. Copiamos credenciales y variables de entorno ANTES de instalar
COPY maxpollo.json ./

# 3. Cache de dependencias: manifest y lock
COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY prisma ./prisma/

# 4. Instalamos todas las dependencias (dev + prod)
RUN pnpm install --frozen-lockfile --shamefully-hoist

# 5. Copiamos el resto del código
COPY . .

# 6. Generamos Prisma Client y compilamos
RUN pnpm run prisma:generate \
 && pnpm run build

# Etapa 2: Runner
FROM node:22-alpine AS runner
WORKDIR /app

# Entorno de producción
ENV NODE_ENV=production

# 7. Instalación runtime: dumb-init y Corepack
RUN apk update \
 && apk add --no-cache dumb-init libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@10.5.2 --activate

# 8. Copiamos artefactos y dependencias
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/maxpollo.json ./maxpollo.json

EXPOSE 3003

# 9. ENTRYPOINT y CMD para migraciones y arranque
ENTRYPOINT ["dumb-init", "--"]
CMD ["sh", "-c", "pnpm run prisma:migrate && node dist/server.js"]
