import express from "express";
import cors from "cors";
import tenantRoute from "./route/tenantRoute";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Definisi __dirname untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Bagian 3: Menyajikan File Gambar (Static Files) ---
// Inilah baris kunci yang menghubungkan URL dengan folder fisik.

// 1. Tentukan lokasi folder gambar fisik di komputer Anda.
//    Naik 2 direktori dari `.../Mapping/src` ke `.../AP/`
//    Lalu masuk ke `Admin-Dashboard/public/uploads`
const staticFolderPath = path.join(__dirname, '..', '..', 'Admin-Dashboard', 'public', 'uploads');

// 2. Beri tahu Express:
//    - Jika ada request ke URL yang diawali '/uploads' (misal: /uploads/logo.png)
//    - Sajikan file dari folder fisik yang didefinisikan di `staticFolderPath`
app.use('/uploads', express.static(staticFolderPath));

// --- Bagian 4: Rute API Anda ---
// Rute untuk data dari database, dll.
app.get("/", (_req, res) => {
  res.send("API is running! Use /api/tenants/floor/:lantai to get tenant data.");
});

// Semua rute di bawah /api/tenants akan ditangani oleh file tenantRoute.ts
app.use("/api/tenants", tenantRoute); //

// --- Bagian 5: Menjalankan Server ---
app.listen(PORT, () => {
  console.log(`✅ Server is running with Express.js at http://localhost:${PORT}`);
  console.log(`Menyajikan gambar dari: ${staticFolderPath}`); // Log untuk memastikan path sudah benar

});