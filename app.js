"use strict";
window.addEventListener("load", onload);

const eggContainer = document.querySelector("#egg_container");
const egg2Container = document.querySelector("#egg_2_container");
const toiletPaperContainer = document.querySelector(
  "#toilet_paper_1_container"
);
const toiletPaper2Container = document.querySelector(
  "#toilet_paper_2_container"
);
const tomatoContainer = document.querySelector("#tomato_1_container");
const tomato2Container = document.querySelector("#tomato_2_container");
const hotdogContainer = document.querySelector("#hotdog_container");
const hotdog2Container = document.querySelector("#hotdog_2_container");
const sodaContainer = document.querySelector("#soda_container");
const soda2Container = document.querySelector("#soda_2_container");
const baseballContainer = document.querySelector("#baseball_1_container");
const baseball2Container = document.querySelector("#baseball_2_container");
const baseball3Container = document.querySelector("#baseball_3_container");
const baseball4Container = document.querySelector("#baseball_4_container");
const baseball5Container = document.querySelector("#baseball_5_container");

const containers = [eggContainer, toiletPaperContainer, baseballContainer];
const containers2 = [sodaContainer, tomatoContainer, baseball2Container];
const containers3 = [
  hotdogContainer,
  toiletPaper2Container,
  baseball3Container,
];
const containers4 = [soda2Container, tomato2Container, baseball4Container];
const containers5 = [egg2Container, hotdog2Container, baseball5Container];

const animations = ["pitcher_straight_1", "pitcher_left_1", "pitcher_right_1"];
const animations2 = ["pitcher_straight_2", "pitcher_left_2", "pitcher_right_2"];
const animations3 = ["pitcher_straight_3", "pitcher_left_3", "pitcher_right_3"];
const animations4 = ["pitcher_straight_4", "pitcher_left_4", "pitcher_right_4"];
const animations5 = ["pitcher_straight_5", "pitcher_left_5", "pitcher_right_5"];
let currentAnimation1 = "";
let currentAnimation2 = "";
let currentAnimation3 = "";
let currentAnimation4 = "";
let currentAnimation5 = "";

function onload() {
  eggContainer.addEventListener("animationend", handleAnimationEnd);
  toiletPaperContainer.addEventListener("animationend", handleAnimationEnd);
  baseballContainer.addEventListener("animationend", handleAnimationEnd);
  sodaContainer.addEventListener("animationend", handleAnimationEnd);
  tomatoContainer.addEventListener("animationend", handleAnimationEnd);
  baseball2Container.addEventListener("animationend", handleAnimationEnd);
  hotdogContainer.addEventListener("animationend", handleAnimationEnd);
  toiletPaper2Container.addEventListener("animationend", handleAnimationEnd);
  baseball3Container.addEventListener("animationend", handleAnimationEnd);
  soda2Container.addEventListener("animationend", handleAnimationEnd);
  tomato2Container.addEventListener("animationend", handleAnimationEnd);
  baseball4Container.addEventListener("animationend", handleAnimationEnd);
  egg2Container.addEventListener("animationend", handleAnimationEnd);
  hotdog2Container.addEventListener("animationend", handleAnimationEnd);
  baseball5Container.addEventListener("animationend", handleAnimationEnd);

  eggContainer.addEventListener("mousedown", trashHit);
  toiletPaperContainer.addEventListener("mousedown", trashHit);
  sodaContainer.addEventListener("mousedown", trashHit);
  tomatoContainer.addEventListener("mousedown", trashHit);
  hotdogContainer.addEventListener("mousedown", trashHit);
  toiletPaper2Container.addEventListener("mousedown", trashHit);
  soda2Container.addEventListener("mousedown", trashHit);
  tomato2Container.addEventListener("mousedown", trashHit);
  egg2Container.addEventListener("mousedown", trashHit);
  hotdog2Container.addEventListener("mousedown", trashHit);

  baseballContainer.addEventListener("mousedown", ballHit);
  baseball2Container.addEventListener("mousedown", ballHit);
  baseball3Container.addEventListener("mousedown", ballHit);
  baseball4Container.addEventListener("mousedown", ballHit);
  baseball5Container.addEventListener("mousedown", ballHit);

  setAnimation(
    containers[Math.floor(Math.random() * containers.length)],
    animations,
    "",
    1
  );
  setAnimation(
    containers2[Math.floor(Math.random() * containers2.length)],
    animations2,
    "",
    2
  );
  setAnimation(
    containers3[Math.floor(Math.random() * containers3.length)],
    animations3,
    "",
    3
  );
  setAnimation(
    containers4[Math.floor(Math.random() * containers4.length)],
    animations4,
    "",
    4
  );
  setAnimation(
    containers5[Math.floor(Math.random() * containers5.length)],
    animations5,
    "",
    5
  );
}

