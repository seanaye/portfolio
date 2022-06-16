import { createSignal, onMount } from "solid-js";

function isomorphicGetPixelRatio() {
  if (typeof window === "undefined") {
    return 1
  }
  return window.devicePixelRatio
}

export function useDevicePixelRatio() {
  const [devicePixelRatio, setDevicePixelRatio] = createSignal(isomorphicGetPixelRatio())

  onMount(() => {
    setDevicePixelRatio(isomorphicGetPixelRatio())
  })

  return devicePixelRatio
}
