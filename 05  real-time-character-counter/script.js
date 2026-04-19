const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  const currentLength = textInput.value.length;
    if (currentLength > 50) {
    textInput.value = textInput.value.slice(0, 50); // Recorta a 50 caracteres
    currentLength = 50; // Actualiza la longitud
  }
  charCount.textContent = `Character Count: ${currentLength}/50`;
  if (currentLength >= 30) {
    charCount.style.color = "yellow";
  }
  if (currentLength >= 40) {
    charCount.style.color = "orange";
  }
  if (currentLength >= 50) {
    charCount.style.color = "red";
  }
});

