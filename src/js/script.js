const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("hidden");
});

document.addEventListener('DOMContentLoaded', function () {
  const skillsContainer = document.querySelector('#skills .skills-container');

  function checkVisibility() {
    if (!skillsContainer) return;

    const rect = skillsContainer.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.5;

    if (isVisible) {
      skillsContainer.classList.add('animate-skills');
      window.removeEventListener('scroll', checkVisibility);
    }
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();

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
