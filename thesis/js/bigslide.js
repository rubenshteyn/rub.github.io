document.querySelectorAll('.gallery__slider-card').forEach(function(slideImg) {
    slideImg.addEventListener('click', function(event) {
        const item = event.currentTarget.dataset.item
        document.querySelectorAll('.popup-close').forEach(function(closePopup){
            closePopup.addEventListener("click", function() {
                document.querySelector(`[data-popup="${item}"]`).classList.remove('popup-open')
            })
        })
        document.querySelector(`[data-popup="${item}"]`).classList.add('popup-open')
    })
})

