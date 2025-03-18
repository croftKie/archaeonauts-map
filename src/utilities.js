import Celestial from "./celestial";
import * as THREE from "three";

export function orbit(mesh, elapsedTime, orbitSpeed) {
  mesh.position.x = Math.sin(elapsedTime) * orbitSpeed;
  mesh.position.z = Math.cos(elapsedTime) * orbitSpeed;
}
export function rotate(mesh, rate) {
  mesh.rotation.y += rate;
}
export function renderCelestials(celestials, textureLoader) {
  celestials.forEach((planet) => {
    const plan = new Celestial(
      new THREE.MeshStandardMaterial({
        map: textureLoader.load(planet.material),
      })
    ).getMesh();

    plan.scale.setScalar(planet.radius);
    plan.position.x = planet.distance;

    planet.mesh = plan;

    if (planet.moons && planet.moons.length > 0) {
      planet.moons.forEach((moon) => {
        const mun = new Celestial(
          new THREE.MeshStandardMaterial({
            map: textureLoader.load(moon.material),
          })
        ).getMesh();
        mun.scale.setScalar(moon.radius);
        mun.position.x = moon.distance;
        moon.mesh = mun;
        planet.mesh.add(moon.mesh);
      });
    }
  });
}
