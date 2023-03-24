import { useEffect } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function App() {
  return (
    <div>
      <Hero />

      <About />
      <Projects />
    </div>
  )
}
