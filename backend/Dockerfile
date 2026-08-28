# ============================================================
# BACKEND - BUILD STAGE
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Upgrade npm
RUN npm install -g npm@12.0.2

COPY package*.json ./

RUN npm ci --omit=dev \
    && npm cache clean --force

COPY . .


# ============================================================
# BACKEND - PRODUCTION STAGE
# ============================================================
FROM node:22-alpine

WORKDIR /app

# Update Alpine packages and npm
RUN apk update \
    && apk upgrade --no-cache \
    && npm install -g npm@12.0.2 \
    && npm cache clean --force

# Copy production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy application
COPY --from=builder /app ./

EXPOSE 5000

CMD ["node", "server.js"]
