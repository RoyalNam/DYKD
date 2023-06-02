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



// $(document).ready(function() {
//   var startX;
//   var currentSlide = $('.current');
//   var slideWidth = $('.slide').outerWidth();
//   var totalSlides = $('.slide').length;
  
//   $('.slider').on('mousedown touchstart', function(e) {
//     e.preventDefault();
//     startX = e.pageX || e.originalEvent.touches[0].pageX;
//     $(this).on('mousemove touchmove', function(e) {
//       e.preventDefault();
//       var moveX = e.pageX || e.originalEvent.touches[0].pageX;
//       var distance = startX - moveX;
//       currentSlide.css('transform', 'translate(-' + (slideWidth * $('.current').index() + distance) + 'px)');
//     });
//   }).on('mouseup touchend', function(e) {
//     $(this).off('mousemove touchmove');
//     var moveX = e.pageX || e.originalEvent.changedTouches[0].pageX;
//     var distance = startX - moveX;
//     if (distance > 0 && currentSlide.next().length > 0) {
//       currentSlide = currentSlide.next().addClass('current');
//     } else if (distance < 0) {
//       if (currentSlide.index() == 0) {
//         currentSlide = $('.slide').eq(totalSlides - 1).addClass('current');
//       } else {
//         currentSlide = currentSlide.prev().addClass('current');
//       }
//     }
//     $('.slide').not(currentSlide).removeClass('current');
//     $('.slider').find('.current').css('transform', 'translate(-' + (slideWidth * $('.current').index()) + 'px)');
//   });
// });



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

// const slides = document.querySelectorAll('.swiper-slide'); // lấy danh sách các slide
// let index = 0; // slide hiện tại

// setInterval(() => {
//   slides[index].classList.remove('current'); // ẩn slide hiện tại
//   index = (index + 1) % slides.length; // chuyển đến slide tiếp theo
//   slides[index].classList.add('current'); // hiển thị slide mới

//   // xác định slide trước và sau để tạo hiệu ứng chuyển động
//   let prevIndex = (index - 1 + slides.length) % slides.length;
//   let nextIndex = (index + 1) % slides.length;
//   slides[prevIndex].classList.add('prev');
//   slides[nextIndex].classList.add('next');
  
//   // loại bỏ các class đã thêm trước đó để chuẩn bị cho hiệu ứng chuyển động của slide tiếp theo
//   setTimeout(() => {
//     slides[prevIndex].classList.remove('prev');
//     slides[nextIndex].classList.remove('next');
//   }, 800); // thời gian chuyển động là 0.8s (tương ứng với giá trị của thuộc tính transition)
// }, 3000); // thời gian hiển thị của mỗi slide là 3 giây (tùy chỉnh theo ý muốn của bạn)


// const slides = document.querySelectorAll('.swiper-slide'); // lấy danh sách các slide
// let index = 0; // slide hiện tại

// document.addEventListener('mousemove', e => {
//   const x = e.clientX - window.innerWidth / 2; // tính toán vị trí chuột so với trung tâm của trang
//   if (Math.abs(x) > window.innerWidth / 3) { // nếu vị trí chuột nằm ngoài 1/3 chiều rộng của trang
//     slides[index].classList.remove('current'); // ẩn slide hiện tại

//     let prevIndex, nextIndex;
//     if (x < 0) { // nếu vị trí chuột ở bên phải của slide
//       prevIndex = index;
//       index = (index + 1) % slides.length; // chuyển đến slide kế tiếp
//       nextIndex = (index + 1) % slides.length;
//     } else { // nếu vị trí chuột ở bên trái của slide
//       nextIndex = index;
//       index = (index - 1 + slides.length) % slides.length; // chuyển đến slide trước đó
//       prevIndex = (index - 1 + slides.length) % slides.length;
//     }

//     slides[index].classList.add('current'); // hiển thị slide mới

//     // di chuyển slide prev và next vào vị trí thích hợp
//     slides[prevIndex].style.transform = `translateX(${-window.innerWidth / 3}px)`;
//     slides[nextIndex].style.transform = `translateX(${window.innerWidth / 3}px)`;

//     // đảm bảo slide prev và next nằm phía trên hoặc dưới các slide khác
//     slides[index].style.zIndex = 2;
//     slides[prevIndex].style.zIndex = 1;
//     slides[nextIndex].style.zIndex = 1;

//     // xác định slide trước và sau để tạo hiệu ứng chuyển động
//     slides[prevIndex].classList.add('prev');
//     slides[nextIndex].classList.add('next');

//     // loại bỏ các class và style đã thêm trước đó để chuẩn bị cho hiệu ứng chuyển động của slide tiếp theo
//     setTimeout(() => {
//       slides[prevIndex].classList.remove('prev');
//       slides[nextIndex].classList.remove('next');
//       slides[prevIndex].style.transform = '';
//       slides[nextIndex].style.transform = '';
//       slides[index].style.zIndex = 1;
//       slides[prevIndex].style.zIndex = '';
//       slides[nextIndex].style.zIndex = '';
//     }, 800); // thời gian chuyển động là 0.8s (tương ứng với giá trị của thuộc tính transition)
//   }
// });
