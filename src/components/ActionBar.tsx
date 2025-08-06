export const ActionBar = () => {
  return (
    <view
      style={{ width: "100%", height: "20vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <text>Like</text>
      <text>Play</text>
      <text>Share</text>
    </view>
  );
};
