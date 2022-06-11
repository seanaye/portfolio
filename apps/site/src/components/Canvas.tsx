import { createEffect, createResource } from "solid-js";
import init from "@seanaye/game-of-life";

export const Canvas = () => {
  const [modRes] = createResource(() => init());

  createEffect(() => {
    console.log({ loading: modRes.loading });
    if (!modRes.loading) {
      console.log(modRes());
    }
  });
  return <div>Hello World</div>;
};
