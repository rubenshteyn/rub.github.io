document.querySelector('.header-btn-outside').addEventListener('click', function() {
    document.querySelector('.header-hide').classList.add('header-disclosed')
    document.querySelector('.header-btn-outside').classList.add('none')
    document.querySelector('.header-logo').classList.add('none')
    document.querySelector('.header-burger').classList.add('none')
})

document.querySelector('.header-hide-close').addEventListener("click", function () {
    document.querySelector('.header-hide').classList.remove('header-disclosed')
    document.querySelector('.header-btn-outside').classList.remove('none')
    document.querySelector('.header-logo').classList.remove('none')
    document.querySelector('.header-burger').classList.remove('none')
})