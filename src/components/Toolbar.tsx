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
    </div>
  );
}

export default Toolbar;
