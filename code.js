const yellow = document.getElementById("yellow")
const blue = document.getElementById("blue")
const green = document.getElementById("green")
const red = document.getElementById("red")


const doTumblerOffOn = (() => {
    document.getElementById("tumbler").onclick = function() {
         yellow.classList.toggle("glow-yellow")
         blue.classList.toggle("glow-blue")
         green.classList.toggle("glow-green")
         red.classList.toggle("glow-red")
    }

})
doTumblerOffOn()