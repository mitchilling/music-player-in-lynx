import { useState } from '@lynx-js/react'
import type { PlaybackManager } from '../model/PlaybackManager.jsx';
import { ActionBar } from './ActionBar.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { VinylRecord } from './VinylRecord.jsx';


export interface SongItemProps {
  title: string | null;
  manager: PlaybackManager;
}

export const SongItem = (props: SongItemProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
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
    <view
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <VinylRecord
        title={props.title}
        isPlaying={props.manager.isPlaying}
      />
      <ProgressBar
        totalTime={props.manager.currentSong?.duration ?? 0}
        currentTime={0}
        isPlaying={props.manager.isPlaying}
      />
      <ActionBar
        isPlaying={isPlaying}
        isLiked={isLiked}
        togglePauseResume={togglePauseResume}
        toggleLike={toggleLike}
      />
    </view>
  );
};
