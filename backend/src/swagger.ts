import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "EventHub API",
      version: "1.0.0",
      description: "Simple API for managing events",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: [path.join(__dirname, "./routes/*.ts")],
};

export const swaggerSpec = swaggerJsdoc(options);