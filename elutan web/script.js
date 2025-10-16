// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            navLinks.classList.remove('active');
        }
    });
});
// Order form handling
const orderForm = document.getElementById('orderForm');
const checkboxes = document.querySelectorAll('.product-option input[type="checkbox"]');
const selectedProductsInput = document.getElementById('selectedProducts');

// Update selected products when checkboxes change
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedProducts);
});

function updateSelectedProducts() {
    const selected = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    selectedProductsInput.value = selected.join(', ') || 'None selected';
}

// Handle order form submission
orderForm.addEventListener('submit', (e) => {
    // Check if at least one product is selected
    const hasSelection = Array.from(checkboxes).some(cb => cb.checked);
    
    if (!hasSelection) {
        e.preventDefault();
        alert('Please select at least one product to order.');
        return;
    }
    
    // IMPORTANT: Update selected products right before submission
    updateSelectedProducts();
    
    // Log to verify (you can remove this later)
    console.log('Selected Products:', selectedProductsInput.value);
    
    // Form will submit to Formspree
});
// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    // Remove e.preventDefault() to allow form submission
    // The form will submit to Formspree
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .operation-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});s