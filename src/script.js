import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Pane } from "tweakpane";
import Celestial from "./celestial";
import { orbit, renderCelestials, rotate } from "./utilities";
import { planets } from "./data";
import sunMat from "../static/textures/2k_sun.jpg";

const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = new THREE.CubeTextureLoader()
  .setPath("textures/cubeMap/")
  .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

const sun = new Celestial(
  new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunMat),
  })
).getMesh();
sun.scale.setScalar(7);

renderCelestials(planets, textureLoader);

planets.forEach((planet) => {
  scene.add(planet.mesh);
});

scene.add(sun);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1000);
scene.add(pointLight);

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  400
);
camera.position.z = 100;
camera.position.y = 5;

const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.maxDistance = 200;
controls.minDistance = 20;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();

const renderloop = () => {
  rotate(sun, 0.0005);
  const elapsedTime = clock.getElapsedTime();

  planets.forEach((planet) => {
    orbit(planet.mesh, elapsedTime * planet.speed, planet.distance);
    if (planet.moons.length > 0) {
      planet.moons.forEach((moon) => {
        orbit(moon.mesh, elapsedTime * moon.speed, moon.distance);
      });
    }
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
