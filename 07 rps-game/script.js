// ============================================
// 1. DECLARACIÓN DE CONSTANTES Y VARIABLES GLOBALES
// ============================================

// Array con las opciones disponibles en el juego
const options = ["Rock", "Paper", "Scissors"];

// ============================================
// 2. FUNCIONES DEL JUEGO (LÓGICA PRINCIPAL)
// ============================================


function getRandomComputerResult() {
  // Math.random() genera número entre 0 y 0.999...
  // Multiplicamos por la longitud del array (3) para tener entre 0 y 2.999...
  // Math.floor() redondea hacia abajo, dando 0, 1 o 2
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}


 // Determina si el jugador ganó la ronda actual y devuelve un boolean

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

// Puntajes iniciales del juego
let playerScore = 0;
let computerScore = 0;

/**
 * Procesa los resultados de cada ronda y actualiza los puntajes
 */
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

// ============================================
// 3. ELEMENTOS DEL DOM (Referencias al HTML)
// ============================================

// Span elements para mostrar los puntajes
const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");

// Elementos para mostrar mensajes al usuario
const roundResultsMsg = document.getElementById("results-msg");      // Mensaje de cada ronda
const winnerMsgElement = document.getElementById("winner-msg");      // Mensaje del ganador final

// Contenedores del juego
const optionsContainer = document.querySelector(".options-container"); // Sección de botones de opciones
const resetGameBtn = document.getElementById("reset-game-btn");        // Botón para reiniciar el juego

// ============================================
// 4. FUNCIÓN PRINCIPAL showResults()
// ============================================

/**
 * Muestra los resultados en el DOM y verifica si alguien ganó el juego
 * userOption - Opción seleccionada por el jugador
 */
function showResults(userOption) {
  // Actualiza el mensaje de la ronda con el resultado
  roundResultsMsg.innerText = getRoundResults(userOption);
  
  // Actualiza los puntajes en la pantalla
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  // Verifica si alguien llegó a 3 puntos (fin del juego)
  if (playerScore === 3 || computerScore === 3) {
    // Muestra quién ganó el juego completo
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game!`;

    // Muestra el botón de reset y oculta las opciones
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

// ============================================
// 5. FUNCIÓN DE RESETEO DEL JUEGO
// ============================================

/**
 * Reinicia completamente el juego a su estado inicial
 * - Resetea los puntajes
 * - Limpia los mensajes
 * - Vuelve a mostrar las opciones
 * - Oculta el botón de reset
 */
function resetGame() {
  // 1. Reiniciar variables globales
  playerScore = 0;
  computerScore = 0;
  
  // 2. Actualizar los spans en el HTML
  playerScoreSpanElement.innerText = 0;
  computerScoreSpanElement.innerText = 0;
  
  // 3. Limpiar los mensajes
  roundResultsMsg.innerText = "";
  winnerMsgElement.innerText = "";
  
  // 4. Restaurar la visibilidad de los elementos
  optionsContainer.style.display = "block";  // Volver a mostrar opciones
  resetGameBtn.style.display = "none";       // Ocultar botón de reset
}

// ============================================
// 6. REFERENCIAS A LOS BOTONES DE OPCIÓN
// ============================================

// Obtenemos cada botón por su ID
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

// ============================================
// 7. EVENT LISTENERS - DIFERENTES TIPOS
// ============================================

// ---------- 7.1 EVENTO "click" (el más común) ----------
// Se ejecuta cuando el usuario hace clic en un elemento

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

// Evento click en el botón de reset (referencia directa a la función)
resetGameBtn.addEventListener("click", resetGame);

// ---------- 7.2 OTROS TIPOS DE EVENT LISTENERS (EJEMPLOS) ----------


// EVENTO "mouseover" - Cuando el mouse pasa por encima
resetGameBtn.addEventListener("mouseover", function() {
  console.log("El mouse está sobre el botón de reset");
  resetGameBtn.style.backgroundColor = "darkblue"; // Cambia color
});


// EVENTO "mouseout" - Cuando el mouse sale del elemento
resetGameBtn.addEventListener("mouseout", function() {
  console.log("El mouse salió del botón");
  resetGameBtn.style.backgroundColor = ""; // Restaura color original
});

/*

// EVENTO "dblclick" - Doble clic
resetGameBtn.addEventListener("dblclick", function() {
  console.log("Doble clic en reset - reinicio forzado");
  resetGame();
});

// EVENTO "keydown" - Cuando se presiona una tecla (útil para teclado)
document.addEventListener("keydown", function(event) {
  if (event.key === "r" || event.key === "R") {
    console.log("Tecla R presionada - reiniciando juego");
    resetGame();
  }
});

// EVENTO "keyup" - Cuando se suelta una tecla
document.addEventListener("keyup", function(event) {
  console.log(`Tecla ${event.key} fue liberada`);
});

// EVENTO "contextmenu" - Clic derecho
optionsContainer.addEventListener("contextmenu", function(event) {
  event.preventDefault(); // Evita que abra el menú contextual
  console.log("Clic derecho detectado");
});

// EVENTO "input" - Cuando el usuario escribe en un input (útil para formularios)
// Suponiendo que hay un input: <input type="text" id="player-name">
// const playerNameInput = document.getElementById("player-name");
// playerNameInput.addEventListener("input", function(event) {
//   console.log(`El jugador escribió: ${event.target.value}`);
// });

// EVENTO "change" - Cuando un input cambia y pierde el foco
// playerNameInput.addEventListener("change", function(event) {
//   console.log(`Nombre final: ${event.target.value}`);
// });

// EVENTO "submit" - Cuando se envía un formulario
// document.getElementById("miFormulario").addEventListener("submit", function(event) {
//   event.preventDefault(); // Evita que recargue la página
//   console.log("Formulario enviado");
// });
*/

// ============================================
// 8. DIFERENTES VALORES DE display (REFERENCIA)
// ============================================

/*
// VALORES COMUNES DE LA PROPIEDAD display EN CSS/JS:

// 1. display = "block"
//    - El elemento ocupa todo el ancho disponible
//    - Respeta width, height, margin, padding
//    - Ejemplos: <div>, <p>, <h1>, <section>
optionsContainer.style.display = "block";

// 2. display = "flex"
//    - Activa el modelo de layout flexible
//    - Ideal para alinear elementos en fila o columna
//    - Permite usar propiedades como justify-content, align-items
optionsContainer.style.display = "flex";

// 3. display = "grid"
//    - Activa el modelo de layout en cuadrícula
//    - Ideal para layouts complejos en 2D
//    - Se usa con grid-template-columns, grid-template-rows
optionsContainer.style.display = "grid";

// 4. display = "none"
//    - El elemento desaparece completamente
//    - No ocupa espacio en la página
//    - Es como si no existiera para el layout
resetGameBtn.style.display = "none";

// 5. display = "inline"
//    - El elemento fluye con el texto
//    - No acepta width ni height
//    - Ejemplos: <span>, <a>, <strong>
// spanElement.style.display = "inline";

// 6. display = "inline-block"
//    - Mezcla de inline y block
//    - Fluye como texto pero acepta width/height
//    - Muy útil para botones en línea
// button.style.display = "inline-block";

// 7. display = "inline-flex"
//    - Flex pero en línea (no ocupa todo el ancho)
//    - Útil para elementos flexibles dentro de texto
// .contenedor.style.display = "inline-flex";

// 8. display = "inline-grid"
//    - Grid pero en línea
//    .contenedor.style.display = "inline-grid";
*/