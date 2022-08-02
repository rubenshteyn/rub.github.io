

if ($(window).height() >= 768) {
    $('.header-btn-outside').on('click', () => {
        $('.header-hide').toggleClass('header-disclosed')
        $('.header-btn-outside').toggleClass('none')
        $('.header-logo').toggleClass('none')
        $('.header-burger').toggleClass('none')
    })
    $('.header-hide-close').on('click', () => {
        $('.header-hide').removeClass('header-disclosed')
        $('.header-btn-outside').removeClass('none')
        $('.header-logo').removeClass('none')
        $('.header-burger').removeClass('none')
    })
}