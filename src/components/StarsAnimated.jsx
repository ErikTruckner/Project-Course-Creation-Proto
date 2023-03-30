import { useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useRef } from 'react'

const StarsAnimated = () => {
  const starsRef = useRef()

  useFrame(() => {
    starsRef.current.rotation.y += 0.0001
    starsRef.current.rotation.x += 0.0001
    starsRef.current.rotation.z += 0.0001
  })
  return (
    <Stars
      ref={starsRef}
      radius={1}
      depth={80}
      count={5000}
      factor={5}
      saturation={0}
      fade
      speed={2}
    />
  )
}

export default StarsAnimated
