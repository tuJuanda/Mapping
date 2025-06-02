// src/routes/tenantRoutes.ts
import { Router, Request, Response } from "express";
import { getDbConnection } from "@/lib/data";
import { RowDataPacket } from "mysql2";

const router = Router();

interface TenantData extends RowDataPacket {
  id: number;       // biasanya id int bukan string
  uid: string;
  nama: string;
  decs: string;
  lantai: string;
  gambar: string;
}

router.get("/floor/:lantai", async (req, res) => {
  try {
    const db = await getDbConnection();
    const lantai = req.params.lantai;
    const [rows] = await db.execute<TenantData[]>(
      "SELECT * FROM tenant WHERE lantai = ?",
      [lantai]
    );

    // map seperti biasa, parsing gambar dll.
    const tenants = rows.map((data) => {
      // parsing images
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
    console.error("Failed to fetch tenants by floor:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
