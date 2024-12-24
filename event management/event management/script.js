let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper('.home-slider', {
    loop: true,
    autoplay: {
      delay: 3000, 
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    
    breakpoints: {
      640: {
        slidesPerView: 1, 
      },
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });
  
function validateForm() {
    var fullName = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var place = document.getElementById('place').value;
    var address = document.getElementById('address').value;

    if (!fullName || !email || !password || !place || !address) {
        alert('Please fill out all fields!');
        return false;  
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return false; 
    }

    alert('Registration Successful!');
    return true;  
}

document.getElementById('place').addEventListener('change', function() {
    alert('You selected: ' + this.value);
});