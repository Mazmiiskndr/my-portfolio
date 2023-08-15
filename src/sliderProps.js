import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const servicesSliderProps = {
  slidesPerView: 3,
  spaceBetween: 40,
  watchSlidesProgress: true,
  noSwipingSelector: "a",
  loop: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: false,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};

export const testimonialsSliderProps = {
  slidesPerView: 3,
  spaceBetween: 40,
  watchSlidesProgress: true,
  noSwipingSelector: "a",
  loop: false,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: false,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};
