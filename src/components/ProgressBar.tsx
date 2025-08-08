import { useEffect } from '@lynx-js/react'
import { useAtom } from 'jotai';

import { currentDurationAtom, currentIndexAtom, currentPositionAtom, isPlayingAtom } from '../State.jsx';

import './ProgressBar.css'

export interface ProgressBarProps {
  index: number;
}

// Formats the time in seconds to a string in the format "MM:SS"
function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [currentDuration, setCurrentDuration] = useAtom(currentDurationAtom);
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);
  const [currentPosition, setCurrentPosition] = useAtom(currentPositionAtom);

  useEffect(() => {
    if (!isPlaying || currentIndex !== props.index) return;

    const timer = setInterval(() => {
      setCurrentPosition(time => {
        if (time < currentDuration) {
          return time + 1;
        } else {
          clearInterval(timer);
          return time;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, props.index, currentDuration])

  return (
    <view className="ProgressBarView">
      <view className="BarBack">
        <view
          className="BarFront"
          // 90% is the width of the progress bar back
          style={{ width: `${(currentPosition / currentDuration) * 90}%` }}
        />
      </view>
      <view className="TimeView">
        {/* currentTime could exceed totalTime with a MockPlayer */}
        <text className="TimeTextLeft">{formatTime(currentPosition)}</text>
        <text className="TimeTextRight">{formatTime(currentDuration)}</text>
      </view>
    </view>
  );
};
