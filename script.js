window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
    this.classList.toggle('open');
});