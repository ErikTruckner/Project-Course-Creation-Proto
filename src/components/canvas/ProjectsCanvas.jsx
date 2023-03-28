import { Canvas } from '@react-three/fiber'
import { Stars, useGLTF, useAnimations } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

const ProjectsWebGL = () => {
  //

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

const ProjectsCanvas = () => {
  return (
    <>
      <Canvas camera={{ position: [20, 3, 5], fov: 25 }}>
        <Suspense fallback={null}>
          <ProjectsWebGL />
        </Suspense>
      </Canvas>
    </>
  )
}

export default ProjectsCanvas
