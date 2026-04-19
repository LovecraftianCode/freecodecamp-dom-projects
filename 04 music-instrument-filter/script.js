// Objeto de instrumentos musicales dentro de un array
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

let selectContainer = document.querySelector(".select-container");
let productsContainer = document.querySelector(".products-container");

/*
function instrumentCards(instrumentCategory) {
  let instrumentsToShow;// Variable para almacenar los instrumentos filtrados según la categoría seleccionada
  
  if (instrumentCategory === "all") {
    return instrumentsArr;// Si se selecciona "all", mostrar todos los instrumentos sin filtrar
  } else {
    instrumentsToShow = instrumentsArr.filter(instrument => instrument.category === instrumentCategory);
  }
  
  instrumentsToShow.forEach(instrument => {// Iterar sobre los instrumentos filtrados y crear una tarjeta para cada uno
    let card = document.createElement("div");// Crear un elemento div para la tarjeta del instrumento
    card.classList.add("card");// Agregar la clase "card" al div para aplicar estilos
    card.innerHTML = `
      <h2>${instrument.instrument}</h2> 
      <p>Price: $${instrument.price}</p>
    `;// Establecer el contenido HTML de la tarjeta con el nombre del instrumento y su precio
    productsContainer.appendChild(card);// Agregar la tarjeta al contenedor de productos para mostrarla en la página
  });
}

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = ""; // Limpiar los productos antes de mostrar los nuevos
  const selectedCategory = selectContainer.value;
  if (selectedCategory) {
    instrumentCards(selectedCategory);
  } 
});

*/

function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory,
        );

  return instruments.map(({ instrument, price }) => {
    return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
  });
}

selectContainer.addEventListener("change", () => {
  const selectedCategory = selectContainer.value;
  productsContainer.innerHTML = instrumentCards(selectedCategory).join("");
});
