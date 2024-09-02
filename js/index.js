window.addEventListener("load", function () {
  const button = document.getElementById("continuarBtn");

  if (button) {
    button.addEventListener("click", function () {
      button.classList.add("fade-out");

      setTimeout(function () {
        // Detecta la página actual y decide la siguiente página
        const currentPage = window.location.pathname.split("/").pop();

        let nextPage = "";
        switch (currentPage) {
          case "index.html":
            nextPage = "./pages/paginaSorpresa.html";
            break;
          case "paginaSorpresa.html":
            nextPage = "./cartaDeAmor.html";
            break;
          case "cartaDeAmor.html":
            nextPage = "./serMiNovia.html";
            break;
          // Agrega más casos según las páginas que tengas
          default:
            nextPage = "./index.html"; // Redirige a la página principal si no hay más casos
            break;
        }

        window.location.href = nextPage;
      }, 1500); // Asegúrate de que este tiempo coincida con la duración de la animación en CSS
    });
  }
});

// CAMBIO DE LUGAR DE BOTON NO

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('NoBtn');
  const contenedor = document.querySelector('.contenedor-botones');

  noBtn.addEventListener('touchstart', () => {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      // Generar posiciones aleatorias dentro de los límites
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      // Asignar las posiciones al botón "No"
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
  });
});

