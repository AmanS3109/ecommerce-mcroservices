import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js"; // import user routes
import errorHandler from "./middlewares/errorHandler.js"; // global error handler
import AppError from "./utils/AppError.js";

dotenv.config();

const app = express();

// Parse JSON request bodies
app.use(express.json());

// ✅ Test route
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "User service running 🚀" });
});

// Mount user routes
// All routes in userRouter will be prefixed with /api/users
app.use("/api/users", userRouter);

// ❌ Example error route
app.get("/api/v1/error", (req, res, next) => {
  next(new AppError("This is a custom error", 400));
});

// 404 handler for unknown routes
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
