'use client'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

interface props{
  isMobile: boolean
}

const Computer = ({isMobile}: props) => {
  const { scene } = useGLTF('./desktop/scene.gltf'); // Destructure scene directly

  // Log to verify if the scene is loaded
  console.log("Scene loaded:", scene);

  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={7} />
      <primitive
        object={scene}
        scale={isMobile ?[3,1.5,2]: [4.5,2,2]}
        position={ [-0.8, -4.8, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true} // Enable zoom to verify if model is in view
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
