let navBartoggler = document.getElementById('element-top-navbar-toggler');
let navbarMenu =  document.getElementById('element-top-nav-bar-menu');

navBartoggler.addEventListener('click', () => {
   if (navbarMenu.classList.contains('active')){
    navbarMenu.style.transition = 'max-height 0.3s ease';
    navbarMenu.style.maxHeight = 0;
    setTimeout(() => {
     navbarMenu.classList.remove('active');
     navbarMenu.style.transition = '';  // Reset transition
     navbarMenu.style.maxHeight = null;
    }, 300);
  } else {
    navbarMenu.classList.add('active');
    navbarMenu.style.transition = 'max-height 0.3s ease';
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + 'px';
    navbarMenu.addEventListener('transitionend', function resetMenu(){
      navbarMenu.style.transition = '';
      navbarMenu.removeEventListener('transitionend', resetMenu);
    });
  }
});

// nav-bar on scroll
let lastScrollTop = 0;
let navbarMenuSection  = document.getElementById("element-top-navbar-section");
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY  || document.Element.scrollTop;
  if(scrollTop > lastScrollTop){
    navbarMenuSection .classList.add("hidden");
  }else{
    navbarMenuSection .classList.remove("hidden")
  }
  lastScrollTop = scrollTop
});


// navigation to other pages and loading of contents 
document.addEventListener("DOMContentLoaded", () => {
  let navLinks = document.querySelectorAll(".element-top-nav-bar-links");
  navLinks[1].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click',  () =>  {
      navLinks.forEach(otherlink => otherlink.classList.remove('active'));
      link.classList.add('active');
    });
  });

});

// about-us-section auto-text
let textElement = document.getElementById("element-about-us-section-content-h1-text");
let text = "Welcome To Luxury And Comfort";
let textIndex = 0; 
let isDeleting = false;


function typeText(){
textElement.textContent = text.substring(0, textIndex);
 if (!isDeleting){
    textIndex++
  }else{
    textIndex--
  }

  if ( textIndex > text.length){
    isDeleting = true ;
    setTimeout(typeText, 1000);
  }else if (textIndex === 0){
    isDeleting = false
    setTimeout(typeText, 1000)
  }else{
    setTimeout(typeText, 150)
  }
  
}

typeText();



let sliderImages = document.querySelector('.element-about-us-vision-image-slider');
let slides = document.querySelectorAll('.element-about-us-vision-section-image-wrapper img');
const dotsContainer = document.querySelector(".dots");
let slideIndex = 0;


slides.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});


const dots = document.querySelectorAll(".dot");

function nextSlide(){
  slideIndex = (slideIndex + 1) % slides.length
  updateCarouselSlider()
}

function goToSlide(i){
  slideIndex = i;
updateCarouselSlider()
}

function updateCarouselSlider() {
  sliderImages.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}



setInterval(nextSlide, 4000)













/*if(navWrapper.classList.contains ('dNone')){
    navWrapper.classList.remove('dNone');
    this.innerHTML = '<i class="fa-solid fa-xmark"/>'
    subMenu.classList.add('sub-menInvoker');
    subIcon.innerHTML = `<i class="fas fa-caret-down"></i>`;
  return
};
navWrapper.classList.add('dNone');
    this.innerHTML = '<i class="fa-solid fa-bars"/>'



// DropDown js
let dropMenu = document.querySelector('.drop-menuInvoker');
dropMenu.onclick = function(event){
  event.preventDefault();
  let subMenu =    document.querySelector('.sub-menu');
  let navwrapper = document.querySelector('.nav-wrapper');

 if(subMenu.classList.contains ('sub-menInvoker')){
  subMenu.classList.remove('sub-menInvoker');
  this.innerHTML = '<i class="fas fa-caret-up"></i>';
  navwrapper.classList.add("sub-activate");
  return
 }

 subMenu.classList.add('sub-menInvoker');
 navwrapper.classList.remove("sub-activate");
 this.innerHTML = '<i class="fas fa-caret-down"></i>'
 };*/

 // Active to navigate to other links 




