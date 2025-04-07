window.onload = function() {
    const scrollButton = document.querySelector('.scroll-down');
    if (scrollButton) {
      scrollButton.addEventListener('click', function() {
        document.querySelector('#about').scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  };