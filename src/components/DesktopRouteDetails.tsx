// src/components/DesktopRouteDetails.tsx
import { useRouteDetails } from "@/hooks/useRouteDetails";
import { FaX } from "react-icons/fa6";
import { TbRoute } from "react-icons/tb";
import { NavigationContext } from "@/pages/Map"; // Import NavigationContext
import { useContext } from "react"; // Import useContext
import { NavigationContextType } from "@/utils/types"; // Import NavigationContextType

function DesktopRouteDetails() {
  const { selectedFloor } = useContext(NavigationContext) as NavigationContextType; // <-- Dapatkan selectedFloor dari context
  const { object, rightRouteLength, walkingTime, handleLeave } =
    useRouteDetails(selectedFloor); // <-- Lewatkan selectedFloor ke hook

  return (
    <div className="md:w-fit md:visible invisible hidden md:flex flex-row pl-6">
      <div className="flex flex-inline rounded w-full bg-white navigation-info-pulse">
        <div className="w-12 h-12 center flex-none rounded-l text-blue-500 text-xl">
          <TbRoute />
        </div>
        <div className="flex flex-col max-w-32 h-full justify-center break-word">
          <p className="text-gray-900 text-sm font-semibold">{object?.name}</p>
        </div>
        <div className="flex flex-col h-full justify-center px-4">
          <p className="text-gray-500 text-xs">
            {rightRouteLength} m, {walkingTime} min
          </p>
        </div>
        <div className="h-12 w-12 center flex-none rounded-r bg-white text-blue-500 text-xs">
          <button
            className="w-full h-8 center border-gray-300 border-l"
            onClick={handleLeave}
          >
            <FaX className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesktopRouteDetails;