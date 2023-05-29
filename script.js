// Get the cart items
const cartItems = document.querySelectorAll('.cart-item');

// Add event listeners to each cart item
cartItems.forEach((item) => {
  const decrementBtn = item.querySelector('.decrement');
  const incrementBtn = item.querySelector('.increment');
  const quantitySpan = item.querySelector('.quantity');
  const deleteBtn = item.querySelector('.delete');

  decrementBtn.addEventListener('click', () => {
    decreaseQuantity(quantitySpan);
    updateTotal();
  });

  incrementBtn.addEventListener('click', () => {
    increaseQuantity(quantitySpan);
    updateTotal();
  });

  deleteBtn.addEventListener('click', () => {
    deleteItem(item);
    updateTotal();
  });

});

// Function to decrease quantity
function decreaseQuantity(quantitySpan) {
  let quantity = parseInt(quantitySpan.textContent);
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
  }
}

// Function to increase quantity
function increaseQuantity(quantitySpan) {
  let quantity = parseInt(quantitySpan.textContent);
  quantity++;
  quantitySpan.textContent = quantity;
}

// Function to delete item
function deleteItem(item) {
  item.remove();
}

// Function to toggle like
const btn = document.getElementById('botn');

btn.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = '#dc3545';

  event.target.style.color = 'white';
});
const btnTwo = document.getElementById('botne');

btnTwo.addEventListener('click', function onClick(event) {
  event.target.style.backgroundColor = '#dc3545';

  event.target.style.color = 'white';
});


// Function to update total price
function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-item');
  let total = 0;

  cartItems.forEach((item) => {
    const quantity = parseInt(item.querySelector('.quantity').textContent);
    const price = parseFloat(item.querySelector('p').textContent.replace('Price: ₦', ''));
    total += quantity * price;
  });

  document.getElementById('cart-total').textContent = `₦${total.toFixed(2)}`;
}

// Checkout button event listener
const checkoutBtn = document.querySelector('.btn-success');
checkoutBtn.addEventListener('click', () => {
  const confirmation = confirm('Are you sure you want to proceed to checkout?');
  if (confirmation) {
    alert('Checkout Successful!');
    // Clear the cart or perform any other necessary action
  }
});

// Initial update to display the initial total
updateTotal();
