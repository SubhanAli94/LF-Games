import { AboutPopupComponent } from './about-popup'
import GamesGrid from './games-grid'
import Link from 'next/link'
import { Linkedin, AlertTriangle } from 'lucide-react'
import { Button } from './ui/button'
import { FaXTwitter } from "react-icons/fa6";

export default async function PageComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="md:hidden sticky top-0 z-50 bg-yellow-100 text-yellow-800 px-4 py-3 flex items-center justify-center text-sm">
        <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
        <p>Games can only be played on laptops or desktop computers with keyboard controls.</p>
      </div>

      <header>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">


          <Link href="/" className="text-2xl font-semibold">
            LF Games
          </Link>
          <nav className="flex items-center space-x-4 invisible">
            <ul className="flex space-x-4">
              <li><AboutPopupComponent /></li>
            </ul>
            <Link href="https://www.linkedin.com/company/lfgames/about/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

            <Link href="https://x.com/lfgdev" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <FaXTwitter className="h-5 w-5" /> {/* Using the new X icon */}
                <span className="sr-only">X</span>
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 pb-8 pt-5">
        <p className="text-base md:text-3xl sm:text-2xl mx-auto w-full text-center pb-2 font-medium gradient-text">A collection of low-fidelity 2D web games</p>
        <p className='text-center font-normal md:text-base sm:text-sm md:pb-6 sm:pb-3 text-gray-700'> Best experience on desktop-based browsers</p>
        <GamesGrid />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>{new Date().getFullYear()} 2D - Low Fidelity Games.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}