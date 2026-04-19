/*
getElementById: Busca solo por el id, es el método más rápido para acceder a un elemento. Devuelve un único elemento o null si no se encuentra.
querySelector: Permite usar selectores CSS para buscar elementos. Devuelve el primer elemento que coincide o null si no se encuentra.
querySelectorAll: Similar a querySelector, pero devuelve una NodeList de todos los elementos que coinciden con el selector.
getElementsByClassName: Busca por la clase del elemento. Devuelve una colección de elementos que tienen esa clase.
getElementsByTagName: Busca por el nombre de la etiqueta. Devuelve una colección de elementos con esa etiqueta.

Ejemplos de uso:

// Usando getElementById
const myElement = document.getElementById("my-id");
// Usando querySelector (querySelector("#id"), querySelector(".clase"), querySelector("div"))
const firstParagraph = document.querySelector("p");
// Usando querySelectorAll
const allParagraphs = document.querySelectorAll("p");
// Usando getElementsByClassName
const items = document.getElementsByClassName("item");
// Usando getElementsByTagName
const divs = document.getElementsByTagName("div");

*/


/*
happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  const currCount = +countEl.textContent.split("/")[0];
  //console.log("Current count:", currCount);
    if (currCount < 10) {
      countEl.textContent = `${currCount + 1}/10`;
    }
})
    */

//const happyBtn = document.querySelector("#happy-btn");
//const confusedBtn = document.querySelector("#confused-btn");
//const sadBtn = document.querySelector("#sad-btn");
//const lovingBtn = document.querySelector("#loving-btn");

//happyBtn.addEventListener("click", () => updateCount(happyBtn));
//confusedBtn.addEventListener("click", () => updateCount(confusedBtn));
//sadBtn.addEventListener("click", () => updateCount(sadBtn));
//lovingBtn.addEventListener("click", () => updateCount(lovingBtn));

function updateCount (button) {
    const countEl = button.querySelector(".count");
    const currCount = +countEl.textContent.split("/")[0];
    if (currCount < 10) {
        countEl.textContent = `${currCount + 1}/10`;
    }
    
} 

const btns = document.querySelectorAll(".emoji-btn");
btns.forEach(btn => {
    btn.addEventListener("click", () => updateCount(btn));
})