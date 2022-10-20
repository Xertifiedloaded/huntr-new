let toggleLinkArr = document.querySelectorAll(".toggle-link")
console.log(toggleLinkArr)
// forEach and for loop
// toggleLinkArr.forEach(toggleLink => {
//     console.log(toggleLink)
//     let arrowDown = toggleLink.children[0]
//     let toggleMenu = toggleLink.nextElementSibling
//     arrowDown.addEventListener("click", showMobileMenu)
//     toggleMenu.addEventListener("click", hideMobileMenu)
//     function showMobileMenu() {
//         toggleMenu.classList.remove("close") 
//     }
//     function hideMobileMenu() {
//         toggleMenu.classList.add("close")

//     }
// })


let isOnline = false
for (i = 0; i < toggleLinkArr.length; i++) {
    const toggleLink = toggleLinkArr[i]
    let arrowDown = toggleLink.children[0]
    let toggleMenu = toggleLink.nextElementSibling
    arrowDown.addEventListener("click", showMobileMenu)
    // toggleMenu.addEventListener("click", hideMobileMenu)
    function showMobileMenu() {
        if (isOnline == false) {
            isOnline = true
            toggleMenu.classList.remove("close")
            
        } else {
            isOnline = false
            toggleMenu.classList.add("close")
        }
    }
}