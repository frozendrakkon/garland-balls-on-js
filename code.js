const yellow = document.getElementsByClassName("yellow")
const blue = document.getElementsByClassName("blue")
const green = document.getElementsByClassName("green")
const red = document.getElementsByClassName("red")

function iterateElementsColor(color, glow) {
    for(let i = 0; i < color.length; i++) {
        color[i].classList.add(`glow-${glow}`)
    }
}




const TumblerOn = (() => {
     document.getElementById("tumbler").onclick = function() {
            iterateElementsColor(yellow, "yellow")
            iterateElementsColor(blue, "blue")
            iterateElementsColor(green, "green")
            iterateElementsColor(red, "red")
    }

})

TumblerOn()
