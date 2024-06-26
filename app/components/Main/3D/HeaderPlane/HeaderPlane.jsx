"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./style.module.scss";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const HeaderPlane = () => {
  console.log("123");
  const canvas = useRef(null);
  const [webglLoaded, setWebglLoaded] = useState(true);

  console.log(canvas);

  return (
    <div className={styles.main}>
      {webglLoaded && (
        <Canvas ref={canvas}>
          {/*           <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} /> */}
          <Cube />
        </Canvas>
      )}
    </div>
  );
};

function Cube() {
  /*   const { gl } = useThree();

  const reload = useCallback(() => {
    gl.forceContextRestore();
    console.log("restored");
  });
  console.log(gl);

  useEffect(() => {
    gl.domElement.addEventListener("webglcontextlost", reload);
    return () => {
      gl.domElement.removeEventListener("webglcontextlost", reload);
    };
  }, [reload]); */

  const obj = useLoader(OBJLoader, "/3d/plane_paper_2.obj");
  const matcap = useLoader(TextureLoader, "3d/matcap/8.png"); // 2, 4, 8

  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  const mesh = useRef(null);
  const options = {
    damping: 30,
  };

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = 2 - (clientY / innerHeight) * 2 - 1;

    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  useFrame((state, delta) => {
    mesh.current.lookAt(mouse.x.get() * 7, mouse.y.get() * 7, 0);
    mesh.current.position.x = mouse.x.get() * 7;
    mesh.current.position.y = mouse.y.get() * 7;
    /*     mesh.current.scale.set(
      Math.abs(mouse.x.getVelocity() + mouse.y.getVelocity()),
      Math.abs(mouse.x.getVelocity() + mouse.y.getVelocity()),
      Math.abs(mouse.x.getVelocity() + mouse.y.getVelocity())
    ); */
    /* mesh.current.rotation.x += delta * 0.1; */
  });

  return (
    <mesh geometry={geometry} ref={mesh}>
      <meshMatcapMaterial matcap={matcap} />
      {/* <meshBasicMaterial color={"#FF3129"} /> */}
      {/* <meshStandardMaterial
      {/*   <meshStandardMaterial
        wireframe={true}
        color={"black"}
        wireframeLinewidth={5}
      /> */}
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
}

export default HeaderPlane;
