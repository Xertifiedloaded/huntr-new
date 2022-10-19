let solid = document.querySelector(".fa-solid")
let hamburger = document.querySelector(".hamburger")
let hide = document.querySelector(".hide")
let show = document.querySelector(".show")
let header = document.querySelector(".header")

let isActive = false
    let showNow = header.children[1]
    let hiHamburger = header.children[0].children[0].children[3].children[0];
    const showNav = () => {
        // console.log(newHamburger)
        if (isActive == false) {
            isActive = true;
            console.log(isActive)
            showNow.classList.replace("hide", "show")
            solid.classList.replace(".fa-bars","fa-xmark")
        } else {
            isActive = false
            showNow.classList.replace("show", "hide")
            solid.classList.replace("fa-xmark","fa-bars")
        }
    }
    hiHamburger.addEventListener("click", showNav)
   
