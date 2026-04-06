const haikuWords = [
  { text: "petals",  isLast: false },
  { text: "fall",    isLast: false },
  { text: "slowly",  isLast: true  },
  { text: "the",     isLast: false },
  { text: "garden",  isLast: false },
  { text: "holds",   isLast: false },
  { text: "its",     isLast: false },
  { text: "breath",  isLast: true  },
  { text: "a",       isLast: false },
  { text: "bee",     isLast: false },
  { text: "wanders", isLast: true  },
];

const fonts = [
  "Georgia, serif",
  "'Palatino Linotype', serif",
  "Arial, sans-serif",
  "'Courier New', monospace",
  "'Trebuchet MS', sans-serif",
  "Impact, sans-serif",
];

const colors = [
  "#ffffff", "#a8e6a3", "#f9f871", "#ffb347",
  "#ffd6e7", "#caffbf", "#b2f2bb", "#ffe066",
  "#74c69d", "#fdffb6", "#ff9f9f", "#9bf6ff",
];

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const wordLayer = document.getElementById("word-layer");
const hint      = document.getElementById("hint");
const wordEls   = [];

haikuWords.forEach(function(wObj) {
  const el = document.createElement("div");
  el.className = "word" + (wObj.isLast ? " last" : "");
  el.textContent = wObj.text;

  const color = randomFrom(colors);
  el.style.fontFamily  = randomFrom(fonts);
  el.style.fontSize    = Math.floor(randomNumber(20, 52)) + "px";
  el.style.color       = color;
  el.style.left        = randomNumber(2, 78) + "%";
  el.style.top         = randomNumber(5, 82) + "%";
  el.style.transform   = "rotate(" + randomNumber(-30, 30) + "deg)";
  el.style.textShadow  = "0 0 16px " + color + "bb, 0 2px 6px rgba(0,0,0,0.7)";

  wordLayer.appendChild(el);
  wordEls.push(el);
});

function randomize() {
  hint.style.opacity = "0";

  wordEls.forEach(function(el) {
    var scale, translateX, translateY;
    var rotate = randomNumber(-200, 200);

    if (Math.random() > 0.5) {
      scale      = 1;
      translateX = randomNumber(-40, 40);
      translateY = randomNumber(-30, 30);
    } else {
      scale      = randomNumber(0.5, 1.8);
      translateX = randomNumber(-20, 20);
      translateY = randomNumber(-20, 20);
    }

    var color = randomFrom(colors);
    el.style.fontFamily  = randomFrom(fonts);
    el.style.fontSize    = Math.floor(randomNumber(18, 56)) + "px";
    el.style.color       = color;
    el.style.textShadow  = "0 0 20px " + color + "cc, 0 2px 8px rgba(0,0,0,0.7)";
    el.style.transform   = "scale(" + scale + ") translate(" + translateX + "%, " + translateY + "%) rotate(" + rotate + "deg)";
    el.style.left        = randomNumber(2, 78) + "%";
    el.style.top         = randomNumber(5, 80) + "%";
  });
}

document.addEventListener("click", randomize);
