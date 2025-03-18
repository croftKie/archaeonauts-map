import { build } from "vite";

export default {
  root: "src",
  publicDir: "../static/",
  base: "./",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
};
