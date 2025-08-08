import { useAtom } from 'jotai';
import { currentTitleAtom, isPlayingAtom } from '../State.jsx';

import './VinylRecord.css'
import vinyl from '../assets/player/vinyl_red.png';

export interface VinylRecordProps {
}

export const VinylRecord = (props: VinylRecordProps) => {
  const [currentTitle, setCurrentTitle] = useAtom(currentTitleAtom);

  return (
    <view className="VinylRecordView">
      <image src={vinyl} className='VinylImage' >
        <text className='Title'>
          {`${currentTitle ? currentTitle : "Empty Playlist"}`}
        </text>
      </image>
    </view>
  );
};
