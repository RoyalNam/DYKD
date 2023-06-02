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

function addActiveTagName(myList_CL, tagName){
    const lists = document.getElementsByClassName(myList_CL);
    for(let i=0; i<lists.length; i++) {
    const items = lists[i].getElementsByTagName(tagName);
    for(let j=0; j<items.length; j++) {
        items[j].addEventListener("click", function() {
        // remove "active" class from all items in the same list
        const siblings = this.parentNode.getElementsByTagName(tagName);
        for(let k=0; k<siblings.length; k++) {
            siblings[k].classList.remove("active");
        }
        // add "active" class to the clicked item
        this.classList.add("active");
        });
    }
    }
}
addActiveTagName("sub-menu", "li");

function addActiveNoC(myList_ID, items_CL){
    const myList = document.getElementById(myList_ID);
    const items = myList.getElementsByClassName(items_CL);
    for(let i=0; i<items.length; i++) {
        items[i].addEventListener("click", function() {
            if(this.classList.contains("active"))
                this.classList.remove("active");
            else    
            // add "active" class to the clicked item
                this.classList.add("active");
        });
    }
}
addActiveNoC("mobile-menu__navbar-wrap", "menu-item-has-children");

// 
// Add open
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



$(document).ready(function() {
  var startX;
  var currentSlide = $('.current');
  var slideWidth = $('.slide').outerWidth();
  var totalSlides = $('.slide').length;
  
  $('.slider').on('mousedown touchstart', function(e) {
    e.preventDefault();
    startX = e.pageX || e.originalEvent.touches[0].pageX;
    $(this).on('mousemove touchmove', function(e) {
      e.preventDefault();
      var moveX = e.pageX || e.originalEvent.touches[0].pageX;
      var distance = startX - moveX;
      currentSlide.css('transform', 'translate(-' + (slideWidth * $('.current').index() + distance) + 'px)');
    });
  }).on('mouseup touchend', function(e) {
    $(this).off('mousemove touchmove');
    var moveX = e.pageX || e.originalEvent.changedTouches[0].pageX;
    var distance = startX - moveX;
    if (distance > 0 && currentSlide.next().length > 0) {
      currentSlide = currentSlide.next().addClass('current');
    } else if (distance < 0) {
      if (currentSlide.index() == 0) {
        currentSlide = $('.slide').eq(totalSlides - 1).addClass('current');
      } else {
        currentSlide = currentSlide.prev().addClass('current');
      }
    }
    $('.slide').not(currentSlide).removeClass('current');
    $('.slider').find('.current').css('transform', 'translate(-' + (slideWidth * $('.current').index()) + 'px)');
  });
});
