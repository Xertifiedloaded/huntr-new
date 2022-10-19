let slider = document.querySelector(".hero")
let ul = document.querySelector(".col-ul")
let imageSlider = new Array(
    "assset/images/discovery-hero-new.png",
    "assset/images/advisor_hero_job_tracker.png",
)
let i = 0

length = imageSlider.length
function slide() {


    if (i > length - 1) {
        i = 0
        let list = ul[i]
    }

    slider.src = imageSlider[i]
    i++
    setTimeout("slide()", 3000)
}


//nav bar//
