import { Song } from './Song.jsx';

export class MockPlayer {
  private isInitialized: boolean = false;

  constructor() {
    this.init();
  }

  init() {
    if (!this.isInitialized) {
      this.isInitialized = true;
      console.log('Player initialized.');
    }
  }

  prepare(song: Song) {
    this.init(); // Ensure the player is initialized
    if (this.isInitialized) {
      console.log(`Prepared song: ${song.url}`);
    } else {
      console.log('prepare error: player is not initialized');
    }
  }

  play() {
    if (this.isInitialized) {
      console.log('Playback started.');
    } else {
      console.log('play error: player is not initialized');
    }
  }

  pause() {
    if (this.isInitialized) {
      console.log('Playback paused.');
    } else {
      console.log('pause error: player is not initialized');
    }
  }

  stop() {
    if (this.isInitialized) {
      console.log('Playback stopped.');
    } else {
      console.log('stop error: player is not initialized');
    }
  }

  deinit() {
    if (this.isInitialized) {
      this.isInitialized = false;
      console.log('Player deinitialized.');
    }
  }
}

// Usage example:
// const player = new MockPlayer();
// player.prepare('path-to-your-audio-file.mp3');
// player.play();
// player.pause();
// player.stop();
// player.deinit();