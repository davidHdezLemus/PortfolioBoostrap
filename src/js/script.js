
const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});

document.addEventListener('DOMContentLoaded', function () {
  const skillsContainer = document.querySelector('#skills .skills-container');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Agrega la clase que activa la animación
        entry.target.classList.add('animate-skills');
        // Una vez animado, deja de observar
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5  // Se activa cuando el 50% del contenedor es visible
  });

  if (skillsContainer) {
    observer.observe(skillsContainer);
  }
});
