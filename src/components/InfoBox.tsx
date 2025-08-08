import { useAtom } from 'jotai';
import { currentTitleAtom } from '../State.jsx';

import './InfoBox.css'

export const InfoBox = () => {
  const [currentTitle, ] = useAtom(currentTitleAtom);

  return (
    <view className="InfoBoxView">
      <text className='Title' text-maxline="1">
        {`${currentTitle ? currentTitle : "Empty Playlist"}`}
        <inline-truncation>
          <text className='Title'>...</text>
        </inline-truncation>
      </text>
    </view>
  );
}