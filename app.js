window.addEventListener("load", start);

function start() {
  startAnimations();
  setEventListeners();
}

function startAnimations() {
  document
    .querySelector("#baseball_1_container")
    .classList.add("pitcher1_straight");
}

function setEventListeners() {
  document
    .querySelector("#baseball_1_container")
    .addEventListener("click", ballHit);
}

function ballHit() {
  this.removeEventListener("click", ballHit);

  console.log(this);

  let transform = window.getComputedStyle(this).getPropertyValue("transform");

  let values = transform.split("(")[1].split(")")[0].split(",");
  //   debugger;
  this.classList.remove("pitcher1_straight");
  console.log(values);
  this.style.transform =
    "translate(" +
    values[4] +
    "px, " +
    values[5] +
    "px) scale(" +
    values[0] +
    ")";

  this.classList.add("ball_hit");
  console.log("pause");

  //
}
