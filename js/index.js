window.addEventListener("load", function () {
  // Aplica la clase 'fade-in' cuando la página carga
  document.body.classList.add("fade-in");

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

// CAMBIO DE LUGAR DE BOTON NO Y REDIRECCION BOTON SI
document.addEventListener("DOMContentLoaded", () => {
  const siBtn = document.getElementById("SiBtn");

  if (siBtn) {
    siBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Añade la clase 'fade-out' para iniciar la animación
      document.body.classList.add("fade-out");

      // Espera a que termine la animación antes de redirigir
      setTimeout(() => {
        window.location.href = "./fin.html";
      }, 1500); // Tiempo que coincide con la duración de la animación en el CSS
    });
  }

  // Código para el botón "No"
  const noBtn = document.getElementById("NoBtn");
  if (noBtn) {
    noBtn.addEventListener("touchstart", () => {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
    });
  }
});
