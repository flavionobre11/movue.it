import { Getters } from "./types";

export const getters: Getters = {
    minutes: state => Math.floor(state.time / 60),
    seconds: state => state.time % 60,
};