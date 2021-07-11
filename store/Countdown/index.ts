import { MINUTES } from '~/constants/constants';
import { State } from './types';

export const state = (): State => ({
    time: 3,
    isActive: false,
    hasCompleted: false,
});