import { useEffect, useState } from '@lynx-js/react'
import { useAtom } from 'jotai';

import { currentIndexAtom, isPlayingAtom } from './SongList.jsx';

import './ProgressBar.css'

export interface ProgressBarProps {
  index: number;
  totalTime: number;
  startTime: number;
}

// Formats the time in seconds to a string in the format "MM:SS"
function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);
  const [currentTime, setCurrentTime] = useState(0);

  // Reset currentTime when index changes
  useEffect(() => {
    setCurrentTime(props.startTime);
  }, [props.startTime, props.index]);

  useEffect(() => {
    if (!isPlaying || currentIndex !== props.index) return;

    const timer = setInterval(() => {
      setCurrentTime(time => {
        if (time < props.totalTime) {
          return time + 1;
        } else {
          clearInterval(timer);
          return time;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, props.index, props.totalTime])

  return (
    <view className="ProgressBarView">
      <view className="BarBack">
        <view
          className="BarFront"
          // 90% is the width of the progress bar back
          style={{ width: `${(currentTime / props.totalTime) * 90}%` }}
        />
      </view>
      <view className="TimeView">
        {/* currentTime could exceed totalTime with a MockPlayer */}
        <text className="TimeTextLeft">{formatTime(currentTime)}</text>
        <text className="TimeTextRight">{formatTime(props.totalTime)}</text>
      </view>
    </view>
  );
};
