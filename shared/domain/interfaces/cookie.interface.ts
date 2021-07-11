import { XP } from "./xp.interface";

export interface Cookie {
    level: number;
    xp: XP;
    completedChallenges: number;
}