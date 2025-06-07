// src/hooks/useMapData.ts

import { useState, useEffect } from "react";
import { ObjectItem } from "@/utils/types";

function useMapData(selectedFloor: number) {
  const [objects, setObjects] = useState<ObjectItem[]>([]);

  async function fetchData() {
    if (selectedFloor === undefined || selectedFloor === null) return;

    try {
      // Corrected the fetch URL to include '/api/tenants'
      const res = await fetch(`http://localhost:8080/api/tenants/floor/${selectedFloor}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setObjects(data);
    } catch (error) {
      console.error("Error fetching tenants:", error);
      setObjects([]); // reset on error
    }
  }

  useEffect(() => {
    fetchData();
  }, [selectedFloor]);

  return { objects, refetchData: fetchData, setObjects };
}

export default useMapData;