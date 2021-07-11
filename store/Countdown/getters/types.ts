import { State } from "../types";

export interface Getters {
    minutes: (state: State) => number;
    seconds: (state: State) => number;
}