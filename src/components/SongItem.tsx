import { useEffect, useState } from '@lynx-js/react'
import { useAtom } from 'jotai';

import { currentIndexAtom, isPlayingAtom } from './SongList.jsx';
import type { PlaybackManager } from '../model/PlaybackManager.jsx';
import { ActionBar } from './ActionBar.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { VinylRecord } from './VinylRecord.jsx';

import './SongItem.css';

export interface SongItemProps {
  index: number;
  title: string | null;
  manager: PlaybackManager;
}

export const SongItem = (props: SongItemProps) => {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);

  const [isLiked, setIsLiked] = useState(false);

  const togglePauseResume = () => {
    props.manager.togglePauseResume();
    setIsPlaying(props.manager.isPlaying);
  };

  const toggleLike = () => {
    props.manager.toggleLike();
    setIsLiked(props.manager.currentSong?.isLiked ?? false);
  };

  return (
    <view className="SongItem-root">
      <VinylRecord
        title={props.title}
        isPlaying={props.manager.isPlaying}
      />
      {/* only mount progress bar when index is correct, to reduce timer cost */}
      {currentIndex === props.index && (
        <ProgressBar
          index={props.index}
          totalTime={props.manager.currentSong?.duration ?? 0}
          startTime={props.manager.currentPositions[props.index] ?? 0}
        />
      )}
      <ActionBar
        isPlaying={isPlaying && currentIndex === props.index}
        isLiked={isLiked}
        togglePauseResume={togglePauseResume}
        toggleLike={toggleLike}
      />
    </view>
  );
};
