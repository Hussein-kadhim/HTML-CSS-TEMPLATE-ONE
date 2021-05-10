const icon = document.querySelector('.icon');

import image1 from './Images/slider/slider-1.jpg';
import image2 from './Images/slider/slider-2.jpg';
import image3 from './Images/slider/slider-3.jpg';

const navLinks = document.querySelector('.header .links ul');

const images = [image1, image2, image3]; // Images Array

const footerText = document.getElementById('copyright');

// Add the navlinks class to the ul on click

icon.addEventListener('click', function () {
  navLinks.classList.toggle('nav-links');
});

// Change Image
let i = 0; // Start Point
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout(changeImg, 3000);
}

// Run function when page loads
window.onload = changeImg;

footerText.textContent = 'Created by | © ' + ' ' + new Date().getFullYear();
