import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { contactRouter } from "./routes/contact";
import { healthRouter } from "./routes/health";
import { errorHandler } from "./middleware/errorHandler";
import { notFound } from "./middleware/notFound";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "https://ernestannor.com",
      "https://www.ernestannor.com",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
