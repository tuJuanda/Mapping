import { Dispatch, SetStateAction } from "react";
import { graphFloor1, graphFloor2 } from "../algorithms/dijkstra";
import { Navigation, NavigationContextType, ObjectItem } from "./types";
import { graphData1, graphData2 } from "@/store/graphData";
import { toast } from "react-toastify";

export let routeLength = 0;

// Dapatkan graph dan data berdasarkan vertex
function getGraphAndDataByVertexId(vertexId: string) {
  const inFloor1 = graphData1.vertices.find((v) => v.id === vertexId);
  const inFloor2 = graphData2.vertices.find((v) => v.id === vertexId);

  if (inFloor1) return { graph: graphFloor1, graphData: graphData1, floor: 1 };
  if (inFloor2) return { graph: graphFloor2, graphData: graphData2, floor: 2 };

  return null;
}

// Dapatkan vertex berdasarkan nama objek
function findVertexByObjectId(objectId: string) {
  return (
    graphData1.vertices.find((v) => v.objectName === objectId) ||
    graphData2.vertices.find((v) => v.objectName === objectId)
  );
}

// Fungsi utama navigasi
export function navigateToObject(
  selectedObjectId: string,
  navigation: NavigationContextType["navigation"],
  setNavigation: NavigationContextType["setNavigation"],
  selectedFloor: number
) {
  const target = findVertexByObjectId(selectedObjectId);
  if (!target) {
    console.error("Target not found");
    toast.error("Target not found");
    return;
  }

  const graphInfo = getGraphAndDataByVertexId(navigation.start);
  const targetGraphInfo = getGraphAndDataByVertexId(target.id);

  if (
    !graphInfo ||
    !targetGraphInfo ||
    graphInfo.graph !== targetGraphInfo.graph
  ) {
    toast.error("Start and target are not on the same floor");
    return;
  }

  if (graphInfo.floor !== selectedFloor) {
    toast.error("Objek tidak berada di lantai yang dipilih");
    return;
  }
  const { graph, graphData, floor } = graphInfo;
  const shortestPath = graph.calculateShortestPath(navigation.start, target.id);

  const pathString = shortestPath
    .slice(1)
    .map((vertexId) => {
      const vertex = graphData.vertices.find((v) => v.id === vertexId);
      return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
    })
    .join(" ");

  const startVertex = graphData.vertices.find((v) => v.id === navigation.start);
  const pathId = `navigation-route-${floor}`;
  const navigationRoutePath = document.getElementById(pathId);

  if (navigationRoutePath && startVertex) {
    navigationRoutePath.setAttribute(
      "d",
      `M${startVertex.cx} ${startVertex.cy} ${pathString}`
    );

    navigationRoutePath.classList.remove("path-once", "path-active");
    navigationRoutePath.classList.add("path-once");

    navigationRoutePath.addEventListener(
      "animationend",
      () => {
        navigationRoutePath.classList.remove("path-once");
        navigationRoutePath.classList.add("path-active");
      },
      { once: true }
    );
  }

  setNavigation((prev) => ({
    ...prev,
    end: selectedObjectId,
  }));
}

// Reset semua edge path
export function resetEdges() {
  document.getElementById("navigation-route-1")?.setAttribute("d", "");
  document.getElementById("navigation-route-2")?.setAttribute("d", "");

  [...graphData1.edges, ...graphData2.edges].forEach((edge) => {
    const element = document.getElementById(edge.id);
    if (element) {
      element.classList.remove("path-active");
    }
  });
}

// Navigasi berurutan dengan delay
export function navigateWithDelay(
  objects: ObjectItem[],
  index: number,
  delay: number,
  navigation: Navigation,
  setNavigation: Dispatch<SetStateAction<Navigation>>,
  selectedFloor: number
) {
  if (index < objects.length) {
    const obj = objects[index];
    navigateToObject(obj.name, navigation, setNavigation, selectedFloor);

    setTimeout(() => {
      navigateWithDelay(
        objects,
        index + 1,
        delay,
        navigation,
        setNavigation,
        selectedFloor
      );
    }, delay);
  }
}
