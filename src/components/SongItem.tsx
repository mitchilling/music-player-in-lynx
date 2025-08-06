export const SongItem = (props: { index: number }) => {
  return (
    <view
      style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px"}}>
        {`song-${props.index}`}
      </text>
    </view>
  );
};
