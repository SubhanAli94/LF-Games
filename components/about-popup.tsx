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
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Welcome to our portfolio showcasing a curated collection of 100 WebGL 2D games developed using Unity 3D and published on Itch.io. This platform serves as a comprehensive display of our game development expertise, providing seamless access for users to engage with and experience these games.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Each game card features a visually appealing thumbnail alongside the title of the game. By clicking on a card, users will be directed to the respective game’s page on Itch.io, where they can play and delve deeper into the game’s features and offerings.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            We encourage you to explore the collection, utilize the search functionality to discover specific titles, and immerse yourself in the gaming experience we have curated for you.
          </p>
        </div>


      </DialogContent>
    </Dialog>
  )
}