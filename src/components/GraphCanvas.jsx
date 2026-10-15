import { useRef, useState } from "react";
import { edgeKey, weightOf } from "../lib/graph.js";
export default function GraphCanvas({
  graph,
  player,
  onMove,
  onNode,
  onEdge,
  onRemove,
}) {
  const svg = useRef(null),
    drag = useRef(null),
    [dragging, setDragging] = useState(null);
  const width = Math.max(1000, ...graph.nodes.map((n) => n.x + 65)),
    height = Math.max(600, ...graph.nodes.map((n) => n.y + 65));
  const finalEdges = new Set(),
    partialEdges = new Set();
  for (let i = 1; i < (player.result?.path.length || 0); i++)
    finalEdges.add(edgeKey(player.result.path[i - 1], player.result.path[i]));
  for (let i = 1; i < (player.snapshot?.partialPath?.length || 0); i++)
    partialEdges.add(
      edgeKey(
        player.snapshot.partialPath[i - 1],
        player.snapshot.partialPath[i],
      ),
    );
  const nodes = new Map(graph.nodes.map((n) => [n.id, n]));
  function point(e) {
    const matrix = svg.current.getScreenCTM();
    if (!matrix) return null;
    const p = svg.current.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;
    return p.matrixTransform(matrix.inverse());
  }
  function begin(e, node) {
    if (player.busy || e.button !== 0) return;
    const p = point(e);
    if (!p) return;
    drag.current = {
      id: node.id,
      dx: node.x - p.x,
      dy: node.y - p.y,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
    svg.current.setPointerCapture(e.pointerId);
    setDragging(node.id);
    e.preventDefault();
  }
  function move(e) {
    const d = drag.current;
    if (!d) return;
    const p = point(e);
    if (!p) return;
    if (Math.hypot(e.clientX - d.startX, e.clientY - d.startY) > 3)
      d.moved = true;
    if (d.moved)
      onMove(
        d.id,
        Math.max(40, Math.min(width - 40, p.x + d.dx)),
        Math.max(40, Math.min(height - 40, p.y + d.dy)),
      );
  }
  function end(e) {
    const d = drag.current;
    drag.current = null;
    setDragging(null);
    if (svg.current.hasPointerCapture(e.pointerId))
      svg.current.releasePointerCapture(e.pointerId);
    if (d && !d.moved) onNode(d.id);
  }
  return (
    <svg
      ref={svg}
      className={`graph-svg ${dragging ? "dragging" : ""}`}
      role="group"
      aria-label="Interactive graph workspace. Drag nodes, or activate a node to edit its connections."
      viewBox={`0 0 ${width} ${height}`}
      onPointerMove={move}
      onPointerUp={end}
      onPointerCancel={() => {
        drag.current = null;
        setDragging(null);
      }}
    >
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r=".75" fill="#dfd5c8" />
        </pattern>
      </defs>
      <rect width={width} height={height} fill="url(#dot-grid)" opacity=".48" />
      {graph.edges.map((edge) => {
        const a = nodes.get(edge.source),
          b = nodes.get(edge.target),
          active = player.snapshot?.edge === edge.id;
        const color = finalEdges.has(edge.id)
          ? "final"
          : partialEdges.has(edge.id)
            ? "best"
            : active
              ? "exploring"
              : "";
        return (
          <g key={edge.id} className={`graph-edge ${color}`}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
            <line
              className="edge-hit"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              onClick={() => !player.busy && onEdge(edge.id)}
            />
            <g
              role="button"
              tabIndex={player.busy ? -1 : 0}
              aria-label={`Edge ${edge.source} to ${edge.target}, weight ${weightOf(edge, graph)}. Edit weight.`}
              className="weight-label"
              transform={`translate(${(a.x + b.x) / 2},${(a.y + b.y) / 2})`}
              onClick={() => !player.busy && onEdge(edge.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (!player.busy) onEdge(edge.id);
                }
              }}
            >
              <rect x="-17" y="-13" width="34" height="26" rx="8" />
              <text y="1">{weightOf(edge, graph)}</text>
            </g>
          </g>
        );
      })}
      {graph.nodes.map((n) => {
        const state = player.result?.path.includes(n.id)
          ? "path"
          : player.snapshot?.current === n.id
            ? "active"
            : player.snapshot?.visited?.includes(n.id)
              ? "visited"
              : n.id === graph.source
                ? "source"
                : n.id === graph.target
                  ? "target"
                  : "";
        return (
          <g
            key={n.id}
            role="button"
            tabIndex={player.busy ? -1 : 0}
            aria-label={`Node ${n.id}${n.id === graph.source ? ", source" : ""}${n.id === graph.target ? ", target" : ""}. Edit node and connections.`}
            className={`graph-node ${state} ${dragging === n.id ? "is-dragging" : ""}`}
            transform={`translate(${n.x},${n.y})`}
            onPointerDown={(e) => begin(e, n)}
            onContextMenu={(e) => {
              e.preventDefault();
              if (!player.busy) onNode(n.id);
            }}
            onKeyDown={(e) => {
              if (player.busy) return;
              if (
                ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(
                  e.key,
                )
              ) {
                e.preventDefault();
                onMove(
                  n.id,
                  Math.max(
                    40,
                    Math.min(
                      width - 40,
                      n.x +
                        (e.key === "ArrowLeft"
                          ? -10
                          : e.key === "ArrowRight"
                            ? 10
                            : 0),
                    ),
                  ),
                  Math.max(
                    40,
                    Math.min(
                      height - 40,
                      n.y +
                        (e.key === "ArrowUp"
                          ? -10
                          : e.key === "ArrowDown"
                            ? 10
                            : 0),
                    ),
                  ),
                );
              }
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onNode(n.id);
              }
              if (e.key === "Delete") onRemove(n.id);
            }}
          >
            <circle className="node-ring" r="37" />
            <circle className="node-body" r="29" />
            <text y="1">{n.id}</text>
            {n.id === graph.source && (
              <text className="node-tag" y="51">
                SOURCE
              </text>
            )}
            {n.id === graph.target && n.id !== graph.source && (
              <text className="node-tag" y="51">
                TARGET
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
