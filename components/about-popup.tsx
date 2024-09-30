'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AboutPopupComponent() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-foreground hover:underline p-0 h-auto font-normal">About</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>About My Game Showcase</DialogTitle>
          <DialogDescription>
            Learn more about this website and its creator.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            This website showcases a collection of 100 WebGL 2D games built using Unity 3D and published on Itch.io. It serves as a portfolio of my game development work and provides easy access to play these games.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Each game card displays a thumbnail and the game's name. Clicking on a card will take you directly to the game's page on Itch.io, where you can play and explore more.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Feel free to browse through the games, use the search function to find specific titles, and enjoy playing!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}