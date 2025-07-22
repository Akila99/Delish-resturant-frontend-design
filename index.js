// document.querySelector('.tableBooking').addEventListener('click', function () {
//   window.location.href = 'table-booking.html';
// });

// document.querySelector('.booking-button').addEventListener('click', function () {
//   window.location.href = 'table-booking.html';
// });

// const bookingID = document.getElementById('bookATable');
// bookingID.addEventListener('click', function () {
//   window.location.href = 'table-booking.html';
// });
//   const toggle = document.getElementById('menuToggle');
//   const navMenu = document.querySelector('.nav-menu');

// toggle.addEventListener('click', () => {
//   navMenu.classList.toggle('show');
// });

// function setActive(button) {
//   document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
//   button.classList.add('active');
// }


// const menuContent = document.querySelector(".home-menu-content");
// const menuButtons = document.querySelectorAll(".home-menu-btn");

// menuButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     // Remove 'active' from all buttons
//     menuButtons.forEach(b => b.classList.remove("active"));

//     // Add 'active' to the clicked button
//     btn.classList.add("active");

//     // Show the menu content
//     menuContent.classList.add("show");
//   });
// });

// // Simulate click on the "All Food" button when page loads
// window.addEventListener("DOMContentLoaded", () => {
//   if (menuButtons.length > 0) {
//     menuButtons[0].click(); // Click the "All Food" button
//   }
// });


// // const textElement = document.getElementById("blurText");
// // if (textElement) {
// //   const text = textElement.innerText;

// //   textElement.innerHTML = [...text].map(char => {
// //     return `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
// //   }).join('');
// // } else {
// //   console.warn("Element with ID 'blurText' not found.");
// // }

// const gallery = document.getElementById("galleryScroll");
// const leftArrow = document.getElementById("leftArrow");
// const rightArrow = document.getElementById("rightArrow");

// const scrollAmount = 300; 

//   leftArrow.addEventListener("click", () => {
//     gallery.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//   });

//   rightArrow.addEventListener("click", () => {
//     gallery.scrollBy({ left: scrollAmount, behavior: "smooth" });
//   });

// document.addEventListener("DOMContentLoaded", () => {

//   const spinnerValue = document.getElementById("spinnerValue");
//   const arrowUp = document.getElementById("arrowUp");
//   const arrowDown = document.getElementById("arrowDown");

//   let value = 1;
//   const min = 1;
//   const max = 5;

//   arrowUp?.addEventListener("click", () => {
//     if (value < max) {
//       value++;
//       updateDisplay();
//     }
//   });

//   arrowDown?.addEventListener("click", () => {
//     if (value > min) {
//       value--;
//       updateDisplay();
//     }
//   });
//   console.log("its reached to update")
//   updateDisplay();

//   function updateDisplay() {
//     spinnerValue.textContent = value;
//     arrowUp.disabled = value >= max;
//     arrowDown.disabled = value <= min;
//   }
// });

// function submitEmail() {
//     const email = document.querySelector('.newsletter-input').value;
//     alert('You clicked the icon with email: ' + email);
//     // Add email submission logic here
//   }

document.addEventListener("DOMContentLoaded", () => {
  const tableBooking = document.querySelector('.tableBooking');
  tableBooking?.addEventListener('click', () => {
    window.location.href = 'table-booking.html';
  });

  const bookingButton = document.querySelector('.booking-button');
  bookingButton?.addEventListener('click', () => {
    window.location.href = 'table-booking.html';
  });

  const bookingID = document.getElementById('bookATable');
  bookingID?.addEventListener('click', () => {
    window.location.href = 'table-booking.html';
  });

  const toggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  toggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  const menuContent = document.querySelector(".home-menu-content");
  const menuButtons = document.querySelectorAll(".home-menu-btn");

  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      menuButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      menuContent?.classList.add("show");
    });
  });

  if (menuButtons.length > 0) {
    menuButtons[0].click();
  }

  const readMoreButtons = document.querySelectorAll(".read-more");
      const extraContents = document.querySelectorAll(".extra-news-content");

      readMoreButtons.forEach((button, index) => {
        const extraContent = extraContents[index];

        button.addEventListener("click", () => {
          console.log("Button clicked", index); // log click per button

          extraContent.classList.toggle("show");

          if (extraContent.classList.contains("show")) {
            button.innerHTML = `
        READ LESS
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 256 256">
          <g transform="translate(1.4 1.4) scale(2.81)">
            <polygon points="39.64,0 35.36,4.28 76.08,45 35.36,85.72 39.64,90 84.64,45"
              style="stroke:#cb3a1a; stroke-width:5; fill:red;" />
            <polygon points="9.64,0 5.36,4.28 46.08,45 5.36,85.72 9.64,90 54.64,45"
              style="stroke:#cb3a1a; stroke-width:5; fill:red;" />
          </g>
        </svg>`;
          } else {
            button.innerHTML = `
        READ MORE
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 256 256">
          <g transform="translate(1.4 1.4) scale(2.81)">
            <polygon points="39.64,90 35.36,85.72 76.08,45 35.36,4.28 39.64,0 84.64,45"
              style="stroke:#cb3a1a; stroke-width:5; fill:red;" />
            <polygon points="9.64,90 5.36,85.72 46.08,45 5.36,4.28 9.64,0 54.64,45"
              style="stroke:#cb3a1a; stroke-width:5; fill:red;" />
          </g>
        </svg>`;
          }
        });
      });

  const gallery = document.getElementById("galleryScroll");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  const scrollAmount = 300;

  leftArrow?.addEventListener("click", () => {
    gallery?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightArrow?.addEventListener("click", () => {
    gallery?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  function submitEmail() {
    const email = document.querySelector('.newsletter-input')?.value;
    alert('You clicked the icon with email: ' + email);
    // Add email submission logic here
  }

  window.submitEmail = submitEmail; // expose to inline onclick if needed


});