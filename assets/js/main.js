let divs = document.querySelectorAll(".grid-container div");

console.log("page loaded!", divs.length, "words found");

document.addEventListener("click", randomize);

function randomize() {
  console.log("clicked! scattering words...");

  divs.forEach(function(div) {
    let rotate     = randomNumber(0, 360);
    let scale      = randomNumber(50, 150) / 100;
    let translateX = randomNumber(0, 60);
    let translateY = randomNumber(0, 60);

    div.style.transform = `rotate(${rotate}deg) scale(${scale}) translate(${translateX}%, ${translateY}%)`;
    div.style.color = randomColor();
  });
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
  let colors = ["whitesmoke", "dodgerblue", "tomato", "gold", "lightgreen", "violet", "coral"];
  return colors[randomNumber(0, colors.length - 1)];
}
