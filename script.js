function mostrarMensaje() {
  const mensaje = document.getElementById("mensajeSecreto");
  const boton = document.getElementById("botonMensaje");

  // Alternar la clase visible en lugar de "oculto" para animar entrada
  mensaje.classList.toggle("visible");

  // Agregar animación y cambiar texto si está visible
  if (mensaje.classList.contains("visible")) {
    boton.classList.add("animado");
    boton.textContent = "💌 Gracias por hacer clic 💖";

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
