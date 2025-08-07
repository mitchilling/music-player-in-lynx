import type { Song } from '../model/Song.jsx';

export interface VinylRecordProps {
  song: Song | null;
  isPlaying: boolean;
}

export const VinylRecord = (props: VinylRecordProps) => {
  return (
    <view
      style={{ width: "100%", height: "75vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <text style={{ fontSize: "16px", paddingLeft: "6px", paddingTop: "6px" }}>
        {`${props.song ? props.song.title : "No song playing"}`}
      </text>
    </view>
  );
};
