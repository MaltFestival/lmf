/*----------------------------------------*\
  DRAWER
\*----------------------------------------*/

export default class Drawer {
  constructor() {
    this._triggers = [...document.querySelectorAll(`[data-drawer="action"]`)];

    this._addEventListeners();
  }

  _addEventListeners() {
    this._triggers.forEach(trigger => {
      trigger.addEventListener('click', this.drawerCollapse);
    });
  }

  drawerCollapse(e) {
    const body = document.querySelector('body');
    const burger = document.querySelector('#js-drawer-burger');

    if (body.classList.contains('drawer-open')) {
      body.classList.remove('drawer-open');
      burger.classList.remove('is-active');
    } else {
      if (e.target.id !== 'js-drawer-overlay') {
        body.classList.add('drawer-open');
        burger.classList.add('is-active');
      }
    }
  }
}
