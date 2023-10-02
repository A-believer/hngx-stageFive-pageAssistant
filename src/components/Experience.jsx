import { OrbitControls } from '@react-three/drei'
import React from 'react'

export default function Experience() {
  return (
      <>
          <OrbitControls/>
              <mesh>
                  <boxGeometry />
                  <meshNormalMaterial/>
              </mesh>
          
    </>
  )
}
