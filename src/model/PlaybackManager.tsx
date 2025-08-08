import { MockPlayer } from './MockPlayer.jsx';
import { Song } from './Song.jsx';

export class PlaybackManager {
  // used to control the playback and get the status
  private player: MockPlayer;
  public isPlaying: boolean = false;

  // used to retrieve information of the current song
  private songs: Song[] = [];
  public currentIndex: number = 0;
  public currentSong: Song | null = null;
  public currentPositions: number[] = [];

  // used to track the time of mock playback
  private playStartTime: number | null = null;

  constructor() {
    this.player = new MockPlayer();
  }

  addSong(song: Song) {
    this.songs.push(song);
    this.currentPositions.push(0);
    if (!this.currentSong && this.currentIndex < this.songs.length) {
      this.currentSong = this.songs[this.currentIndex];
    }
  }

  // =========== Mock Play Time ===========
  private startTimer() {
    this.playStartTime = Date.now();
    // console.log('timer starts');
  }

  private stopTimer() {
    if (this.playStartTime !== null && this.currentIndex >= 0 && this.currentIndex < this.currentPositions.length) {
      const elapsed = (Date.now() - this.playStartTime) / 1000; // seconds
      this.currentPositions[this.currentIndex] += elapsed;
      // console.log(`Elapsed time for song at index ${this.currentIndex}: ${elapsed} seconds`);
    }
    this.playStartTime = null;
    // console.log('timer ends');
  }

  // Override play, pause, and stop to use the timer
  private play() {
    this.player.prepare(this.songs[this.currentIndex]);
    this.player.play();
    this.isPlaying = true;
    this.startTimer();
  }

  private pause() {
    this.player.pause();
    this.isPlaying = false;
    this.stopTimer();
  }

  private stop() {
    this.player.stop();
    this.isPlaying = false;
    this.stopTimer();
  }
  // =========== Mock Play Time ===========

  // user swipes to change songs
  switchTo(index: number) {
    if (index < 0 || index >= this.songs.length) {
      console.error('Index out of bounds');
      return;
    }

    const wasPlaying = this.isPlaying

    if (this.isPlaying) {
      this.stop();
    }
    this.currentIndex = index;
    this.currentSong = this.songs[index];
    if (wasPlaying) {
      this.play();
    }
  }

  // user presses play/pause button
  togglePauseResume = () => {
    if (this.currentIndex < 0 || this.currentIndex >= this.songs.length) {
      console.error('Index out of bounds');
      return;
    }
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  // user presses like button
  toggleLike = () => {
    if (this.currentSong) {
      this.currentSong.isLiked = !this.currentSong.isLiked;
    }
    return this.currentSong?.isLiked ?? false;
  }

  // Don't forget to deinitialize the player when done
}