let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Toggle Mobile Menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Scroll Section Active Link
window.addEventListener('scroll', () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let targetLink = document.querySelector('header nav a[href*=' + id + ']');
                if (targetLink) targetLink.classList.add('active');
            });
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Intersection Observer for scroll animations (fade in)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
    });
}, observerOptions);

// Add initial classes for animation
document.querySelectorAll('.glass-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

document.querySelectorAll('.heading').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.9)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Watch for the 'show-animate' class addition
const styles = document.createElement('style');
styles.innerHTML = `
    .show-animate {
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
    }
`;
document.head.appendChild(styles);

// Text typing animation substitute for the hero section
const textAnimElement = document.querySelector('.text-animation span');
if (textAnimElement) {
    const words = ["Full Stack Developer", "Next.js & Django", "Containerization Expert"];
    let wordIndex = 0;

    setInterval(() => {
        textAnimElement.style.opacity = "0";
        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            textAnimElement.textContent = words[wordIndex];
            textAnimElement.style.opacity = "1";
        }, 500); // Wait for fade out
    }, 3000); // Change word every 3s

    textAnimElement.style.transition = "opacity 0.5s ease";
}