// about vision room-image slider starts from here
/* let containerSlide = document.querySelector(".aboutvisionimg-slide");
 let imgSlide = document.querySelectorAll(".about-roominfo-slide");
 let prevBtn = document.getElementById("prev");
 let nxtBtn = document.getElementById("next");
 let roomInfo = document.querySelector(".room-info-cont")
let index = 0;
let autoSlide;

// invoking  the self function of the imgSlide that will update all
function toUpdateimgSlide(){
  containerSlide.style.transform = `translateX(-${index * 100}%)`;
}

// call  the function that will invoke the nextslideimage by passing the function of toUpdateimgSlide  
function nextSlide(){
   index = (index + 1) % imgSlide.length;
   toUpdateimgSlide()
}

// call the function that will invoke the prevSlideimage by also passing the function of toUpdateimgSlide
function prevSlide(){
   index = (index - 1 + imgSlide.length) % imgSlide.length
   toUpdateimgSlide()
}

// call the function of starting the AutoSlide which changes the images every 3seconds 
function StartAutoSlide(){
  autoSlide = setInterval(nextSlide, 5000)
};
 
// call the function which clear the interval and start over again
function stopAutoSlide() {
  clearInterval(autoSlide);
};

// clicking on the button that navigates you to the next image image by calling each of the function
nxtBtn.addEventListener("click", () => {
  stopAutoSlide()
  nextSlide()
  StartAutoSlide()
});

// clicking on the button that navigates you to the prev image image by calling each of the function
prevBtn.addEventListener("click",  () => {
  stopAutoSlide()
   prevSlide()
   StartAutoSlide()
});

//call the function again
StartAutoSlide();

// users side fumctionality when then mouse in on the image 
imgSlide.forEach(slide => {
  slide.addEventListener("mouseenter", () => {
    slide.querySelector(".room-info-cont").style.display = "none"

  });
  slide.addEventListener("mouseleave", ()  => {
         slide.querySelector(".room-info-cont").style.display = "block flex"
    
  })
});
  
// testimonial carousel slider starts from here
let testimonialContainer = document.querySelector(".testimonial-container")
let testimonials = document.querySelectorAll(".testimonial");
let testPrevBtn = document.getElementById("prev-testimonial");
let testNxtBtn = document.getElementById("next-testimonial");
let testimonialDots = document.querySelectorAll(".testimonial-dot")
let testimonialIndex = 0;
let autoSlideInterval;


function toUpdatetestimonialCarousel(){
  testimonialContainer.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  // testimonialDots.forEach(dot =>  dot.classList.remove("actve" ));
  //  testimonialDots[testimonialIndex].classList.add("active");
}


function nextTestimonial(){
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    toUpdatetestimonialCarousel()
}

function prevTestimonial(){
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length
  toUpdatetestimonialCarousel()
}

function startAutoSlideTestimonial() {
  autoSlideInterval = setInterval(nextTestimonial, 6000);
}

function stopAutoSlideTestimnial(){
  clearInterval(autoSlideInterval)
}

testNxtBtn.addEventListener("click", () => {
  nextTestimonial()
  stopAutoSlideTestimnial()
  startAutoSlideTestimonial()
});


testPrevBtn.addEventListener("click", () => {
  prevTestimonial()
  stopAutoSlideTestimnial()
  startAutoSlideTestimonial()
});

 /*testimonialDots.forEach(dot => {
  dot.addEventListener("click", (e) => {
      testimonialIndex = parseInt(e.target.getAttribute("data-index"));
      // toUpdatetestimonialCarousel()
      // stopAutoSlideTestimnial()
  //   startAutoSlideTestimonial()
  });
});*/

/*startAutoSlideTestimonial() ; */




















 













 


