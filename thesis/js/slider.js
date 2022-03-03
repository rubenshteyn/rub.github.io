// gallery
const swiperGallery = new Swiper('.gallery__slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: '.gallery .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery .swiper-button-next',
    prevEl: '.gallery .swiper-button-prev',
  },
  breakpoints: {
    1101: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    641: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
});

// hero

const swiperHero = new Swiper('.swiper-hero', {
  loop: true,
  pagination: false,
  slidesPerView: 1,
  autoplay: {
    delay: 2000
  }
});

// events
const swiperEvents = new Swiper('.events__slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: false,
  pagination: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1101: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      pagination: false,
    },

    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    }
  }
});

// projects
const swiperProjects = new Swiper('.projects__slider', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.projects .swiper-button-next',
    prevEl: '.projects .swiper-button-prev',
  },
  breakpoints: {
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    641: {
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  }
});