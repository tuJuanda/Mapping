// useMapData.ts
import { useState, useEffect } from "react";
import { getObjects } from "../services/mapServices";
import { ObjectItem } from "@/utils/types";

function useMapData() {
  const [objects, setObjects] = useState<ObjectItem[]>([]);

  const fetchData = async () => {
    try {
      const objectsData = await getObjects();
      setObjects(objectsData);
    } catch (error) {
      console.error("Error fetching objects:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { objects, refetchData: fetchData };
}

export default useMapData;
