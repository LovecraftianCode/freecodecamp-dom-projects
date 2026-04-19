let footballTeam = {
  team: 'Argentina',
  year: 1986,
  headCoach: 'Carlos Bilardo',
  players: [
    {
      name: 'Sergio Almirón',
      position: 'forward',
      isCaptain: false
    },
    {
      name: 'Sergio Batista',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'Ricardo Bochini',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'Claudio Borghi',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'José Luis Brown',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'Daniel Passarella',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'Jorge Burruchaga',
      position: 'forward',
      isCaptain: false
    },
    {
      name: 'Néstor Clausen',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'José Luis Cuciuffo',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'Diego Maradona',
      position: 'midfielder',
      isCaptain: true
    },
    {
      name: 'Jorge Valdano',
      position: 'forward',
      isCaptain: false
    },
    {
      name: 'Héctor Enrique',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'Oscar Garré',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'Ricardo Giusti',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'Luis Islas',
      position: 'goalkeeper',
      isCaptain: false
    },
    {
      name: 'Julio Olarticoechea',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'Pedro Pasculli',
      position: 'forward',
      isCaptain: false
    },
    {
      name: 'Nery Pumpido',
      position: 'goalkeeper',
      isCaptain: false
    },
    {
      name: 'Oscar Ruggeri',
      position: 'defender',
      isCaptain: false
    },
    {
      name: 'Carlos Tapia',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'Marcelo Trobbiani',
      position: 'midfielder',
      isCaptain: false
    },
    {
      name: 'Héctor Zelada',
      position: 'goalkeeper',
      isCaptain: false
    }
  ]
}

// Selecciona datos del DOM
let spanTeam = document.getElementById("team")
let spanYear = document.getElementById("year")
let spanHeadCoach = document.getElementById("head-coach")
let selectContainer = document.getElementById("players")
let playerscontainer = document.getElementById("player-cards")

// Mostrar datos del equipo
spanTeam.innerText = footballTeam.team
spanYear.innerText = footballTeam.year
spanHeadCoach.innerText = footballTeam.headCoach


//Crear referencia a los jugadores
const players = footballTeam.players 

// Funcion que crea las tarjetas sobre los jugadores
// IMPORTANTE SOBRE PARÁMETROS:
// "playerPosition" es un PARÁMETRO - una variable LOCAL que SOLO existe DENTRO de esta función
// Cuando llamas a la función, DEBES pasarle un valor (como "all", "forward", etc.)
// Si no le pasas nada, playerPosition será 'undefined'

function playerCards(playerPosition) {
  //OPERADOR TERNARIO (condición ? verdadero : falso)
  // Esto filtra los jugadores según el parámetro recibido
  const filteredPlayers = playerPosition === "all"
    ? players
    : players.filter(({ position }) => position === playerPosition);
  // map() crea un NUEVO ARRAY con las tarjetas HTML
  return filteredPlayers.map(({ name, position, isCaptain }) => {
  // Formato EXACTO que pide freeCodeCamp
    const playerName = isCaptain ? `(Captain) ${name}` : name;
    
    return `
    <div class="player-card">
      <h2>${playerName}</h2>
      <p>Position: ${position}</p>
    </div>
    `;
  });
}

// Mostrar los jugadores al cargar la pagina
// 
// MPORTANTE: Esto muestra TODOS los jugadores cuando la página se carga por PRIMERA VEZ
// Estamos llamando a playerCards con el argumento "all"
// El parámetro "playerPosition" DENTRO de la función recibe el valor "all"
playerscontainer.innerHTML = playerCards("all").join("");

// Event listener para el select
// QUÉ ES LA "e"?
// "e" es el objeto EVENTO que JavaScript crea AUTOMÁTICAMENTE cuando ocurre un evento
// Contiene información como: qué elemento disparó el evento, qué valor tiene, etc.
selectContainer.addEventListener("change", (e) => {
  // QUÉ ES e.target.value?
  // e.target = el elemento que disparó el evento (en este caso, el <select>)
  // e.target.value = el valor actual del select (ej: "all", "forward", "midfielder")
  const selectedPosition = e.target.value;
  // POR QUÉ NO USAMOS playerPosition AQUÍ?
  // playerPosition SOLO existe DENTRO de la función playerCards()
  // Es una variable LOCAL de la funcion de player cards, no existe en este scope (dentro del event listener)
  // Si escribieras: playerCards(playerPosition) → ERROR, playerPosition no está definido aquí
  
  // En cambio, usamos selectedPosition que SÍ existe en este scope
  // Llamamos a playerCards() PASÁNDOLE el valor seleccionado como ARGUMENTO
  playerscontainer.innerHTML = playerCards(selectedPosition).join("");
});

/*
00 Theory
01 storytelling-app
02 emoji-reactor
03 icon
04 music-instrument-filter
05  real-time-character-counter
06 lightbox-viewer
07 rps-game
08 football-team-cards
*/