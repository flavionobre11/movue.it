import { MINUTES } from '~/constants/constants';
import { State } from './types';

export const state = (): State => ({
    time: MINUTES * 60,
    isActive: false,
    hasCompleted: false,
});