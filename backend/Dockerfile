# ============================================================
# BACKEND - BUILD STAGE
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev \
    && npm cache clean --force

COPY . .

# ============================================================
# BACKEND - PRODUCTION STAGE
# ============================================================
FROM alpine:3.24

WORKDIR /app

# Install only the runtime libraries needed by Node
RUN apk add --no-cache libstdc++ \
    && addgroup -S node \
    && adduser -S node -G node

# Copy Node.js itself — NOT npm
COPY --from=builder /usr/local/bin/node /usr/local/bin/node

# Copy production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy application
COPY --from=builder /app ./

RUN chown -R node:node /app

USER node

EXPOSE 5000

CMD ["node", "server.js"]
