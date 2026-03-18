import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/niranjan-portfolio/person_0.glb')
  const ref = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.4
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}
      position={[0, -1.5, 0]}
    />
  )
}

function Fallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#7c3aed" />
    </mesh>
  )
}

export default function Model3DComponent() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} color="#a78bfa" intensity={5} />
      <pointLight position={[-5, 3, -5]} color="#f59e0b" intensity={3} />
      <spotLight position={[0, 8, 2]} intensity={3} color="#7c3aed" angle={0.4} />
      <Suspense fallback={<Fallback />}>
        <PresentationControls
          global
          polar={[-0.3, 0.3]}
          azimuth={[-0.8, 0.8]}
          snap
        >
          <Model />
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/niranjan-portfolio/person_0.glb')