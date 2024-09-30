import GameShowcase from './app-components-game-showcase' // Adjusted to default import
import Link from 'next/link'

export default async function PageComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">2D - Low-Fidelity Games</Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to LFG</h1>
        <GameShowcase />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><Link href="#privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}