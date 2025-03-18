import * as THREE from "three";
const textureLoader = new THREE.TextureLoader();

import mercMat from "../static/textures/2k_mercury.jpg";
import venusMat from "../static/textures/2k_venus_surface.jpg";
import earthMat from "../static/textures/2k_earth_daymap.jpg";
import moonMat from "../static/textures/2k_moon.jpg";
import marsMat from "../static/textures/2k_mars.jpg";
import jupiterMat from "../static/textures/2k_jupiter.jpg";
import saturnMat from "../static/textures/2k_saturn.jpg";
import uranusMat from "../static/textures/2k_uranus.jpg";
import neptureMat from "../static/textures/2k_neptune.jpg";

export const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.05,
    material: mercMat,
    moons: [],
    rings: [],
    mesh: null,
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.03,
    material: venusMat,
    moons: [],
    rings: [],
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
    rings: [],
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
    rings: [],
    mesh: null,
  },
  {
    name: "Jupiter",
    radius: 1.5,
    distance: 40,
    speed: 0.03,
    material: jupiterMat,
    moons: [
      {
        name: "Phobos",
        radius: 0.08,
        distance: 1.5,
        speed: 0.02,
        material: moonMat,
        mesh: null,
      },
      {
        name: "Deimos",
        radius: 0.13,
        distance: 1.9,
        speed: 0.03,
        material: moonMat,
        mesh: null,
      },
      {
        name: "Phobos",
        radius: 0.15,
        distance: 2.3,
        speed: 0.01,
        material: moonMat,
        mesh: null,
      },
      {
        name: "Deimos",
        radius: 0.1,
        distance: 2.8,
        speed: 0.04,
        material: moonMat,
        mesh: null,
      },
    ],
    rings: [],
    mesh: null,
  },
  {
    name: "Saturn",
    radius: 1.3,
    distance: 45,
    speed: 0.02,
    material: saturnMat,
    moons: [
      {
        name: "Deimos",
        radius: 0.13,
        distance: 1.9,
        speed: 0.03,
        material: moonMat,
        mesh: null,
      },
      {
        name: "Phobos",
        radius: 0.15,
        distance: 2.3,
        speed: 0.01,
        material: moonMat,
        mesh: null,
      },
      {
        name: "Deimos",
        radius: 0.1,
        distance: 2.8,
        speed: 0.04,
        material: moonMat,
        mesh: null,
      },
    ],
    rings: [],
    mesh: null,
  },
  {
    name: "Uranus",
    radius: 1.3,
    distance: 50,
    speed: 0.025,
    material: uranusMat,
    moons: [],
    rings: [],
    mesh: null,
  },
  {
    name: "Neptune",
    radius: 1.2,
    distance: 55,
    speed: 0.035,
    material: neptureMat,
    moons: [
      {
        name: "Deimos",
        radius: 0.1,
        distance: 2.8,
        speed: 0.04,
        material: moonMat,
        mesh: null,
      },
    ],
    rings: [],
    mesh: null,
  },
];
