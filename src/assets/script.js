window.onload = function() {
    const scrollButton = document.querySelector('.scroll-down');
    if (scrollButton) {
      scrollButton.addEventListener('click', function() {
        document.querySelector('#about').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  }
};