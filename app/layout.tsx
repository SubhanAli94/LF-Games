import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from 'next/font/google'

const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
})



export const metadata: Metadata = {
  title: "LFG",
  description: "A collection of 2D low-fidelity games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        {children}
      </body>
    </html>
  );
}
