document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header-bottom-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header-dropdown");
      
      document.querySelectorAll(".header-bottom-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });
      
      document.querySelectorAll(".header-dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header-bottom-list")) {
      document.querySelectorAll(".header-dropdown").forEach(el => {
          el.classList.remove("active-list--item");
      })
       document.querySelectorAll(".header-bottom-btn").forEach(el => {
          el.classList.remove("active--btn");
      });
    }
  })
  })