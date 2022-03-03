$('.accordion').accordion({
    active: false,
    collapsible: false,
    header: ".catalog__list-item-date",
    heightStyle: "content"
  });

let acc = document.querySelectorAll('.catalog__list-item-date')
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("open");
    })
}
