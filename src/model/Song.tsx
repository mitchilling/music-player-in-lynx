export class Song {
  constructor(
    public title: string,
    public duration: number, // Duration in seconds
    public url: string,
    public coverImage: string,
    public isLiked: boolean = false
  ) {}
}
