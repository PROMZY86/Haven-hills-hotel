//heaader Js starts from here 
let togler = document.querySelector('.toggler'); 

togler.onclick = function(){
 let navWrapper = document.querySelector('.nav-wrapper');
 let subMenu = document.querySelector('.sub-menu');
 let subIcon = document.querySelector('.drop-menuInvoker');
 
if(navWrapper.classList.contains('sub-activate')){
  navWrapper.classList.remove('sub-activate');
 
  let t = setTimeout(() => {
  navWrapper.classList.toggle('_responsive_mobile');
    clearTimeout(t);
  }, 50)
 }else{
  navWrapper.classList.toggle('_responsive_mobile');

};

if(navWrapper.classList.contains ('dNone')){
    navWrapper.classList.remove('dNone');
    this.innerHTML = '<i class="fa-solid fa-xmark"/>'
    subMenu.classList.add('sub-menInvoker');
    subIcon.innerHTML = `<i class="fas fa-caret-down"></i>`;
  return
};
navWrapper.classList.add('dNone');
    this.innerHTML = '<i class="fa-solid fa-bars"/>'

};

let pageName = window.location.pathname.split("/").pop().split(".")[0];
let links = document.querySelectorAll(".lnks")

links.forEach((element, i )=> {
  if(element.getAttribute("aria-data-type") === pageName.toLowerCase()){
    links[i].classList.add("active") 
  }

});


// Drop-down Sub-menu starts from here
let dropMenu = document.querySelector('.drop-menuInvoker');
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
 };