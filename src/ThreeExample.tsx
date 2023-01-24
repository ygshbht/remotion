import React, {useEffect, useRef} from 'react';
import * as Three from 'three';

import {getCamera, getBox} from './geometries';

const scene: Three.Scene = new Three.Scene();
const renderer = new Three.WebGLRenderer();
const camera = getCamera(renderer);
const box = getBox();
scene.add(box);
const ThreeExample = () => {
	const appRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const app = appRef.current as HTMLDivElement;
		app.appendChild(renderer.domElement);

		animate();

		return () => {
			app.removeChild(renderer.domElement);
		};
	}, []);
	return <div ref={appRef} />;
};
export default ThreeExample;

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
