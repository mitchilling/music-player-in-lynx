import { useAtom } from 'jotai';

import { currentIndexAtom } from '../State.jsx';
import { ActionBar } from './ActionBar.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { VinylRecord } from './VinylRecord.jsx';

import './SongItem.css';

export interface SongItemProps {
  index: number;
}

export const SongItem = (props: SongItemProps) => {
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);

  return (
    <view className="SongItem-root">
      <VinylRecord />
      {/* only mount progress bar when index is correct, to reduce timer cost */}
      {currentIndex === props.index && (
        <ProgressBar
          index={props.index}
        />
      )}
      <ActionBar />
    </view>
  );
};
