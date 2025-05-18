let searchForm = document.querySelector('.search-form');



document.querySelector('#search-btn').onclick = () => 
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => 
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



let loginForm = document.querySelector('.login-form');
const emailInput = loginForm.querySelector('input[type="email"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const profileSection = document.getElementById('profile-section');
const userEmailSpan = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');

// Form submit olduğunda login yoxlaması
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Formun yenilənməsinin qarşısını alırıq

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value;

    // Qeydiyyat məlumatlarını localStorage-dan alırıq
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    // Doğrulama
    if (enteredEmail === registeredEmail && enteredPassword === registeredPassword) {
        alert('Daxilolma uğurludur!');

        // Login form gizlədilir
        loginForm.style.display = 'none';

        // Profil görünür olur və email göstərilir
        userEmailSpan.textContent = registeredEmail;
        profileSection.style.display = 'block';
    } else {
        alert('Email və ya şifrə yanlışdır!');
    }
});

// Logout funksiyası
logoutBtn.addEventListener('click', function () {
    // Profil bölməsi gizlədilir
    profileSection.style.display = 'none';

    // Login form yenidən görünür
    loginForm.style.display = 'block';

    // Email və şifrə sahələri təmizlənir
    emailInput.value = '';
    passwordInput.value = '';
});

document.querySelector('#login-btn').onclick = () => 
{
    loginForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => 
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}



window.onscroll = () => 
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });