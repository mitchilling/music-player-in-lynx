import { useAtom } from 'jotai';
import { currentTitleAtom, isPlayingAtom } from '../State.jsx';

import './VinylRecord.css'
import vinyl from '../assets/player/vinyl_red.png';

export interface VinylRecordProps {
}

export const VinylRecord = (props: VinylRecordProps) => {
  const [currentTitle, ] = useAtom(currentTitleAtom);
  const [isPlaying, ] = useAtom(isPlayingAtom);

  return (
    <view className="VinylRecordView">
      <image src={vinyl} className={`VinylImage ${isPlaying ? 'playing' : ''}`} >
        <text className='Title'>
          {`${currentTitle ? currentTitle : "Empty Playlist"}`}
        </text>
      </image>
    </view>
  );
};
