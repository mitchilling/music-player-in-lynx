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
      <text
        bindtap={props.toggleLike}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "8px 16px",
          minWidth: "60px",
          textAlign: "center"
        }}
      >
        {props.isLiked ? 'Liked' : 'Like'}
      </text>
      <text
        bindtap={props.togglePauseResume}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "8px 16px",
          minWidth: "60px",
          textAlign: "center"
        }}
      >
        {props.isPlaying ? 'Pause' : 'Play'}
      </text>
      <text>Share</text>
    </view>
  );
};
