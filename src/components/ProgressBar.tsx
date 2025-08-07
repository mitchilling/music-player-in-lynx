import './ProgressBar.css'

export interface ProgressBarProps {
  totalTime: number;
  currentTime: number;
  isPlaying: boolean;
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <view className="ProgressBarView">
      <view className="ProgressBar" />
    </view>
  );
};
