function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.navbar');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    })
}
toggleMenu();