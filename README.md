# Graph Theory Studio — React

The GraphTheoryTeachingAid desktop application rebuilt as a React web application, with a warm minimal interface. It runs entirely in your browser; no backend, API keys, or paid services are needed.

## Run locally

Install Node.js 20.19+ or 22.12+, then:

```sh
npm install
npm run dev
```

Open the local URL shown in the terminal. For a production build:

```sh
npm run build
npm run preview
```

Deploy `dist/` to any static host. `npm test` runs the algorithm, graph, XML, and React interaction checks.

## Features

- Add, remove, rename, and drag nodes A–Z. Keyboard: arrows move nodes, Enter edits, Delete removes.
- Click/right-click a node to add/remove connections and edit manual edge weights.
- Click an edge weight to edit or remove that connection.
- Manual weights or distance weights (canvas distance divided by 20, rounded).
- BFS, DFS, Dijkstra, brute-force TSP (up to 10 nodes), and nearest-neighbour TSP.
- Animated execution, pause/resume, next step, stop, adjustable delay, and path highlighting.
- Live adjacency matrix/list, node/edge counts, algorithm output, path weight and edge count.
- Save/load GraphData XML using the Avalonia C# project's element names; downloaded files are local.
- Responsive layout, keyboard controls, labelled inputs, and reduced-motion support.

## Project structure

- `src/App.jsx`: application layout and graph editing dialogs.
- `src/styles.css`: warm theme and responsive styles.
- `src/components/GraphCanvas.jsx`: interactive SVG graph.
- `src/components/Representations.jsx`: adjacency matrix and list.
- `src/lib/graph.js`: graph operations and XML import/export.
- `src/lib/algorithms.js`: pure generator-based algorithms.
- `src/lib/useAlgorithmPlayer.js`: cancellable animation playback.
- `tests/`: automated checks.

## Porting notes

The UI models undirected, non-negative weighted graphs, as used by the original sample. Zero-weight edges are supported. Files with conflicting weights in opposite directions are rejected rather than silently changed. The 7-node sample retains the original topology and weights, with an arrangement adapted to the web canvas. Both TSP algorithms execute in JavaScript and do not inherit the desktop version's UI-thread error.

XML location fields use the original top-left node positions; the React canvas converts to/from node centers. Distance weights are measured in SVG canvas units so they remain stable when the browser window changes size. A plain dash in the adjacency matrix indicates no connection; zero is a valid weight.

The app does not upload graph files or persist them on a server. It resets to the sample on page reload. Save XML to keep changes. Google Fonts are optional; system fonts are used if unavailable.
