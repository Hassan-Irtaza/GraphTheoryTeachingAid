export const edgeKey = (a, b) => [a, b].sort().join(":");
export const weightOf = (edge, graph) => {
  if (!graph.pixelMode) return edge.weight;
  const a = graph.nodes.find((n) => n.id === edge.source);
  const b = graph.nodes.find((n) => n.id === edge.target);
  return Math.round(Math.hypot(a.x - b.x, a.y - b.y) / 20);
};
export function sampleGraph() {
  const nodes = [
    ["A", 155, 165],
    ["B", 155, 435],
    ["C", 420, 165],
    ["D", 300, 435],
    ["E", 825, 165],
    ["F", 625, 435],
    ["G", 825, 435],
  ].map(([id, x, y]) => ({ id, x, y }));
  const edges = [
    ["A", "B", 3],
    ["A", "D", 6],
    ["A", "C", 5],
    ["B", "D", 2],
    ["C", "D", 2],
    ["C", "F", 3],
    ["C", "G", 7],
    ["C", "E", 6],
    ["D", "F", 9],
    ["E", "F", 5],
    ["E", "G", 2],
    ["F", "G", 1],
  ].map(([source, target, weight]) => ({
    id: edgeKey(source, target),
    source,
    target,
    weight,
  }));
  return { nodes, edges, source: "A", target: "G", pixelMode: false };
}
export function addNode(graph) {
  const id = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .find((c) => !graph.nodes.some((n) => n.id === c));
  if (!id) return graph;
  const count = graph.nodes.length;
  return {
    ...graph,
    nodes: [
      ...graph.nodes,
      { id, x: 110 + (count % 6) * 145, y: 100 + Math.floor(count / 6) * 115 },
    ],
  };
}
export function removeNode(graph, id) {
  return {
    ...graph,
    nodes: graph.nodes.filter((n) => n.id !== id),
    edges: graph.edges.filter((e) => e.source !== id && e.target !== id),
    source: graph.source === id ? "" : graph.source,
    target: graph.target === id ? "" : graph.target,
  };
}
export function setEdge(graph, a, b, weight) {
  if (
    a === b ||
    !graph.nodes.some((n) => n.id === a) ||
    !graph.nodes.some((n) => n.id === b)
  )
    return graph;
  const id = edgeKey(a, b);
  return {
    ...graph,
    edges: graph.edges.some((e) => e.id === id)
      ? graph.edges.map((e) => (e.id === id ? { ...e, weight } : e))
      : [...graph.edges, { id, source: a, target: b, weight }],
  };
}
export function fullyConnect(graph) {
  let result = graph;
  for (let i = 0; i < graph.nodes.length; i++)
    for (let j = i + 1; j < graph.nodes.length; j++) {
      const a = graph.nodes[i].id,
        b = graph.nodes[j].id;
      if (!result.edges.some((e) => e.id === edgeKey(a, b)))
        result = setEdge(result, a, b, 1);
    }
  return result;
}
export function neighbors(graph, id) {
  return graph.edges
    .filter((e) => e.source === id || e.target === id)
    .map((e) => ({
      id: e.source === id ? e.target : e.source,
      edge: e,
      weight: weightOf(e, graph),
    }));
}
function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
export function exportXml(graph) {
  const nodes = graph.nodes
    .map(
      (n) =>
        `    <NodeData>\n      <Name>${escapeXml(n.id)}</Name>\n      <Connections>\n${neighbors(
          graph,
          n.id,
        )
          .map(
            ({ id, edge, weight }) =>
              `        <ConnectionData><StartNodeLetter>${n.id}</StartNodeLetter><EndNodeLetter>${id}</EndNodeLetter><EdgeNumber>${weight}</EdgeNumber><PreviousEdgeNumber>${edge.weight}</PreviousEdgeNumber><PixelMode>${graph.pixelMode}</PixelMode></ConnectionData>`,
          )
          .join(
            "\n",
          )}\n      </Connections>\n      <LocationOnGraph><X>${n.x - 30}</X><Y>${n.y - 30}</Y></LocationOnGraph>\n    </NodeData>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="utf-8"?>\n<GraphData xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">\n  <Nodes>\n${nodes}\n  </Nodes>\n  <SourceNodeLetter>${escapeXml(graph.source)}</SourceNodeLetter>\n  <TargetNodeLetter>${escapeXml(graph.target)}</TargetNodeLetter>\n  <PixelMode>${graph.pixelMode}</PixelMode>\n</GraphData>`;
}
export function importXml(text, Parser = globalThis.DOMParser) {
  if (text.length > 2_000_000)
    throw new Error("This graph file is too large (maximum 2 MB).");
  const doc = new Parser().parseFromString(text, "application/xml");
  if (
    doc.querySelector("parsererror") ||
    doc.documentElement.tagName !== "GraphData"
  )
    throw new Error("Choose a valid GraphData XML file.");
  const value = (el, tag, fallback = "") =>
    el.querySelector(tag)?.textContent?.trim() ?? fallback;
  const nodeEls = [...doc.querySelectorAll("Nodes > NodeData")];
  if (nodeEls.length > 26)
    throw new Error("A graph can contain at most 26 nodes.");
  const ids = new Set();
  const nodes = nodeEls.map((el, i) => {
    const id = value(el, "Name");
    if (!/^[A-Z]$/.test(id) || ids.has(id))
      throw new Error("Node names must be unique letters A–Z.");
    ids.add(id);
    const x =
      Number(value(el, "LocationOnGraph > X", String(80 + (i % 6) * 145))) + 30;
    const y =
      Number(
        value(el, "LocationOnGraph > Y", String(70 + Math.floor(i / 6) * 115)),
      ) + 30;
    if (
      !Number.isFinite(x) ||
      !Number.isFinite(y) ||
      x < 0 ||
      y < 0 ||
      x > 10000 ||
      y > 10000
    )
      throw new Error("The graph contains invalid node positions.");
    return { id, x, y };
  });
  const connections = [...doc.querySelectorAll("ConnectionData")];
  const pixelMode =
    value(
      doc.documentElement,
      ":scope > PixelMode",
      connections.some((el) => value(el, "PixelMode") === "true")
        ? "true"
        : "false",
    ) === "true";
  const edges = new Map();
  for (const node of nodeEls)
    for (const el of node.querySelectorAll("Connections > ConnectionData")) {
      const source = value(el, "StartNodeLetter", value(node, "Name")),
        target = value(el, "EndNodeLetter");
      const savedWeight = Number(value(el, "EdgeNumber", "1"));
      const previous = Number(
        value(el, "PreviousEdgeNumber", String(savedWeight)),
      );
      const weight =
        value(el, "PixelMode") === "true" && previous > 0
          ? previous
          : savedWeight;
      if (
        !ids.has(source) ||
        !ids.has(target) ||
        source === target ||
        !Number.isSafeInteger(weight) ||
        weight < 0 ||
        weight > 1_000_000
      )
        throw new Error("The graph contains an invalid connection or weight.");
      const id = edgeKey(source, target);
      if (edges.has(id) && edges.get(id).weight !== weight)
        throw new Error(
          "This file has different weights in opposite directions. This teaching aid uses undirected graphs.",
        );
      edges.set(id, { id, source, target, weight });
    }
  const source = value(doc.documentElement, "SourceNodeLetter"),
    target = value(doc.documentElement, "TargetNodeLetter");
  if ((source && !ids.has(source)) || (target && !ids.has(target)))
    throw new Error("The source or target is missing from the graph.");
  return { nodes, edges: [...edges.values()], source, target, pixelMode };
}
