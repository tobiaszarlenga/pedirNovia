window.addEventListener("load", function () {
  console.log("paguina loaded");
  document.body.classList.add("fade-in");

  const button = document.getElementById("continuarBtn");

  if (button) {
    button.addEventListener("click", function () {
      button.classList.add("fade-out");

      setTimeout(function () {
        let currentStep = localStorage.getItem("progressStep") || "step1";
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
            nextPage = "../index.html";
            localStorage.removeItem("progressStep"); // Reset progress for future visits
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
      // Ajuste la ruta para asegurarse de que apunta correctamente a la página fin.html
      window.location.href = "../pages/fin.html";
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
