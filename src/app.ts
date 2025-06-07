import express from "express";
import cors from "cors";
import tenantRoute from "./route/tenantRoute";

const app = express();
const PORT = 8080;

// --- Middleware ---
// 1. Enable CORS for all requests
app.use(cors());
// 2. Enable the Express app to parse JSON bodies
app.use(express.json());

// --- Routes ---
// Health check route
app.get("/", (_req, res) => {
  res.send("API is running! Use /api/tenants/floor/:lantai to get tenant data.");
});

// Use the tenant routes with a prefix
app.use("/api/tenants", tenantRoute);

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});