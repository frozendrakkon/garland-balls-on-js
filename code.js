const yellow = document.getElementsByClassName("yellow");
const blue = document.getElementsByClassName("blue");
const green = document.getElementsByClassName("green");
const red = document.getElementsByClassName("red");

const btnTumbler = document.getElementById("tumbler");
const btnModeAlternate = document.getElementById("mode-alternate");
const btnModeDecay = document.getElementById("mode-decay")
const btnLight = document.getElementById("light");

// добавляем свечение элементами
function garlandGlowYellow(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add("glow-yellow");
  }
}

function garlandGlowBlue(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add("glow-blue");
  }
}

function garlandGlowGreen(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add(`glow-green`);
  }
}

function garlandGlowRed(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add("glow-red");
  }
}

// убираем свечение
function garlandDecay(color, glow) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.remove(`glow-${glow}`);
  }
}

// Счетчик количества включения функции 
let alternateModeCounter = 1

function modeAlternate() {

  btnModeAlternate.onclick = function () {

    // * отключаем кнопки, чтобы не поломать скрипт
    btnModeDecay.disabled = true;
    btnTumbler.disabled = true;

    alternateModeCounter++

    const modeAlternateInterval = setInterval(() => {
      setTimeout(() => garlandGlowYellow(yellow), 200);
      setTimeout(() => garlandGlowBlue(blue), 300);
      setTimeout(() => garlandGlowGreen(green), 400);
      setTimeout(() => garlandGlowRed(red), 500);

      setTimeout(() => {
        garlandDecay(yellow, "yellow");
        garlandDecay(blue, "blue");
        garlandDecay(green, "green");
        garlandDecay(red, "red");
      }, 700);

      if (alternateModeCounter % 2 !== 0) { //*  отключение режима подсветки
        clearInterval(modeAlternateInterval)
        btnModeDecay.disabled = false;
        btnTumbler.disabled = false;
      }
    }, 800);
  };
}

let decayModeCounter = 1

// * режим, когда лампочка одного цвета затухает, и включается другой цвет
function modeDecay() {
  btnModeDecay.onclick = function () {
    btnModeAlternate.disabled = true;
    btnTumbler.disabled = true;

    decayModeCounter++

    const modeDecayInterval = setInterval(() => {
      setTimeout(() => garlandGlowYellow(yellow), 200);
      setTimeout(() => garlandDecay(yellow, "yellow"), 500)

      setTimeout(() => garlandGlowBlue(blue), 400);
      setTimeout(() => garlandDecay(blue, "blue"), 700)

      setTimeout(() => garlandGlowGreen(green), 600);
      setTimeout(() => garlandDecay(green, "green"), 900)

      setTimeout(() => garlandGlowRed(red), 800);
      setTimeout(() => garlandDecay(red, "red"), 1100)

      if (decayModeCounter % 2 !== 0) { // * отключение режима подсветки 
        clearInterval(modeDecayInterval)
        btnModeAlternate.disabled = false;
        btnTumbler.disabled = false;
      }
    }, 800);


  }
};


let tumblerCountClick = 0; // * Считаем сколько раз была нажата кнопка, следовательно включение / выключение

const tumblerOnOff = () => {
  btnTumbler.onclick = function () {
    tumblerCountClick++;
    if (tumblerCountClick % 2 !== 0) {
      garlandGlowYellow(yellow);
      garlandGlowBlue(blue);
      garlandGlowGreen(green);
      garlandGlowRed(red);
      btnTumbler.innerHTML = "OFF";

    } else {
      garlandDecay(yellow, "yellow");
      garlandDecay(blue, "blue");
      garlandDecay(green, "green");
      garlandDecay(red, "red");
      btnTumbler.innerHTML = "ON";
    }
  };
};

let countLightClick = 1;

const lightOffOnn = () => {
  btnLight.onclick = function () {
    countLightClick++;
    if (countLightClick % 2 !== 0) {
      document.body.style.backgroundColor = "#6699FF";
      btnLight.innerHTML = "Night";
    } else {
      document.body.style.backgroundColor = "black";
      btnLight.innerHTML = "Light";
    }
  };
};

tumblerOnOff();
modeAlternate();
lightOffOnn();
modeDecay()