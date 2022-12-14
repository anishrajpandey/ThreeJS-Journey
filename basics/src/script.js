import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import textureImage from "./texture.png";
import * as dat from "dat.gui";
import gsap from "gsap";
import importedTexture from "./textures/door.jpg";
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
// controls.enableZoom = false;
controls.enableDamping = true;
// controls.target.y = 2;

const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4);
// const geometry = new THREE.BufferGeometry();
// const vertex1 = new THREE.Vector3(0, 0, 0);
// geometry.vertices.push(vertex1);
// geometry.vertices.push(new THREE.Vector3(0, 1, 0));
// geometry.vertices.push(new THREE.Vector3(1, 0, 0));
// const face = new Face3(0, 1, 0);
// geometry.faces.push(face);
// !
// const geometry = new BufferGeometry();
// const count = 233;
// const positionsArray = new Float32Array(count * 3 * 3);
// for (let i = 0; i < count * 3 * 3; i++) {
//   positionsArray[i] = Math.random() - 0.5 * 9;
// }
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
// geometry.setAttribute("position", positionsAttribute);
const loadingManager = new THREE.LoadingManager();

const textureLoader = new THREE.TextureLoader(loadingManager);
const texture = textureLoader.load("assets/images/b507675cedd1f96a.png");
// texture.repeat.x = 1;
// texture.repeat.y = 1;
// texture.wrapT = THREE.MirroredRepeatWrapping;
// texture.wrapS = THREE.MirroredRepeatWrapping;
// texture.offset.y = 3;
// texture.rotation = Math.PI * 0.25;
// texture.center.x = 0.3;
// texture.center.y = 0.3;
// loadingManager.onStart = () => {
//   console.log("start");
// };
texture.generateMipmaps = false;
texture.minFilter = THREE.NearestFilter;
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ffff,
  // wireframe: true,
  map: texture,
});
console.log(geometry.attributes.uv);
const boxMesh = new THREE.Mesh(geometry, basicMaterial);

// todo scene.add(boxMesh);
const clock = new THREE.Clock();

camera.lookAt(boxMesh.position);

// const gui = new dat.GUI();
const parameters = {
  color: 0xff0000,
  spin: () => {
    gsap.to(boxMesh.rotation, { duration: 1, y: 10 });
  },
};

// gui.add(boxMesh.position, "y", -3, 3, 0.1);
// gui.add(boxMesh.position, "x", -3, 3, 0.1);
// gui.add(boxMesh.position, "z", -3, 3, 0.1);
// gui.add(boxMesh, "visible");
// gui.add(basicMaterial, "wireframe");
// gui.addColor(parameters, "color").onChange(() => {
//   basicMaterial.color.set(parameters.color);
// });
// gui.add(parameters, "spin");
let Texture = textureLoader.load(importedTexture);
// const MeshBasicMaterial = new THREE.MeshBasicMaterial();
// const normalMaterial = new THREE.MeshNormalMaterial();
// normalMaterial.flatShading = true;
// MeshBasicMaterial.color = new THREE.Color("green");
// MeshBasicMaterial.map = greenTexture;

// const matCapMaterial = new THREE.MeshMatcapMaterial();
// const meshDepthMaterial = new THREE.MeshDepthMaterial();
// const lambertMaterial = new THREE.MeshLambertMaterial();
// const lambertMaterial = new THREE.MeshPhongMaterial();
// lambertMaterial.shininess = 0;
// lambertMaterial.specular = new THREE.Color("red");

// const toonMaterial = new THREE.MeshToonMaterial();
const standardMaterial = new THREE.MeshStandardMaterial();
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
const pointLight = new THREE.PointLight(0xffffff, 0.3);
pointLight.position.set(2, 4, 2);
scene.add(ambientLight, pointLight);
standardMaterial.map = Texture;
const sphere = new THREE.Mesh(
  new THREE.SphereBufferGeometry(0.4, 20, 20),
  standardMaterial
);
const plane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(1, 1, 20, 20),
  standardMaterial
);
const torus = new THREE.Mesh(
  new THREE.TorusBufferGeometry(0.3, 0.2, 20, 20),
  standardMaterial
);

sphere.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);
torus.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);
plane.geometry.setAttribute(
  "uv2",
  new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);
standardMaterial.displacementMap = Texture;
standardMaterial.displacementScale = 0.1;

plane.position.x = 1;
torus.position.x = 2;
const gui = new dat.GUI();
gui.add(standardMaterial, "metalness").min(0).max(1).step(0.01);
gui.add(standardMaterial, "roughness", 0, 1, 0.01);

gui.add(standardMaterial, "displacementScale", 0, 5, 0.001);
gui.add(standardMaterial, "wireframe");

const animate = () => {
  const elapsedTime = clock.getElapsedTime();
  // camera.position.x = Math.sin(cursor.x * 10) * 3;
  // camera.position.z = Math.cos(cursor.x * 10) * 3;
  // camera.position.z = Math.cos(cursor.x * 10) * 3;
  // camera.position.y = cursor.y * 5;
  sphere.rotation.x = 0.1 * elapsedTime;
  plane.rotation.x = 0.1 * elapsedTime;
  torus.rotation.x = 0.1 * elapsedTime;
  camera.lookAt(boxMesh.position);
  controls.update();
  requestAnimationFrame(() => {
    animate();
  });
  renderer.render(scene, camera);
};
animate();

scene.add(sphere, plane, torus);
renderer.render(scene, camera);
