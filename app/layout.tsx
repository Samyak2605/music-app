import { Inter } from 'next/font/google'
import { PlayerProvider } from "@/context/player-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlayerProvider>{children}</PlayerProvider>
      </body>
    </html>
  )
}

