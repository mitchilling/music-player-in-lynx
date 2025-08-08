import { useAtom } from 'jotai';
import { currentIsLikedAtom, isPlayingAtom, managerAtom } from '../State.jsx';

import './ActionBar.css';
import heartEmpty from '../assets/icons/heart_empty.png'
import heartFull from '../assets/icons/heart_full_red.png'
import playIcon from '../assets/icons/play_light.png'
import pauseIcon from '../assets/icons/pause_light.png'
import shareIcon from '../assets/icons/share_light.png'

export interface ActionBarProps {
}

export const ActionBar = (props: ActionBarProps) => {
  const [currentIsLiked, setCurrentIsLiked] = useAtom(currentIsLikedAtom);
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [manager, setManager] = useAtom(managerAtom);


  const togglePauseResume = () => {
    manager?.togglePauseResume();
    setIsPlaying(manager?.isPlaying ?? false);
  };

  const toggleLike = () => {
    const liked = manager?.toggleLike();
    setCurrentIsLiked(liked ?? false);
  };

  return (
    <view className='ActionBarView'>
      <view bindtap={toggleLike} className='TapArea'>
        {currentIsLiked
          ? <image src={heartFull} className='HeartIcon' />
          : <image src={heartEmpty} className='HeartIcon' />}
      </view>
      <view bindtap={togglePauseResume} className='TapArea'>
        {isPlaying
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
