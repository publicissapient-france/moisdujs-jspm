import $ from 'jquery';
import bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css!';
import './style/app.scss!'

import './slot-grid/x-slot-grid';
import './slot-form/x-slot-form';

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