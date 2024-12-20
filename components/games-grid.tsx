'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Game {
    id: number
    title: string
    thumbnail: string
    itchUrl: string
    githubUrl: string
}

export interface GamesData {
    games: Game[];
}

export default function GamesGrid() {
    const [games, setGames] = useState<Game[]>([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('./games.json');
                if (!response.ok) {
                    const errorResponse = await response.json();
                    throw new Error(`Network response was not ok: ${errorResponse.message || response.statusText}`);
                }
                const data: GamesData = await response.json();
                setGames(data.games);
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
            <div className="max-w-md mx-auto invisible">
                <Input
                    type="text"
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredGames.map((game) => (
                    <Link href={game.itchUrl} key={game.id} passHref>
                        <Card className="hover:shadow-lgtransition-shadow duration-300 rounded-b-lg overflow-hidden group relative">
                            <CardContent className="p-0 bg-black">
                                <div className="relative">
                                    <Image
                                        src={game.thumbnail}
                                        alt={`${game.title} thumbnail`}
                                        width={300}
                                        height={200}
                                        className="w-full h-40 object-contain rounded-t-lg"
                                    />
                                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Play className="w-12 h-12 text-white" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 text-lg text-center bg-white w-full">
                                    <span>{game.title}</span>
                                    <div className="flex items-center justify-center w-8 h-8 border-2 border-gray-600 rounded-full hover:bg-gray-100 transition">
                                        <Link href={game.githubUrl}>
                                            <Github className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
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