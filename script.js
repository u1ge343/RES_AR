// script.js

// Log that the scene has started
console.log("AR Scene Initialized");

// Wait for A-Frame to fully load
document.addEventListener("DOMContentLoaded", () => {
  const sceneEl = document.querySelector("a-scene");

  // When A-Frame is loaded
  sceneEl.addEventListener("loaded", () => {
    console.log("A-Frame scene loaded successfully");
  });

  // Marker detection feedback
  const marker = document.querySelector("a-marker");

  marker.addEventListener("markerFound", () => {
    console.log("Marker detected → Showing 3D model");
    // You can add sound or animation here
  });

  marker.addEventListener("markerLost", () => {
    console.log("Marker lost → Hiding 3D model");
    // Model disappears automatically, but interactions can be reset here
  });
});

// OPTIONAL: Add simple tap interaction to scale the model
// If you want the user to tap to enlarge or shrink the model

document.addEventListener("click", (event) => {
  // Only if a model exists
  const modelEl = document.querySelector("a-entity[gltf-model]");
  if (!modelEl) return;

  // Toggle scale between two states
  const currentScale = modelEl.getAttribute("scale");
  if (currentScale.x < 1) {
    modelEl.setAttribute("scale", "1 1 1");
  } else {
    modelEl.setAttribute("scale", "0.5 0.5 0.5");
  }

  console.log("Tapped — model scale toggled");
});
