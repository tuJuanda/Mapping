import { ObjectItem } from "@/utils/types";

// Ambil semua tenant
export async function getObjects(): Promise<ObjectItem[]> {
  try {
    const response = await fetch("http://localhost:8080/tenants");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching tenants:", error);
    return [];
  }
}

// Ambil tenant berdasarkan ID
export async function getObjectById(id: string): Promise<ObjectItem> {
  try {
    const response = await fetch(`http://localhost:8080/tenants/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching tenant with ID ${id}:`, error);
    throw error;
  }
}
