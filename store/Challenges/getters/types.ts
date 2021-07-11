import { Challenge } from "~/shared/domain/models/challenges.model";
import { State } from "../types";

export interface Getters {
    challengesLength: (state: State) => number;
    currentXpPercentage: (state: State) => number;
    currentChallenge: (state: State) => Challenge | null;
}