import React, { useContext, useState } from "react";
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
import { graphData1, graphData2 } from "@/store/graphData";

function IndoorMapWrapper({ selectedFloor }: { selectedFloor: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  
  // --- DIHAPUS --- State untuk hover tidak lagi diperlukan
  // const [hoveredObjectData, setHoveredObjectData] = useState(...);

  const positionRadius = isMobile ? 10 : 5;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;

  const graphData = selectedFloor === 1 ? graphData1 : graphData2;

  // Fungsi helper untuk mengambil gambar pertama tetap kita gunakan
  const getFirstImage = (gambarData?: string): string => {
    if (!gambarData || typeof gambarData !== "string") return "";
    try {
      const imageArray = JSON.parse(gambarData);
      if (Array.isArray(imageArray) && imageArray.length > 0) {
        return imageArray[0].replace(/\\/g, "/");
      }
    } catch (e) {
      console.error("Gagal parse JSON gambar, format mungkin string biasa:", gambarData, e);
      return gambarData.replace(/\\/g, "/");
    }
    return "";
  };

  async function handleObjectClick(e: React.MouseEvent<SVGPathElement>) {
    const targetId = (e.target as HTMLElement).id;
    const selectedObject = objects.find((obj) => obj.uid === targetId);
    if (selectedObject?.id) {
      setObject(selectedObject);
      setModalOpen(true);
    } else {
      toast.error("Object not found");
    }
  }

  // --- DIHAPUS --- Fungsi untuk handle mouse enter dan leave tidak diperlukan lagi
  // function handleObjectMouseEnter(...) {}
  // function handleObjectMouseLeave(...) {}

  const handlePositionClick = (e: React.MouseEvent<SVGPathElement>) => {
    if (isEditMode) {
      const vertexId = (e.target as HTMLElement).id;
      setNavigation({ start: vertexId });
      setIsEditMode(false);
    }
  };

  function handleNavigationClick() {
    setModalOpen(false);
    navigateToObject(object.name, navigation, setNavigation, selectedFloor);
  }
  
  // --- DIHAPUS --- Variabel untuk satu gambar hover tidak diperlukan
  // const firstImageName = hoveredObjectData ? getFirstImage(...) : "";

  return (
    <div className="relative w-full h-full bg-white center">
      <ObjectDetailsModal
        open={modalOpen}
        object={object}
        onClose={() => setModalOpen((cur) => !cur)}
        objectNavigation={handleNavigationClick}
      />

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
              // --- DIHAPUS --- Props untuk hover tidak lagi dikirim
              // handleObjectMouseEnter={handleObjectMouseEnter}
              // handleObjectMouseLeave={handleObjectMouseLeave}
              className={isEditMode ? "" : "hover:cursor-pointer"}
            />
            <Paths selectedFloor={selectedFloor} graphData={graphData} />
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
            
            {/* --- BAGIAN BARU UNTUK MERENDER SEMUA GAMBAR --- */}
            {/* Kita lakukan looping pada semua 'objects' yang ada */}
            {objects.map((obj) => {
              // Cari posisi (vertex) dari object ini di graphData
              const vertex = graphData.vertices.find(v => v.id === obj.uid);
              // Ambil nama file gambar pertama
              const imageName = getFirstImage(obj.gambar);

              // Jika posisi dan nama gambar ditemukan, render gambarnya
              if (vertex && imageName) {
                return (
                  <image
                    key={obj.uid} // Key unik untuk setiap gambar dalam loop
                    href={`http://localhost:8080/uploads/${imageName}`}
                    x={vertex.cx - 15} // Posisi X
                    y={vertex.cy - 15} // Posisi Y
                    width="30"
                    height="30"
                    className="pointer-events-none" // Agar gambar tidak mengganggu klik
                  />
                );
              }
              return null; // Jika tidak ada gambar/posisi, jangan render apa-apa
            })}

          </MapBackground>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}

export default IndoorMapWrapper;