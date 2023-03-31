import { useEffect, useState, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const EarthModel = () => {
  const [scale, setScale] = useState(0.7)

  const earth = useMemo(() => useGLTF('./earth/scene.gltf'), [])
  const animations = useAnimations(earth.animations, earth.scene)
  const actionNames = useMemo(() => ['Base Stack'], [])

  useEffect(() => {
    const onScroll = () => {
      const percentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight)
      const newScale = 0.7 + 3 * percentage // adjust the scaling factor as desired
      setScale(newScale)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    actionNames.forEach((actionName) => {
      const action = animations.actions[actionName]
      action.play()
    })
  }, [animations, actionNames])

  return (
    <mesh>
      <primitive
        object={earth.scene}
        rotation={[0, -5, 0]}
        position={[0, 0, 0]}
        scale={scale}
      />
    </mesh>
  )
}

export default EarthModel
