import { GraphData } from "@/utils/types";

interface PathsProps {
  selectedFloor: number;
  graphData: GraphData;
}

function Paths({ selectedFloor, graphData }: PathsProps) {
  const groupId = `Edges-Floor-${selectedFloor}`;

  return (
    <g id={groupId}>
      {graphData.edges.map((edge) => {
        const fromVertex = graphData.vertices.find((v) => v.id === edge.from);
        const toVertex = graphData.vertices.find((v) => v.id === edge.to);
        if (fromVertex && toVertex) {
          const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
          return <path key={edge.id} id={edge.id} className="path" d={pathD} />;
        }
        return null;
      })}
      <path id="navigation-route" className="path" d="" fill="none" />
    </g>
  );
}

export default Paths;
