export const ProgressBar = () => {
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
