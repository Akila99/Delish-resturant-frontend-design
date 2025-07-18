
  const toggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  function setActive(button) {
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }


  const menuContent = document.querySelector(".menu-content");
const menuButtons = document.querySelectorAll(".menu-btn");

menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove 'active' from all buttons
    menuButtons.forEach(b => b.classList.remove("active"));

    // Add 'active' to the clicked button
    btn.classList.add("active");

    // Show the menu content
    menuContent.classList.add("show");
  });
});

// Simulate click on the "All Food" button when page loads
window.addEventListener("DOMContentLoaded", () => {
  if (menuButtons.length > 0) {
    menuButtons[0].click(); // Click the "All Food" button
  }
});


  const textElement = document.getElementById("blurText");
  const text = textElement.innerText;
  console.log("Hi");
  textElement.innerHTML = [...text].map(char => {
    return `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
  }).join('');

const gallery = document.getElementById("galleryScroll");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

const scrollAmount = 300; // pixels to scroll on each click

  leftArrow.addEventListener("click", () => {
    gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  function submitEmail() {
    const email = document.querySelector('.newsletter-input').value;
    alert('You clicked the icon with email: ' + email);
    // Add email submission logic here
  }
