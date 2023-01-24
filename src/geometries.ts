import * as Three from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export function getBox() {
	const boxGeometry = new Three.BoxGeometry(1, 1, 1);

	const material = new Three.MeshBasicMaterial({
		color: 0x00ff00,
	});
	const box = new Three.Mesh(boxGeometry, material);
	box.position.setX(0);
	box.position.setY(0);
	box.position.setZ(0);
	return box;
}

export function getSphere() {
	const geometry = new Three.SphereGeometry(15, 32, 16);
	const material = new Three.MeshBasicMaterial({color: 0xffffff});
	const sphere = new Three.Mesh(geometry, material);
	sphere.scale.setX(0.01);
	sphere.scale.setY(0.01);
	sphere.scale.setZ(0.01);

	return sphere;
}

export const planeDimensions = {
	width: 400,
	height: 400,
	widthSegments: 50,
	heightSegments: 50,
};

export function getPlane() {
	const geometry = new Three.PlaneGeometry(
		planeDimensions.width,
		planeDimensions.height,
		planeDimensions.widthSegments,
		planeDimensions.heightSegments
	);
	const material = new Three.MeshPhongMaterial({
		// Color: 0xff0000,
		side: Three.DoubleSide,
		flatShading: true,
		vertexColors: true,
	});
	const plane = new Three.Mesh(geometry, material);
	return plane;
}

export function getLight() {
	const light = new Three.DirectionalLight(0xffffff, 1);
	light.position.set(0, 1, 1);
	return light;
}
export function getPointLight() {
	const light = new Three.PointLight(0xffffff, 1);
	light.position.set(0, 1, 1);
	return light;
}
export function getBackLight() {
	const light = new Three.DirectionalLight(0xffffff, 1);
	light.position.set(0, 1, -1);
	light.rotateX(180);
	return light;
}
export function getRayCaster() {
	const rayCaster = new Three.Raycaster();
	return rayCaster;
}
export function getCamera(renderer: Three.WebGLRenderer) {
	const camera = new Three.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.z = 2;
	camera.position.y = 2;
	const controls = new OrbitControls(camera, renderer.domElement);
	return camera;
}
