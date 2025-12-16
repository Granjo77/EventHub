import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";

import eventsRoutes from "./routes/events.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/events", eventsRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

export default app;