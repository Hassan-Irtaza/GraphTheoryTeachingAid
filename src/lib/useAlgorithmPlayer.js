import { useCallback, useEffect, useRef, useState } from "react";
import { createAlgorithm, ALGORITHMS } from "./algorithms.js";
export function useAlgorithmPlayer(delay) {
  const run = useRef(null),
    timer = useRef(null),
    speed = useRef(delay);
  const [view, setView] = useState({
    phase: "idle",
    snapshot: null,
    result: null,
    log: [],
    type: null,
  });
  useEffect(() => {
    speed.current = delay;
  }, [delay]);
  useEffect(
    () => () => {
      clearTimeout(timer.current);
      run.current = null;
    },
    [],
  );
  const advance = useCallback(function tick(animate = true) {
    clearTimeout(timer.current);
    const current = run.current;
    if (!current) return;
    try {
      const next = current.iterator.next();
      if (next.done) {
        run.current = null;
        setView((v) => ({
          ...v,
          phase: "done",
          result: next.value,
          snapshot: null,
          log: [...v.log, next.value.details].slice(-300),
        }));
      } else {
        setView((v) => ({
          ...v,
          phase: animate ? "running" : "paused",
          snapshot: next.value,
          log: [...v.log, next.value.message].slice(-300),
        }));
        if (animate)
          timer.current = setTimeout(() => tick(true), speed.current);
      }
    } catch (error) {
      run.current = null;
      setView((v) => ({
        ...v,
        phase: "idle",
        snapshot: null,
        log: [...v.log, error.message],
      }));
    }
  }, []);
  const start = useCallback(
    (graph, type, stepOnly = false) => {
      const iterator = createAlgorithm(graph, type);
      clearTimeout(timer.current);
      run.current = { iterator };
      setView({
        phase: stepOnly ? "paused" : "running",
        snapshot: null,
        result: null,
        log: [ALGORITHMS[type].label],
        type,
      });
      advance(!stepOnly);
    },
    [advance],
  );
  const pause = useCallback(() => {
    clearTimeout(timer.current);
    setView((v) => ({ ...v, phase: "paused" }));
  }, []);
  const resume = useCallback(() => advance(true), [advance]);
  const step = useCallback(() => advance(false), [advance]);
  const stop = useCallback(() => {
    clearTimeout(timer.current);
    run.current = null;
    setView((v) => ({
      ...v,
      phase: "idle",
      log: [...v.log, "Animation stopped."],
    }));
  }, []);
  const clear = useCallback(() => {
    clearTimeout(timer.current);
    run.current = null;
    setView({
      phase: "idle",
      snapshot: null,
      result: null,
      log: [],
      type: null,
    });
  }, []);
  return {
    ...view,
    start,
    pause,
    resume,
    step,
    stop,
    clear,
    busy: view.phase === "running" || view.phase === "paused",
  };
}
