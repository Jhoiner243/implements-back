# Etapa 1: Builder
FROM node:22-alpine AS builder
WORKDIR /app

# Instalamos dumb-init y Corepack
RUN apk update \
 && apk add --no-cache dumb-init libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@10.5.2 --activate

# Cache de dependencias
COPY package.json pnpm-lock.yaml tsconfig.json maxpollo.json ./
COPY prisma ./prisma/
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Build
COPY . .
RUN pnpm run prisma:generate \
 && pnpm run build

# Etapa 2: Runner
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Instalación runtime
RUN apk update \
 && apk add --no-cache dumb-init libc6-compat \
 && corepack enable \
 && corepack prepare pnpm@10.5.2 --activate

# Copia solo artefactos y deps prod
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/maxpollo.json ./maxpollo.json
COPY --from=builder /app/.env ./.env

EXPOSE 3003

ENTRYPOINT ["dumb-init", "--"]
CMD ["sh", "-c", "pnpm run prisma:migrate && node dist/server.js"]
