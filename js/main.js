// Sự kiện cuộn trang
let prevSrollPos = window.pageYOffset;
window.onscroll = function(){
  let currentScroolPos = window.pageYOffset;

  if(prevSrollPos > currentScroolPos){
    document.getElementById("sticky-header").classList.remove("hidden");
  }
  else  document.getElementById("sticky-header").classList.add("hidden");

  if(currentScroolPos < 250)
    document.getElementById("scroll__top").classList.remove("hidden");
  else  document.getElementById("scroll__top").classList.add("hidden");

  prevSrollPos = currentScroolPos;
}

const scrollTop = document.getElementById("scroll__top");
scrollTop.addEventListener("click", function(){
  document.documentElement.scrollTop = 0;
});



// Add open
const addOpens = document.querySelectorAll(".addOpen-js");
const modals = document.querySelectorAll(".modal-js");
const modalContainers = document.querySelectorAll(".modalContainer-js");
const modalCloses = document.querySelectorAll(".close-modal");

// Hien thi va an modal
function toggleModal(modalElem, containerElem) {
  modalElem.classList.toggle("open");
  containerElem.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

Array.from(addOpens).forEach((navToggler, i) => {
  const modal = modals[i];
  const modalContainer = modalContainers[i];
  const modalClose = modalCloses[i];

  // Nghe su kien click tuong ung va goi ham toggleModal
  navToggler.addEventListener("click", function () {
    toggleModal(modal, modalContainer);
  });
  modalClose.addEventListener("click", function () {
    toggleModal(modal, modalContainer);
  });
  modal.addEventListener("click", function () {
    toggleModal(modal, modalContainer);
  });
});



function toggleModal1(modalElem, containerElem) {
    containerElem.addEventListener("click", function (event) {
      modalElem.classList.add("addOpen");
      const home_wrap = document.getElementById("home-wrap");
      home_wrap.remove.classList("open");
      event.stopPropagation();
    });
  }
const x = document.querySelector(".contact-wrap")
const y = document.querySelector(".contact-js")
toggleModal1(x, y)



// Header

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navMain = $$('.nav-main');
const mainItem = $$('.main-area');

navMain.forEach((item, index) => {
  item.onclick = function(){
    $('.nav-main.active').classList.remove('active')
    $('.main-area.active').classList.remove('active')

    this.classList.add('active')
    mainItem[index].classList.add('active')
  }
})
// 
function addActive(myList_ID, items_CL){
  const myList = document.getElementById(myList_ID);
  const items = myList.getElementsByClassName(items_CL);
  for(let i=0; i<items.length; i++) {
      items[i].addEventListener("click", function() {
          // remove "active" class from all items
          for(let j=0; j<items.length; j++) {
          items[j].classList.remove("active");
          }
          // add "active" class to the clicked item
          this.classList.add("active");
      });
  }
}
addActive("navigation", "nav-item");

// 
function addActiveNoC(myList_ID, items_CL){
  const myList = document.getElementById(myList_ID);
  const items = myList.getElementsByClassName(items_CL);
  for(let i=0; i<items.length; i++) {
      items[i].addEventListener("click", function() {
          this.classList.toggle('active')
      });
  }
}
addActiveNoC("mobile-menu__navbar-wrap", "menu-item-has-children");

//


// Slide
document.addEventListener('DOMContentLoaded', function() {
  var startX;
  var currentSlide = document.querySelector('.current');
  var slideWidth = document.querySelector('.swiper-slide').offsetWidth;
  var slides = document.querySelectorAll('.swiper-slide');
  var totalSlides = slides.length;
  var slider = document.querySelector('.swiper-wrap');

  slider.addEventListener('mousedown', function(e) {
    e.preventDefault();
    startX = e.pageX || e.touches[0].pageX;
    slider.addEventListener('mousemove', handleTouchMove);
  });

  slider.addEventListener('touchstart', function(e) {
    e.preventDefault();
    startX = e.touches[0].pageX;
    slider.addEventListener('touchmove', handleTouchMove);
  });

  function handleTouchMove(e) {
    e.preventDefault();
    var moveX = e.pageX || e.touches[0].pageX;
    var distance = startX - moveX;
    currentSlide.style.transform = 'translate(-' + (slideWidth * currentSlide.dataset.index + distance) + 'px)';
  }

  slider.addEventListener('mouseup', handleTouchEnd);
  slider.addEventListener('touchend', handleTouchEnd);

  function handleTouchEnd(e) {
    slider.removeEventListener('mousemove', handleTouchMove);
    slider.removeEventListener('touchmove', handleTouchMove);
    var moveX = e.pageX || e.changedTouches[0].pageX;
    var distance = startX - moveX;
    if (distance > 0 && currentSlide.nextElementSibling !== null) {
      currentSlide.classList.remove('current');
      currentSlide = currentSlide.nextElementSibling;
      currentSlide.classList.add('current');
    } else if (distance < 0) {
      if (currentSlide.previousElementSibling === null) {
        currentSlide.classList.remove('current');
        currentSlide = slides[totalSlides - 1];
        currentSlide.classList.add('current');
      } else {
        currentSlide.classList.remove('current');
        currentSlide = currentSlide.previousElementSibling;
        currentSlide.classList.add('current');
      }
    }
    slides.forEach(function(slide) {
      if (slide !== currentSlide) {
        slide.classList.remove('current');
      }
    });
    slider.querySelector('.current').style.transform = 'translate(-' + (slideWidth * currentSlide.dataset.index) + 'px)';
  }
});
var services = document.querySelectorAll('.services-item')
var servicesImgs = document.querySelectorAll('.services-img');

var  serviceId = null;


for(var i=0;i<services.length;i++){
  services[i].addEventListener('mouseover', function(){

    serviceId = this.dataset.service;
    // if(servicesImgs[i].id == serviceId && servicesImgs[i].classList.contains('active')){
    //   servicesImgs[i].classList.remove('active');
    // }

    var serviceAct = document.getElementById(serviceId);
    serviceAct.classList.add('active');

    for(var j=0;j<servicesImgs.length;j++)
      if(servicesImgs[j].id !== serviceId){
          servicesImgs[j].classList.remove('active');
      }
  });
}
const tabList = $('.shop__details-wrap')
const tabItem = tabList.querySelectorAll('.tab-item')
const tabPane = tabList.querySelectorAll('.tab-pane')

tabItem.forEach((item, ind) => {
  item.onclick = function(){
    console.log('accc')
    $('.tab-pane.active').classList.remove('active')

    tabPane[ind].classList.add('active')
    
  }
})
const proTabList = $('.product__desc-wrap')
const proTabItem = proTabList.querySelectorAll('.tab-item')
const proTabPane = proTabList.querySelectorAll('.tab-pane')

proTabItem.forEach((item, ind) => {
  item.onclick = function(){
    $('.product__desc-wrap .tab-pane.active').classList.remove('active')
    $('.product__desc-wrap .tab-item.active').classList.remove('active')

    this.classList.add('active')
    proTabPane[ind].classList.add('active')
  }
})