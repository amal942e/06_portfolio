function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#ama_container").classList.add("pos1");
  document.querySelector("#lie_container").classList.add("pos2");
  document.querySelector("#sar_container").classList.add("pos3");
  document.querySelector("#felt_container").classList.add("pos4");
  document.querySelector("#ama_container").addEventListener("onmouseover", startGame);
}
function startGame() {
  console.log("startGame");
  document.querySelector("#ama_container").classList = "";
  document.querySelector("#lie_container").classList = "";
  document.querySelector("#sar_container").classList = "";
  document.querySelector("#felt_container").classList = "";
  document.querySelector("#ama_container").classList.add("pos3");
  document.querySelector("#lie_container").classList.add("pos4");
  document.querySelector("#sar_container").classList.add("pos1");
  document.querySelector("#felt_container").classList.add("pos2");
}
