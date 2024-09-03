window.addEventListener("load", function () {
  document.body.classList.add("fade-in");

  const button = document.getElementById("continuarBtn");

  if (button) {
    button.addEventListener("click", function () {
      button.classList.add("fade-out");

      setTimeout(function () {
        const currentPage = window.location.pathname.split("/").pop();
        let nextPage;

        switch (currentPage) {
          case "index.html":
            nextPage = "/pages/paginaSorpresa.html";
            break;
          case "paginaSorpresa.html":
            nextPage = "/pages/cartaDeAmor.html";
            break;
          case "cartaDeAmor.html":
            nextPage = "/pages/serMiNovia.html";
            break;
          default:
            nextPage = "/index.html";
            break;
        }

        window.location.href = nextPage;
      }, 1500);
    });
  }
});

// Código para animaciones y movimiento del botón
document.addEventListener("DOMContentLoaded", () => {
  const siBtn = document.getElementById("SiBtn");

  if (siBtn) {
    siBtn.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "/pages/fin.html";
      }, 1500);
    });
  }

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
