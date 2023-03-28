import { Canvas } from '@react-three/fiber'
import { Stars, useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const AboutWebGL = () => {
  //
  const spaceCity = useGLTF('./spaceCity/scene.gltf')

  const animations = useAnimations(spaceCity.animations, spaceCity.scene)
  const actionNames = ['Take 001']

  useEffect(() => {
    actionNames.forEach((actionNames) => {
      const action = animations.actions[actionNames]
      action.play()
    })
  }, [])

  // ref for star rotation
  const starsRef = useRef()

  useFrame(() => {
    starsRef.current.rotation.y += 0.0001
    starsRef.current.rotation.x += 0.0001
    starsRef.current.rotation.z += 0.0001
  })

  return (
    <>
      <mesh>
        <spotLight intensity={0.5} angle={15} />
        <primitive
          object={spaceCity.scene}
          //   This gives a good angle for model on load
          rotation={[-10, -5, -8.9]}
          //   Change model size with scale
          scale={0.00038}
          position={[0, -3.5, 0]}
        />
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
      </mesh>
    </>
  )
}

const AboutCanvas = () => {
  return (
    <>
      <Canvas camera={{ position: [20, 3, 5], fov: 25 }}>
        {/* <OrbitControls /> */}
        <AboutWebGL />
      </Canvas>
    </>
  )
}

export default AboutCanvas
