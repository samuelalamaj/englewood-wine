
window.addEventListener('DOMContentLoaded', (event) => {
  showSlides(slideIndex);
  addEventListeners();
});

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const rectangles = document.getElementsByClassName("rectangle-decor");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  for (i = 0; i < rectangles.length; i++) {
      rectangles[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  rectangles[slideIndex-1].style.display = "flex";  
}

function addEventListeners() {
  const slideshowContainer = document.querySelector('.slideshow-container');

  slideshowContainer.addEventListener('touchstart', handleTouchStart, false);
  slideshowContainer.addEventListener('touchmove', handleTouchMove, false);

  document.addEventListener('keydown', handleKeyPress);
}

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
  touchEndX = event.touches[0].clientX;
  handleGesture();
}

function handleGesture() {
  if (touchEndX < touchStartX) {
    plusSlides(1); 
  } else if (touchEndX > touchStartX) {
    plusSlides(-1); 
  }
  
  touchStartX = 0;
  touchEndX = 0;
}

function handleKeyPress(event) {
  switch(event.key) {
    case 'ArrowLeft':
      plusSlides(-1);
      break;
    case 'ArrowRight':
      plusSlides(1); 
      break;
  }
}


/*mobilee */
/*navbar  */





/*foooter */
const headerContents = document.querySelectorAll('.mobile-footer .column_ .header-content');
const menuIcon = document.querySelector('.menu-mobile');
const mobileNav = document.querySelector('.mobile-nav');

headerContents.forEach(headerContent => {
    headerContent.addEventListener('click', () => {

        const column = headerContent.parentElement;
        column.classList.toggle('active');

        const ul = headerContent.nextElementSibling;
        ul.style.display = ul.style.display === 'block' ? 'none' : 'block';

        const otherULs = document.querySelectorAll('.mobile-footer .column_ ul');
        otherULs.forEach(otherUL => {
            if (otherUL !== ul) {
                otherUL.style.display = 'none';
            }
        });
    });
    
    const ul = headerContent.nextElementSibling;
    ul.style.listStyle = 'none';
});

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
