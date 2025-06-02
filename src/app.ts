import express from "express";
import tenantRoute from "./route/tenantRoute"; // pastikan ini sesuai path-mu

const app = express();
const PORT = 8080;

app.use(express.json());

// Tambahkan route root di sini:
app.get("/", (req, res) => {
  res.send("API is running! Use /tenant to see tenants.");
});

// Routes
app.use("/tenant", tenantRoute); // ini menangani GET /tenant

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
