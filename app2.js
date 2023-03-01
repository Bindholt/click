function assingRandomNumber() {
  let number = 0;

  number = Math.floor(Math.random() * 3) + 1
  document.querySelector("#heart_" + number).classList.add("broken_heart");
}