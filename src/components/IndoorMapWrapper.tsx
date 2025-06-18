import React, { useContext, useState, useEffect } from "react"; // 1. Import useEffect
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

// 2. Definisikan tipe untuk state posisi logo yang akan dihitung
type LogoPosition = { cx: number; cy: number };
type LogoPositionsMap = { [uid: string]: LogoPosition };

function IndoorMapWrapper({ selectedFloor }: { selectedFloor: number }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [object, setObject] = useState<ObjectItem>({} as ObjectItem);
  const positionRadius = isMobile ? 10 : 5;
  const { navigation, setNavigation, isEditMode, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const graphData = selectedFloor === 1 ? graphData1 : graphData2;

  // 3. State baru untuk menyimpan hasil kalkulasi posisi logo
  const [logoPositions, setLogoPositions] = useState<LogoPositionsMap>({});

  // 4. useEffect untuk menghitung posisi secara otomatis setelah render
  useEffect(() => {
    // Jika tidak ada object, jangan lakukan apa-apa
    if (objects.length === 0) {
      setLogoPositions({}); // Kosongkan state jika tidak ada objek
      return;
    }

    const newPositions: LogoPositionsMap = {};

    objects.forEach(obj => {
      // Cari elemen SVG di DOM berdasarkan uid object
      const element = document.getElementById(obj.uid);

      if (element) {
        try {
          // Lakukan perhitungan Bounding Box untuk mendapatkan pusat geometri
          const bbox = (element as unknown as SVGGraphicsElement).getBBox();
          const centerX = bbox.x + bbox.width / 2;
          const centerY = bbox.y + bbox.height / 2;
          
          // Simpan hasil perhitungan
          newPositions[obj.uid] = { cx: centerX, cy: centerY };
        } catch (e) {
          console.error(`Gagal menghitung BBox untuk UID: ${obj.uid}`, e);
        }
      }
    });

    // Update state dengan semua posisi yang baru dihitung
    // Ini akan memicu render ulang untuk menampilkan logo
    setLogoPositions(newPositions);

    // Dependency array: Jalankan efek ini setiap kali daftar 'objects' atau 'selectedFloor' berubah
  }, [objects, selectedFloor]);


  const getFirstImage = (gambarData?: string): string => {
    if (!gambarData || typeof gambarData !== "string") return "";
    try {
      const imageArray = JSON.parse(gambarData);
      if (Array.isArray(imageArray) && imageArray.length > 0) {
        return imageArray[0].replace(/\\/g, "/");
      }
    } catch (e) {
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
            
            {/* 5. Bagian render logo, sekarang menggunakan state 'logoPositions' */}
            {objects.map((obj) => {
              const imageName = getFirstImage(obj.gambar);
              // Ambil posisi dari state hasil kalkulasi
              const calculatedPosition = logoPositions[obj.uid];

              // Render HANYA JIKA gambar ada DAN posisi sudah berhasil dihitung
              if (imageName && calculatedPosition) {
                return (
                  <image
                    key={obj.uid}
                    href={`http://localhost:8080/uploads/${imageName}`}
                    x={calculatedPosition.cx - 15}
                    y={calculatedPosition.cy - 15}
                    width="30"
                    height="30"
                    className="pointer-events-none"
                  />
                );
              }
              return null;
            })}
          </MapBackground>
        </TransformComponent>
        <Controls />
      </TransformWrapper>
    </div>
  );
}

export default IndoorMapWrapper;