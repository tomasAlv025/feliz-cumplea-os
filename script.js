function mostrarMensaje() {
  const mensaje = document.getElementById("mensajeSecreto");
  const boton = document.getElementById("botonMensaje");

  // Toggle clase visible para animar el mensaje
  mensaje.classList.toggle("visible");

  // Si el mensaje está visible, animamos el botón y lanzamos confeti
  if (mensaje.classList.contains("visible")) {
    boton.classList.add("animado");
    boton.textContent = "💌 Gracias por hacer clic 💖";

    // Lluvia de confeti suave 🎉
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      boton.classList.remove("animado");
      boton.textContent = "🎁 Ver mensaje especial";
    }, 2000);
  } else {
    boton.textContent = "🎁 Ver mensaje especial";
  }
}

// Carrusel automático de imágenes
const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg"];
let indice = 0;
const foto = document.getElementById("foto");

setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  foto.style.opacity = 0;

  setTimeout(() => {
    foto.src = imagenes[indice];
    foto.alt = `Foto ${indice + 1}`;
    foto.style.opacity = 1;
  }, 500);
}, 3000);
// Efecto de parpadeo en el título
const titulo = document.getElementById("titulo");  
setInterval(() => {
  titulo.style.opacity = titulo.style.opacity === "0" ? "1" : "0";
}, 1000);
// Efecto de zoom en el botón
const boton = document.getElementById("botonMensaje");
setInterval(() => {
  boton.style.transform = boton.style.transform === "scale(1)" ? "scale(1.1)" : "scale(1)";
}, 1000);