import { MockPlayer } from './MockPlayer.jsx';
import { Song } from './Song.jsx';  

export class PlaybackManager {
  private player: MockPlayer;
  private playlist: Song[] = [];
  private currentIndex: number = 0;
  public currentSong: Song | null = null;
  public isPlaying: boolean = false;

  constructor() {
    this.player = new MockPlayer();
  }

  addSong(song: Song) {
    this.playlist.push(song);
    if (!this.currentSong && this.currentIndex < this.playlist.length) {
      this.currentSong = this.playlist[this.currentIndex];
    }
  }

  // user swipes to change songs
  switchTo(index: number) {
    if (index < 0 || index >= this.playlist.length) {
      console.error('Index out of bounds');
      return;
    }
    this.currentIndex = index;
    this.currentSong = this.playlist[index];
    // if the previous song was playing, stop it and play the new one
    if (this.isPlaying) {
      this.player.stop();
      this.isPlaying = false;
      this.player.prepare(this.playlist[this.currentIndex]);
      this.player.play();
      this.isPlaying = true;
    }
  }

  // user presses play/pause button
  togglePauseResume = () => {
    if (this.currentIndex < 0 || this.currentIndex >= this.playlist.length) {
      console.error('Index out of bounds');
      return;
    }
    if (this.isPlaying) {
      this.player.pause();
      this.isPlaying = false;
    } else {
      this.player.play();
      this.isPlaying = true;
    }
  }

  // user presses like button
  toggleLike = () => {
    if (this.currentSong) {
      this.currentSong.isLiked = !this.currentSong.isLiked;
    }
  }

  // Don't forget to deinitialize the player when done
}