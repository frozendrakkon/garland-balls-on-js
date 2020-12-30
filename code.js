const yellow = document.getElementsByClassName("yellow")
const blue = document.getElementsByClassName("blue")
const green = document.getElementsByClassName("green")
const red = document.getElementsByClassName("red")

const btnTumbler = document.getElementById("tumbler")
const btnMode = document.getElementById("mode")
const btnLight = document.getElementById("light")


function GarlandGlowYellow(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add("glow-yellow")
    }
}

function GarlandGlowBlue(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add("glow-blue")
    }
}

function GarlandGlowGreen(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add(`glow-green`)
    }
}

function GarlandGlowRed(color) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add("glow-red")
    }
}

// убираем свечение
function GarlandDecay(color, glow) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.remove(`glow-${glow}`)
    }
} 


function modeAlternate() {
    
    btnMode.onclick = function () {

        setTimeout(() => GarlandGlowYellow(yellow), 200);
        setTimeout(() => GarlandGlowBlue(blue), 400);
        setTimeout(() => GarlandGlowGreen(green), 600);
        setTimeout(() => GarlandGlowRed(red), 800);
        
        setTimeout(() => {
            GarlandDecay(yellow, "yellow")
            GarlandDecay(blue, "blue")
            GarlandDecay(green, "green")
            GarlandDecay(red, "red")
        }, 1000);
    }
}

let TumblerCountClick = 0; // Считаем сколько раз была нажата кнопка => включение / выключение

const TumblerOnOff = (() => {

    btnTumbler.onclick = function() {
        TumblerCountClick += 1
         if (TumblerCountClick % 2 !== 0 ) {
            GarlandGlowYellow(yellow)
            GarlandGlowBlue(blue)
            GarlandGlowGreen(green)
            GarlandGlowRed(red)
         } else {
            GarlandDecay(yellow, "yellow")
            GarlandDecay(blue, "blue")
            GarlandDecay(green, "green")
            GarlandDecay(red, "red")
            
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

TumblerOnOff()
modeAlternate()
lightOffOnn()
