
function Randomize(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

tidakButton = document.getElementById('tidak');

function gakmau() {
    tidakButton.style.top = Randomize(0, 500).toString() + "px"
    tidakButton.style.left = Randomize(0, 500).toString() + "px"
    console.log(tidakButton.style.top)
}

function maubanget() {
    alert("BUKAN MIMPI KAN? WOWOKWOWW SALTING :D");
}