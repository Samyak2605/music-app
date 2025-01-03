"use client"

import { Sidebar } from "@/components/ui/sidebar"
import { SongList } from "@/components/ui/song-list"
import { Player } from "@/components/ui/player"
import { Search } from 'lucide-react'
import Image from 'next/image'

const songs = [
  {
    id: 1,
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:53",
    plays: "1,040,811,084",
    cover: "https://picsum.photos/seed/billie/80",
    audioUrl: "/path-to-audio/billie-jean.mp3",
  },
  {
    id: 2,
    title: "Beat It",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:18",
    plays: "643,786,045",
    cover: "https://picsum.photos/seed/beat/80",
    audioUrl: "/path-to-audio/beat-it.mp3",
  },
  {
    id: 3,
    title: "Smooth Criminal - 2012 Remaster",
    artist: "Michael Jackson",
    album: "Bad 25th Anniversary",
    duration: "4:17",
    plays: "407,234,004",
    cover: "https://picsum.photos/seed/smooth/80",
    audioUrl: "/path-to-audio/smooth-criminal.mp3",
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    artist: "Michael Jackson",
    album: "Bad 25th Anniversary",
    duration: "6:05",
    plays: "316,391,952",
    cover: "https://picsum.photos/seed/dont/80",
    audioUrl: "/path-to-audio/dont-stop.mp3",
  },
  {
    id: 5,
    title: "Rock With You - Single Version",
    artist: "Michael Jackson",
    album: "Off The Wall",
    duration: "3:40",
    plays: "268,187,218",
    cover: "https://picsum.photos/seed/rock/80",
    audioUrl: "/path-to-audio/rock-with-you.mp3",
  },
]

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <nav className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white">
                Music
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Podcast
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Live
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Radio
              </a>
            </nav>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="search"
                placeholder="Michael Jackson"
                className="bg-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 w-64 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden mb-8 bg-[#4A0404]">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
            <Image
              src="https://picsum.photos/seed/mj-hero/1200/800"
              alt="Michael Jackson"
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-white">Verified Artist</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Michael Jackson</h1>
              <p className="text-gray-300">27,852,501 monthly listeners</p>
            </div>
          </div>

          <SongList songs={songs} />
        </div>
      </main>
      <Player />
    </div>
  )
}

