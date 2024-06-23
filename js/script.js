
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

//login 

document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.getElementById('btnLogin-popup');
  loginButton.addEventListener('click', function () {
      window.location.href = 'login.html';
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.button-hover-background');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');

  let cartItems = [];

  function addToCart(productTitle, productPrice) {
    const existingItem = cartItems.find(item => item.title === productTitle);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({
        title: productTitle,
        price: productPrice,
        quantity: 1
      });
    }

  
    renderCart();
  }


  function renderCart() {
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.title} x ${item.quantity} - R$${(item.price * item.quantity).toFixed(2)}`;
      cartItemsList.appendChild(li);
    });

    updateCartTotal();
  }

  function updateCartTotal() {
    const total = cartItems.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    cartTotalSpan.textContent = `R$${total.toFixed(2)}`;
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const productContainer = this.closest('.movie-product');
      const productTitle = productContainer.querySelector('.product-title').textContent;
      const productPrice = parseFloat(productContainer.querySelector('.product-price').textContent.replace('R$', ''));

      addToCart(productTitle, productPrice);
    });
  });
});


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