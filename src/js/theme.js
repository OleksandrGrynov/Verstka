document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    const body = document.body;


    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');



        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
});
