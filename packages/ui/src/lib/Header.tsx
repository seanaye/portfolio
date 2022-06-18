import { children, JSX } from "solid-js"

export function Header(props: {
  children?: JSX.Element;
  class: string;
}) {
  const c = children(() => props.children)
  return (
    <div class={`flex flex-row gap-4 relative left-0 right-0 top-0 ${props.class}`}>
      {c()}
    </div>
  )
}
