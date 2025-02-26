/*Glide.js Object Settings*/
  const config = {
    type: 'slider',
    bound: true,
    gap: 10,
    perView: 7,
    breakpoints:{
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
function showNav(){
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
    document.body.style.padding = "0";
  } else {
    x.className = "topnav";
    document.body.style.padding = "20px";
  }
}
