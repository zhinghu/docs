<script lang="ts">
  import TopNavigator from "../component/navigator.svelte";
  import * as THREE from "three";
  import * as jq from "jquery";
  import {
    SVGRenderer,
    SVGObject,
  } from "three/examples/jsm/renderers/SVGRenderer.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / (window.innerHeight - 75),
    0.1,
    500,
  );
  const renderer = new SVGRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight - 50);
  renderer.setClearColor(new THREE.Color(0x303030), 1);

  const controls = new OrbitControls(camera, document.body);

  const cube = new THREE.Mesh(
    new THREE.DodecahedronGeometry(1, 20),
    new THREE.MeshStandardMaterial({ color: 0x00ffff }),
  );
  const light = new THREE.PointLight(0xffffff, 1, 2);
  light.position.set(1, 1, 1);

  scene.add(cube, light);
  camera.position.z = 3;
  function render() {
    requestAnimationFrame(render);

    controls.update();
    renderer.render(scene, camera);
  }
  jq.default(() => {
    document.querySelector("main")?.appendChild(renderer.domElement);

    render();
  });
</script>

<main>
  <TopNavigator />
</main>
