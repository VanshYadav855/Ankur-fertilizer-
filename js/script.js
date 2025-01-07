const images = [
    'media/WhatsApp Image 2025-01-06 at 15.54.38 (1).jpeg',
    'media/WhatsApp Image 2025-01-06 at 15.54.38 (2).jpeg',
    'media/WhatsApp Image 2025-01-06 at 15.54.32.jpeg',
    'media/iWhatsApp Image 2025-01-06 at 15.54.39.jpeg',
    'media/WhatsApp Image 2025-01-06 at 15.54.34.jpeg'
];

let currentIndex = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

setInterval(changeBackground, 4000); // Change every 4 seconds

// Initialize with the first background
changeBackground();

//achievement section //
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Adjust speed for counting

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target + '+'; // Add '+' after reaching the target
            }
        };
        updateCount();
    });
});

//photo bar 

const carousel = document.getElementById('carousel');

function moveCarousel() {
    const totalWidth = carousel.scrollWidth;
    const visibleWidth = carousel.offsetWidth;
    const moveDistance = totalWidth - visibleWidth;

    // Loop the carousel by shifting it to the left and resetting it
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${moveDistance}px)`;

    // Reset position after transition
    setTimeout(() => {
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
    }, 500); // Match the transition time
}

// Move the carousel every 5 seconds
setInterval(moveCarousel, 5000);


//testimonials

// JavaScript for slider functionality (continuous sliding)
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

document.getElementById('next').addEventListener('click', () => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= totalTestimonials) {
        currentTestimonialIndex = 0; // Reset to the first testimonial
    }
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
        currentTestimonialIndex = totalTestimonials - 1; // Go to the last testimonial
    }
    updateSlider();
});

function updateSlider() {
    const newTransformValue = -(currentTestimonialIndex * (100 / 3)) + '%';
    document.querySelector('.testimonial-list').style.transform = `translateX(${newTransformValue})`;
}

//about.html

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');

    // Duplicate the content for seamless looping
    const carouselContent = carousel.innerHTML;
    carousel.innerHTML += carouselContent;
});
