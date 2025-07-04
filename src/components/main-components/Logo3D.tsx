import { Suspense, useRef, useState } from 'react';
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

interface RotatingMeshProps {
	geometry: THREE.BufferGeometry;
}

function RotatingMesh({ geometry }: RotatingMeshProps) {
	const meshRef = useRef<THREE.Mesh | null>(null);
	const [time, setTime] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [hasNoddedTwice, setHasNoddedTwice] = useState(false);

	useFrame(() => {
		if (meshRef.current) {
			// 초기 두 번 끄덕임 또는 호버 시 끄덕임
			if (isHovered || !hasNoddedTwice) {
				const angle = Math.sin(time) * (Math.PI / 20); // 부드러운 끄덕임
				meshRef.current.rotation.z = angle;
				setTime((prevTime) => prevTime + 0.08);
				if (time >= Math.PI * 4) {
					setHasNoddedTwice(true);
				}
			} else {
				// 기본 회전 (호버하지 않을 때, 두 번 끄덕임 완료 후)
				meshRef.current.rotation.y += 0.01; // y축으로 천천히 회전
			}
		}
	});

	return (
		<group>
			{/* ✅ Invisible Large Hover Area */}
			<mesh
				onPointerOver={() => setIsHovered(true)}
				onPointerOut={() => setIsHovered(false)}
			>
				<sphereGeometry args={[2, 2, 2]} /> {/* Invisible larger sphere */}
				<meshBasicMaterial transparent opacity={0} />
			</mesh>

			{/* 실제 오브젝트 */}
			<mesh
				ref={meshRef}
				scale={[1, 1, 1]}
				castShadow
				receiveShadow
				rotation={[0, -1, 0]}
			>
				<primitive object={geometry} />
				<meshStandardMaterial color="#60519b" />
			</mesh>
		</group>
	);
}

interface LogoThreeProps {
	url: string;
}

function LogoThree({ url }: LogoThreeProps) {  // props로 url 받기
	const geometry = useLoader(STLLoader, url); // 파일 경로를 문자열로 전달

	return (
		<div className="h-full w-full cursor-pointer z-2">
			<Canvas
				shadows
				camera={{ position: [-2.3, 0, 0], fov: 75 }}
				className="w-full h-full z-2"
			>
				<Suspense fallback={<div>Loading...</div>}>
					{/* ✅ 위에서 비추는 조명 */}
					<directionalLight position={[-2, 5, 3]} intensity={5} castShadow />
					<ambientLight intensity={1.5} />
					<pointLight position={[2, 2, 2]} intensity={1} />

					{/* ✅ STL 모델 */}
					<RotatingMesh geometry={geometry} />
				</Suspense>
			</Canvas>
		</div>
	);
}

export default LogoThree;
