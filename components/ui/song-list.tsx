"use client"

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { usePlayer } from "@/context/player-context"
import { Song } from "@/types/music"
import { useState, useEffect } from "react"
import Image from "next/image"

interface SongListProps {
  songs: Song[]
}

export function SongList({ songs: initialSongs }: SongListProps) {
  const [songs, setSongs] = useState(initialSongs)
  const { currentSong, play, isPlaying, setPlaylist } = usePlayer()

  useEffect(() => {
    setPlaylist(songs)
  }, [songs, setPlaylist])

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(songs)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setSongs(items)
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Popular</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors">See All</button>
      </div>

      <div className="grid grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 text-sm text-gray-400 px-4 py-2">
        <div>#</div>
        <div>TITLE</div>
        <div>PLAYING</div>
        <div>TIME</div>
        <div>ALBUM</div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="songs">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {songs.map((song, index) => (
                <Draggable key={song.id} draggableId={String(song.id)} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`grid grid-cols-[auto_2fr_1fr_1fr_1fr] gap-4 px-4 py-2 items-center hover:bg-white/5 rounded-lg cursor-pointer ${
                        currentSong?.id === song.id ? "bg-white/10" : ""
                      }`}
                      onClick={() => play(song)}
                    >
                      <div>{index + 1}</div>
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                          <Image
                            src={song.cover}
                            alt={song.title}
                            width={40}
                            height={40}
                            className="rounded object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-white">{song.title}</div>
                          <div className="text-sm text-gray-400">{song.artist}</div>
                        </div>
                      </div>
                      <div>{song.plays}</div>
                      <div>{song.duration}</div>
                      <div>{song.album}</div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

