document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq__item').forEach(item => {
        const button = item.querySelector('.faq__question');
        const icon = item.querySelector('.faq__icon');

        button.addEventListener('click', () => {
            item.classList.toggle('is-open');

            // Зміна стрілки
            icon.src = item.classList.contains('is-open')
                ? 'images/icon-up.png'
                : 'images/icon-down.png';
        });
    });
});
