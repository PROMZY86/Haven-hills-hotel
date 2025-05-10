const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  sideNav.style.right = '0';
});

closeBtn.addEventListener('click', () => {
  sideNav.style.right = '-250px';
});

// 
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


const mobileRoomsToggle = document.getElementById('mobileRoomsToggle');
const mobileRoomsMenu = document.getElementById('mobileRoomsMenu');
const mobileDropdownItem = document.querySelector('.mobile-dropdown');

mobileRoomsToggle.addEventListener('click', (e) => {
  e.preventDefault();
  mobileDropdownItem.classList.toggle('active');
  mobileRoomsMenu.style.display =
    mobileRoomsMenu.style.display === 'block' ? 'none' : 'block';
});


// navigation to other pages and loading of contents 
// document.addEventListener("DOMContentLoaded", () => {
//   let navLinks = document.querySelectorAll(".element-top-nav-bar-links");
//   navLinks[0].classList.add('active');

//   navLinks.forEach(link => {
//     link.addEventListener('click',  () =>  {
//       navLinks.forEach(otherlink => otherlink.classList.remove('active'));
//       link.classList.add('active');
//     });
//   });

// });

// home-Image slider carrousel images
let carouselImages = document.querySelector('.element-home-section-container');
let images = document.querySelectorAll('.element-home-section  img');
let slideIndex = 0;

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  updateCarousel()
}

function gotoSlide(i) {
  slideIndex = i;
   updateCarousel();
}

function updateCarousel(){
  carouselImages.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide,  3000)


  // form handling 
       document.addEventListener("DOMContentLoaded", function() {
         let checkInInput = document.getElementById("check-in");
         let checkOutInput = document.getElementById("check-out");
        // let form = document.getElementById("element-form-section")
  
        // this function is trying to handle a form for checking and checking out the logic here is that the date updates by 
        // itself and users cant go back to previous month, year and day to select when they want to check-in or check-out
        function setDateInputs(){
         
          let formatDate = (date) => {
          let day = String(date.getDate()).padStart(2, '0');
          let month = String(date.getMonth() + 1).padStart(2, '0'); 
          let year = date.getFullYear();
          return `${year}-${month}-${day}`;
         };
  
         checkInInput.setAttribute("min", formatDate(new Date ()));
         checkOutInput.setAttribute("min", formatDate(new Date ()));
        };
  
      // calling function to set the intial dates
      setDateInputs();
  
      // form submission Handling
     /* form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        let   checkInDate = checkInInput.value;
        let   checkOutdate = checkOutInput.value;
        let   numberOfRooms = document.getElementById("rooms").value;
        let   numberOfGuests = document.getElementById("guests").value;
  
      /*  if(!checkInDate ||   !checkOutdate ||  !numberOfRooms ||   !numberOfGuests){
          // alert("please fill out this fields")
          return
        }
       });*/
       
      }); 

//room modal img-info
let imgRoom = document.getElementsByClassName("element-room-section-view-img");
let imgModlContent = document.getElementById("element-room-section-view-img01");
let roomModal = document.getElementById('element-room-section-room-view-imgg-modal');

for(let i = 0; i < imgRoom.length; i++){
  imgRoom[i].addEventListener("click", function() {
    roomModal.style.display = "block";
    imgModlContent.src = this.src
  });
};

let roomClose = document.getElementsByClassName('room-close');
for(let i = 0; i < roomClose.length; i++){
  roomClose[i].addEventListener("click", function() {

   roomModal.style.display = "none"
  });
}; 

// blog link read more








// page loading-content links
/*

// Drop-down Sub-menu starts from here
/*let dropMenu = document.querySelector('.drop-menuInvoker');
dropMenu.onclick = function(event){
  event.preventDefault();
  let subMenu = document.querySelector('.sub-menu');
  let navwrapper =document.querySelector('.nav-wrapper');

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








  








    

