const toggleButton = document.querySelector('.top-nav button');
const menu = document.querySelector('.top-nav .main-menu');

toggleButton.addEventListener('click', function(){
    const toggleMenu = JSON.parse(toggleButton.getAttribute('aria-expanded'));
    toggleButton.setAttribute('aria-expanded', !toggleMenu);
    menu.hidden = !menu.hidden;
});

console.log();