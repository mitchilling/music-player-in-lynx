import { useEffect, useMemo } from '@lynx-js/react'
import { useAtom } from 'jotai';

import { currentDurationAtom, currentTitleAtom, managerAtom } from './State.jsx';
import { PlaybackManager } from './model/PlaybackManager.jsx';
import { SongList } from './components/SongList.jsx'

import './App.css'

export function App(props: {
  onMounted?: () => void
}) {
  const [, setCurrentDuration] = useAtom(currentDurationAtom);
  const [, setCurrentTitle] = useAtom(currentTitleAtom);
  const [, setManager] = useAtom(managerAtom);

  const instance = useMemo(() => {
    const pm = new PlaybackManager();
    pm.addSong({
      title: 'Song 1',
      duration: 120,
      url: 'https://example.com/song1.mp3',
      coverImage: 'https://example.com/cover1.jpg',
      isLiked: false,
    });
    pm.addSong({
      title: 'Song 2',
      duration: 150,
      url: 'https://example.com/song2.mp3',
      coverImage: 'https://example.com/cover2.jpg',
      isLiked: false,
    });
    pm.addSong({
      title: 'Song 3',
      duration: 200,
      url: 'https://example.com/song3.mp3',
      coverImage: 'https://example.com/cover3.jpg',
      isLiked: false,
    });
    pm.addSong({
      title: 'Song 4',
      duration: 220,
      url: 'https://example.com/song4.mp3',
      coverImage: 'https://example.com/cover4.jpg',
      isLiked: false,
    });
    pm.addSong({
      title: 'Song 5',
      duration: 240,
      url: 'https://example.com/song5.mp3',
      coverImage: 'https://example.com/cover5.jpg',
      isLiked: false,
    });
    return pm;
  }, []);

  useEffect(() => {
    setManager(instance);
    setCurrentTitle(instance.currentSong?.title ?? null);
    setCurrentDuration(instance.currentSong?.duration ?? 0);
  }, [instance]);

  return (
    <SongList />
  )
}
