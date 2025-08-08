import type { ListSnapEvent } from '@lynx-js/types';
import { useAtom } from 'jotai';

import {
  currentDurationAtom,
  currentIndexAtom,
  currentIsLikedAtom,
  currentPositionAtom,
  currentTitleAtom,
  managerAtom
} from '../State.jsx';
import { SongItem } from './SongItem.jsx'

import './SongList.css'

export interface SongListProps {
}

export const SongList = (props: SongListProps) => {
  const [, setCurrentDuration] = useAtom(currentDurationAtom);
  const [, setCurrentIndex] = useAtom(currentIndexAtom);
  const [, setCurrentIsLiked] = useAtom(currentIsLikedAtom);
  const [, setCurrentPosition] = useAtom(currentPositionAtom);
  const [, setCurrentTitle] = useAtom(currentTitleAtom);
  const [manager, ] = useAtom(managerAtom);

  // triggered when the finger leaves the screen after a swipe
  const handleSnap = (e: ListSnapEvent) => {
    // console.log('Snap event triggered');
    manager?.switchTo(e.detail.position);

    // These should be called in listener to events emitted by PlaybackManager
    // to decouple state management from UI components.
    // Let's just mock it for now.
    setCurrentIndex(e.detail.position);
    setCurrentTitle(manager?.currentSong?.title ?? null);
    setCurrentDuration(manager?.currentSong?.duration ?? 0);
    setCurrentIsLiked(manager?.currentSong?.isLiked ?? false);
    setCurrentPosition(manager?.currentPositions[e.detail.position] ?? 0);
  };

  return (
    <list
      scroll-orientation="vertical"
      list-type="single"
      span-count={1}
      // use item-snap to achieve pagination
      item-snap={{ factor: 0, offset: 0 }}
      // bug with bindsnap, let's ignore it
      // @ts-ignore
      bindsnap={handleSnap}
      className='List'
    >
      {Array.from({ length: manager?.currentPositions.length ?? 0 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <SongItem index={index} />
          </list-item>
        );
      })}
    </list>
  );
};
