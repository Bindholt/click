window.addEventListener("load", start);

let arr_elements = [
  "egg_container",
  "toilet_paper_1_container",
  "toilet_paper_2_container",
  "tomato_1_container",
  "tomato_2_container",
  "baseball_1_container",
  "baseball_2_container",
  "baseball_3_container",
];

let arr_used_elements = ["", "", "", "", "", "", "", ""];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function start() {
  setEventListeners();
  startAnimations();
}

function startAnimations() {
  setAnimationPitcher();
}

function setAnimationPitcher() {
  shuffleArray(arr_elements);
  pitcher_number = Math.floor(Math.random() * 6);
  let arr_animations = ["pitcher_straight_", "pitcher_left_", "pitcher_right_"];
  shuffleArray(arr_animations);
  let animation = arr_animations[0] + pitcher_number;
  let element = arr_elements.pop();
  let delay = Math.floor(Math.random() * 5);

  // document
  //   .querySelector(`#${element}`)
  //   .classList.add(`animation_delay_${delay}`);
  document.querySelector(`#${element}`).classList.add(animation);
}

function animationEnd(element) {
  console.log("Animation ended!");
  console.log(element);
  document.querySelector(`#${element}`).classList = "small_container";

  arr_elements.push(element);

  setAnimationPitcher(Math.floor(Math.random() * 6));
}

function setEventListeners() {
  for (let i = 0; i < arr_elements.length; i++) {
    console.log(arr_elements[i]);
    let current_element = arr_elements[i];
    document
      .querySelector(`#${current_element}`)
      .addEventListener("animationend", function () {
        animationEnd(current_element);
      });
  }
}

function ballHit() {
  //Removes click event from ball to prevent exploiting future point system
  this.removeEventListener("click", ballHit);

  //Returns string of current transform values akin to "matrix(2.28722, 0, 0, 2.28722, 420.764, 536.726)"
  let transform = window.getComputedStyle(this).getPropertyValue("transform");

  //Returns array of transform values
  let values = transform.split("(")[1].split(")")[0].split(",");

  //Stops current animation (currently hardcoded animation)
  this.classList.remove("pitcher_straight_1");

  //Sets default position and scale of element to values matching to when it was clicked
  this.style.transform =
    "translate(" +
    values[4] +
    "px, " +
    values[5] +
    "px) scale(" +
    values[0] +
    ")";

  //Sends it flying from default position
  this.classList.add("ball_hit");
}
