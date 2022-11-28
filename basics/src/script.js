import * as THREE from "three";
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0;
mesh.position.normalize();
scene.add(mesh);
console.log(mesh.position.length());
//sizes
const sizes = {
  width: 600,
  height: 400,
};
//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;

scene.add(camera);

console.log(
  "🤔 > mesh.position.distanceTo(camera.position);",
  mesh.position.distanceTo(camera.position)
);
//renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
