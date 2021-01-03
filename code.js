

const yellow = document.getElementsByClassName("yellow");
const blue = document.getElementsByClassName("blue");
const green = document.getElementsByClassName("green");
const red = document.getElementsByClassName("red");

const btnTumbler = document.getElementById("tumbler");
const btnModeAlternate = document.getElementById("mode-alternate");
const btnModeDecay = document.getElementById("mode-decay")
const btnLight = document.getElementById("light");

// добавляем свечение элементами
function GarlandGlowYellow(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add("glow-yellow");
  }
}

function GarlandGlowBlue(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add("glow-blue");
  }
}

function GarlandGlowGreen(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add(`glow-green`);
  }
}

function GarlandGlowRed(color) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.add("glow-red");
  }
}

// убираем свечение
function GarlandDecay(color, glow) {
  for (let i = 0; i < color.length; i++) {
    color[i].classList.remove(`glow-${glow}`);
  }
}

// Счетчик количества включения функции 
let AlternateModeCounter = 1

function modeAlternate() {

  btnModeAlternate.onclick = function () {

    AlternateModeCounter++

    const modeAlternateInterval = setInterval(() => {
      setTimeout(() => GarlandGlowYellow(yellow), 200);
      setTimeout(() => GarlandGlowBlue(blue), 300);
      setTimeout(() => GarlandGlowGreen(green), 400);
      setTimeout(() => GarlandGlowRed(red), 500);

      setTimeout(() => {
        GarlandDecay(yellow, "yellow");
        GarlandDecay(blue, "blue");
        GarlandDecay(green, "green");
        GarlandDecay(red, "red");
      }, 700);

      if (AlternateModeCounter % 2 !== 0) { // отключение режима подсветки
        clearInterval(modeAlternateInterval)
      }
    }, 800);
  };
}

let DecayModeCounter = 1

// режим, когда лампочка одного цвета затухает, и включается другой цвет
function modeDecay() {
  btnModeDecay.onclick = function () {

    DecayModeCounter++

    const modeDecayInterval = setInterval(() => {
      setTimeout(() => GarlandGlowYellow(yellow), 200);
      setTimeout(() => GarlandDecay(yellow, "yellow"), 500)

      setTimeout(() => GarlandGlowBlue(blue), 400);
      setTimeout(() => GarlandDecay(blue, "blue"), 700)

      setTimeout(() => GarlandGlowGreen(green), 600);
      setTimeout(() => GarlandDecay(green, "green"), 900)

      setTimeout(() => GarlandGlowRed(red), 800);
      setTimeout(() => GarlandDecay(red, "red"), 1100)

      if (DecayModeCounter % 2 !== 0) { // отключение режима подсветки
        clearInterval(modeDecayInterval)
      }
    }, 800);


  }
};


let TumblerCountClick = 0; // Считаем сколько раз была нажата кнопка => включение / выключение

const TumblerOnOff = () => {
  btnTumbler.onclick = function () {
    TumblerCountClick++;
    if (TumblerCountClick % 2 !== 0) {
      GarlandGlowYellow(yellow);
      GarlandGlowBlue(blue);
      GarlandGlowGreen(green);
      GarlandGlowRed(red);
      btnTumbler.innerHTML = "OFF";

    } else {
      GarlandDecay(yellow, "yellow");
      GarlandDecay(blue, "blue");
      GarlandDecay(green, "green");
      GarlandDecay(red, "red");
      btnTumbler.innerHTML = "ON";
    }
  };
};

let CountLightClick = 1;

const lightOffOnn = () => {
  btnLight.onclick = function () {
    CountLightClick++;
    if (CountLightClick % 2 !== 0) {
      document.body.style.backgroundColor = "#6699FF";
      btnLight.innerHTML = "Night";
    } else {
      document.body.style.backgroundColor = "black";
      btnLight.innerHTML = "Light";
    }
  };
};

TumblerOnOff();
modeAlternate();
lightOffOnn();
modeDecay()
