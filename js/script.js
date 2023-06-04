const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

var typed = new Typed(".typing", {
    strings: ["Student", "Researcher", "Developer", "Designer", "Robotist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Select the progress bar elements
const progressBarElements = document.querySelectorAll('.skill-per');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    progressBarElements.forEach((progressBar) => {
        if (isInViewport(progressBar) && !progressBar.classList.contains('animate-forward')) {
            progressBar.classList.add('animate-forward');
            progressBar.classList.remove('animate-backward');

        }
        else if (!isInViewport(progressBar)) {
            progressBar.classList.add('animate-backward');
            progressBar.classList.remove('animate-forward');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
