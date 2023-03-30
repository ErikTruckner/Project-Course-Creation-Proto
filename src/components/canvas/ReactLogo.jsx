import { Suspense, useEffect, useRef } from 'react'

import { useGLTF, useAnimations, Stars, Loader } from '@react-three/drei'

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
    </mesh>
  )
}

const ReactLogoCanvas = () => {
  const bgColor = ({ gl }) => {
    gl.setClearColor('#000000', 1)
  }

  return <ReactLogo />
}

export default ReactLogo
