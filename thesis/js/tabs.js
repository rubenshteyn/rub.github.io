document.querySelectorAll('.catalog__list-item-author__span').forEach(function(itemBtn) {
    itemBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        document.querySelectorAll('.catalog__author').forEach(function(tabContent)  {
            tabContent.classList.remove('catalog__author-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__author-active')
    })
})

const tabsBtn = document.querySelectorAll('.catalog__list-item-author__span')
tabsBtn.forEach(function(item) {
   item.addEventListener('click', function() {
       let currentBtn = item;

       tabsBtn.forEach(function(item) {
           item.classList.remove('is-active')
       })

        currentBtn.classList.add('is-active')
   }) 
})