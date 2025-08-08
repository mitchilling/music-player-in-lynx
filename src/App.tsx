import { useEffect, useMemo } from '@lynx-js/react'
import { useAtom } from 'jotai';

import { currentDurationAtom, currentTitleAtom, currentCoverImageAtom, managerAtom } from './State.jsx';
import { PlaybackManager } from './model/PlaybackManager.jsx';
import { SongList } from './components/SongList.jsx'

import './App.css'
import TurcaSong from './assets/demos/Alla-Turca.mp3'
import TurcaImage from './assets/demos/Alla-Turca.jpg'
import ChristmasSong from './assets/demos/We_Wish_You_a_Merry_Christmas.mp3'
import ChristmasImage from './assets/demos/We_Wish_You_a_Merry_Christmas.jpg'
import EmbracingSong from './assets/demos/Embracing-this-World.mp3'

export function App(props: {
  onMounted?: () => void
}) {
  const [, setCurrentDuration] = useAtom(currentDurationAtom);
  const [, setCurrentTitle] = useAtom(currentTitleAtom);
  const [, setCurrentCoverImage] = useAtom(currentCoverImageAtom);
  const [, setManager] = useAtom(managerAtom);

  const instance = useMemo(() => {
    const pm = new PlaybackManager();
    pm.addSong({
      title: 'Alla Turca',
      duration: 214,
      url: TurcaSong,
      coverImage: TurcaImage,
      isLiked: false,
    });
    pm.addSong({
      title: 'We wish you a merry Christmas and a happy new year (long title)',
      duration: 52,
      url: ChristmasSong,
      coverImage: ChristmasImage,
      isLiked: false,
    });
    pm.addSong({
      title: 'Embracing this world (no picture)',
      duration: 183,
      url: EmbracingSong,
      coverImage: '',
      isLiked: false,
    });
    return pm;
  }, []);

  useEffect(() => {
    setManager(instance);
    setCurrentTitle(instance.currentSong?.title ?? null);
    setCurrentCoverImage(instance.currentSong?.coverImage ?? null);
    setCurrentDuration(instance.currentSong?.duration ?? 0);
  }, [instance]);

  return (
    <SongList />
  )
}
