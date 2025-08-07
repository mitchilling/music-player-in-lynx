import { useEffect, useState } from '@lynx-js/react'
import type { ListSnapEvent } from '@lynx-js/types';
import { SongItem } from './SongItem.jsx'
import { PlaybackManager } from '../model/PlaybackManager.js';


export interface SongListProps {
  manager: PlaybackManager;
}

export const SongList = (props: SongListProps) => {
  const [currentTitle, setCurrentTitle] = useState(null as string | null);

  useEffect(() => {
    setCurrentTitle(props.manager.currentSong?.title ?? null);
  }, [])

  const handleSnap = (e: ListSnapEvent) => {
    // console.log('Snap event triggered');
    props.manager.switchTo(e.detail.position);
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
        listMainAxisGap: "5px",
        padding: "10px",
      }}
    >
      {Array.from({ length: 5 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <SongItem title={currentTitle} manager={props.manager} />
          </list-item>
        );
      })}
    </list>
  );
};
