let toggleLinkArr = document.querySelectorAll(".toggle-link")
toggleLinkArr.forEach(toggleLink => {
    console.log(toggleLink)
    let arrowDown = toggleLink.children[0]
    let toggleMenu = toggleLink.nextElementSibling
    arrowDown.addEventListener("click", showMobileMenu)
    toggleMenu.addEventListener("click", hideMobileMenu)
    function showMobileMenu() {
        toggleMenu.classList.remove("close")
    }
    function hideMobileMenu() {
        toggleMenu.classList.add("close")
    }
})

