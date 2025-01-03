export interface Song {
    id: number
    title: string
    artist: string
    album: string
    duration: string
    plays: string
    cover: string
    audioUrl: string
  }
  
  export interface PlayerContextType {
    currentSong: Song | null
    isPlaying: boolean
    play: (song: Song) => void
    pause: () => void
    next: () => void
    previous: () => void
    setCurrentSong: (song: Song) => void
    playlist: Song[]
    setPlaylist: (songs: Song[]) => void
  }
  
  
  
  