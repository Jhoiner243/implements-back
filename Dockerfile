# Etapa 1: Builder
FROM node:22-alpine AS builder
WORKDIR /app

# 1. Instalamos dumb-init y habilitamos Corepack ANTES de copiar nada
RUN apk update \
 && apk add --no-cache dumb-init libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@10.5.2 --activate

# 2. Copiamos lock y manifiestos para cachear install
COPY package.json pnpm-lock.yaml tsconfig.json maxpollo.json ./
COPY prisma ./prisma/

# 3. Instalamos TODAS las dependencias (dev + prod)
RUN pnpm install --frozen-lockfile --shamefully-hoist

# 4. Copiamos el resto y generamos artefactos
COPY . .
RUN pnpm run prisma:generate \
 && pnpm run build

# Etapa 2: Runner
FROM node:22-alpine AS runner
WORKDIR /app

# 5. Instalamos dumb-init y Corepack (necesario para pnpm en runtime)
RUN apk update \
 && apk add --no-cache dumb-init libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@10.5.2 --activate

# 6. Copiamos solo lo imprescindible: build + prod deps + prisma + config
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/maxpollo.json ./maxpollo.json

EXPOSE 3000

# 7. ENTRYPOINT para manejar migraciones y luego arrancar el server
ENTRYPOINT ["dumb-init", "--"]
CMD ["sh", "-c", "pnpm run prisma:migrate && node dist/server.js"]
