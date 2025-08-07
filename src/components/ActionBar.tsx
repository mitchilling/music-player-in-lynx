import './ActionBar.css';
import heartEmpty from '../assets/player/heart_empty.png'
import heartFull from '../assets/player/heart_full_red.png'
import playIcon from '../assets/player/play_light.png'
import pauseIcon from '../assets/player/pause_light.png'
import shareIcon from '../assets/player/share_light.png'

export interface ActionBarProps {
  isPlaying: boolean;
  isLiked: boolean;
  togglePauseResume: () => void;
  toggleLike: () => void;
}

export const ActionBar = (props: ActionBarProps) => {
  return (
    <view
      style={{ width: "100%", height: "20vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <view bindtap={props.toggleLike} className='TapArea'>
        {props.isLiked
          ? <image src={heartFull} className='HeartIcon' />
          : <image src={heartEmpty} className='HeartIcon' />}
      </view>
      <view bindtap={props.togglePauseResume} className='TapArea'>
        {props.isPlaying
          ? <image src={pauseIcon} className='PlayIcon' />
          : <image src={playIcon} className='PlayIcon' />}
      </view>
      {/* not implemented yet */}
      <view className='TapArea'>
        <image src={shareIcon} className='ShareIcon' />
      </view>
    </view>
  );
};
