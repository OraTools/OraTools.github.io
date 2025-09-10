<!-- JavaScript, unchanged from original -->
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const productTabs = document.querySelectorAll('.product-tab');
productTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        productTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.product-content').forEach(content => {
            content.classList.remove('active');
        });
        const productId = this.getAttribute('data-product');
        document.getElementById(`${productId}-content`).classList.add('active');
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});