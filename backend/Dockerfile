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
FROM node:22-alpine

WORKDIR /app

# Update Alpine packages to their latest security fixes
RUN apk upgrade --no-cache

# Copy production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy the complete application
COPY --from=builder /app ./

EXPOSE 5000

CMD ["node", "server.js"]
