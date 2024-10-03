/* eslint-disable */

const meshDiv = document.createElement("div");

function MeshDiv() {
  for (i = 0; i < 100; i++) {
    document.body.appendChild(meshDiv);
  }
}

MeshDiv();
