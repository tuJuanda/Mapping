// lib/data.ts
import mysql from "mysql2/promise";

export async function getDbConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // tambahkan ini jika password kosong
    database: "db_map",
  });
  console.log("Database connected successfully");
  return connection;
}
