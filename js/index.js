window.addEventListener("load", function () {
  console.log("Página cargada");
  document.body.classList.add("fade-in");

  // Verificar si estamos en la página fin.html
  if (window.location.pathname.includes("fin.html")) {
    // Si el usuario recarga la página fin.html, redirigir al inicio
    localStorage.removeItem("progressStep");
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 30000); // Esperar 3 segundos antes de redirigir
    return;
  }

  let currentStep = localStorage.getItem("progressStep") || "step1";

  const button = document.getElementById("continuarBtn");

  if (button) {
    button.addEventListener("click", function () {
      button.classList.add("fade-out");

      setTimeout(function () {
        let nextPage;

        switch (currentStep) {
          case "step1":
            nextPage = "../pages/paginaSorpresa.html";
            localStorage.setItem("progressStep", "step2");
            break;
          case "step2":
            nextPage = "../pages/cartaDeAmor.html";
            localStorage.setItem("progressStep", "step3");
            break;
          case "step3":
            nextPage = "../pages/serMiNovia.html";
            localStorage.setItem("progressStep", "step4");
            break;
          case "step4":
            nextPage = "../pages/fin.html";
            localStorage.setItem("progressStep", "step5"); // Marcar como finalizado
            break;
          default:
            nextPage = "../index.html";
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
        // Redirigir a la página final
        window.location.href = "../pages/fin.html";
        localStorage.setItem("progressStep", "step5"); // Establecer el step final
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
