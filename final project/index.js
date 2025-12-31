const hamburger = document.querySelector('label[for="menuToggle"]');
  // Select the mobile menu
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle mobile menu on click
  hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'flex';
    }
  });