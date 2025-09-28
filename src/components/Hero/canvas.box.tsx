


import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box(){
    return (
        <mesh rotation={[0.4,0.6,0]}>
            <boxGeometry args={[2,2,2]} />
            <meshStandardMaterial color="#4CAF50" />
        </mesh>
    )
}

function ComputerShape() {
  return (
    <group>
      {/* Màn hình */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#4CAF50" />
      </mesh>

      {/* Thân dưới (bàn phím) */}
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#2196F3" />
      </mesh>
    </group>
  );
}

export   function CanvasBox() {
    return (
        <Canvas>
            <ambientLight  intensity={0.5}/>
            <pointLight position={[10, 10, 10]} />
            <Box />
            <ComputerShape />
            <OrbitControls enableZoom={true} />
        </Canvas>
    );
}