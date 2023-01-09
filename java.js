function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
const ama = document.querySelector("#ama_container");
const lie = document.querySelector("#lie_container");
const sar = document.querySelector("#sar_container");
const felt = document.querySelector("#felt_container");
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  ama.classList.add("pos1");
  lie.classList.add("pos2");
  sar.classList.add("pos3");
  felt.classList.add("pos4");

  ama.addEventListener("mouseover", mouseOverAma);
  lie.addEventListener("mouseover", mouseOverLie);
  sar.addEventListener("mouseover", mouseOverSar);
  felt.addEventListener("mouseover", mouseOverFelt);
}
function mouseOverAma() {
  console.log("mouseover");
  ama.classList.remove("flyv1");
  ama.offsetLeft;
  ama.classList.add("flyv1");
}
function mouseOverLie() {
  console.log("mouseover");
  lie.classList.remove("flyv1");
  lie.offsetLeft;
  lie.classList.add("flyv1");
}
function mouseOverSar() {
  console.log("mouseover");
  sar.classList.remove("flyv1");
  sar.offsetLeft;
  sar.classList.add("flyv1");
}
function mouseOverFelt() {
  console.log("mouseover");
  felt.classList.remove("flyv1");
  felt.offsetLeft;
  felt.classList.add("flyv1");
}
