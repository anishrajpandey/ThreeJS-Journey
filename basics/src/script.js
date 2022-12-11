import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const cursor = {
  x: 0,
  y: 0,
};
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspectRatio = sizes.width / sizes.height;
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  cursor.x = clientX / sizes.width - 0.5;
  cursor.y = clientY / sizes.height - 0.5;
});
window.addEventListener("resize", (e) => {
  //update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

//full screen

window.addEventListener("dblclick", (e) => {
  if (!document.fullscreenElement) {
    //go full screen
    canvas.requestFullscreen();
  } else {
    // leave full screen
    document.exitFullscreen();
  }
});
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
// console.log(mesh.position.length());
//sizes

//camera

// console.log(
//   "🤔 > mesh.position.distanceTo(camera.position);",
//   mesh.position.distanceTo(camera.position)
// );

// axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);
//renderer

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

// const geometry1 = new THREE.BoxGeometry(1, 1, 1);
// const material1 = new THREE.MeshBasicMaterial({ color: 0xf0ff00 });
// const mesh1 = new THREE.Mesh(geometry, material);
// scene.add(mesh1);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// camera.position.x = 2.96;
// camera.position.y = 1.9;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

//orbitcontrols
const controls = new OrbitControls(camera, canvas);
controls.enableZoom = false;
controls.enableDamping = true;
// controls.target.y = 2;

const cubeGeometry = new THREE.BoxGeometry(1, 1);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const boxMesh = new THREE.Mesh(cubeGeometry, basicMaterial);

scene.add(boxMesh);
const clock = new THREE.Clock();
const animate = () => {
  // const elapsedTime = clock.getElapsedTime();
  // camera.position.x = Math.sin(cursor.x * 10) * 3;
  // camera.position.z = Math.cos(cursor.x * 10) * 3;
  // camera.position.z = Math.cos(cursor.x * 10) * 3;
  // camera.position.y = cursor.y * 5;
  camera.lookAt(boxMesh.position);
  controls.update();
  requestAnimationFrame(() => {
    animate();
  });
  renderer.render(scene, camera);
};
animate();
renderer.render(scene, camera);
// hello world
