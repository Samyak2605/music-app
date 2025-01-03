import { Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react'
import Link from "next/link"

export function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-red-500 rounded-lg" />
        <h1 className="text-xl font-bold text-white">DreamMusic</h1>
      </div>

      <div className="space-y-6">
        <h2 className="text-sm font-semibold text-gray-400 uppercase">Menu</h2>
        <nav className="space-y-4">
          <Link
            href="/"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link
            href="/trends"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            Trends
          </Link>
          <Link
            href="/library"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors"
          >
            <Library className="w-5 h-5" />
            Library
          </Link>
          <Link
            href="/discover"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors"
          >
            <Compass className="w-5 h-5" />
            Discover
          </Link>
        </nav>

        <h2 className="text-sm font-semibold text-gray-400 uppercase pt-6">General</h2>
        <nav className="space-y-4">
          <Link
            href="/settings"
            className="flex items-center gap-4 text-white hover:text-red-500 transition-colors"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
          <button className="flex items-center gap-4 text-white hover:text-red-500 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </nav>
      </div>
    </div>
  )
}

