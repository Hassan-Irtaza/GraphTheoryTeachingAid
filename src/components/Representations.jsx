import { neighbors } from "../lib/graph.js";
export default function Representations({ graph, tab, setTab }) {
  return (
    <section className="representations">
      <div className="section-header">
        <div>
          <span className="eyebrow">ANOTHER PERSPECTIVE</span>
          <h2>Behind the graph</h2>
        </div>
        <div
          className="segmented"
          role="group"
          aria-label="Graph representation"
        >
          <button
            aria-pressed={tab === "matrix"}
            onClick={() => setTab("matrix")}
          >
            Matrix
          </button>
          <button aria-pressed={tab === "list"} onClick={() => setTab("list")}>
            List
          </button>
        </div>
      </div>
      {!graph.nodes.length ? (
        <p className="empty-note">Add nodes to see their connections here.</p>
      ) : tab === "matrix" ? (
        <div className="matrix-scroll">
          <table className="matrix">
            <caption className="sr-only">
              Adjacency matrix. A dash indicates no edge; zero is a valid edge
              weight.
            </caption>
            <thead>
              <tr>
                <th scope="col" aria-label="Node">
                  ↗
                </th>
                {graph.nodes.map((n) => (
                  <th key={n.id} scope="col">
                    {n.id}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {graph.nodes.map((n) => {
                const next = new Map(
                  neighbors(graph, n.id).map((x) => [x.id, x.weight]),
                );
                return (
                  <tr key={n.id}>
                    <th scope="row">{n.id}</th>
                    {graph.nodes.map((m) => (
                      <td
                        key={m.id}
                        className={
                          n.id === m.id
                            ? "diagonal"
                            : next.has(m.id)
                              ? "has-edge"
                              : ""
                        }
                      >
                        {n.id === m.id
                          ? "0"
                          : next.has(m.id)
                            ? next.get(m.id)
                            : "—"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="adjacency-list">
          {graph.nodes.map((n) => (
            <div key={n.id} className="adjacency-row">
              <strong>{n.id}</strong>
              <span className="list-arrow">→</span>
              <div>
                {neighbors(graph, n.id).map((next) => (
                  <span key={next.id} className="neighbor-chip">
                    {next.id}
                    <small>{next.weight}</small>
                  </span>
                ))}
                {!neighbors(graph, n.id).length && (
                  <span className="muted">No connections</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
