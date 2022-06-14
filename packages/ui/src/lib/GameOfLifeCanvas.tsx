import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import init, { Cell, DxUniverse, InitOutput } from "@seanaye/game-of-life";
import { useMeasureWindow } from "@seanaye/hooks";

const pxPerCell = 8;

/**
 * Universe signal which frees the prev if it exists
 */
function useUniverseSignal() {
  const [universe, setUniverse] = createSignal<null | DxUniverse>(null);

  function updateUniverse(next: DxUniverse) {
    const cur = universe();
    if (cur) {
      cur.free();
    }
    return setUniverse(next);
  }

  return [universe, updateUniverse] as const;
}

export const GameOfLifeCanvas: Component<{ colours: Array<string> }> = (
  props
) => {
  const { width: fullWidth, height: fullHeight } = useMeasureWindow();

  const width = createMemo(() => Math.floor(fullWidth() / pxPerCell));
  const height = createMemo(() => Math.floor(fullHeight() / pxPerCell));

  let canvasRef: HTMLCanvasElement;

  const [universe, setUniverse] = useUniverseSignal();

  function mapTo(num: number) {
    const cur = props.colours;
    return cur[Math.min(num, cur.length - 1)];
  }

  createEffect((prev?: { w: number; h: number }) => {
    const uni = universe();
    const w = width();
    const h = height();
    if (!uni || !prev) return { w, h };

    if (prev.h !== h || prev.w !== w) {
      setupUniverse();
    }

    return { w, h };
  });

  const [modSig, setMod] = createSignal<null | InitOutput>(null);

  // holds the ref to the loopId for cleanup
  let loopId: number | null = null;
  function setupUniverse() {
    const mod = modSig();
    if (!mod) return;
    setUniverse(DxUniverse.new(width(), height()));
    const ctx = canvasRef.getContext("2d");

    function draw(ctx: CanvasRenderingContext2D) {
      const cur = universe();
      if (!cur) return;

      cur.tick();

      const cellsPtr = cur.cells();
      const cells = new Uint8Array(
        mod.memory.buffer,
        cellsPtr,
        width() * height()
      );

      ctx.beginPath();

      for (let row = 0; row < height(); row += 1) {
        for (let col = 0; col < width(); col += 1) {
          const idx = row * width() + col;
          ctx.fillStyle = mapTo(cells[idx]);

          ctx.fillRect(
            col * pxPerCell + 1,
            row * pxPerCell + 1,
            pxPerCell,
            pxPerCell
          );
        }
      }

      ctx.stroke();
    }

    if (loopId) {
      cancelAnimationFrame(loopId);
    }

    function renderLoop() {
      draw(ctx);
      loopId = requestAnimationFrame(renderLoop);
    }

    loopId = requestAnimationFrame(renderLoop);
  }

  onMount(async () => {
    setMod(await init());
    setupUniverse();
  });

  onCleanup(() => {
    console.log("cleanup");
    const cur = universe();
    if (cur) {
      cur.free();
    }

    if (loopId) {
      cancelAnimationFrame(loopId);
    }
  });

  function onPointerMove(event: PointerEvent) {
    const cur = universe();
    if (!cur) return;

    const { offsetX, offsetY } = event;
    const w = Math.floor(offsetY / pxPerCell);
    const h = Math.floor(offsetX / pxPerCell);
    cur.set_cell(w, h, Cell.Alive);
  }

  return (
    <>
      <div
        class="absolute w-screen h-screen top-0 left-0"
        style={{ "background-color": props.colours[0] }}
      />
      <canvas
        class="absolute w-screen h-screen top-0 left-0"
        width={fullWidth()}
        height={fullHeight()}
        ref={canvasRef}
        onPointerMove={onPointerMove}
      />
    </>
  );
};
