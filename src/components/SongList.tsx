import { useEffect, useState } from '@lynx-js/react'
import type { ListSnapEvent } from '@lynx-js/types';
import { atom, useAtom } from 'jotai';
import { SongItem } from './SongItem.jsx'
import { PlaybackManager } from '../model/PlaybackManager.js';

export interface SongListProps {
  manager: PlaybackManager;
}

export const isPlayingAtom = atom(false);
export const currentIndexAtom = atom(0);

export const SongList = (props: SongListProps) => {
  const [currentTitle, setCurrentTitle] = useState(null as string | null);
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);

  useEffect(() => {
    setCurrentTitle(props.manager.currentSong?.title ?? null);
  }, [])

  // triggered when the finger leaves the screen after a swipe
  const handleSnap = (e: ListSnapEvent) => {
    // console.log('Snap event triggered');
    props.manager.switchTo(e.detail.position);
    setCurrentIndex(e.detail.position);
    setCurrentTitle(props.manager.currentSong?.title ?? null);
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
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      {Array.from({ length: 5 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <SongItem index={index} title={currentTitle} manager={props.manager} />
          </list-item>
        );
      })}
    </list>
  );
};
