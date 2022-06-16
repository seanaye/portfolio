import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import init, { Cell, DxUniverse, InitOutput } from "@seanaye/game-of-life";
import { useDevicePixelRatio, useMeasureWindow } from "@seanaye/hooks";

const pxPerCell = 16;
const halfPxPerCell = 6
const fullCircle = 2 * Math.PI

const msPerFrame = Math.floor((1 / 60) * 1000);

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

  // handle resizing the universe when the window size changes
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

  const devicePixelRatio = useDevicePixelRatio()

  // hold state of wasm mod
  const [modSig, setMod] = createSignal<null | InitOutput>(null);

  // holds the ref to the loopId for cleanup
  let timerId: number | null = null;
  let frameId: number | null = null;
  function setupUniverse() {
    const mod = modSig();
    if (!mod) return;
    setUniverse(DxUniverse.new(width(), height()));
    const ctx = canvasRef.getContext("2d");
    const ratio = devicePixelRatio()
    ctx.scale(ratio, ratio)

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


      for (let row = 0; row < height(); row += 1) {
        for (let col = 0; col < width(); col += 1) {
          const idx = row * width() + col;
          ctx.fillStyle = mapTo(cells[idx]);

          const x = col * pxPerCell + 1
          const y = row * pxPerCell + 1

          ctx.beginPath();
          // ctx.fillRect(
          //   col * pxPerCell + 1,
          //   row * pxPerCell + 1,
          //   pxPerCell,
          //   pxPerCell
          // );
          ctx.arc(x + halfPxPerCell, y + halfPxPerCell, halfPxPerCell, 0, fullCircle)
          ctx.fill()
        }
      }

      // ctx.stroke();
    }

    if (timerId) {
      clearInterval(timerId);
    }
    if (frameId) {
      cancelAnimationFrame(frameId);
    }

    function renderLoop() {
      draw(ctx);
      timerId = setTimeout(() => {
        frameId = requestAnimationFrame(renderLoop);
      }, msPerFrame);
    }

    frameId = requestAnimationFrame(renderLoop);
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
    if (timerId) {
      clearTimeout(timerId);
    }

    if (frameId) {
      cancelAnimationFrame(frameId);
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
        width={fullWidth() * devicePixelRatio()}
        height={fullHeight() * devicePixelRatio()}
        ref={canvasRef}
        onPointerMove={onPointerMove}
      />
    </>
  );
};
