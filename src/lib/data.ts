// lib/db.ts
import mysql from "mysql2/promise";

export const db = await mysql.createConnection({
  host: "localhost",    // Sesuaikan
  user: "root",         // Sesuaikan 
  database: "db_map",   // Ini sesuai yang kamu mau
});
