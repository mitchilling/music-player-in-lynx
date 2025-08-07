import './VinylRecord.css'
import vinyl from '../assets/player/vinyl_red.png';

export interface VinylRecordProps {
  title: string | null;
  isPlaying: boolean;
}

export const VinylRecord = (props: VinylRecordProps) => {
  return (
    <view className="VinylRecordView">
      <image src={vinyl} className='VinylImage' >
        <text className='Title'>
          {`${props.title ? props.title : "Empty Playlist"}`}
        </text>
      </image>
    </view>
  );
};
