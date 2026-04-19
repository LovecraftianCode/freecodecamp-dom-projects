// ==================== 1. ANIMACIÓN CON REQUESTANIMATIONFRAME ====================
const rect = document.getElementById("rect");
let position = 0;

function update() {
  // Mover el rectángulo 2px a la derecha
  rect.style.left = position + "px";
  position += 2;

  // Si el rectángulo sale por la derecha, volver a ponerlo por la izquierda
  if (position > window.innerWidth) {
    position = -rect.offsetWidth;
  }
}

function animate() {
  update();
  // Solicitar el siguiente fotograma
  requestAnimationFrame(animate);
}

// Iniciar la animación del rectángulo
requestAnimationFrame(animate);

// Mostrar información en consola
console.log("✅ Animación con requestAnimationFrame iniciada");

// ==================== 2. ANIMACIÓN CON WEB ANIMATIONS API ====================
const square = document.querySelector("#square");

const animation = square.animate(
  [
    { transform: "translateX(0px)", backgroundColor: "#ff6b6b" },
    { transform: "translateX(100px)", backgroundColor: "#ee5a24" },
    { transform: "translateX(0px)", backgroundColor: "#ff6b6b" }
  ],
  {
    duration: 2000,        // Duración de 2 segundos
    iterations: Infinity,  // Se repite infinitamente
    direction: "alternate", // Va y viene
    easing: "ease-in-out"  // Movimiento suave
  }
);

console.log("✅ Animación del cuadrado iniciada");

// Agregar un evento para pausar/reanudar la animación al hacer clic
square.addEventListener("click", () => {
  if (animation.playState === "running") {
    animation.pause();
    console.log("⏸️ Animación del cuadrado pausada");
  } else {
    animation.play();
    console.log("▶️ Animación del cuadrado reanudada");
  }
});

// ==================== 3. MODAL DIALOG ====================
const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

// Abrir modal
openButton.addEventListener("click", () => {
  dialog.showModal(); // Usar showModal() en lugar de show() para mejor experiencia
  console.log("📱 Modal abierto");
});

// Cerrar modal
closeButton.addEventListener("click", () => {
  dialog.close();
  console.log("📱 Modal cerrado");
});

// Cerrar modal haciendo clic fuera de él
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
    console.log("📱 Modal cerrado (clic fuera)");
  }
});

console.log("🎉 Todos los ejemplos están funcionando correctamente");
console.log("💡 Tip: Haz clic en el cuadrado rojo para pausar/reanudar su animación");