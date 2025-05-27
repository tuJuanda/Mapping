// src/routes/tenantRoutes.ts
import { Router, Request, Response } from 'express';
import { db } from '@/lib/data'; // Pastikan ini path-nya sesuai
import { RowDataPacket } from 'mysql2';

const router = Router();

// 1. Definisikan tipe data tenant dari database
interface TenantData extends RowDataPacket {
  id: string;       // atau number, sesuaikan dengan database
  uid: string;
  nama: string;
  decs: string;
  lantai: string;
  gambar: string;   // diasumsikan berupa string JSON array
}

// 2. Endpoint GET tenant by ID
router.get("/", async (req: Request, res: Response) => {
  try {
    const [rows] = await db.execute<TenantData[]>("SELECT * FROM tenant");

    const tenants = rows.map((data) => {
      let images: string[] = [];
      try {
        if (data.gambar && typeof data.gambar === "string") {
          const parsed = JSON.parse(data.gambar);
          if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
            images = parsed;
          }
        }
      } catch (err) {
        console.error("Failed to parse gambar JSON:", err);
      }

      return {
        id: data.id,
        uid: data.uid,
        name: data.nama,
        desc: data.decs,
        floor: data.lantai,
        images,
      };
    });

    res.status(200).json(tenants);
  } catch (error) {
    console.error("Failed to fetch tenants:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
