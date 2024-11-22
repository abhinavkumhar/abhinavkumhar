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
