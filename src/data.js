import * as THREE from "three";
const textureLoader = new THREE.TextureLoader();

import mercMat from "../static/textures/2k_mercury.jpg";
import venusMat from "../static/textures/2k_venus.jpg";
import earthMat from "../static/textures/2k_earth_daymap.jpg";
import moonMat from "../static/textures/2k_moon.jpg";
import marsMat from "../static/textures/2k_mars.jpg";
import mercMat from "../static/textures/2k_mercury.jpg";

export const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.05,
    material: mercMat,
    moons: [],
    mesh: null,
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.03,
    material: venusMat,
    moons: [],
    mesh: null,
  },
  {
    name: "Earth",
    radius: 1,
    distance: 22,
    speed: 0.01,
    material: earthMat,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 2,
        speed: 0.03,
        material: moonMat,
        mesh: null,
      },
    ],
    mesh: null,
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 28,
    speed: 0.005,
    material: marsMat,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
        material: moonMat,
        mesh: null,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.05,
        material: moonMat,
        mesh: null,
      },
    ],
    mesh: null,
  },
];
