import Swiper from 'swiper';

export default () => {
  // eslint-disable-next-line no-unused-vars
  const mainSlider = new Swiper('.main-slider', {
    pagination: '.main-slider__swiper-pagination',
    paginationClickable: true,
    speed: 400,
    autoplay: 5000,
    initialSlide: 1,
    effect: 'fade'
  });
};
