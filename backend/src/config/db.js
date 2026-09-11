/**
 * Prisma Client Singleton
 *
 * Replaces the old Mongoose connectDB.
 * In development, avoids creating multiple PrismaClient instances
 * due to hot-reload by caching the instance on the global object.
 */

const { PrismaClient } = require("@prisma/client");

const prismaClientSingleton = () => {
  return new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
};

// Prevent multiple instances in development (hot-reload safe)
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

/**
 * Connect and verify the database is reachable.
 * Called once at server startup.
 */
async function connectDB() {
  try {
    await prisma.$connect();
    console.log("✅  PostgreSQL connected via Prisma");
  } catch (err) {
    console.error("❌  Database connection failed:", err.message);
    process.exit(1);
  }
}

module.exports = { prisma, connectDB };
