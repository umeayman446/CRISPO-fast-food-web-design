// Global state variables
let currentOrder = null;

function addToCart(itemName, selectId) {
    const selectedOption = document.getElementById(selectId).value;

    // Store data into object
    currentOrder = {
        name: itemName,
        details: selectedOption
    };

    // Update floating UI element
    document.getElementById('cart-summary').innerText = `Selected: ${currentOrder.name} (${currentOrder.details})`;
    document.getElementById('cart-bar').classList.remove('hidden');
}

function openCheckoutModal() {
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

function sendOrder() {
    const name = document.getElementById('cust-name').value;
    const phone = document.getElementById('cust-phone').value;
    const address = document.getElementById('cust-address').value;

    if (!name || !phone || !address) {
        alert("Please fill all delivery details fields first!");
        return;
    }

    // Direct Business phone format target
    const businessNumber = "923065983922";

    // Build URL encoded message text
    const textMessage = `*New Order From Crispo Web*%0A%0A` +
        `*Item:* ${currentOrder.name}%0A` +
        `*Size/Price:* ${currentOrder.details}%0A%0A` +
        `*Customer Name:* ${name}%0A` +
        `*Phone:* ${phone}%0A` +
        `*Address:* ${address}%0A%0A` +
        `Please confirm my order ASAP!`;

    const whatsappUrl = `https://wa.me{businessNumber}?text=${textMessage}`;

    // Open in separate browser window container
    window.open(whatsappUrl, '_blank');
    closeCheckoutModal();
}