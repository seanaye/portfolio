import { onMount, createSignal, onCleanup } from "solid-js";
import { debounce } from "@seanaye/utils";

function getSize() {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    };
  }
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  return { width, height };
}

const [width, setWidth] = createSignal(0);
const [height, setHeight] = createSignal(0);
function handler() {
  const { width, height } = getSize();
  setWidth(width);
  setHeight(height);
}

/**
 * Hook for measuring the size of the document inner dimensions
 * optionally provide an amount of time to debounce by in ms
 * @param ms - the ms before recalculating, defauolts to 100ms
 */
export function useMeasureWindow(ms: number = 100) {
  const debouncedHandler = debounce(handler, ms);

  onMount(() => {
    handler();
    window.addEventListener("resize", debouncedHandler);
  });

  onCleanup(() => window.removeEventListener("resize", debouncedHandler));

  return { width, height };
}
