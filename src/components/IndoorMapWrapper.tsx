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

// 🆕 Import graph data per lantai
import { graphData1, graphData2 } from "@/store/graphData";

function IndoorMapWrapper({ selectedFloor }: { selectedFloor: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  const positionRadius = isMobile ? 10 : 5;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

  // 🆕 Pilih graph data berdasarkan lantai
  const graphData = selectedFloor === 1 ? graphData1 : graphData2;

  useEffect(() => {
    if (selectedFloor !== 2 && modalOpen) {
      setModalOpen(false);
    }
  }, [selectedFloor, modalOpen]);

  async function handleObjectClick(e: React.MouseEvent<SVGPathElement>) {
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
    navigateToObject(object.name, navigation, setNavigation, selectedFloor); // 🆕 pastikan helper pakai graphData jika perlu
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
            {/* 🆕 Kirim graphData dan selectedFloor ke Paths */}
            <Paths selectedFloor={selectedFloor} graphData={graphData} />
            {/* 🆕 Kirim graphData ke Positions */}
            <Positions
              graphData={graphData}
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
