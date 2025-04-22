const hamburger = document.querySelector('.burger');
const navLinks =  document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});