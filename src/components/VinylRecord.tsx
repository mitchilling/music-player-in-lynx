export const VinylRecord = (props: { name: string }) => {
  return (
    <view
      style={{ width: "100%", height: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px" }}>
        {`${props.name}`}
      </text>
    </view>
  );
};
