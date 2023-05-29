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
const navToggler = document.getElementsByClassName("nav-toggler")[0]
const modal = document.getElementsByClassName("offCanvas__wrap")[0]
const modalContainer = document.getElementsByClassName("mobile-menu-wrap")[0]
const modalClose = document.getElementsByClassName("close-modal")[0]

// ham hien thi modal mua ve (them class open vao modal)
function addOpen() {
    modal.classList.add('open')
}
//lap qua tung the button va nghe hanh vi click
navToggler.addEventListener('click',addOpen )
// Ham an modal mua ve (go class open cua modal)
function removeOpen(){
    modal.classList.remove('open')
}

//nghe hanh vi click vao nut button close
modalClose.addEventListener('click', removeOpen)

modal.addEventListener('click', removeOpen)

modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})

const modal1 = document.getElementsByClassName("offCanvas__wrap")[1]
const menuSearch = document.getElementsByClassName("menu__action-search")[0]
const modalClose1 = document.getElementsByClassName("close-modal")[1]

function addOpen1() {
    modal1.classList.add('open')
}
menuSearch.addEventListener('click',addOpen1 )
function removeOpen1(){
    modal1.classList.remove('open')
}
modalClose1.addEventListener('click', removeOpen1)


const navToggler2 = document.getElementsByClassName("side-toggle-icon")[0]
const modal2 = document.getElementsByClassName("offCanvas__wrap")[2]
const modalContainer2 = document.getElementsByClassName("offCanvas-body")[0]
const modalClose2 = document.getElementsByClassName("close-modal")[2]

// ham hien thi modal mua ve (them class open vao modal)
function addOpen2() {
    modal2.classList.add('open')
}
//lap qua tung the button va nghe hanh vi click
navToggler2.addEventListener('click',addOpen2 )
// Ham an modal mua ve (go class open cua modal)
function removeOpen2(){
    modal2.classList.remove('open')
}

//nghe hanh vi click vao nut button close
modalClose2.addEventListener('click', removeOpen2)

modal2.addEventListener('click', removeOpen2)

modalContainer2.addEventListener('click',function (event) {
    event.stopPropagation()
})