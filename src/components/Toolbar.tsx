import { NavigationContext } from "@/pages/Map";
import { NavigationContextType } from "@/utils/types";
import { useContext } from "react";
import { isDesktop } from "react-device-detect";
import EditPositionButton from "./EditPositionButton";
import DesktopRouteDetails from "./DesktopRouteDetails";
import SearchBar from "./SearchBar";
import FloorDropdown from "@/components/FloorDropDown";

type ToolbarProps = {
  selectedFloor: number;
  setSelectedFloor: (floor: number) => void;
};

function Toolbar({ selectedFloor, setSelectedFloor }: ToolbarProps) {
  const { navigation } = useContext(NavigationContext) as NavigationContextType;

  const handleFloorChange = (floor: number) => {
    setSelectedFloor(floor);
  };

  return (
    <div className="flex space-x-1 mb-4 h-12 relative">
      <SearchBar />
      <EditPositionButton />
      {navigation.end && isDesktop && <DesktopRouteDetails />}
      <FloorDropdown
        selectedFloor={selectedFloor}
        onChange={handleFloorChange}
      />
      <div className="flex-grow" />

      {/* 3. Ikon kompas sekarang akan berada di paling kanan */}
      <img 
        src="src\assets\img\compass.svg" 
        alt="Ikon Kompas"
        className="h-19 w-15 transition-transform "
      />
    </div>
  );
}

export default Toolbar;
