//DOM load
function loaded() {
    document.getElementById("body").style.opacity = 1;
}

/*Glide.js Object Settings*/
const config = {
    type: 'slider',
    bound: true,
    gap: 10,
    perView: 7,
    breakpoints: {
        1920: {
            perView: 5
        },
        1024: {
            perView: 3
        },
        650: {
            perView: 1
        }
    }
}

new Glide('.glide', config).mount()

//glightbox
const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
});

//Mobile Nav Toggle
function openNav() {
    document.getElementById("topNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("topNav").style.height = "0%";
}