"use client"

import { usePlayer } from "@/context/player-context"
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

export function Player() {
  const { currentSong, isPlaying, play, pause, next, previous } = usePlayer()

  if (!currentSong) return null

  return (
    <div className="fixed bottom-8 right-8 w-80 bg-gradient-to-br from-[#4A0404] to-black rounded-xl p-4 shadow-xl">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={currentSong.cover}
            alt={currentSong.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center w-full">
          <h3 className="font-semibold text-white text-lg truncate">{currentSong.title}</h3>
          <p className="text-sm text-gray-400 truncate">{currentSong.artist}</p>
        </div>

        <div className="w-full space-y-2">
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>2:15</span>
            <span>4:18</span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Shuffle className="w-5 h-5" />
          </button>
          <button
            onClick={previous}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SkipBack className="w-6 h-6" />
          </button>
          <button
            onClick={isPlaying ? pause : () => currentSong && play(currentSong)}
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button
            onClick={next}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <SkipForward className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Repeat className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

