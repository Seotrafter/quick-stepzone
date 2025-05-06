document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Добавляем событие на кнопку для открытия и закрытия мобильного меню
    mobileMenuButton.addEventListener('click', function() {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });

    // Закрытие мобильного меню при клике на ссылку
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu ul li a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Найти все формы на странице
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            // Остановить стандартное действие формы
            event.preventDefault();

            // Проверка, заполнены ли все обязательные поля
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');

            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('border-red-500'); // Подсветка незаполненного поля
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            // Если все поля заполнены, перенаправить на страницу благодарности
            if (isValid) {
                window.location.href = 'thanks-you-page.html';
            }
        });
    });
});
