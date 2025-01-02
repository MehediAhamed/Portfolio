'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});




const url = './assets/CV/Mehedi_Ahamed_Resume_Latex.pdf';

// Asynchronous download of PDF
const loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(pdf => {
  console.log('PDF loaded');

  // Fetch the first page
  const pageNumber = 1;
  pdf.getPage(pageNumber).then(page => {
    console.log('Page loaded');

    const scale = 1.5;
    const viewport = page.getViewport({ scale });

    // Prepare canvas using PDF page dimensions
    const canvas = document.getElementById('pdf-canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    const renderTask = page.render(renderContext);
    renderTask.promise.then(() => {
      console.log('Page rendered');
    });
  });
}, reason => {
  console.error('Error loading PDF: ' + reason);
});


/**
 * EmailJS integration for form submission
 */
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init(emailjsConfig.publicKey); 
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting the default way

  emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, this)
    .then(function() {
      console.log('SUCCESS!');
      alert('Message sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    });
});













