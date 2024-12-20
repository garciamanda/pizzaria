console.log("script.js está carregado");

document.addEventListener('DOMContentLoaded', () => {

  const buttons = document.querySelectorAll('.btn_feedback');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn_active')) {
        button.classList.remove('btn_active');
      } else {

        buttons.forEach(btn => btn.classList.remove('btn_active'));

        button.classList.add('btn_active');
      }
    });
  });
});


// Scroll

document.getElementById('btnpedido').addEventListener('click', function () {
  document.getElementById('tranding').scrollIntoView({ behavior: 'smooth' });
})

// Slide
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


function openModal() {
  const modal = document.getElementById('modal-container')
  modal.classList.add('mostrar')

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'modal-container' || e.target.id == "fechar") {
      modal.classList.remove('mostrar')
      localStorage.fechaModal = 'modal-container'
    }
  })
}







//


const trendingSlides = document.querySelectorAll('.tranding-slide');


trendingSlides.forEach((slide) => {
  slide.addEventListener('click', () => {

    const foodPrice = slide.querySelector('.food-price').textContent;
    const foodName = slide.querySelector('.food-name').textContent;

  
    const cartItem = document.createElement('li');
    cartItem.textContent = `${foodName} - ${foodPrice}`;

  
    document.getElementById('cart-items').appendChild(cartItem);
  });
});

// Selecionando os elementos do DOM
const loginBtn = document.getElementById('btnLogin-popup');
const loginPopup = document.getElementById('loginPopup');
const registerPopup = document.getElementById('registerPopup');
const showRegisterFormBtn = document.getElementById('showRegisterForm');
const showLoginFormBtn = document.getElementById('showLoginForm');
const closeButtons = document.querySelectorAll('.close');

// Função para abrir o popup de login
loginBtn.addEventListener('click', function() {
  loginPopup.style.display = 'block';
});

// Função para abrir o popup de registro quando clicar em "Registrar-se" no popup de login
showRegisterFormBtn.addEventListener('click', function() {
  loginPopup.style.display = 'none';
  registerPopup.style.display = 'block';
});

// Função para abrir o popup de login quando clicar em "Entrar" no popup de registro
showLoginFormBtn.addEventListener('click', function() {
  registerPopup.style.display = 'none';
  loginPopup.style.display = 'block';
});

// Função para fechar os popups
closeButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    const popupToClose = event.target.getAttribute('data-close');
    if (popupToClose === 'login') {
      loginPopup.style.display = 'none';
    } else if (popupToClose === 'register') {
      registerPopup.style.display = 'none';
    }
  });
});

// Fechar os popups se o usuário clicar fora deles
window.addEventListener('click', function(event) {
  if (event.target == loginPopup) {
    loginPopup.style.display = 'none';
  } else if (event.target == registerPopup) {
    registerPopup.style.display = 'none';
  }
});


