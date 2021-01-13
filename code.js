const yellow = document.getElementsByClassName("yellow")
const blue = document.getElementsByClassName("blue")
const green = document.getElementsByClassName("green")
const red = document.getElementsByClassName("red")

const btnTumbler = document.getElementById("tumbler")
const btnMode = document.getElementById("mode")
const btnLight = document.getElementById("light")


function garlandGlowYellow(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add("glow-yellow")
    }
}

function garlandGlowBlue(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add("glow-blue")
    }
}

function garlandGlowGreen(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add(`glow-green`)
    }
}

function garlandGlowRed(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add("glow-red")
    }
}

// убираем свечение
function garlandDecay(color, glow) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.remove(`glow-${glow}`)
    }
} 


function modeAlternate() {
    
    btnMode.onclick = function () {

        setTimeout(() => garlandGlowYellow(yellow), 200);
        setTimeout(() => garlandGlowBlue(blue), 400);
        setTimeout(() => garlandGlowGreen(green), 600);
        setTimeout(() => garlandGlowRed(red), 800);
        
        setTimeout(() => {
            garlandDecay(yellow, "yellow")
            garlandDecay(blue, "blue")
            garlandDecay(green, "green")
            garlandDecay(red, "red")
        }, 1000);
    }
}

let TumblerCountClick = 0; // Считаем сколько раз была нажата кнопка => включение / выключение

const tumblerOnOff = (() => {

    btnTumbler.onclick = function() {
        TumblerCountClick += 1
         if (TumblerCountClick % 2 !== 0 ) {
            garlandGlowYellow(yellow)
            garlandGlowBlue(blue)
            garlandGlowGreen(green)
            garlandGlowRed(red)
         } else {
            garlandDecay(yellow, "yellow")
            garlandDecay(blue, "blue")
            garlandDecay(green, "green")
            garlandDecay(red, "red")
            
         }
    }
})

let CountLightClick = 1

const lightOffOnn = (() => {
    btnLight.onclick = function() {
        CountLightClick += 1;
        if(CountLightClick % 2 !== 0 ) {
            document.body.style.backgroundColor = "#6699FF"
        } else {
            document.body.style.backgroundColor = "black"
        }
    }
})

tumblerOnOff()
modeAlternate()
lightOffOnn()
