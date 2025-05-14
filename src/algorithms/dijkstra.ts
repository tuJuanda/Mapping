import { graphData1, graphData2, VertexData } from "@/store/graphData";

type NodeId = string;
interface Node {
  id: NodeId;
  priority: number;
}

class PriorityQueue {
  values: Node[];

  constructor() {
    this.values = [];
  }

  enqueue(id: NodeId, priority: number) {
    const newNode: Node = { id, priority };
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0 && end) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null &&
            leftChild &&
            rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class DijkstraCalculator {
  adjacencyList: { [key: NodeId]: { id: NodeId; weight: number }[] };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: NodeId) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: NodeId, vertex2: NodeId, weight = 1) {
    this.adjacencyList[vertex1].push({ id: vertex2, weight });
    this.adjacencyList[vertex2].push({ id: vertex1, weight });
  }

  calculateShortestPath(start: NodeId, finish: NodeId) {
    const nodes = new PriorityQueue();
    const distances: { [key: NodeId]: number } = {};
    const previous: { [key: NodeId]: NodeId } = {};
    const path = [];
    let smallest: string | null = null;

    for (const vertex in this.adjacencyList) {
      distances[vertex] = vertex === start ? 0 : Infinity;
      nodes.enqueue(vertex, distances[vertex]);
      delete previous[vertex];
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().id;

      if (smallest === finish) {
        while (smallest && previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor of this.adjacencyList[smallest]) {
          const candidate = distances[smallest] + neighbor.weight;
          const nextNeighbor = neighbor.id;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    const finalPath = smallest
      ? path.concat(smallest).reverse()
      : path.reverse();

    return finalPath.length <= 1 ? [] : finalPath;
  }
}

function calculateDistance(vertex1: VertexData, vertex2: VertexData) {
  const dx = vertex2.cx - vertex1.cx;
  const dy = vertex2.cy - vertex1.cy;
  return Math.sqrt(dx * dx + dy * dy);
}

// ==============================
// Build Graphs for Two Floors
// ==============================

export const graphFloor1 = new DijkstraCalculator();
export const graphFloor2 = new DijkstraCalculator();

function buildGraph(graph: DijkstraCalculator, graphData: typeof graphData1) {
  graphData.vertices.forEach((vertex) => {
    graph.addVertex(vertex.id);
  });

  graphData.edges.forEach((edge) => {
    const fromVertex = graphData.vertices.find(v => v.id === edge.from);
    const toVertex = graphData.vertices.find(v => v.id === edge.to);

    if (fromVertex && toVertex) {
      const length = calculateDistance(fromVertex, toVertex);
      graph.addEdge(edge.from, edge.to, length);
    }
  });
}

buildGraph(graphFloor1, graphData1);
buildGraph(graphFloor2, graphData2);
