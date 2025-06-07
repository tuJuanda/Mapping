import { getDbConnection } from "@/lib/data";
import { Request, Response, Router, RequestHandler } from "express";
import { RowDataPacket } from "mysql2";

// Define an interface for the data shape from the database
interface TenantData extends RowDataPacket {
  id: number;
  uid: string;
  name: string;
  desc: string;
  floor: string;
  gambar: string;
}

// Explicitly type the router
const router: Router = Router();

// Define the handler function with a clear type
const getTenantsByFloor: RequestHandler = async (req: Request, res: Response) => {
  try {
    const db = await getDbConnection();
    const { lantai } = req.params;

    if (!lantai) {
      // FIX: Removed the 'return' keyword from the line below.
      res.status(400).json({ message: "Missing floor parameter" });
      return; // Use a standalone return to exit the function.
    }

    // Use SQL aliases (e.g., nama AS name) to match the frontend's expected field names
    const [rows] = await db.execute<TenantData[]>(
      "SELECT id, uid, nama AS name, decs AS `desc`, lantai AS floor, gambar FROM tenant WHERE lantai = ?",
      [lantai]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error("Failed to fetch tenants by floor:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Apply the handler to the route
router.get("/floor/:lantai", getTenantsByFloor);

export default router;