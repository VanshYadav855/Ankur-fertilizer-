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
