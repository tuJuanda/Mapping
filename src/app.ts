import express from "express";
import tenantRoutes from "./route/tenantRoute"; // atau path sesuai strukturmu

const app = express();
const PORT = 8080;

app.use(express.json());

// Routes
app.use("/tenants", tenantRoutes); // ini akan menangani GET /tenants

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
