const icon = document.querySelector('.icon');

const navLinks = document.querySelector('.header .links ul');

// Add the navlinks class to the ul on click

icon.addEventListener('click', function () {
  navLinks.classList.toggle('nav-links');
});
