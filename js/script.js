const header = document.querySelector("header");
window.addEventListener("scroll", function(){
        header.classList.toggle("sticky", window.scrollY>0)
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

var typed = new Typed(".typing",{
	strings: ["Student", "Researcher", "Developer", "Designer"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
})