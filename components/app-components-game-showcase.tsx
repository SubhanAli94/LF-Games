'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

interface Game {
  id: number
  title: string
  thumbnail: string
  url: string
}

export interface GamesData {
  games: Game[];
}

export default function GameShowcase() {
  const [games, setGames] = useState<Game[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/games.json');
        if (!response.ok) {
          throw new Error(`Network response was not ok ${response.json}`);
        }
        const data: GamesData = await response.json();
        setGames(data.games); // Assuming your JSON has a structure like { "games": [...] }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return <div className="text-center">Loading games...</div>
  }

  return (
    <div className="space-y-6">
      <div className="max-w-md mx-auto">
        <Input
          type="text"
          placeholder="Search games..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <Link href={game.url} key={game.id} passHref>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={game.thumbnail}
                  alt={`${game.title} thumbnail`}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h2 className="p-4 text-lg font-semibold text-center">{game.title}</h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      {filteredGames.length === 0 && (
        <p className="text-center text-muted-foreground">No games found. Try a different search term.</p>
      )}
    </div>
  )
}