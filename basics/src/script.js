import * as THREE from "three";
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const mesh = new THREE.Mesh(geometry, material);

// mesh.position.x = 0;
// mesh.position.y = 0;
// mesh.position.z = 0;
// mesh.position.normalize();
// mesh.position.set(0.9, -0.6, 1);
// mesh.scale.set(2, 1, 0.5);
// mesh.rotation.z = Math.PI * 0.25;
// mesh.rotation.x = 1;
// mesh.rotation.y = 0.92;
// mesh.rotation.x = 0.3;
// mesh.rotation.z = 0.4;
// mesh.quaternion.x = 0.3;
// mesh.quaternion.z = 0.4;
// mesh.quaternion.x = 0.4;
//todo scene.add(mesh);
// console.log(mesh.position.length());
//sizes
const sizes = {
  width: 600,
  height: 400,
};
//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = 1.96;
camera.position.y = 0.9;

// camera.lookAt(mesh.position);

scene.add(camera);

// console.log(
//   "🤔 > mesh.position.distanceTo(camera.position);",
//   mesh.position.distanceTo(camera.position)
// );

// axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);
//renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

//group
// const cube1 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: "red" })
// );
// const cube2 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: "blue" })
// );
// cube2.position.x = -2;
// const cube3 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: "green" })
// );
// cube3.position.x = 3;

// const group = new THREE.Group();
// group.add(cube1, cube2, cube3);
// group.add(mesh);
// scene.add(group);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const cubeGeometry = new THREE.BoxGeometry(2, 2);
const basicMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const boxMesh = new THREE.Mesh(cubeGeometry, basicMaterial);
scene.add(boxMesh);
