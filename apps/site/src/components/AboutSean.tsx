import { children } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export function AboutSean(props: {
  avatarImg: string;
  description: string;
  githubUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  children?: JSX.Element;
}) {
  const c = children(() => props.children);
  return (
    <div class="z-10 max-w-3xl mx-auto p-4 mx-6 bg-zinc-200 shadow-lg shadow-slate-900 rounded-lg">
      <div class="sm:flex">
        <div class="flex-shrink-0 flex items-center px-4">
          <img
            class="h-32 w-32 border border-gray-300 text-gray-300 object-contain rounded-full mx-auto"
            src={props.avatarImg}
          />
        </div>
        <div class="font-mono">
          <h1 class="text-xl font-bold text-center sm:text-left">About Sean</h1>
          <p class="my-4">{props.description}</p>
          {c()}
          <div class="flex flex-row mt-2 gap-4"></div>
        </div>
      </div>
    </div>
  );
}
