const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

// Alternar menú en móviles
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});

document.addEventListener('DOMContentLoaded', function () {
  const skillsContainer = document.querySelector('#skills .skills-container');

  // Función para comprobar si la sección de habilidades es visible
  function checkVisibility() {
    if (!skillsContainer) return;

    const rect = skillsContainer.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.5; // Activa cuando la mitad de la sección es visible

    if (isVisible) {
      skillsContainer.classList.add('animate-skills');
      window.removeEventListener('scroll', checkVisibility); // Deja de escuchar el scroll después de activarlo
    }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Verifica al cargar la página

  // Efecto de máquina de escribir
  const textElement = document.getElementById("typewriter");
  const text = "David Hernández Lemus";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
