
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import PngComputer from '../../../public/desktop/computer.png'
import Image from "next/image";
import { AnimatePresence } from "framer-motion";



const Computer = () => {
  const { scene } = useGLTF('./desktop/scene.gltf'); // Destructure scene directly

  // Log to verify if the scene is loaded
  console.log("Scene loaded:", scene);

  return (
    <AnimatePresence>
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
        scale={1.45}
        position={ [0, -4, -2.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    </AnimatePresence>
  );
};

const ComputersCanvas = () => {
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
          minPolarAngle={Math.PI / 2 }
        />
        <Computer/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const ResponsiveCanvas = () => {
 
  return(
    <div className="w-full h-full">
      <div className="desktop-only w-full h-full">
          <ComputersCanvas />
      </div>
      <div className="mobile-only w-full h-full">
          <Image alt="computer" src={PngComputer} />
      </div>
    </div>
  ) 
}
export default ResponsiveCanvas