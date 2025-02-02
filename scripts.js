        /*Glide.js Object Settings*/
              /*Glide.js Object Settings*/
              const config = {
                type: 'slider',
                swipeThreshold: false,
                dragThreshold: false,
                perView: 5,
                bound: true,
                gap: 20,
                breakpoints:{
                    800: {
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

//Nav
// var html = '<img src="https://www.guardianoffshore.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg" height= "100">\
//             <ul class="nav_links">\
//             <li style="padding-top:30px;>\
//                 <a href="#">Illustration</a>\
//                 <a href="#">Comics & Books</a>\
//                 <a href="#">Laser</a>\
//                 <a href="#">Shop</a>\
//                 <a href="#">About</a>\
//             </li>\
//         </ul>';

// document.getElementById('nav').innerHTML = html;

// function loadHTML() {
//     fetch('/nav.html')
//         .then(response => response.text())
//         .then(text => document.getElementById('nav').innerHTML = data);
//   }