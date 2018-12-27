import Slider from './components/slider';

document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('body').classList.contains('home')) {
    new Slider(document.querySelectorAll('.swiper-container'));
  }
});