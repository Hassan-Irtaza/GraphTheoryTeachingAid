import { useRef, useState } from "react";
import Icon from "./components/Icon.jsx";
import Dialog from "./components/Dialog.jsx";
import GraphCanvas from "./components/GraphCanvas.jsx";
import Representations from "./components/Representations.jsx";
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
} from "./lib/graph.js";
import { ALGORITHMS } from "./lib/algorithms.js";
import { useAlgorithmPlayer } from "./lib/useAlgorithmPlayer.js";

function NodeEditor({ graph, id, onChange, onClose, onRemove }) {
  const [rename, setRename] = useState(id),
    [error, setError] = useState("");
  function renameNode(e) {
    e.preventDefault();
    const value = rename.trim().toUpperCase();
    if (!/^[A-Z]$/.test(value)) {
      setError("Choose one letter from A to Z.");
      return;
    }
    if (value !== id && graph.nodes.some((n) => n.id === value)) {
      setError("That name is already in use.");
      return;
    }
    onChange({
      ...graph,
      nodes: graph.nodes.map((n) => (n.id === id ? { ...n, id: value } : n)),
      edges: graph.edges.map((edge) => {
        const source = edge.source === id ? value : edge.source,
          target = edge.target === id ? value : edge.target;
        return { ...edge, source, target, id: edgeKey(source, target) };
      }),
      source: graph.source === id ? value : graph.source,
      target: graph.target === id ? value : graph.target,
    });
    onClose();
  }
  return (
    <Dialog title={`Node ${id}`} onClose={onClose}>
      <p className="dialog-description">
        A small point with plenty of possibilities.
      </p>
      <form onSubmit={renameNode} className="rename-form">
        <label htmlFor="node-name">Node name</label>
        <div>
          <input
            id="node-name"
            maxLength="1"
            value={rename}
            onChange={(e) => {
              setRename(e.target.value.toUpperCase());
              setError("");
            }}
            autoComplete="off"
          />
          <button className="button" type="submit">
            Rename
          </button>
        </div>
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
      </form>
      <div className="node-role-controls">
        <button
          className={`button ${graph.source === id ? "selected-role" : ""}`}
          onClick={() => onChange({ ...graph, source: id })}
        >
          Set as source
        </button>
        <button
          className={`button ${graph.target === id ? "selected-role" : ""}`}
          onClick={() => onChange({ ...graph, target: id })}
        >
          Set as target
        </button>
      </div>
      <div className="connection-heading">
        <h3>Connections</h3>
        <span className="muted">
          {graph.pixelMode ? "Distance weights" : "Manual weights"}
        </span>
      </div>
      <div className="connections-editor">
        {graph.nodes
          .filter((n) => n.id !== id)
          .map((n) => {
            const edge = graph.edges.find((e) => e.id === edgeKey(id, n.id));
            return (
              <div key={n.id} className="connection-editor-row">
                <label>
                  <input
                    type="checkbox"
                    checked={!!edge}
                    onChange={(e) =>
                      onChange(
                        e.target.checked
                          ? setEdge(graph, id, n.id, 1)
                          : {
                              ...graph,
                              edges: graph.edges.filter(
                                (x) => x.id !== edgeKey(id, n.id),
                              ),
                            },
                      )
                    }
                  />
                  <span className="small-node">{n.id}</span>
                  <span>Connect to {n.id}</span>
                </label>
                {edge && (
                  <label className="weight-input">
                    <span className="sr-only">
                      Weight from {id} to {n.id}
                    </span>
                    <input
                      type="number"
                      min="0"
                      max="1000000"
                      step="1"
                      disabled={graph.pixelMode}
                      value={weightOf(edge, graph)}
                      onChange={(e) => {
                        const weight = Number(e.target.value);
                        if (
                          e.target.value !== "" &&
                          Number.isSafeInteger(weight) &&
                          weight >= 0 &&
                          weight <= 1e6
                        )
                          onChange(setEdge(graph, id, n.id, weight));
                      }}
                    />
                  </label>
                )}
              </div>
            );
          })}
        {graph.nodes.length < 2 && (
          <p className="empty-note">Add another node to make a connection.</p>
        )}
      </div>
      <button
        className="button danger-button"
        onClick={() => {
          onRemove(id);
          onClose();
        }}
      >
        <Icon name="trash" />
        Remove node {id}
      </button>
    </Dialog>
  );
}
function WeightEditor({ graph, id, onChange, onClose }) {
  const edge = graph.edges.find((e) => e.id === id),
    [weight, setWeight] = useState(String(edge ? weightOf(edge, graph) : 1)),
    [error, setError] = useState("");
  if (!edge) return null;
  function save(e) {
    e.preventDefault();
    const num = Number(weight);
    if (
      weight.trim() === "" ||
      !Number.isSafeInteger(num) ||
      num < 0 ||
      num > 1e6
    ) {
      setError("Use a whole number between 0 and 1,000,000.");
      return;
    }
    onChange(setEdge(graph, edge.source, edge.target, num));
    onClose();
  }
  return (
    <Dialog
      title={`Connection ${edge.source} → ${edge.target}`}
      onClose={onClose}
    >
      {graph.pixelMode ? (
        <>
          <p className="dialog-description">
            This weight is calculated from the distance between the two nodes.
            Move a node to change it, or switch to manual weights.
          </p>
          <button
            className="button primary"
            onClick={() => {
              onChange({ ...graph, pixelMode: false });
              onClose();
            }}
          >
            Switch to manual weights
          </button>
        </>
      ) : (
        <form onSubmit={save}>
          <label className="field-label" htmlFor="edge-weight">
            Edge weight
          </label>
          <input
            id="edge-weight"
            className="full-input"
            type="number"
            min="0"
            max="1000000"
            step="1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            autoFocus
          />
          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}
          <p className="dialog-description">
            A non-negative whole number. Algorithms use this as the cost of the
            connection.
          </p>
          <div className="dialog-actions">
            <button
              type="button"
              className="button"
              onClick={() => {
                onChange({
                  ...graph,
                  edges: graph.edges.filter((e) => e.id !== id),
                });
                onClose();
              }}
            >
              Remove connection
            </button>
            <button className="button primary" type="submit">
              Save weight
            </button>
          </div>
        </form>
      )}
    </Dialog>
  );
}
export default function App() {
  const [graph, setGraph] = useState(sampleGraph),
    [selected, setSelected] = useState("Dijkstra"),
    [delay, setDelay] = useState(500),
    [status, setStatus] = useState("Your workspace is ready."),
    [modal, setModal] = useState(null),
    [tab, setTab] = useState("matrix");
  const player = useAlgorithmPlayer(delay),
    fileInput = useRef(null);
  const completed = player.phase === "done",
    algorithm = ALGORITHMS[selected];
  const statusMessage =
    player.phase === "running"
      ? `Running ${ALGORITHMS[player.type].label}…`
      : player.phase === "paused"
        ? "Animation paused. Take your time."
        : completed
          ? player.result.message
          : status;
  function edit(next, message) {
    player.clear();
    setGraph(next);
    if (message) setStatus(message);
  }
  function add() {
    const next = addNode(graph);
    if (next === graph) {
      setStatus("All 26 node names are in use.");
      return;
    }
    edit(next, `Added node ${next.nodes.at(-1).id}.`);
  }
  function remove(id) {
    edit(removeNode(graph, id), `Removed node ${id}.`);
  }
  function loadSample() {
    edit(sampleGraph(), "Sample graph loaded.");
    setModal(null);
  }
  function run(type = selected, stepOnly = false) {
    try {
      player.start(graph, type, stepOnly);
    } catch (error) {
      setStatus(error.message);
    }
  }
  function save() {
    const blob = new Blob([exportXml(graph)], { type: "application/xml" }),
      url = URL.createObjectURL(blob),
      a = document.createElement("a");
    a.href = url;
    a.download = `graph-${new Date().toISOString().slice(0, 10)}.xml`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Graph downloaded as XML.");
  }
  async function loadFile(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      if (file.size > 2e6)
        throw new Error("This graph file is too large (maximum 2 MB).");
      const next = importXml(await file.text());
      edit(next, `Loaded ${file.name}.`);
    } catch (error) {
      setStatus(error.message);
    }
  }
  return (
    <div className="app-shell">
      <header className="app-header">
        <a
          className="brand"
          href="#workspace"
          aria-label="Graph Theory Studio workspace"
        >
          <img src="/favicon.svg" width="44" height="44" alt="" />
          <div>
            <span>
              Graph Theory<span className="brand-dot">.</span>
            </span>
            <small>A little exploration. A clearer connection.</small>
          </div>
        </a>
        <div className="header-caption">
          <span className="eyebrow">THE INTERACTIVE TEACHING AID</span>
          <span className="header-rule" />
        </div>
        <div className="file-actions">
          <input
            ref={fileInput}
            type="file"
            accept=".xml,application/xml,text/xml"
            onChange={loadFile}
            hidden
            aria-label="Load graph XML"
          />
          <button
            className="button"
            disabled={player.busy}
            onClick={() => fileInput.current.click()}
          >
            <Icon name="upload" />
            <span>Load graph</span>
          </button>
          <button className="button" onClick={save} disabled={player.busy}>
            <Icon name="download" />
            <span>Save graph</span>
          </button>
        </div>
      </header>
      <main id="workspace">
        <section className="workspace-heading">
          <div>
            <p className="eyebrow">
              <span className="tiny-line" />
              THE GRAPH LAB
            </p>
            <h1>
              Your graph, in motion<span>.</span>
            </h1>
            <p>Build a connection. Follow a path. See the idea click.</p>
          </div>
          <div className="graph-metrics" aria-label="Graph statistics">
            <div>
              <strong>{String(graph.nodes.length).padStart(2, "0")}</strong>
              <span>nodes</span>
            </div>
            <span className="metric-divider" />
            <div>
              <strong>{String(graph.edges.length).padStart(2, "0")}</strong>
              <span>connections</span>
            </div>
          </div>
        </section>
        <section className="toolbar" aria-label="Graph editing tools">
          <div className="toolbar-group">
            <button
              className="button primary"
              onClick={add}
              disabled={player.busy || graph.nodes.length === 26}
            >
              <Icon name="plus" />
              Add node
            </button>
            <button
              className="button"
              onClick={() => remove(graph.nodes.at(-1).id)}
              disabled={player.busy || !graph.nodes.length}
            >
              <Icon name="minus" />
              Remove node
            </button>
            <span className="toolbar-divider" />
            <button
              className="button ghost"
              onClick={loadSample}
              disabled={player.busy}
            >
              <Icon name="reset" />
              Sample graph
            </button>
            <button
              className="button ghost"
              onClick={() => edit(fullyConnect(graph), "All nodes connected.")}
              disabled={player.busy || graph.nodes.length < 2}
            >
              <Icon name="connect" />
              Fully connect
            </button>
            <button
              className="button ghost clear-button"
              onClick={() => setModal({ type: "clear" })}
              disabled={player.busy || !graph.nodes.length}
            >
              <Icon name="trash" />
              <span>Clear</span>
            </button>
          </div>
          <div className="weight-mode">
            <span>Edge weights</span>
            <div
              className="segmented"
              role="group"
              aria-label="Edge weight mode"
            >
              <button
                aria-pressed={!graph.pixelMode}
                disabled={player.busy}
                onClick={() =>
                  edit(
                    { ...graph, pixelMode: false },
                    "Manual edge weights enabled.",
                  )
                }
              >
                Manual
              </button>
              <button
                aria-pressed={graph.pixelMode}
                disabled={player.busy}
                onClick={() =>
                  edit(
                    { ...graph, pixelMode: true },
                    "Distance-based edge weights enabled.",
                  )
                }
              >
                Distance
              </button>
            </div>
          </div>
        </section>
        <div className="workspace-grid">
          <div className="workspace-main">
            <section className="canvas-card" aria-label="Graph canvas">
              <div className="canvas-heading">
                <div className="canvas-title">
                  <span className="section-number">01</span>
                  <h2>Workspace</h2>
                  <span
                    className={`live-badge ${player.busy ? "is-running" : ""}`}
                  >
                    <span />
                    {player.busy ? "IN MOTION" : "LIVE CANVAS"}
                  </span>
                </div>
                <button
                  className="button ghost compact"
                  onClick={() => {
                    player.clear();
                    setStatus("Node and edge highlights reset.");
                  }}
                >
                  <Icon name="reset" />
                  Reset highlights
                </button>
              </div>
              <div className="canvas-area">
                <GraphCanvas
                  graph={graph}
                  player={player}
                  onMove={(id, x, y) =>
                    setGraph((g) => ({
                      ...g,
                      nodes: g.nodes.map((n) =>
                        n.id === id ? { ...n, x, y } : n,
                      ),
                    }))
                  }
                  onNode={(id) =>
                    !player.busy && setModal({ type: "node", id })
                  }
                  onEdge={(id) =>
                    !player.busy && setModal({ type: "edge", id })
                  }
                  onRemove={remove}
                />
                {!graph.nodes.length && (
                  <div className="empty-canvas">
                    <img src="/favicon.svg" alt="" />
                    <h3>Every graph starts somewhere.</h3>
                    <p>Add your first node, or explore the sample graph.</p>
                    <button className="button primary" onClick={add}>
                      <Icon name="plus" />
                      Add a node
                    </button>
                  </div>
                )}
              </div>
              <div className="canvas-footer">
                <div className="canvas-help">
                  <span>
                    <Icon name="cursor" size={13} />
                    Drag to arrange
                  </span>
                  <span>Click a node to connect</span>
                  <span>Click a weight to edit</span>
                </div>
                <div className="legend">
                  <span>
                    <i className="legend-dot exploring" />
                    Exploring
                  </span>
                  <span>
                    <i className="legend-dot best" />
                    Best path
                  </span>
                  <span>
                    <i className="legend-dot final" />
                    Final solution
                  </span>
                </div>
              </div>
            </section>
            <Representations graph={graph} tab={tab} setTab={setTab} />
          </div>
          <aside className="inspector">
            <section className="algorithm-card">
              <div className="panel-heading">
                <span className="section-number">02</span>
                <h2>Find your way</h2>
              </div>
              <p className="panel-intro">
                Choose an algorithm. Watch it think.
              </p>
              <div
                className="algorithm-tabs"
                role="group"
                aria-label="Pathfinding algorithm"
              >
                {["BFS", "DFS", "Dijkstra"].map((type) => (
                  <button
                    key={type}
                    aria-pressed={selected === type}
                    disabled={player.busy}
                    onClick={() => {
                      setSelected(type);
                      player.clear();
                    }}
                  >
                    {ALGORITHMS[type].short}
                  </button>
                ))}
              </div>
              <div
                className="tsp-options"
                role="group"
                aria-label="Travelling salesman algorithm"
              >
                {["BruteForce", "Nearest"].map((type) => (
                  <button
                    key={type}
                    aria-pressed={selected === type}
                    disabled={player.busy}
                    onClick={() => {
                      setSelected(type);
                      player.clear();
                    }}
                  >
                    <span>{ALGORITHMS[type].label}</span>
                    <Icon name="chevron" size={14} />
                  </button>
                ))}
              </div>
              <div className="algorithm-note">
                <p>{algorithm.description}</p>
                <code>{algorithm.complexity}</code>
              </div>
              <div className="route-fields">
                <label>
                  Source
                  <select
                    value={graph.source}
                    disabled={player.busy}
                    onChange={(e) =>
                      edit(
                        { ...graph, source: e.target.value },
                        `Source set to ${e.target.value}.`,
                      )
                    }
                  >
                    <option value="">Select</option>
                    {graph.nodes.map((n) => (
                      <option key={n.id}>{n.id}</option>
                    ))}
                  </select>
                </label>
                <span className="route-arrow">
                  <Icon name="arrow" />
                </span>
                <label>
                  Target
                  <select
                    value={graph.target}
                    disabled={player.busy}
                    onChange={(e) =>
                      edit(
                        { ...graph, target: e.target.value },
                        `Target set to ${e.target.value}.`,
                      )
                    }
                  >
                    <option value="">Select</option>
                    {graph.nodes.map((n) => (
                      <option key={n.id}>{n.id}</option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                className="button primary run-button"
                disabled={!graph.nodes.length}
                onClick={() =>
                  player.phase === "running"
                    ? player.pause()
                    : player.phase === "paused"
                      ? player.resume()
                      : run()
                }
              >
                <Icon name={player.phase === "running" ? "pause" : "play"} />
                {player.phase === "running"
                  ? "Pause animation"
                  : player.phase === "paused"
                    ? "Resume animation"
                    : "Run algorithm"}
                <span className="run-arrow">↗</span>
              </button>
              <div className="playback-controls">
                <button
                  className="button ghost compact"
                  disabled={!graph.nodes.length}
                  onClick={() =>
                    player.busy ? player.step() : run(selected, true)
                  }
                >
                  <Icon name="step" size={14} />
                  Next step
                </button>
                <button
                  className="button ghost compact"
                  disabled={!player.busy}
                  onClick={() => {
                    player.stop();
                    setStatus("Animation stopped.");
                  }}
                >
                  <Icon name="stop" size={13} />
                  Stop
                </button>
                <button
                  className="text-button shortest-button"
                  disabled={player.busy || !graph.nodes.length}
                  onClick={() => {
                    setSelected("Dijkstra");
                    run("Dijkstra");
                  }}
                >
                  Shortest path
                </button>
              </div>
              <div className="delay-control">
                <div>
                  <label htmlFor="animation-delay">Animation delay</label>
                  <output htmlFor="animation-delay">
                    {delay} <span>ms</span>
                  </output>
                </div>
                <input
                  id="animation-delay"
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  style={{
                    "--range-progress": `${((delay - 100) / 1900) * 100}%`,
                  }}
                />
                <div className="range-labels">
                  <span>Quick</span>
                  <span>Thoughtful</span>
                </div>
              </div>
            </section>
            <section className={`output-card ${completed ? "complete" : ""}`}>
              <div className="output-heading">
                <div className="panel-heading">
                  <span className="section-number">03</span>
                  <h2>Algorithm output</h2>
                </div>
                {completed && <Icon name="check" />}
              </div>
              {player.result?.path.length > 0 && (
                <div className="result-summary">
                  <span>PATH FOUND</span>
                  <strong>{player.result.path.join(" → ")}</strong>
                  <div>
                    <span>
                      Total weight <b>{player.result.distance}</b>
                    </span>
                    <span>
                      Edges <b>{player.result.path.length - 1}</b>
                    </span>
                  </div>
                </div>
              )}
              <div
                className="algorithm-output"
                role="log"
                aria-label="Algorithm steps"
                aria-live="polite"
                aria-relevant="additions text"
              >
                {player.log.length ? (
                  player.log.map((line, i) => (
                    <p
                      key={`${i}-${line.slice(0, 16)}`}
                      className={i === player.log.length - 1 ? "latest" : ""}
                    >
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>{line}</span>
                    </p>
                  ))
                ) : (
                  <div className="output-empty">
                    <span className="output-spark">✳</span>
                    <p>A path is waiting to be found.</p>
                    <small>Your algorithm’s steps will appear here.</small>
                  </div>
                )}
              </div>
            </section>
            <div className="learning-note">
              <Icon name="info" size={15} />
              <p>
                Try the same graph with different algorithms. The journey can be
                just as interesting as the result.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <footer className="app-footer">
        <div role="status">
          <span className={`status-dot ${player.busy ? "pulse" : ""}`} />
          {statusMessage}
        </div>
        <span>MADE FOR CURIOUS MINDS</span>
      </footer>
      {modal?.type === "node" && (
        <NodeEditor
          key={modal.id}
          graph={graph}
          id={modal.id}
          onChange={(next) => edit(next, "Connections updated.")}
          onClose={() => setModal(null)}
          onRemove={remove}
        />
      )}
      {modal?.type === "edge" && (
        <WeightEditor
          graph={graph}
          id={modal.id}
          onChange={(next) => edit(next, "Connection updated.")}
          onClose={() => setModal(null)}
        />
      )}
      {modal?.type === "clear" && (
        <Dialog
          title="Start with a clean canvas?"
          onClose={() => setModal(null)}
        >
          <p className="dialog-description">
            This removes all nodes and connections. Save your graph first if you
            want to keep it.
          </p>
          <div className="dialog-actions">
            <button className="button" onClick={() => setModal(null)}>
              Keep exploring
            </button>
            <button
              className="button primary"
              onClick={() => {
                edit(
                  {
                    nodes: [],
                    edges: [],
                    source: "",
                    target: "",
                    pixelMode: graph.pixelMode,
                  },
                  "Graph cleared. A fresh start.",
                );
                setModal(null);
              }}
            >
              Clear graph
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
