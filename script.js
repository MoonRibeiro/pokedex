document.getElementById("big-pokedex").style.display ="none";

function openTest() {
    console.log("test");
    document.getElementById("big-pokedex").style.display = "block";
    var blur = document.getElementById('small-pokedex')
    blur.classList.toggle('active')
}

function close() {
    document.getElementById("big-pokedex").style.display ="none";
    var blur = document.getElementById('small-pokedex')
    blur.classList.toggle('active')
}

document.getElementById('small-pokedex').addEventListener('click', openTest);
document.getElementById('btn').addEventListener('click', close);