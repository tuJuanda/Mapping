import { useState, useEffect } from "react";
import { ObjectItem } from "@/utils/types";

function useMapData(selectedFloor: number) {
  const [objects, setObjects] = useState<ObjectItem[]>([]);

  async function fetchData() {
    try {
      const res = await fetch(`http://localhost:8080/tenant/floor/${selectedFloor}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setObjects(data);
    } catch (error) {
      console.error(error);
      setObjects([]); // reset on error
    }
  }

  useEffect(() => {
    fetchData();
  }, [selectedFloor]);

  return { objects, refetchData: fetchData };
}

export default useMapData;
