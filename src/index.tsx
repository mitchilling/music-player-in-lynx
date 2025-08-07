import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'
import { PlaybackManager } from './model/PlaybackManager.js';

// import { App } from './App.jsx'
import { SongList } from './components/SongList.jsx'

const m = new PlaybackManager();
m.addSong({
  title: 'Song 1',
  duration: 300,
  url: 'https://example.com/song1.mp3',
  coverImage: 'https://example.com/cover1.jpg',
  isLiked: false,
});
m.addSong({
  title: 'Song 2',
  duration: 300,
  url: 'https://example.com/song2.mp3',
  coverImage: 'https://example.com/cover2.jpg',
  isLiked: false,
});
m.addSong({
  title: 'Song 3',
  duration: 300,
  url: 'https://example.com/song3.mp3',
  coverImage: 'https://example.com/cover3.jpg',
  isLiked: false,
});
m.addSong({
  title: 'Song 4',
  duration: 300,
  url: 'https://example.com/song4.mp3',
  coverImage: 'https://example.com/cover4.jpg',
  isLiked: false,
});
m.addSong({
  title: 'Song 5',
  duration: 300,
  url: 'https://example.com/song5.mp3',
  coverImage: 'https://example.com/cover5.jpg',
  isLiked: false,
});

root.render(<SongList manager={m}/>)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
