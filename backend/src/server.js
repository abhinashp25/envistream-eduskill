/**
 * Envistream EduSkill — Express Server
 *
 * Stack:
 *   Node.js + Express.js
 *   PostgreSQL + Prisma ORM
 *   JWT Authentication
 *   Cloudinary (file storage)
 *   Groq API (AI assistant)
 */

require("dotenv").config();

const express = require("express");
const helmet  = require("helmet");
const morgan  = require("morgan");

const { connectDB }        = require("./config/db");
const corsMiddleware       = require("./middleware/cors");
const { globalLimiter }   = require("./middleware/rateLimiter");
const { notFound, errorHandler } = require("./middleware/errorHandler");

// ─── Route Imports ────────────────────────────────────────────────────────────

const authRoutes         = require("./routes/authRoutes");
const courseRoutes       = require("./routes/courseRoutes");
const lessonRoutes       = require("./routes/lessonRoutes");
const enrollmentRoutes   = require("./routes/enrollmentRoutes");
const progressRoutes     = require("./routes/progressRoutes");
const quizRoutes         = require("./routes/quizRoutes");
const userRoutes         = require("./routes/userRoutes");
const aiRoutes           = require("./routes/aiRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const paymentRoutes      = require("./routes/paymentRoutes");
const certificateRoutes  = require("./routes/certificateRoutes");
const adminRoutes        = require("./routes/adminRoutes");

// ─── App Setup ────────────────────────────────────────────────────────────────

const app = express();

// ─── Security & Core Middleware ───────────────────────────────────────────────

app.use(helmet());           // sets security headers
app.use(corsMiddleware);      // CORS: allow frontend origin
app.use(globalLimiter);      // global rate limiting
app.use(express.json({ limit: "10mb" }));          // JSON body parser
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // form data

// HTTP request logging (only in development)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ─── Health Check (public) ────────────────────────────────────────────────────

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "envistream-backend",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
});

// ─── API Routes ────────────────────────────────────────────────────────────────

app.use("/api/auth",          authRoutes);
app.use("/api/courses",       courseRoutes);
app.use("/api/lessons",       lessonRoutes);
app.use("/api/enrollments",   enrollmentRoutes);
app.use("/api/progress",      progressRoutes);
app.use("/api/quizzes",       quizRoutes);
app.use("/api/users",         userRoutes);
app.use("/api/ai",            aiRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/payments",      paymentRoutes);
app.use("/api/certificates",  certificateRoutes);
app.use("/api/admin",         adminRoutes);

// ─── 404 + Global Error Handlers (must be last) ───────────────────────────────

app.use(notFound);
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────

const PORT = parseInt(process.env.PORT, 10) || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\n🚀  Envistream EduSkill Backend`);
      console.log(`🌐  Server running on http://localhost:${PORT}`);
      console.log(`📋  Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`\n📡  API Endpoints:`);
      console.log(`    /api/health         — Health check`);
      console.log(`    /api/auth           — Authentication`);
      console.log(`    /api/courses        — Course management`);
      console.log(`    /api/lessons        — Lesson content`);
      console.log(`    /api/enrollments    — Enrollments`);
      console.log(`    /api/progress       — Learning progress`);
      console.log(`    /api/quizzes        — Quizzes & assessments`);
      console.log(`    /api/users          — User management`);
      console.log(`    /api/ai             — AI assistant (Groq)`);
      console.log(`    /api/notifications  — Notifications`);
      console.log(`    /api/payments       — Payments`);
      console.log(`    /api/certificates   — Certificates`);
      console.log(`    /api/admin          — Admin dashboard`);
    });
  })
  .catch((err) => {
    console.error("❌  Failed to start server:", err.message);
    process.exit(1);
  });
