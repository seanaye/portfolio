import { createEffect, createResource } from "solid-js";
import init from "@seanaye/game-of-life";

export const GameOfLifeCanvas = () => {
  const [modRes] = createResource(() => init());

  createEffect(() => {
    console.log({ loading: modRes.loading });
    if (!modRes.loading) {
      console.log(modRes());
    }
  });
  return (
    <>
      <div
        class="absolute w-screen h-screen top-0 left-0 -z-50"
        style={{ backgroundColor: "#282728" }}
      />
      <canvas
        class="absolute w-screen h-screen top-0 left-0 -z-50"
      // width={pxPerCell * width}
      // height={pxPerCell * height}
      // ref={canvasRef}
      />
    </>
  );
};
