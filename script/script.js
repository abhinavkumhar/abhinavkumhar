document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navBtns = document.querySelector(".nav-btns");
    const navLinks = document.querySelectorAll(".nav-btns li");

    // Function to toggle the menu
    function toggleMenu() {
        navBtns.classList.toggle("active");

        // Toggle the icons
        const menuIcon = document.querySelector('.hamburger i[name="menu"]');
        const closeIcon = document.querySelector('.hamburger i[name="close"]');
        menuIcon.style.display = menuIcon.style.display === 'none' ? 'block' : 'none';
        closeIcon.style.display = closeIcon.style.display === 'block' ? 'none' : 'block';
    }

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener("click", toggleMenu);

    // Hide menu when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navBtns.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});

// Function to show the modal with the clicked image
function showImage(imgElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = imgElement.src; // Set the modal image to the clicked image

    // Disable scrolling on the body and html
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Function to close the modal
function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';

    // Re-enable scrolling on the body and html
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
}

// Function to animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetPercent = bar.getAttribute('data-percent');
        if (!bar.classList.contains('animated')) { // Prevent re-animation
            bar.style.width = `${targetPercent}%`;
            bar.classList.add('animated');
        }
    });
}

// Function to check if an element is in view
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && // Top is visible
        rect.bottom >= 0 // Bottom is within viewport
    );
}

// Add event listener for scroll
window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    if (isElementInView(skillsSection)) {
        animateProgressBars();
    }
});
