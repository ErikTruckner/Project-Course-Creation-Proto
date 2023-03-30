import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
//
import StarsAnimated from './StarsAnimated'
//
import About from './About'
import SwiperProjects from './SwiperProjects'
import Hero from './Hero'
import ReactLogo from './canvas/ReactLogo'
import WorkExperience from './WorkExperience'
import Contact from './Contact'

const MasterContainer = () => {
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }
  //   Stars (drei) movement animations
  const starsRef = useRef()

  //
  return (
    <>
      <Canvas
        id='canvas'
        style={{ position: 'fixed' }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        onCreated={bgColor}>
        <StarsAnimated />
        <ReactLogo />
      </Canvas>
      <Hero />
      <About />
      <SwiperProjects />
      <WorkExperience />
      <Contact />
    </>
  )
}

export default MasterContainer
