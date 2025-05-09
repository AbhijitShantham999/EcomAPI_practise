import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.config.js";

import userRouter from "./routes/user.route.js";
// import productRouter from "./routes/product.route.js";
// import orderRouter from "./routes/order.route.js";
// import paymentRouter from "./routes/payment.route.js"

dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000; // Fallback port

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`Home Page, ${process.env.TEST}`);
});

app.use("/api/v1/user", userRouter);
// app.use("api/v1/product", productRouter);
// app.use("api/v1/order", orderRouter);
// app.use("api/v1/payment", paymentRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

