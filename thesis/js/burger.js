document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__nav-content').classList.toggle('open')
})

document.querySelector('.header__nav-close').addEventListener('click', function() {
    document.querySelector('.header__nav-content').classList.remove('open')
})