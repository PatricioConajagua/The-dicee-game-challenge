// Variable para indicar si es la primera vez que se carga la página
var firstLoad = true;

// Función para generar un nuevo juego
function startNewGame() {
    if(!firstLoad) {
        // Generar un número aleatorio entre 1 y 6 para el jugador 1
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;

        // Construir la cadena de la imagen del dado para el jugador 1 (ej. dice1.png - dice6.png)
        var randomDiceImage = "dice" + randomNumber1 + ".png";

        // Construir la ruta completa de la imagen para el jugador 1 (ej. images/dice1.png - images/dice6.png)
        var randomImageSource = "images/" + randomDiceImage;

        // Obtener la primera imagen y establecer su fuente con la ruta generada aleatoriamente
        var image1 = document.querySelectorAll("img")[0];

        image1.setAttribute("src", randomImageSource);

        // Generar un número aleatorio entre 1 y 6 para el jugador 2
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        // Construir la ruta completa de la imagen para el jugador 2 (ej. images/dice1.png - images/dice6.png)
        var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

        // Obtener la segunda imagen y establecer su fuente con la ruta generada aleatoriamente
        document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

        // Determinar el ganador o si hay empate y actualizar el título en consecuencia
        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
        } else {
            document.querySelector("h1").innerHTML = "Draw!";
        }
    }
    firstLoad = false;
}   

// Función para recargar la página y empezar un nuevo juego
function refreshPage() {
    // Restaurar el título original y empezar un nuevo juego
    document.querySelector("h1").innerHTML = "Refresh Me";
    startNewGame();
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", startNewGame);


