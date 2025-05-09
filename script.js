// Function to store image src when ordering
function saveOrder() {
  const imgSrc = document.querySelector('#treats img').src;
  localStorage.setItem('lastOrderedTreat', imgSrc);
  console.log('Saved order:', imgSrc);
}

// Function to retrieve stored image src on page load
function loadLastOrder() {
  const savedSrc = localStorage.getItem('lastOrderedTreat');
  if (savedSrc) {
      document.querySelector('#treats img').src = savedSrc;
      console.log('Loaded last ordered image:', savedSrc);
  }
}

// Event listener to trigger storage on button click
document.addEventListener('DOMContentLoaded', () => {
  loadLastOrder(); 
  
  // Load previously ordered image
 const orderBtn = document.querySelector('.order-btn');
  orderBtn.addEventListener('click', () => {
      saveOrder();
      alert('Your order has been saved!');
  });
});
 
// Function to handle image hover effect
function handleHoverEffect() {
  const img = document.querySelector('#treats img');
  img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
  });
}

// Initialize hover effect
document.addEventListener('DOMContentLoaded', () => {
  handleHoverEffect();
});

 