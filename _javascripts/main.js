import Slider from './components/slider';
import Drawer from './components/drawer';

document.addEventListener('DOMContentLoaded', function() {
  new Drawer();

  if (document.querySelector('body').classList.contains('home')) {
    new Slider(document.querySelectorAll('.swiper-container'));
  }
});
