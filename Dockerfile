# Etapa 1: Construcción
FROM node:22-alpine AS builder

# Instalar dependencias necesarias
RUN apk update && apk add --no-cache dumb-init

WORKDIR /app
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@10.5.2 --activate

COPY package.json ./
COPY tsconfig.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma/
COPY maxpollo.json ./

RUN pnpm install --frozen-lockfile --shamefully-hoist
COPY . .
RUN pnpm run prisma:generate
RUN pnpm run build
RUN pnpm prune --prod

# Etapa 2: Imagen final
FROM node:22-alpine AS runner

WORKDIR /app

# Instalar dependencias necesarias incluyendo dumb-init
RUN apk add --no-cache libc6-compat dumb-init

# Copiar archivos necesarios
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/maxpollo.json ./

# Configurar pnpm
RUN corepack enable && corepack prepare pnpm@10.5.2 --activate

EXPOSE 3000

# Comando corregido usando dumb-init
CMD ["dumb-init", "sh", "-c", "pnpm run prisma:migrate && node dist/server.js"]