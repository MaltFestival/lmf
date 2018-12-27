import Swiper from 'swiper';

export default class Slider {
  constructor(item) {
    this.init(item);
  }

  init(item) {
    new Swiper (item, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  }
}
