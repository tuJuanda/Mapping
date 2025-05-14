import { graphData1, graphData2 } from "@/store/graphData";

interface PathsProps {
  selectedFloor: number;
}

function Paths({ selectedFloor = 2 }: PathsProps) {
  const graphData = selectedFloor === 1 ? graphData1 : graphData2;

  return (
    <g id="Edges">
      {graphData.edges.map((edge: { id: string; from: string; to: string }) => {
        const fromVertex = graphData.vertices.find(
          (vertex: { id: string; cx: number; cy: number }) => vertex.id === edge.from
        );
        const toVertex = graphData.vertices.find(
          (vertex: { id: string; cx: number; cy: number }) => vertex.id === edge.to
        );
        if (fromVertex && toVertex) {
          const pathClassName = "path";
          const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
          return <path key={edge.id} id={edge.id} className={pathClassName} d={pathD} />;
        }
        return null;
      })}
      <path id="navigation-route" className="path" d="" fill="none" />
    </g>
  );
}

export default Paths;
