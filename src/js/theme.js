document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Якщо є збережена тема — встановити її
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Зміна картинки (необов'язково — якщо є дві іконки: світла/темна)
        // toggle.src = body.classList.contains('dark-theme')
        //     ? 'images/theme-light.png'
        //     : 'images/Vector.png';

        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });
});
