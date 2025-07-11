// src/pages/Map.tsx
import IndoorMapWrapper from "@/components/IndoorMapWrapper";
import MobileRouteDetails from "@/components/MobileRouteDetails";
import Sidebar from "@/components/Sidebar";
import Toolbar from "@/components/Toolbar";
import useMapData from "@/hooks/useMapData";
import { createContext, useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import { useSearchParams } from "react-router-dom";
import {
  MapDataContextType,
  Navigation,
  NavigationContextType,
} from "../utils/types";
import { resetEdges } from "@/utils/navigationHelper";
import Legend from "@/components/Legend"; // 1. Impor komponen Legend

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);
export const MapDataContext = createContext<MapDataContextType | null>(null);

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Initialize selectedFloor from localStorage, defaulting to 1.
  const [selectedFloor, setSelectedFloor] = useState<number>(() => {
    const savedFloor = localStorage.getItem("selectedFloor");
    return savedFloor ? parseInt(savedFloor, 10) : 1;
  });

  // 2. Determine initial position: Prioritize URL, then use floor-specific default.
  const getInitialPosition = (floor: number) => {
    return searchParams.get("position") || (floor === 1 ? "P3" : "L1");
  };

  const [navigation, setNavigation] = useState<Navigation>({
    start: getInitialPosition(selectedFloor),
    end: "",
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // 3. Save selectedFloor to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("selectedFloor", selectedFloor.toString());
  }, [selectedFloor]);

  // 4. Update the start position when the floor is changed via the dropdown.
  //    This also clears any existing route.
  useEffect(() => {
    const newStartPosition = selectedFloor === 1 ? "P3" : "L5"; //Change default starting poin
    setNavigation({ start: newStartPosition, end: "" });
    resetEdges(); // Clear any drawn navigation paths
  }, [selectedFloor]);


  // 5. Keep the URL in sync with the current start position.
  useEffect(() => {
    // Only update the URL if the start position is not empty
    if (navigation.start) {
      setSearchParams({ position: navigation.start });
    }
  }, [navigation.start, setSearchParams]);

  const navigationValue: NavigationContextType = {
    navigation,
    setNavigation,
    isEditMode,
    setIsEditMode,
    selectedFloor,
    setSelectedFloor,
  };

  const mapData = useMapData(selectedFloor);

  return (
    <MapDataContext.Provider value={mapData}>
      <NavigationContext.Provider value={navigationValue}>
        <div className="flex bg-gray-100 text-gray-800 relative overflow-hidden w-full h-screen">
          {isDesktop && <Sidebar selectedFloor={selectedFloor} />}
          <main
            className={`flex w-full ${
              isDesktop && "-ml-96"
            } justify-center flex-grow flex-col md:p-10 p-2 transition-all duration-150 ease-in lg:ml-0`}
          >
            <Toolbar
              selectedFloor={selectedFloor}
              setSelectedFloor={setSelectedFloor}
            />
            <div className="center w-full h-full">
              <IndoorMapWrapper selectedFloor={selectedFloor} />
            </div>
          </main>
          {navigation.end && isMobile && <MobileRouteDetails />}
          {isDesktop && <Legend />} {/* 2. Tambahkan komponen Legend di sini */}
        </div>
      </NavigationContext.Provider>
    </MapDataContext.Provider>
  );
}

export default Map;