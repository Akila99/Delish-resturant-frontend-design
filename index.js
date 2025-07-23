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

//Table Booking button in Nav bar
document.addEventListener("DOMContentLoaded", () => {
  const tableBooking = document.querySelector('.tableBooking');
  tableBooking?.addEventListener('click', () => {
    window.location.href = 'table-booking.html';
  });

  //Table booking btn for About us 
  const bookingButton = document.querySelector('.booking-button');
  bookingButton?.addEventListener('click', () => {
    window.location.href = 'table-booking.html';
  });

  //table booking btn for footer area btn
  const bookingID = document.getElementById('bookATable');
  bookingID?.addEventListener('click', () => {
    window.location.href = 'table-booking.html';
  });

  //Hamburger toggle for Nav bar
  const toggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  toggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('show');
  });

  

  //home page food menu food cat all food/ breakfast / lunch/ dinner
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

  //new page popular tags
  // const menuContent = document.querySelector(".home-menu-content");
  const tagButtons = document.querySelectorAll(".tag");

  tagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tagButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      // menuContent?.classList.add("show");
    });
  });

  if (tagButtons.length > 0) {
    tagButtons[0].click();
  }

  //News page content page changer
  const pageNoChangeButtons = document.querySelectorAll(".page-no");

  pageNoChangeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      pageNoChangeButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      // menuContent?.classList.add("show");
    });
  });

  if (pageNoChangeButtons.length > 0) {
    pageNoChangeButtons[0].click();
  }

  // news page read more btn

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


  //Home page read more btn
  const homeReadMoreButtons = document.querySelectorAll(".home-read-more-btn");
  const homePageServiceExtraContents = document.querySelectorAll(".home-extra-service-des-content");

    homeReadMoreButtons.forEach((button, index) => {
    const homePageServiceExtraContent = homePageServiceExtraContents[index];

    button.addEventListener("click", () => {
    console.log("Button clicked", index); // log click per button

    homePageServiceExtraContent.classList.toggle("show");

    if (homePageServiceExtraContent.classList.contains("show")) {
      button.innerHTML = `
        READ LESS
        <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="20" y2="0.5" stroke="#CB3A1A"/>
            </svg>
            <svg width="12" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1L15 5.5M15 5.5L10.5 10M15 5.5H1" stroke="#CB3A1A" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`;
          } else {
      button.innerHTML = `
        READ MORE
        <svg width="20" height="1" viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="20" y2="0.5" stroke="#CB3A1A"/>
            </svg>
            <svg width="12" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1L15 5.5M15 5.5L10.5 10M15 5.5H1" stroke="#CB3A1A" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`;
      }
    });
  }); 

      //home page gallery scroller

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

  function setActive(button) {
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  }

  window.setActive = setActive;

});