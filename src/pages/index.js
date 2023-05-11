import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from './Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Card />
    </main>
  )
}
