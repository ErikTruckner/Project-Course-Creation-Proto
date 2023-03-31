import { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, Stars } from '@react-three/drei'

const EarthModel = () => {
  // THIS const will be our key to the gltf
  const earth = useGLTF('./earth/scene.gltf')
  //   Animation
  const animations = useAnimations(earth.animations, earth.scene)
  const actionNames = ['Base Stack']

  useEffect(() => {
    actionNames.forEach((actionNames) => {
      const action = animations.actions[actionNames]
      action.play()
    })
  }, [])

  return (
    // Create the mesh that our scene will go in
    <mesh>
      {/* this is our gltf model */}
      <primitive
        object={earth.scene}
        //   This gives a good angle for model on load
        rotation={[0, -5, 0]}
        position={[0, 0, 0]}
        //   Change model size with scale
        scale={0.7}
      />
    </mesh>
  )
}

export default EarthModel
