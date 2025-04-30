import React, { useContext, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { MapDataContext, NavigationContext } from "../pages/Map";
import "../styles/map.css";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "../utils/types";
import { MapBackground, Paths, Positions, Objects } from "./IndoorMap";

import Controls from "./MapControls";
import ObjectDetailsModal from "./Modals/ObjectDetailsModal";
import { navigateToObject } from "@/utils/navigationHelper";
import { toast } from "react-toastify";

function IndoorMapWrapper({ selectedFloor }: { selectedFloor: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  const positionRadius = isMobile ? 10 : 5;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

  // Tutup modal saat pindah dari lantai 2 ke lantai lain
  useEffect(() => {
    if (selectedFloor !== 2 && modalOpen) {
      setModalOpen(false);
    }
  }, [selectedFloor, modalOpen]);

  async function handleObjectClick(e: React.MouseEvent<SVGPathElement>) {
    // Batasi interaksi hanya pada lantai 2
    if (selectedFloor !== 2 || isEditMode) return;

    const targetId = (e.target as HTMLElement).id;
    const selectedObject = objects.find((obj) => obj.name === targetId);
    if (selectedObject?.id) {
      setObject(selectedObject);
      setModalOpen(true);
    } else {
      toast.error("Object not found");
    }
  }

  const handlePositionClick = (e: React.MouseEvent<SVGPathElement>) => {
    if (isEditMode) {
      const vertexId = (e.target as HTMLElement).id;
      setNavigation({ start: vertexId });
      setIsEditMode(false);
    }
  };

  function handleNavigationClick() {
    setModalOpen(false);
    navigateToObject(object.name, navigation, setNavigation);
  }

  return (
    <div className="relative w-full h-full bg-white center">
      {selectedFloor === 2 && (
        <ObjectDetailsModal
          open={modalOpen}
          object={object}
          onClose={() => setModalOpen((cur) => !cur)}
          objectNavigation={handleNavigationClick}
        />
      )}

      <TransformWrapper
        centerOnInit
        minScale={isMobile ? 0.4 : 1}
        doubleClick={{ mode: "reset" }}
        initialScale={isMobile ? 0.4 : 1}
        smooth={true}
        wheel={{ smoothStep: 0.01 }}
      >
        <TransformComponent wrapperClass="bg-white">
          <MapBackground selectedFloor={selectedFloor}>
            <Objects
              selectedFloor={selectedFloor}
              handleObjectClick={handleObjectClick}
              className={
                isEditMode ? "" : "hover:cursor-pointer hover:opacity-50"
              }
            />
            <Paths />
            <Positions
              positionRadius={positionRadius}
              handlePositionClick={handlePositionClick}
              className={
                isEditMode
                  ? "opacity-100 cursor-pointer hover:fill-[#488af4] "
                  : "opacity-0"
              }
              navigation={navigation}
            />
          </MapBackground>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}

export default IndoorMapWrapper;
