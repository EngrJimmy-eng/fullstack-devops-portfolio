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

# Copy production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy the complete application
COPY --from=builder /app ./

EXPOSE 5000

# Run Node directly — npm is not required to start the application
CMD ["node", "server.js"]
