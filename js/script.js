
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


// menu

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

var totalAmount = "0,00"

function ready() {

  const removeCartProductButtons = document.getElementsByClassName("remove-product-button")
  for (var i = 0; i < removeCartProductButtons.length; i++) {
    removeCartProductButtons[i].addEventListener("click", removeProduct)
  }

  const quantityInputs = document.getElementsByClassName("product-qtd-input")

  for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", checkIfInputIsNull)
  }

  const addToCartButtons = document.getElementsByClassName("button-hover-background")
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart)
  }

  const purchaseButton = document.getElementsByClassName("purchase-button")[0]
  purchaseButton.addEventListener("click", makePurchase)
}

function removeProduct(event) {
  event.target.parentElement.parentElement.remove()
  updateTotal()
}

function checkIfInputIsNull(event) {
  if (event.target.value === "0"){
    event.target.parentElement.parentElement.remove()
  }

  updateTotal()
}

function addProductToCart(event) {
  const button = event.target
  const productInfos = button.parentElement.parentElement
  const productImage = productInfos.getElementsByClassName("product-image")[0].src
  const productName = productInfos.getElementsByClassName("product-title")[0].innerText
  const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

  const productsCartNames = document.getElementsByClassName("cart-product-title")
  for (var i = 0; i < productsCartNames.length; i++) {
    if (productsCartNames[i].innerText === productName) {
      productsCartNames[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
      updateTotal()
      return
    }
  }

  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")

  newCartProduct.innerHTML = 
    `
    <td class="product-identification">
      <img src="${productImage}" alt="${productName}" class="cart-product-image">
      <strong class="cart-product-title">${productName}</strong>
    </td>
    <td>
      <span class="cart-product-price">${productPrice}</span>
    </td>
    <td>
      <input type="number" value="1" min="0" class="product-qtd-input">
      <button type="button" class="remove-product-button">Remover</button> 
    </td>
    `

  const tableBody = document.querySelector(".cart-table tbody")
  tableBody.append(newCartProduct)
  updateTotal()

  newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
  newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
}

function makePurchase() {
  if (totalAmount === "0,00"){
    alert("Carrinho vazio")
  } else {
    alert("Compra efetuada com sucesso!")
    document.querySelector(".cart-table tbody").innerHTML = ""
    updateTotal()
  }
}

function updateTotal() {
  const cartProducts = document.getElementsByClassName("cart-product")
  totalAmount = 0

  for (var i = 0; i < cartProducts.length; i++) {
    const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value

    totalAmount += productPrice * productQuantity
  }

  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.querySelector(".cart-total-container span").innerHTML = `R$ ${totalAmount}`
}

//avatar

document.addEventListener('DOMContentLoaded', function () {
  // Obtendo o nome de usuário do localStorage
  const username = localStorage.getItem('username');

  if (username) {
      // Exibindo o nome de usuário e o avatar
      document.getElementById('username-display').textContent = username;
      document.getElementById('user-avatar').src = 'path/to/user-avatar.png'; // Atualize com o caminho do avatar do usuário
  } else {
      // Se não estiver logado, redirecionar para a página de login
      console.log("oi")
  }
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
  slide.addEventListener('click', (e) => {

    const foodPrice = slide.querySelector('.food-price').textContent;
    const foodName = slide.querySelector('.food-name').textContent;

  
    const cartItem = document.createElement('li');
    cartItem.textContent = `${foodName} - ${foodPrice}`;

  
    document.getElementById('cart-items').appendChild(cartItem);
  });
});