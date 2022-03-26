const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const smoothAuthors = document.querySelectorAll('span[data-path^=""]');
for (let smoothAuthor of smoothAuthors) {
    smoothAuthor.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothAuthor.getAttribute('data-path');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};