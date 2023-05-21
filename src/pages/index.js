import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from './Card'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <Card />
    </main>
  )
}
