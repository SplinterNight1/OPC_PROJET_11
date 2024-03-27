// Import required packages
const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const swaggerDocs = yaml.load("./swagger.yaml"); // Load Swagger documentation file
const dbConnection = require("./database/connection"); // Assuming this is a database connection module

dotEnv.config(); // Load environment variables from .env file

const app = express(); // Create Express app
const PORT = process.env.PORT || 3001; // Define port

// Connect to the database
dbConnection();

// Handle Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom routes for user API
app.use("/api/v1/user", require("./routes/userRoutes"));

// Serve API documentation using Swagger UI
// Detect if we are not in prod, use a route for exposing swagger docu
if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

// Default route handler For debugging
app.get("/", (req, res, next) => {
  res.send("Hello from my Express server v2!"); // Send a simple message for root route
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
