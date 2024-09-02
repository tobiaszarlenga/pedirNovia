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
document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("NoBtn");

  noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault(); // Prevenir el clic por defecto
    const container = document.querySelector(".contenedor-botones");

    // Obtener las dimensiones del contenedor y del botón
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calcular nuevas posiciones aleatorias dentro del contenedor
    const maxLeft = containerRect.width - btnRect.width;
    const maxTop = containerRect.height - btnRect.height;
    const randomLeft = Math.random() * maxLeft;
    const randomTop = Math.random() * maxTop;

    // Mover el botón a la nueva posición
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomLeft}px`;
    noBtn.style.top = `${randomTop}px`;
  });
});
