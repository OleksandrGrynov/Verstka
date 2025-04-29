document.addEventListener('DOMContentLoaded', () => {
    // Перемикач теми
    const toggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Перевірка збереженої теми
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    // Обробка кліку на перемикач теми
    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });
    }

    // Бургер-меню
    const burgerIcon = document.getElementById('burger-icon');
    const navMenu = document.getElementById('nav-menu');

    if (burgerIcon && navMenu) {
        burgerIcon.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
    }
});
