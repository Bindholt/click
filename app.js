window.addEventListener("load", start);

function start() {
  startAnimations();
  document
    .querySelector("#baseball_1_container")
    .addEventListener("click", ballHit);
}

function startAnimations() {
  document
    .querySelector("#baseball_1_container")
    .classList.add("pitcher1_straight");
}

function ballHit() {
  console.log("HOMERUN");
}
