import floor1 from "@/assets/img/T1-LT1.svg";
import floor2 from "@/assets/img/T1-LT2.svg";
import { ReactNode } from "react";

interface MapBackgroundProps {
  children: ReactNode;
  selectedFloor: number;
}

function MapBackground({ children, selectedFloor }: MapBackgroundProps) {
  const floorplan = selectedFloor === 1 ? floor1 : floor2;

  return (
    <svg
      viewBox="0 0 3180 587"
      className="lg:h-[90vh] lg:w-[75vw] h-[85dvh]"
    >
      <image id="background" width="100%" height="100%" href={floorplan} />
      {children}
    </svg>
  );
}

export default MapBackground;
