export interface ProgressBarProps {
  totalTime: number;
  currentTime: number;
  isPlaying: boolean;
}

export const ProgressBar = (props: ProgressBarProps) => {
  return (
    <view
      style={{ width: "100%", height: "5vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <view
        style={{
          width: "90%",
          height: "3px",
          background: "lightgrey"
        }}
      />
    </view>
  );
};
