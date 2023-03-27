import { useEffect } from 'react'
import About from './components/About'

import Hero from './components/Hero'

import SwiperProjects from './components/SwiperProjects'

export default function App() {
  return (
    <div>
      <Hero />

      <About />

      <SwiperProjects />
    </div>
  )
}
