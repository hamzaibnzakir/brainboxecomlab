// FAQ toggle functionality
const buttons = document.querySelectorAll('.question button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    });
});

// Set up IntersectionObserver for fade-up effect on FAQ and Services sections
const fadeUpElements = document.querySelectorAll('.fade-up');

const options = {
    threshold: 0.2 // Trigger when 20% of the element is in view
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after it appears
        }
    });
}, options);

// Observe each element
fadeUpElements.forEach(element => {
    observer.observe(element);
});

// Menu button toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileNavLinks = document.querySelector('.mobile-nav-links');

// Toggle mobile menu when clicking the menu button
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Animate button
    mobileNavLinks.classList.toggle('active'); // Show/hide links
});

// Close menu after clicking a link (mobile version only)
const mobileNavLinkItems = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            menuToggle.classList.remove('active');
            mobileNavLinks.classList.remove('active');
        }
    });
});
document.querySelector('.survey-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the page from reloading
    alert('Thank you for your feedback!');
    // Optionally, you can reset the form after submission
    this.reset();
});
