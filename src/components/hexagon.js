"use client"

import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas, useThree, useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { AnimationMixer, MeshPhongMaterial } from 'three';
import * as THREE from 'three';
import { EffectComposer, Noise } from '@react-three/postprocessing';

function Model({ fbx }) {
    const { scene } = useThree();
    const mixer = useRef();
    let action = useRef();

    useEffect(() => {
        if (!fbx) {
            return;
        }
        fbx.scale.setScalar(0.08);
        const material = new THREE.MeshStandardMaterial({
            color: 0xfab8fc,
            specular: 0xfab8fc,
            shininess: 80,
            flatShading: true,
            side: THREE.DoubleSide,
        });
        fbx.traverse((child) => {
            if (child.isMesh) {
                child.material = material;
            }
        });
        scene.add(fbx);
        mixer.current = new AnimationMixer(fbx);
        action.current = mixer.current.clipAction(fbx.animations[0]);
        action.current.play();

        const onScroll = () => {
            const AnimationDuration = fbx.animations[0].duration;

            let scrollY = window.scrollY;
            let scrollMax = document.body.scrollHeight - window.innerHeight;
            action.current.time = (scrollY / scrollMax) * AnimationDuration;
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scene, fbx, mixer]);

    useFrame((state, delta) => {
        if (mixer.current) {
            mixer.current.update(0);
        }
    });

    return null;
}

function Scene() {
    const { camera, gl } = useThree();
    const fbx = useLoader(FBXLoader, "/model/hexagon.fbx");

    useEffect(() => {
        const resize = () => {
            camera.position.z = window.innerWidth > 768 ? 10 : 15;
            camera.position.x = window.innerWidth > 768 ? -5 : -3;
            camera.position.y = window.innerWidth > 768 ? 2 : 0;
            camera.lookAt(camera.position.x, camera.position.y, 0);
            camera.updateProjectionMatrix();

            gl.setSize(window.innerWidth, window.innerHeight);
            gl.shadowMap.enabled = true;
        };

        resize();
        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, [camera, gl]);

    return (
        <Model fbx={fbx} />
    );
}


function Hexagon() {
    return (
        <Canvas style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
            <Suspense fallback={null}>
                <directionalLight position={[0, 5, 5]} color='#ffffff' intensity={0.2} />
                <directionalLight position={[-5, 10, -5]} intensity={0.1} color='#ffffff' />
                <ambientLight intensity={0.05} color="#ffffff" />
                <hemisphereLight color="#fff00f" groundColor="#ff0f00" intensity={0.1} />
                <pointLight position={[-8, 8, -3]} intensity={40} color="#0a0a0a" />
                <pointLight position={[-3, 8, 8]} intensity={40} color="#0a0a0a" />
                <pointLight position={[10, -8, 5]} intensity={40} color="#0a0a0a" />

                <Scene />

                <EffectComposer>
                    <Noise opacity={0.01} />
                </EffectComposer>
            </Suspense>
        </Canvas>
    );
}

export default Hexagon;

