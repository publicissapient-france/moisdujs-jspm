import './style/app.scss!';
import './slot-form/x-slot-form';
import './slot-grid/x-slot-grid';

const init = () => {
  const slots = {1: [], 2: [], 3: [], 4: []};
  const grid = document.querySelector('x-slot-grid');

  document
    .querySelector('x-slot-form')
    .addEventListener('add-slot', function(event) {
      slots[event.detail.slot].push(event.detail.name);
      grid.setAttribute('data', JSON.stringify(slots));
    }, true);
};

init();