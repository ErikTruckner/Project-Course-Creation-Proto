import { useEffect } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import SnapToSection from './utils/SnapToSection'

export default function App() {
  return (
    <div>
      <Hero />

      <About />
    </div>
  )
}
