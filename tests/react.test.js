import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { build } from "esbuild";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const dom = new JSDOM(
  '<!doctype html><html><body><div id="root"></div></body></html>',
  { url: "http://localhost/" },
);
Object.assign(globalThis, {
  window: dom.window,
  document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  DOMParser: dom.window.DOMParser,
  IS_REACT_ACT_ENVIRONMENT: true,
});
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
dom.window.HTMLDialogElement.prototype.showModal = function () {
  this.open = true;
};
dom.window.HTMLDialogElement.prototype.close = function () {
  this.open = false;
};
let capture = false;
dom.window.SVGElement.prototype.getScreenCTM = () => ({ inverse: () => ({}) });
dom.window.SVGElement.prototype.createSVGPoint = () => ({
  x: 0,
  y: 0,
  matrixTransform() {
    return { x: this.x, y: this.y };
  },
});
dom.window.SVGElement.prototype.setPointerCapture = () => {
  capture = true;
};
dom.window.SVGElement.prototype.hasPointerCapture = () => capture;
dom.window.SVGElement.prototype.releasePointerCapture = () => {
  capture = false;
};
const outfile = resolve("node_modules/.cache/ui-check.mjs");
await build({
  entryPoints: ["src/App.jsx"],
  outfile,
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  external: ["react", "react-dom"],
});
const { default: App } = await import(pathToFileURL(outfile));
const { createElement, act } = await import("react");
const { createRoot } = await import("react-dom/client");
const root = createRoot(document.getElementById("root"));
const button = (text) =>
  [...document.querySelectorAll("button")].find(
    (b) => b.textContent.replace("↗", "").trim() === text,
  );
const click = async (el) => {
  assert.ok(el, "Element exists");
  await act(() =>
    el.dispatchEvent(new window.MouseEvent("click", { bubbles: true })),
  );
};
const nodeCount = () => document.querySelectorAll(".graph-node").length;
function change(el, value) {
  const setter = Object.getOwnPropertyDescriptor(
    el.tagName === "SELECT"
      ? window.HTMLSelectElement.prototype
      : window.HTMLInputElement.prototype,
    "value",
  ).set;
  setter.call(el, value);
  el.dispatchEvent(
    new window.Event(el.tagName === "SELECT" ? "change" : "input", {
      bubbles: true,
    }),
  );
}
await act(() => root.render(createElement(App)));

test("React app: graph editing, node dialogs, weights, representations, animation and cancellation", async () => {
  assert.equal(nodeCount(), 7);
  assert.equal(document.querySelectorAll(".graph-edge").length, 12);
  assert.equal(
    document.querySelector("h1").textContent,
    "Your graph, in motion.",
  );
  await click(button("Add node"));
  assert.equal(nodeCount(), 8);
  await click(button("Remove node"));
  assert.equal(nodeCount(), 7);
  await click(button("Distance"));
  assert.equal(button("Distance").getAttribute("aria-pressed"), "true");
  await click(button("Manual"));
  assert.equal(button("Manual").getAttribute("aria-pressed"), "true");
  await click(button("Fully connect"));
  assert.equal(document.querySelectorAll(".graph-edge").length, 21);
  await click(button("Sample graph"));
  assert.equal(document.querySelectorAll(".graph-edge").length, 12);
  await click(button("List"));
  assert.equal(document.querySelectorAll(".adjacency-row").length, 7);
  await click(button("Matrix"));
  assert.equal(document.querySelectorAll(".matrix tbody tr").length, 7);
  await act(() =>
    document
      .querySelector(".graph-node")
      .dispatchEvent(
        new window.KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      ),
  );
  assert.ok(document.querySelector("dialog").open);
  assert.match(document.querySelector("dialog h2").textContent, /Node A/);
  await act(() => change(document.querySelector("#node-name"), "Z"));
  await act(() =>
    document
      .querySelector(".rename-form")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
  assert.ok(document.querySelector('[aria-label^="Node Z"]'));
  assert.ok(!document.querySelector('[aria-label^="Node A,"]'));
  await click(button("Sample graph"));
  await click(document.querySelector(".weight-label"));
  await act(() => change(document.querySelector("#edge-weight"), "15"));
  await act(() =>
    document
      .querySelector("dialog form")
      .dispatchEvent(
        new window.Event("submit", { bubbles: true, cancelable: true }),
      ),
  );
  assert.match(
    document.querySelector(".weight-label").getAttribute("aria-label"),
    /weight 15/,
  );
  await click(button("Sample graph"));
  const b =
    document.querySelector('[aria-label^="Node B,"]') ||
    document.querySelector('[aria-label^="Node B."]');
  const before = b.getAttribute("transform");
  await act(() =>
    b.dispatchEvent(
      new window.KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    ),
  );
  assert.notEqual(b.getAttribute("transform"), before);
  await act(() => change(document.querySelector(".route-fields select"), "B"));
  assert.match(
    document
      .querySelector('[aria-label^="Node B,"]')
      .getAttribute("aria-label"),
    /source/,
  );
  await click(button("Next step"));
  assert.equal(button("Resume animation").disabled, false);
  assert.match(
    document.querySelector("[role=log]").textContent,
    /Start Dijkstra/,
  );
  assert.equal(button("Add node").disabled, true);
  await click(button("Stop"));
  assert.equal(button("Add node").disabled, false);
  await click(button("Reset highlights"));
  assert.ok(document.querySelector(".output-empty"));
  await click(button("Clear"));
  assert.ok(document.querySelector("dialog").open);
  await click(button("Keep exploring"));
  assert.equal(nodeCount(), 7);
  await click(button("Clear"));
  await click(button("Clear graph"));
  assert.equal(nodeCount(), 0);
  assert.ok(document.querySelector(".empty-canvas"));
  await click(button("Add a node"));
  assert.equal(nodeCount(), 1);
  await click(button("Sample graph"));
  assert.equal(nodeCount(), 7);
  await click(button("Dijkstra"));
  await click(button("Run algorithm"));
  assert.ok(button("Pause animation"));
  await click(button("Pause animation"));
  assert.ok(button("Resume animation"));
  await click(button("Resume animation"));
  await click(button("Stop"));
  await act(() => root.unmount());
});
