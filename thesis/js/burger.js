document.querySelector('.header-burger').addEventListener('click', function() {
    document.querySelector('.header-nav-content').classList.toggle('open')
})

document.querySelector('.header-nav-close').addEventListener('click', function() {
    document.querySelector('.header-nav-content').classList.remove('open')
})