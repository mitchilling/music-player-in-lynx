
import { SongItem } from './SongItem.jsx'
import { PlaybackManager } from '../model/PlaybackManager.js';


export interface SongListProps {
  manager: PlaybackManager;
}

export const SongList = (props: SongListProps) => {
  return (
    <list
      scroll-orientation="vertical"
      list-type="single"
      span-count={1}
      // use item-snap to achieve pagination
      item-snap={{ factor: 0, offset: 0 }}
      style={{
        width: "100%",
        height: "100vh",
        listMainAxisGap: "5px",
        padding: "10px",
      }}
    >
      {Array.from({ length: 5 }).map((item, index) => {
        return (
          <list-item
            item-key={`list-item-${index}`}
            key={`list-item-${index}`}
          >
            <SongItem manager={props.manager} />
          </list-item>
        );
      })}
    </list>
  );
};
