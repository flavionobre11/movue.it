import { XP } from '~/shared/domain/interfaces/xp.interface';
import { Challenge } from '~/shared/domain/models/challenges.model';

export interface State {
    level: number;
    xp: XP;
    completedChallenges: number;
    currentChallengeIndex: number | null;
    isLevelUpModalOpen: boolean;
    allChallenges: Challenge[];
}