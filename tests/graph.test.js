import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import {
  sampleGraph,
  addNode,
  removeNode,
  fullyConnect,
  setEdge,
  edgeKey,
  weightOf,
  exportXml,
  importXml,
} from "../src/lib/graph.js";
import { createAlgorithm } from "../src/lib/algorithms.js";
const Parser = new JSDOM("").window.DOMParser;
function finish(iterator) {
  let next,
    count = 0;
  do {
    next = iterator.next();
    assert.ok(++count < 100000);
  } while (!next.done);
  return next.value;
}
function solve(g, type) {
  return finish(createAlgorithm(g, type));
}
const complete = () => ({
  nodes: ["A", "B", "C", "D"].map((id, i) => ({ id, x: 100 + i * 80, y: 100 })),
  edges: [
    ["A", "B", 1],
    ["B", "C", 1],
    ["C", "D", 1],
    ["D", "A", 1],
    ["A", "C", 4],
    ["B", "D", 4],
  ].map(([source, target, weight]) => ({
    id: edgeKey(source, target),
    source,
    target,
    weight,
  })),
  source: "A",
  target: "C",
  pixelMode: false,
});
test("sample preserves the original seven nodes and twelve undirected weights", () => {
  const g = sampleGraph();
  assert.equal(g.nodes.length, 7);
  assert.equal(g.edges.length, 12);
  assert.equal(g.edges.find((e) => e.id === "A:B").weight, 3);
  assert.equal(g.edges.find((e) => e.id === "F:G").weight, 1);
});
test("add and remove maintain unique node names, remove incident edges, and clear deleted route selection", () => {
  let g = addNode(sampleGraph());
  assert.equal(g.nodes.at(-1).id, "H");
  g = removeNode(g, "A");
  assert.equal(g.source, "");
  assert.ok(g.edges.every((e) => e.source !== "A" && e.target !== "A"));
  g = addNode(g);
  assert.equal(g.nodes.at(-1).id, "A");
  assert.equal(new Set(g.nodes.map((n) => n.id)).size, g.nodes.length);
});
test("adding is capped at twenty-six nodes", () => {
  let g = sampleGraph();
  for (let i = 0; i < 30; i++) g = addNode(g);
  assert.equal(g.nodes.length, 26);
  assert.equal(addNode(g), g);
});
test("fully connect adds every pair without overwriting existing weights", () => {
  const g = fullyConnect(sampleGraph());
  assert.equal(g.edges.length, 21);
  assert.equal(g.edges.find((e) => e.id === "A:B").weight, 3);
  assert.equal(fullyConnect(g).edges.length, 21);
});
test("connection editing does not duplicate edges or create self-loops", () => {
  const g = setEdge(sampleGraph(), "B", "A", 14);
  assert.equal(g.edges.length, 12);
  assert.equal(g.edges.find((e) => e.id === "A:B").weight, 14);
  assert.equal(setEdge(g, "A", "A", 1), g);
});
test("distance weights follow node coordinates and retain manual weights", () => {
  const g = { ...sampleGraph(), pixelMode: true };
  const e = g.edges.find((e) => e.id === "A:B");
  assert.equal(weightOf(e, g), 14);
  g.nodes = g.nodes.map((n) => (n.id === "B" ? { ...n, y: 365 } : n));
  assert.equal(weightOf(e, g), 10);
  assert.equal(weightOf(e, { ...g, pixelMode: false }), 3);
});
test("BFS finds a two-edge path on the original sample", () => {
  const r = solve(sampleGraph(), "BFS");
  assert.equal(r.path.length - 1, 2);
  assert.equal(r.path[0], "A");
  assert.equal(r.path.at(-1), "G");
});
test("DFS returns a valid source-to-target path", () => {
  const g = sampleGraph(),
    r = solve(g, "DFS");
  assert.equal(r.path[0], "A");
  assert.equal(r.path.at(-1), "G");
  for (let i = 1; i < r.path.length; i++)
    assert.ok(g.edges.some((e) => e.id === edgeKey(r.path[i - 1], r.path[i])));
});
test("Dijkstra finds A–C–F–G with total weight nine", () => {
  const r = solve(sampleGraph(), "Dijkstra");
  assert.deepEqual(r.path, ["A", "C", "F", "G"]);
  assert.equal(r.distance, 9);
});
test("path algorithms handle disconnected graphs", () => {
  const g = { ...sampleGraph(), edges: [] };
  for (const type of ["BFS", "DFS", "Dijkstra"])
    assert.deepEqual(solve(g, type).path, []);
});
test("source equals target returns a zero-length route", () => {
  const g = { ...sampleGraph(), target: "A" };
  for (const type of ["BFS", "DFS", "Dijkstra"]) {
    const r = solve(g, type);
    assert.deepEqual(r.path, ["A"]);
    assert.equal(r.distance, 0);
  }
});
test("Dijkstra supports zero-weight edges", () => {
  const g = {
    nodes: [
      { id: "A", x: 1, y: 1 },
      { id: "B", x: 2, y: 2 },
    ],
    edges: [{ id: "A:B", source: "A", target: "B", weight: 0 }],
    source: "A",
    target: "B",
    pixelMode: false,
  };
  assert.equal(solve(g, "Dijkstra").distance, 0);
});
test("brute-force TSP finds the known optimum and closes the tour", () => {
  const r = solve(complete(), "BruteForce");
  assert.equal(r.distance, 4);
  assert.equal(r.path.length, 5);
  assert.equal(r.path[0], r.path.at(-1));
  assert.equal(new Set(r.path).size, 4);
});
test("nearest neighbour finds a complete tour on a weighted square", () => {
  const r = solve(complete(), "Nearest");
  assert.equal(r.distance, 4);
  assert.deepEqual(r.path, ["A", "B", "C", "D", "A"]);
});
test("both TSP algorithms report missing tours without crashing", () => {
  const g = { ...complete(), edges: [] };
  for (const type of ["BruteForce", "Nearest"])
    assert.deepEqual(solve(g, type).path, []);
});
test("TSP with a single node returns the zero-cost tour", () => {
  const g = {
    nodes: [{ id: "A", x: 100, y: 100 }],
    edges: [],
    source: "A",
    target: "A",
    pixelMode: false,
  };
  for (const type of ["BruteForce", "Nearest"]) {
    assert.deepEqual(solve(g, type).path, ["A"]);
    assert.equal(solve(g, type).distance, 0);
  }
});
test("brute force stops at the ten-node limit", () => {
  let g = sampleGraph();
  for (let i = 0; i < 4; i++) g = addNode(g);
  assert.throws(() => solve(g, "BruteForce"), /at most 10/);
});
test("algorithm steps expose exploration state before the final result", () => {
  const iterator = createAlgorithm(sampleGraph(), "Dijkstra");
  const first = iterator.next();
  assert.equal(first.done, false);
  assert.equal(first.value.current, "A");
  assert.match(first.value.message, /Dijkstra/);
});
test("missing selections and empty graphs are rejected clearly", () => {
  assert.throws(
    () => createAlgorithm({ ...sampleGraph(), nodes: [] }, "BFS"),
    /at least one/,
  );
  assert.throws(
    () => createAlgorithm({ ...sampleGraph(), source: "" }, "BFS"),
    /source/,
  );
  assert.throws(
    () => createAlgorithm({ ...sampleGraph(), target: "" }, "BFS"),
    /target/,
  );
});
test("GraphData XML round-trip preserves positions, route selections, and manual weights", () => {
  const g = sampleGraph(),
    round = importXml(exportXml(g), Parser);
  assert.deepEqual(round.nodes, g.nodes);
  assert.equal(round.source, g.source);
  assert.equal(round.target, g.target);
  assert.equal(round.pixelMode, false);
  assert.deepEqual(
    [...round.edges]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((e) => [e.id, e.weight]),
    [...g.edges]
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((e) => [e.id, e.weight]),
  );
});
test("distance-mode XML round-trip retains the original manual weights", () => {
  const g = { ...sampleGraph(), pixelMode: true },
    round = importXml(exportXml(g), Parser);
  assert.equal(round.pixelMode, true);
  assert.equal(round.edges.find((e) => e.id === "A:B").weight, 3);
  assert.equal(
    weightOf(
      round.edges.find((e) => e.id === "A:B"),
      round,
    ),
    14,
  );
});
test("empty graphs can be saved and loaded", () => {
  const g = { nodes: [], edges: [], source: "", target: "", pixelMode: false };
  assert.deepEqual(importXml(exportXml(g), Parser), g);
});
test("Avalonia XML without a root PixelMode field remains compatible", () => {
  const xml = exportXml({ ...sampleGraph(), pixelMode: true }).replace(
    "  <PixelMode>true</PixelMode>\n</GraphData>",
    "</GraphData>",
  );
  assert.equal(importXml(xml, Parser).pixelMode, true);
});
test("malformed XML, duplicate names, invalid weights and conflicting directions are rejected", () => {
  assert.throws(() => importXml("<wrong/>", Parser), /valid GraphData/);
  assert.throws(
    () =>
      importXml(
        exportXml(sampleGraph()).replace("<Name>B</Name>", "<Name>A</Name>"),
        Parser,
      ),
    /unique/,
  );
  assert.throws(
    () =>
      importXml(
        exportXml(sampleGraph()).replace(
          "<EdgeNumber>3</EdgeNumber>",
          "<EdgeNumber>-1</EdgeNumber>",
        ),
        Parser,
      ),
    /invalid connection/,
  );
  assert.throws(
    () =>
      importXml(
        exportXml(sampleGraph()).replace(
          "<EdgeNumber>3</EdgeNumber>",
          "<EdgeNumber>99</EdgeNumber>",
        ),
        Parser,
      ),
    /different weights/,
  );
});
