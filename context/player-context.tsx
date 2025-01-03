"use client"

import { createContext, useContext, useState, useEffect, useRef } from "react"
import { Howl } from "howler"
import { PlayerContextType, Song } from "@/types/music"

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [playlist, setPlaylist] = useState<Song[]>([])
  const soundRef = useRef<Howl | null>(null)

  const play = (song: Song) => {
    if (soundRef.current) {
      soundRef.current.stop()
    }

    const sound = new Howl({
      src: [song.audioUrl],
      html5: true,
      onend: () => {
        next()
      },
    })

    soundRef.current = sound
    sound.play()
    setCurrentSong(song)
    setIsPlaying(true)
  }

  const pause = () => {
    if (soundRef.current) {
      soundRef.current.pause()
      setIsPlaying(false)
    }
  }

  const next = () => {
    if (currentSong && playlist.length > 0) {
      const currentIndex = playlist.findIndex(song => song.id === currentSong.id)
      const nextIndex = (currentIndex + 1) % playlist.length
      play(playlist[nextIndex])
    }
  }

  const previous = () => {
    if (currentSong && playlist.length > 0) {
      const currentIndex = playlist.findIndex(song => song.id === currentSong.id)
      const previousIndex = (currentIndex - 1 + playlist.length) % playlist.length
      play(playlist[previousIndex])
    }
  }

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.stop()
      }
    }
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        play,
        pause,
        next,
        previous,
        setCurrentSong,
        playlist,
        setPlaylist,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider")
  }
  return context
}

