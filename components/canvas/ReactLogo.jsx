import { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, Stars } from '@react-three/drei'

const ReactLogo = () => {
  // THIS const will be our key to the gltf
  const reactLogo = useGLTF('./reactLogo/scene.gltf')
  //   Animation
  const animations = useAnimations(reactLogo.animations, reactLogo.scene)
  const actionNames = [
    'SphereAction',
    'TorusAction1',
    'TorusAction2',
    'TorusAction3',
  ]

  useEffect(() => {
    actionNames.forEach((actionNames) => {
      const action = animations.actions[actionNames]
      action.play()
    })
  }, [])

  //
  // STARS shimmer count stagger
  // const
  //
  // ref for star rotation
  const starsRef = useRef()

  useFrame(() => {
    starsRef.current.rotation.y += 0.0001
    starsRef.current.rotation.x += 0.0001
    starsRef.current.rotation.z += 0.0001
  })

  return (
    // Create the mesh that our scene will go in
    <mesh>
      {/* We need a light to see our gltf model */}

      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight position={(-20, 50, 10)} intensity={1} color={0x61dbfb} />
      {/* this is our gltf model */}
      <primitive
        object={reactLogo.scene}
        //   This gives a good angle for model on load
        rotation={[0, -5, 0]}
        //   Change model size with scale
        scale={0.65}
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
  )
}

const ReactLogoCanvas = () => {
  return (
    <>
      <Canvas camera={{ position: [20, 3, 5], fov: 25 }}>
        <Suspense fallback={null}>
          <ReactLogo />
        </Suspense>
      </Canvas>
    </>
  )
}

export default ReactLogoCanvas
