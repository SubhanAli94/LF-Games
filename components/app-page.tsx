import { AboutPopupComponent } from './about-popup'
import GameShowcase from './app-components-game-showcase' // Adjusted to default import
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { Button } from './ui/button'

export default async function PageComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">LFG</Link>
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
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
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