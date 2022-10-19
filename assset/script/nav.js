let solid = document.querySelector(".fa-solid")
let hamburger = document.querySelector(".hamburger")
let hide = document.querySelector(".hide")
let show = document.querySelector(".show")
let header = document.querySelector(".header")
let close = document.querySelector(".close")
let link = document.querySelector(".fa-sharp")
let isActive = false
    let showNow = header.children[1]
    let hiHamburger = header.children[0].children[0].children[3].children[0];
    function showNav() {
      
        // console.log(newHamburger)
        if (isActive == false) {
            isActive = true;
            showNow.classList.replace("hide", "show")
            solid.classList.remove("fa-bars")
            solid.classList.add("fa-xmark")
        } else {
            isActive = false
            showNow.classList.replace("show", "hide") 
            solid.classList.add("fa-bars")
            solid.classList.remove("fa-xmark")
        }
    }
  
    hiHamburger.addEventListener("click", showNav)
   
