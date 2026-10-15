import { edgeKey } from "./graph.js";
function indexGraph(graph) {
  const nodes = new Map(graph.nodes.map((n) => [n.id, n]));
  const adjacency = new Map(graph.nodes.map((n) => [n.id, []]));
  const weights = new Map();
  for (const edge of graph.edges) {
    const a = nodes.get(edge.source),
      b = nodes.get(edge.target);
    const weight = graph.pixelMode
      ? Math.round(Math.hypot(a.x - b.x, a.y - b.y) / 20)
      : edge.weight;
    weights.set(edge.id, weight);
    adjacency.get(edge.source).push({ id: edge.target, edge, weight });
    adjacency.get(edge.target).push({ id: edge.source, edge, weight });
  }
  return { adjacency, weights };
}

const step = (
  message,
  current = null,
  edge = null,
  frontier = [],
  visited = [],
) => ({
  message,
  current,
  edge,
  frontier: [...frontier],
  visited: [...visited],
});
function reconstruct(parent, target) {
  const path = [];
  for (let n = target; n != null; n = parent.get(n)) path.push(n);
  return path.reverse();
}
function pathWeight(weights, path) {
  let total = 0;
  for (let i = 1; i < path.length; i++) {
    const value = weights.get(edgeKey(path[i - 1], path[i]));
    if (value === undefined) return Infinity;
    total += value;
  }
  return total;
}
export function* traversal(graph, type, source, target) {
  const { adjacency, weights } = indexGraph(graph);
  const visited = new Set([source]),
    frontier = [source],
    parent = new Map([[source, null]]);
  yield step(`Start ${type} from ${source}.`, source, null, frontier, []);
  while (frontier.length) {
    const current = type === "BFS" ? frontier.shift() : frontier.pop();
    yield step(
      `Visit ${current}. ${type === "BFS" ? "Queue" : "Stack"}: ${frontier.join(", ") || "empty"}.`,
      current,
      null,
      frontier,
      visited,
    );
    if (current === target) {
      const path = reconstruct(parent, target);
      return {
        path,
        distance: pathWeight(weights, path),
        message: `${type} complete · ${path.length - 1} edges`,
        details: `Path: ${path.join(" → ")}\nEdges: ${path.length - 1}\nTotal weight: ${pathWeight(weights, path)}\nComplexity: O(V + E)`,
      };
    }
    const next = [...adjacency.get(current)];
    if (type === "DFS") next.reverse();
    for (const n of next) {
      yield step(
        `Explore ${current} → ${n.id}.`,
        current,
        n.edge.id,
        frontier,
        visited,
      );
      if (!visited.has(n.id)) {
        visited.add(n.id);
        parent.set(n.id, current);
        frontier.push(n.id);
      }
    }
  }
  return {
    path: [],
    distance: null,
    message: `${type} complete · no path found`,
    details: `No path connects ${source} to ${target}.\nComplexity: O(V + E)`,
  };
}
export function* dijkstra(graph, source, target) {
  const { adjacency } = indexGraph(graph);
  const distances = new Map(graph.nodes.map((n) => [n.id, Infinity])),
    parent = new Map([[source, null]]),
    visited = new Set();
  distances.set(source, 0);
  yield step(`Start Dijkstra from ${source}. Distance: 0.`, source);
  while (visited.size < graph.nodes.length) {
    let current = null,
      minimum = Infinity;
    for (const node of graph.nodes)
      if (!visited.has(node.id) && distances.get(node.id) < minimum) {
        current = node.id;
        minimum = distances.get(node.id);
      }
    if (!current || distances.get(current) === Infinity) break;
    visited.add(current);
    yield step(
      `Visit ${current}. Shortest distance so far: ${distances.get(current)}.`,
      current,
      null,
      [],
      visited,
    );
    if (current === target) {
      const path = reconstruct(parent, target);
      return {
        path,
        distance: distances.get(target),
        message: `Dijkstra complete · total weight ${distances.get(target)}`,
        details: `Shortest path: ${path.join(" → ")}\nTotal weight: ${distances.get(target)}\nEdges: ${path.length - 1}\nComplexity: O(V² + E)`,
      };
    }
    for (const n of adjacency.get(current)) {
      if (visited.has(n.id)) continue;
      const candidate = distances.get(current) + n.weight;
      if (candidate < distances.get(n.id)) {
        distances.set(n.id, candidate);
        parent.set(n.id, current);
        yield step(
          `Update ${n.id}: distance ${candidate} via ${current}.`,
          current,
          n.edge.id,
          [],
          visited,
        );
      }
    }
  }
  return {
    path: [],
    distance: null,
    message: "Dijkstra complete · no path found",
    details: `No path connects ${source} to ${target}.`,
  };
}
export function* nearestNeighbour(graph, source) {
  const { adjacency } = indexGraph(graph);
  const path = [source],
    visited = new Set(path);
  let distance = 0;
  yield step(`Start nearest neighbour at ${source}.`, source);
  while (path.length < graph.nodes.length) {
    const current = path.at(-1);
    let next = null;
    for (const candidate of adjacency.get(current))
      if (
        !visited.has(candidate.id) &&
        (!next ||
          candidate.weight < next.weight ||
          (candidate.weight === next.weight &&
            candidate.id.localeCompare(next.id) < 0))
      )
        next = candidate;
    if (!next)
      return {
        path: [],
        distance: null,
        message: "Nearest neighbour · no complete tour",
        details: `The greedy route reached a dead end at ${current}.\nPartial route: ${path.join(" → ")}\nTry a different start node or add connections.`,
      };
    distance += next.weight;
    path.push(next.id);
    visited.add(next.id);
    yield {
      ...step(
        `Choose ${next.id} (weight ${next.weight}). Total: ${distance}.`,
        next.id,
        next.edge.id,
        [],
        visited,
      ),
      partialPath: [...path],
    };
  }
  const closing = adjacency.get(path.at(-1)).find((n) => n.id === source);
  if (path.length === 1)
    return {
      path,
      distance: 0,
      message: "Nearest neighbour complete · total weight 0",
      details: `Tour: ${source}\nTotal weight: 0`,
    };
  if (!closing)
    return {
      path: [],
      distance: null,
      message: "Nearest neighbour · no return connection",
      details: `Route: ${path.join(" → ")}\nThere is no connection back to ${source}.`,
    };
  path.push(source);
  distance += closing.weight;
  return {
    path,
    distance,
    message: `Nearest neighbour complete · total weight ${distance}`,
    details: `Tour: ${path.join(" → ")}\nTotal weight: ${distance}\nThis greedy heuristic does not guarantee an optimal tour.\nComplexity: O(V²)`,
  };
}
export function* bruteForce(graph, source) {
  if (graph.nodes.length > 10)
    throw new Error("Brute force supports at most 10 nodes.");
  if (graph.nodes.length === 1)
    return {
      path: [source],
      distance: 0,
      message: "Brute force complete · total weight 0",
      details: `Tour: ${source}\nTotal weight: 0`,
    };
  let best = Infinity,
    bestPath = [],
    checked = 0;
  const { weights } = indexGraph(graph);
  function* search(path, left, total) {
    if (!left.length) {
      checked++;
      const closing = weights.get(edgeKey(path.at(-1), source));
      if (closing !== undefined && total + closing < best) {
        best = total + closing;
        bestPath = [...path, source];
        yield {
          ...step(
            `Better tour found: ${best}.`,
            path.at(-1),
            edgeKey(path.at(-1), source),
            [],
            path,
          ),
          partialPath: bestPath,
          best: true,
        };
      } else if (checked % 250 === 0)
        yield step(
          `Compared ${checked.toLocaleString()} candidate tours. Best: ${best === Infinity ? "—" : best}.`,
        );
      return;
    }
    for (let i = 0; i < left.length; i++) {
      const next = left[i],
        weight = weights.get(edgeKey(path.at(-1), next));
      if (weight !== undefined)
        yield* search(
          [...path, next],
          [...left.slice(0, i), ...left.slice(i + 1)],
          total + weight,
        );
    }
  }
  yield step(`Compare all possible tours starting at ${source}.`, source);
  yield* search(
    [source],
    graph.nodes.map((n) => n.id).filter((id) => id !== source),
    0,
  );
  return {
    path: bestPath,
    distance: best === Infinity ? null : best,
    message: bestPath.length
      ? `Brute force complete · optimal weight ${best}`
      : "Brute force complete · no complete tour",
    details: bestPath.length
      ? `Optimal tour: ${bestPath.join(" → ")}\nTotal weight: ${best}\nCandidate tours: ${checked.toLocaleString()}\nComplexity: O(V!)`
      : "No tour visits every node and returns to the start.\nAdd the missing connections and try again.",
  };
}
export const ALGORITHMS = {
  BFS: {
    label: "Breadth-first search",
    short: "BFS",
    complexity: "O(V + E)",
    description: "Explore level by level to find the fewest-edge path.",
  },
  DFS: {
    label: "Depth-first search",
    short: "DFS",
    complexity: "O(V + E)",
    description: "Follow each branch as far as possible before backtracking.",
  },
  Dijkstra: {
    label: "Dijkstra’s algorithm",
    short: "Dijkstra",
    complexity: "O(V² + E)",
    description: "Find the path with the smallest total edge weight.",
  },
  BruteForce: {
    label: "TSP · Brute force",
    short: "Brute force",
    complexity: "O(V!)",
    description:
      "Compare every possible tour. Best for small graphs (up to 10 nodes).",
  },
  Nearest: {
    label: "TSP · Nearest neighbour",
    short: "Nearest neighbour",
    complexity: "O(V²)",
    description: "Build a tour by choosing the closest unvisited neighbour.",
  },
};
export function createAlgorithm(
  graph,
  type,
  source = graph.source,
  target = graph.target,
) {
  if (!graph.nodes.length) throw new Error("Add at least one node first.");
  if (!graph.nodes.some((n) => n.id === source))
    throw new Error("Choose a source node first.");
  if (
    ["BFS", "DFS", "Dijkstra"].includes(type) &&
    !graph.nodes.some((n) => n.id === target)
  )
    throw new Error("Choose a target node first.");
  if (type === "BFS" || type === "DFS")
    return traversal(graph, type, source, target);
  if (type === "Dijkstra") return dijkstra(graph, source, target);
  if (type === "Nearest") return nearestNeighbour(graph, source);
  if (type === "BruteForce") return bruteForce(graph, source);
  throw new Error("Unknown algorithm.");
}
