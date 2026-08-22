# ============================================================
# BACKEND - BUILD STAGE
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests first for Docker layer caching
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev \
    && npm cache clean --force

# Copy application source
COPY . .


# ============================================================
# BACKEND - PRODUCTION STAGE
# ============================================================
FROM node:22-alpine

WORKDIR /app

# Copy only the production application from the builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/server.js ./server.js

# Copy any additional application directories/files if your
# server.js requires them.
# Uncomment/add them if needed, for example:
#
# COPY --from=builder /app/routes ./routes
# COPY --from=builder /app/controllers ./controllers
# COPY --from=builder /app/config ./config

EXPOSE 5000

# npm is NOT required at runtime.
CMD ["node", "server.js"]