function setAnimation(container, animations, currentAnimation, pitcherNumber) {
  console.log("setAnimation");
  //Reset values to default
  let animation = "";
  container.classList = "small_container";
  do {
    animation = animations[Math.floor(Math.random() * animations.length)];
  } while (animation === currentAnimation);

  if (currentAnimation) {
    console.log(currentAnimation);
    container.classList.remove(currentAnimation);
  }

  container.classList.add(animation);

  switch (pitcherNumber) {
    case 1:
      currentAnimation1 = animation;
      break;
    case 2:
      currentAnimation2 = animation;
      break;
    case 3:
      currentAnimation3 = animation;
      break;
    case 4:
      currentAnimation4 = animation;
      break;
    case 5:
      currentAnimation5 = animation;
      break;
    default:
      console.log("Somethings wrong with current animation switch");
      break;
  }

  container.style.animation = "none";
  container.offsetWidth;
  container.style.animation = null;
}

function handleAnimationEnd() { 
  if (containers.includes(this)) {
    console.log("animationEnd");
    animationEnd();
  } else if (containers2.includes(this)) {
    console.log("animationEnd2");
    animationEnd2();
  } else if (containers3.includes(this)) {
    console.log("animationEnd3");
    animationEnd3();
  } else if (containers4.includes(this)) {
    console.log("animationEnd4");
    animationEnd4();
  } else if (containers5.includes(this)) {
    console.log("animationEnd5");
    animationEnd5();
  } 
}


function animationEnd() {
  setAnimation(
    containers[Math.floor(Math.random() * containers.length)],
    animations,
    currentAnimation1,
    1
  );
}

function animationEnd2() {
  console.log("handleAnimationEnd2");

  setAnimation(
    containers2[Math.floor(Math.random() * containers2.length)],
    animations2,
    currentAnimation2,
    2
  );
}

function animationEnd3() {
  console.log("handleAnimationEnd3");

  setAnimation(
    containers3[Math.floor(Math.random() * containers3.length)],
    animations3,
    currentAnimation3,
    3
  );
}

function animationEnd4() {
  console.log("handleAnimationEnd4");

  setAnimation(
    containers4[Math.floor(Math.random() * containers4.length)],
    animations4,
    currentAnimation4,
    4
  );
}

function animationEnd5() {
    console.log("handleAnimationEnd5");
  //Todo: Refactor this to a "ballGone" function

  setAnimation(
    containers5[Math.floor(Math.random() * containers5.length)],
    animations5,
    currentAnimation5,
    5
  );
}

function ballHit() {
  console.log("ballHit");
  //Removes click event from ball to prevent exploiting future point system
  this.removeEventListener("mousedown", ballHit);
  this.removeEventListener("animationend", handleAnimationEnd);

  //Returns string of current transform values akin to "matrix(2.28722, 0, 0, 2.28722, 420.764, 536.726)"
  let transform = window.getComputedStyle(this).getPropertyValue("transform");

  //Returns array of transform values
  let values = transform.split("(")[1].split(")")[0].split(",");

  //Stops current animation
  this.classList = "small_container";

  //Sets default position and scale of element to values matching to when it was clicked
  this.style.transform = "translate(" + values[4] + "px, " + values[5] + "px)";

  //Sends it flying from default position
  this.firstElementChild.classList.add("ball_hit");

  this.addEventListener("animationend", ballGone);
}

function ballGone() {
  console.log("ballGone");
    this.style.animation = "none";
  this.offsetWidth;
  this.style.animation = null;
  this.removeEventListener("animationend", ballGone);
  this.firstElementChild.classList.remove("ball_hit");
  this.style.transform = "translate(-200%)";
  if (containers.includes(this)) {
    baseballContainer.addEventListener("mousedown", ballHit);
  } else if (containers2.includes(this)) {
    baseball2Container.addEventListener("mousedown", ballHit);
  } else if (containers3.includes(this)) {
    baseball3Container.addEventListener("mousedown", ballHit);
  } else if (containers4.includes(this)) {
    baseball4Container.addEventListener("mousedown", ballHit);
  } else if (containers5.includes(this)) {
    baseball5Container.addEventListener("mousedown", ballHit);
  }
  this.addEventListener("animationend", handleAnimationEnd);
  handleAnimationEnd.call(this);
}

function trashHit() {
  console.log("trashHit");
  this.removeEventListener("mousedown", trashHit);
  this.removeEventListener("animationend", handleAnimationEnd);
  this.classList.add("paused");

  this.firstElementChild.classList.add("zoom_out");
  this.lastElementChild.classList.add("zoom_in");

  this.addEventListener("animationend", trashGone);
}

function trashGone() {
  console.log("trashGone");
  this.removeEventListener("animationend", trashGone);
  this.style.animation = "none";
  this.offsetWidth;
  this.style.animation = null;
  this.firstElementChild.classList.remove("zoom_out");
  this.lastElementChild.classList.remove("zoom_in");
  this.addEventListener("mousedown", trashHit);
  this.addEventListener("animationend", handleAnimationEnd);
}





//Ballhit stopper med at virke fordi animationend ikke kan køre to gange som i trashHit/Gone, fordi animationen kun er på container i ball hit.
//ballHit skal derfor ændres til peters forslag, eller bruge et andet mønster.