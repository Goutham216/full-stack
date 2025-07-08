document.addEventListener('DOMContentLoaded', function() {
   
    const products = [
        {
            id: 1,
            title: "Mens Shirt",
            price: 599,
            image: "data:image/jpeg;base64,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"
        },
        {
            id: 2,
            title: "Women's Floral Dress",
            price: 1299,
            image: "https://assets.ajio.com/medias/sys_master/root/20230621/VCdm/6492a084d55b7d0c63931a7e/-473Wx593H-464333541-green-MODEL.jpg"
        },
        {
            id: 3,
            title: "Men's Casual Shoes",
            price: 1999,
            image: "https://img.tatacliq.com/images/i22//437Wx649H/MP000000025564445_437Wx649H_202503042002531.jpeg"
        },
        {
            id: 4,
            title: "Women's Handbag",
            price: 1599,
            image: "https://assets.ajio.com/medias/sys_master/root/20240321/sxKr/65fb42af16fd2c6e6a732b81/-473Wx593H-467189683-maroon-MODEL.jpg"
        },
        {
            id: 5,
            title: "Men's Jeans",
            price: 899,
            image: "https://assets.ajio.com/medias/sys_master/root/20250430/9ffD/6811c94355340d4b4f093147/-473Wx593H-700421431-black-MODEL.jpg"
        },
        {
            id: 6,
            title: "Women's Sneakers",
            price: 1499,
            image: "https://assets.ajio.com/medias/sys_master/root/20250528/zVry/68367d3455340d4b4f641b4d/-473Wx593H-701629107-offwhite-MODEL.jpg"
        },
        {
            id: 7,
            title: "Men's Formal Shirt",
            price: 799,
            image: "https://assets.ajio.com/medias/sys_master/root/20250627/ZQex/685e878a0f920c69cc5d97b6/-473Wx593H-701450051-orange-MODEL3.jpg"
        },
        {
            id: 8,
            title: "Women's Denim Jacket",
            price: 1799,
            image: "https://assets.ajio.com/medias/sys_master/root/20240906/XN2x/66dada2b1d763220faca112f/-473Wx593H-442660016-mediumblue-MODEL.jpg"
        }
    ];

    
    const productGrid = document.getElementById('productGrid');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.querySelector('.cart-count');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartIcon = document.querySelector('.cart-icon');
    const closeCart = document.querySelector('.close-cart');


    let cart = [];

    
    function displayProducts() {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">₹${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">ADD TO BAG</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    
    function addToCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const product = products.find(item => item.id === productId);
        
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
    }

    
    function updateCart() {
        
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = '';
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <p class="cart-item-price">₹${item.price} x ${item.quantity}</p>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeFromCart);
            });
        }
        

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total;
    }

    
    function removeFromCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    
    cartIcon.addEventListener('click', () => {
        cartOverlay.style.display = 'flex';
    });

    closeCart.addEventListener('click', () => {
        cartOverlay.style.display = 'none';
    });

    
    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.style.display = 'none';
        }
    });

    
    displayProducts();
});
// Sample product data for suggestions
const products = [
    "Men's T-Shirts",
    "Women's Dresses",
    "Kids Shoes",
    "Jeans for Men",
    "Kurtas for Women",
    "Home Decor",
    "Kitchen Appliances",
    "Sports Shoes",
    "Watches",
    "Sunglasses",
    "Bags",
    "Jewelry"
];
// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.mySwiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        // If you need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Add these variables at the top
const checkoutOverlay = document.getElementById('checkoutOverlay');
const closeCheckoutBtn = document.querySelector('.close-checkout');
const checkoutBtn = document.querySelector('.checkout-btn');
const checkoutItemsList = document.getElementById('checkoutItemsList');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');
const confirmationModal = document.getElementById('confirmationModal');
const continueShoppingBtn = document.querySelector('.continue-shopping-btn');

// Add this function to display checkout items
function displayCheckoutItems() {
    checkoutItemsList.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const checkoutItem = document.createElement('div');
        checkoutItem.className = 'checkout-item';
        checkoutItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="checkout-item-img">
            <div class="checkout-item-details">
                <div class="checkout-item-title">${item.name}</div>
                <div class="checkout-item-price">₹${item.price}</div>
                <div class="checkout-item-qty">Qty: ${item.quantity}</div>
            </div>
        `;
        checkoutItemsList.appendChild(checkoutItem);
        total += item.price * item.quantity;
    });
    
    checkoutTotal.textContent = total;
}

// Add event listeners for checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some products to checkout.');
        return;
    }
    cartOverlay.style.display = 'none';
    displayCheckoutItems();
    checkoutOverlay.style.display = 'flex';
});

closeCheckoutBtn.addEventListener('click', () => {
    checkoutOverlay.style.display = 'none';
});

// Handle form submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real app, you would process the payment here
    // For this demo, we'll just show a confirmation
    
    checkoutOverlay.style.display = 'none';
    confirmationModal.style.display = 'flex';
});

continueShoppingBtn.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
    // Clear the cart after successful order
    cart = [];
    updateCart();
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === checkoutOverlay) {
        checkoutOverlay.style.display = 'none';
    }
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});
