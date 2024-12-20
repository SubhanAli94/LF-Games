import type { Metadata } from "next";
import "./globals.css";
import { Lora } from 'next/font/google'

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "LF Games",
  description: "A collection of 2D low-fidelity games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} letter-spacing`}>
        {children}
      </body>
    </html>
  );
}
