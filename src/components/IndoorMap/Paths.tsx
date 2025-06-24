import { GraphData } from "@/utils/types";

interface PathsProps {
  selectedFloor: number;
  graphData: GraphData;
}

function Paths({ selectedFloor, graphData }: PathsProps) {
  const groupId = `Edges-Floor-${selectedFloor}`;
  const navPathId = `navigation-route-${selectedFloor}`; // ID unik navigasi per lantai

  return (
    <g id={groupId}>
      {/* Hanya render edge yang sesuai dengan lantai */}
      {graphData.edges
        .filter((edge) => edge.floor === selectedFloor)
        .map((edge) => {
          const fromVertex = graphData.vertices.find((v) => v.id === edge.from);
          const toVertex = graphData.vertices.find((v) => v.id === edge.to);

          if (!fromVertex || !toVertex) return null;

          const pathD = `M${fromVertex.cx} ${fromVertex.cy} L${toVertex.cx} ${toVertex.cy}`;
          return (
           <path
              key={edge.id}
              id={edge.id}
              className="edge-path"
              d={pathD}
             // stroke="black"
             // fill="none" 
            /> 
          );
        })}

      {/* Path navigasi unik per lantai */}
      <path
        id={navPathId}
        className="navigation-route"
        d=""
        stroke="#488af4"
        strokeWidth={3}
        fill="none"
      />
    </g>
  );
}

export default Paths;
