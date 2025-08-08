import { useAtom } from 'jotai';
import { isPlayingAtom, currentCoverImageAtom } from '../State.jsx';

import './VinylRecord.css'
import vinyl from '../assets/images/vinyl_red.png';

export interface VinylRecordProps {
}

export const VinylRecord = (props: VinylRecordProps) => {
  const [isPlaying, ] = useAtom(isPlayingAtom);
  const [coverImage, ] = useAtom(currentCoverImageAtom);

  return (
    <view className='VinylRecordView'>
      <image src={vinyl} className={`VinylImage ${isPlaying ? 'playing' : ''}`} >
        {coverImage && (
          <image src={coverImage} className='CoverImage' />
        )}
      </image>
    </view>
  );
};
