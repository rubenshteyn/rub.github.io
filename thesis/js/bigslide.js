document.querySelectorAll('.gallery__slider-card')
document.querySelectorAll('.gallery__slider-card').forEach(function(slideImg) {
    slideImg.addEventListener('click', function(event) {
        const item = event.currentTarget.dataset.item
        document.querySelectorAll('.gallery__slider-card').forEach(function(tabContent)  {
            tabContent.classList.remove('gallery__slider-card-active')
        })
        document.querySelector(`[data-item="${item}"]`).classList.add('gallery__slider-card-active')
    })
})
