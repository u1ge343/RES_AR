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

AFRAME.registerComponent("rotate-and-hover", {
  tick: function (time, delta) {
    // Smooth horizontal rotation
    this.el.object3D.rotation.y += delta / 8000;

    // Gentle hover (sin wave)
    this.el.object3D.position.y = 0.05 * Math.sin(time / 600);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("a-marker");
  const model = document.querySelector("#foodModel");

  marker.addEventListener("markerFound", () => {
    model.setAttribute("rotate-and-hover", "");
  });

  marker.addEventListener("markerLost", () => {
    model.removeAttribute("rotate-and-hover");
    model.object3D.rotation.y = 0;
    model.object3D.position.y = 0;
  });
});

