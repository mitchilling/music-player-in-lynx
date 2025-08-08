import { atom } from 'jotai';

import type { PlaybackManager } from './model/PlaybackManager.jsx';

export const isPlayingAtom = atom(false);

export const managerAtom = atom<PlaybackManager | null>(null);

export const currentIndexAtom = atom(0);

export const currentTitleAtom = atom<string | null>(null);

export const currentCoverImageAtom = atom<string | null>(null);

export const currentPositionAtom = atom(0);

export const currentDurationAtom = atom(0);

export const currentIsLikedAtom = atom(false);
