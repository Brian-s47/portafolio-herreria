document.addEventListener("DOMContentLoaded", function() {
  const fuegoAudio = document.getElementById("audioFuego");
  
  // Intenta reproducir el sonido cuando la página carga
  fuegoAudio.volume = 0.2; // volumen suave
  
  // Algunos navegadores bloquean autoplay con sonido.
  // Puedes pedir interacción para activarlo:
  document.body.addEventListener("click", () => {
    fuegoAudio.play();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const herreroContainer = document.querySelector(".herrero-container");
  const globoTexto = document.getElementById("globo-texto");

  const mensaje = "¡Soy Brian! Aquí podrás conocer más sobre mí como desarrollador.";

  let typingInterval;

  function escribirTexto(texto, elemento, velocidad = 50) {
    let i = 0;
    elemento.textContent = "";

    typingInterval = setInterval(() => {
      if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, velocidad);
  }

  herreroContainer.addEventListener("mouseenter", () => {
    escribirTexto(mensaje, globoTexto);
  });

  herreroContainer.addEventListener("mouseleave", () => {
    globoTexto.textContent = "";
    clearInterval(typingInterval);
  });
});

