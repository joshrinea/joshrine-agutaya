import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/pages/About'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <div style={{ height: '2000px' }}></div> */}
    </>
  )
}
