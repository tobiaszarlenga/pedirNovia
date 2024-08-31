document.getElementById('continuarBtn').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = './pages/sorpresa.html';
    }, 500); // Espera a que la transición termine
});