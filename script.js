document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed("#typed-text", {
    strings: ["Web Developer", "Software Developer", "Programmer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

  // Optional smooth scroll
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
});



  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Optional: Close menu when a link is clicked (on mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
      }
    });
  });

