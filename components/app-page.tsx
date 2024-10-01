import { AboutPopupComponent } from './about-popup'
import GameShowcase from './app-components-game-showcase' // Adjusted to default import
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { FaXTwitter } from "react-icons/fa6";
export default async function PageComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">LFG</Link>
          <nav className="flex items-center space-x-4">
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <p className="text-2xl mx-auto w-full text-center pb-6 font-medium">A collection of 2D low-fidelity web games<br /><span className='italic font-normal text-base text-gray-700'> Best experience on desktop-based browsers</span></p>
        <GameShowcase />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} 2D - Low Fidelity Games. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}