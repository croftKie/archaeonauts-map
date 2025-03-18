import * as THREE from "three";

export default class Celestial {
  constructor(
    material = new THREE.MeshBasicMaterial({ color: "yellow" }),
    geometry = new THREE.SphereGeometry(1, 32, 32)
  ) {
    this.geom = geometry;
    this.mat = material;
    this.mesh = new THREE.Mesh(this.geom, this.mat);
  }

  getMesh() {
    return this.mesh;
  }
}
