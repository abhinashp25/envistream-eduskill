require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const connectDB = require("./config/db");
const corsMiddleware = require("./middleware/cors");

const app = express();

// Security: sets X-Frame-Options, X-Content-Type-Options, HSTS, etc.
app.use(helmet());
app.use(corsMiddleware);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "envistream-backend" });
});

// Routes go here as they're built — none needed yet, homepage is static.
// Example, once the course/internship schema is finalized:
// app.use("/api/courses", require("./routes/courseRoutes"));
// app.use("/api/internships", require("./routes/internshipRoutes"));
// app.use("/api/enquiries", require("./routes/enquiryRoutes"));

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  });
