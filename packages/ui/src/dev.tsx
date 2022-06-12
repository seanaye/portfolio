import { render } from "solid-js/web";
import { GameOfLifeCanvas } from "./lib/GameOfLifeCanvas";

render(() => <GameOfLifeCanvas />, document.getElementById("app"));
