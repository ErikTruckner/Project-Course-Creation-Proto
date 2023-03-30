import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
//
import StarsAnimated from './StarsAnimated'

const MasterContainer = () => {
  // Canvas BG color
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }
  //   Stars (drei) movement animations
  const starsRef = useRef()

  //
  return (
    <div id='master-container'>
      <Canvas camera={{ position: [20, 3, 5], fov: 25 }} onCreated={bgColor}>
        <StarsAnimated />
      </Canvas>
    </div>
  )
}

export default MasterContainer
