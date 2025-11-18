const addButtons = document.querySelectorAll('.add-to-cart');
const cartList = document.querySelector('#cart ul');
const cartCount = document.getElementById('cart-count');
const totalSpan = document.getElementById('cart-total');
const clearBtn = document.getElementById('clear-cart');

let cartItems = [];
let totalPrice = 0;

addButtons.forEach(btn => {
  btn.onclick = () => {
    const card = btn.closest('.product-card');
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);
    cartItems.push({ name, price });
    updateCart();
  };
});

function updateCart() {
  cartList.innerHTML = '';
  totalPrice = 0;
  cartItems.forEach((item, index) => {
    totalPrice += item.price;
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeItem(${index})">Remove</button>`;
    cartList.appendChild(li);
  });
  cartCount.innerText = cartItems.length;
  totalSpan.innerText = totalPrice.toFixed(2);
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCart();
}

clearBtn.onclick = () => {
  cartItems = [];
  updateCart();
};